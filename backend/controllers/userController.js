import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";


const createToken = (_id) => {
    return jwt.sign({_id},process.env.JWT_SECRET,{expiresIn:'3d'});
}

//Route for user Login
const loginUser = async (req, res) => {
    // res.send({msg:'User logged in'});   
    try {
        const {email,password}=req.body;

        //Validation of user email and password
        if(!validator.isEmail(email)){
            return res.status(400).json({msg:'Invalid email',success:false});
        }
        if(!validator.isStrongPassword(password)){
            return res.status(400).json({msg:'Password is not strong enough',success:false});
        }

        //Check if user exists
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({msg:'User does not exist',success:false});
        }

        //Check if password is correct    
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({msg:'Incorrect password',success:false});    
        }

        const token=createToken(user._id);
        res.status(200).json({token,success:true});
    } catch (error) {
        console.error(error);
        return res.status(500).json({msg:'Something went wrong',success:false});
        
    }
}

//Route for user register
const registerUser = async (req, res) => {
    // res.send({msg:'User registered'});
    try {
        const {name,email,password}=req.body;

        //check if user already exists
        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(400).json({msg:'User already exists',success:false});
        }

        //Validation of user email and password
        if(!validator.isEmail(email)){
            return res.status(400).json({msg:'Invalid email',success:false});
        }
        if(!validator.isStrongPassword(password)){
            return res.status(400).json({msg:'Password is not strong enough',success:false});
        }

        //Hash password
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);

        //Create user
        const newUser = new User({
            name,
            email,
            password:hashedPassword
        })
        const user=await newUser.save();

        const token=createToken(user._id);
        res.status(200).json({token,success:true});
    } catch (error) {
        console.error(error);
        return res.status(500).json({msg:'Something went wrong',success:false});
        
    }
}

//Route for admin login
const adminLogin = async (req, res) => {
    // res.send({msg:'Admin logged in'});
    try {
        const {email,password}=req.body;

        //Validation of user email and password
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token=jwt.sign(email+password,process.env.JWT_SECRET);
            res.status(200).json({token,success:true});
        }else{
            return res.status(400).json({msg:'Invalid email or password',success:false});
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({msg:'Something went wrong',success:false});
    }
}

export { loginUser, registerUser, adminLogin }