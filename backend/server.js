import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';

// App config
const app=express();
const port=process.env.PORT || 8000;
connectDB();
connectCloudinary();

//middlewares
app.use(express.json())
app.use(cors())

//app endpoint
app.use('/api/user',userRouter);
app.use('/api/product',productRouter);

app.get('/',(req,res)=>{
    res.send("API working");
})

app.listen(port,()=>console.log('server started working on PORT:',port))