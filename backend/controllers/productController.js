import {v2 as cloudinary} from 'cloudinary'
import productModel from '../models/productModel.js'

//function for adding a new product
const addProduct = async (req, res) => {
    // res.send('add product');
    try {
        const {name,description,price,category,subcategory,size,bestseller}=req.body;
        const image1= req.files.image1 && req.files.image1[0];
        const image2= req.files.image2 && req.files.image2[0];
        const image3= req.files.image3 && req.files.image3[0];
        const image4= req.files.image4 && req.files.image4[0];

        const images=[image1,image2,image3,image4].filter((item)=>item!==undefined);

        let imageUrl=await Promise.all(
            images.map(async (item)=>{
                const data=await cloudinary.uploader.upload(item.path,{resource_type:'image'});
                return data.secure_url;
            })
        )

        // console.log(imageUrl);
        // console.log(name,description,price,category,subcategory,sizes,bestseller);

        const productData = {
            name,
            description,
            price : Number(price),
            category,
            subcategory,
            size : JSON.parse(size),
            bestseller : bestseller === 'true' ? true : false,
            image: imageUrl,
            date: Date.now()
        }

        console.log(productData);

        const product = new productModel(productData);
        await product.save();
        
        res.send({success:true,msg:'add product'});
        
        
    } catch (error) {
        console.error(error);
        res.status(400).json({msg:error.message});
        
    }
}

//function for getting all products
const getAllProducts = async (req, res) => {
    // res.send('get all products');
    try {
        const products = await productModel.find({});
        res.send({products,success:true});
    } catch (error) {
        console.error(error);
        res.status(400).json({msg:error.message});
    }
}

//function for removing a product
const removeProduct = async (req, res) => {
    // res.send('remove product');
    try {
        const {id}=req.body;
        const product = await productModel.findByIdAndDelete(id);
        res.send({msg:'Product removed',success:true});
    } catch (error) {
        console.error(error);
        res.status(400).json({msg:error.message});
    }
}

//function for retrieving a single product
const getSingleProduct = async (req, res) => {
    try {
        const {id}=req.body;
        const product = await productModel.findById(id);
        res.send({product,success:true});
    } catch (error) {
        console.error(error);
        res.status(400).json({msg:error.message});
    }
}


export {addProduct,getAllProducts,removeProduct,getSingleProduct}