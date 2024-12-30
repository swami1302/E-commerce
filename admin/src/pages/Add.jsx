import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

function Add({token}) {
  const [image1, setimage1] = useState(false);
  const [image2, setimage2] = useState(false);
  const [image3, setimage3] = useState(false);
  const [image4, setimage4] = useState(false);

  const [name, setname] = useState("");
  const [Description, setDescription] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("Men");
  const [subCategory, setsubCategory] = useState("Topwear");
  const [bestSeller, setbestSeller] = useState(false);
  const [sizes, setsizes] = useState([]);

  const onSubmithandler = async (e)=>{
    e.preventDefault();
    try{
      const formData = new FormData();
      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      formData.append("name", name);
      formData.append("description", Description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subcategory", subCategory);
      formData.append("bestSeller", bestSeller);
      formData.append("size", JSON.stringify(sizes));
      console.log(formData);
      const response = await axios.post(backendUrl+"/api/product/add", formData,{headers:{token}});
      // console.log(response.data);
      if(response.data.success){
        toast.success(response.data.msg);
        setname("");
        setDescription("");
        setprice("");
        setcategory("Men");
        setsubCategory("Topwear");
        setbestSeller(false);
        setsizes([]);
        setimage1(false);
        setimage2(false);
        setimage3(false);
        setimage4(false);
      }else{
        toast.error(response.data.msg);
      }
    }catch(error){
      console.log(error);
      toast.error(error.message);
    }

  }
  return (
    <form onSubmit={onSubmithandler} className='flex flex-col items-start w-full gap-3'>
      <div>
        <p className='mb-2'>Upload Image</p>
        <div className='flex gap-2'>
          <label htmlFor="image1">
            <img  className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
            <input onChange={(e)=>setimage1(e.target.files[0])} type="file" name="" id="image1" hidden/>
          </label>
          <label htmlFor="image2">
            <img  className='w-20 object-fill' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
            <input onChange={(e)=>setimage2(e.target.files[0])} type="file" name="" id="image2" hidden/>
          </label>
          <label htmlFor="image3">
            <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
            <input  onChange={(e)=>setimage3(e.target.files[0])} type="file" name="" id="image3" hidden/>
          </label>
          <label htmlFor="image4">
            <img  className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
            <input onChange={(e)=>setimage4(e.target.files[0])} type="file" name="" id="image4" hidden/>
          </label>
        </div>
      </div>
      <div className='w-full'>
        <p className='mb-2'>Product Name</p>
        <input onChange={(e)=>setname(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" name="" id="" placeholder='Type here' required/>
      </div>
      <div className='w-full'>
        <p className='mb-2'>Product Description</p>
        <textarea onChange={(e)=>setDescription(e.target.value)} value={Description} className='w-full max-w-[500px] px-3 py-2' type="text" name="" id="" placeholder='Write content here' required/>
      </div>
      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-2'>Product Category</p>
          <select onChange={(e)=>setcategory(e.target.value)} name="" id="" className='w-full px-3 py-2'>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div>
          <p className='mb-2'>Sub Category</p>
          <select onChange={(e)=>setsubCategory(e.target.value)} name="" id="" className='w-full px-3 py-2'>
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
      </div>
      <div>
        <p className='mb-2'>Product Price</p>
        <input onChange={(e)=>setprice(e.target.value)} value={price} type="Number" placeholder='25' className='w-full px-3 py-2 sm:w-[120px]'/>
      </div>
      <div>
        <p className='mb-2'>Product Sizes</p>
        <div className='flex gap-3'>
          <div onClick={()=>setsizes(prev => prev.includes("S") ? prev.filter(item => item !== "S") : [...prev, "S"])}>
            <p className={`${sizes.includes("S") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>S</p>
          </div>
          <div onClick={()=>setsizes(prev => prev.includes("M") ? prev.filter(item => item !== "M") : [...prev, "M"])}>
            <p className={`${sizes.includes("M") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>M</p>
          </div>
          <div onClick={()=>setsizes(prev => prev.includes("L") ? prev.filter(item => item !== "L") : [...prev, "L"])}>
            <p className={`${sizes.includes("L") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>L</p>
          </div>
          <div onClick={()=>setsizes(prev => prev.includes("XL") ? prev.filter(item => item !== "XL") : [...prev, "XL"]) }>
            <p className={`${sizes.includes("XL") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>XL</p>
          </div>
          <div onClick={()=>setsizes(prev => prev.includes("XXL") ? prev.filter(item => item !== "XXL") : [...prev, "XXL"]) }> 
            <p className={`${sizes.includes("XXL") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>XXL</p>
          </div>
        </div>
      </div>
      <div className='flex gap-2 mt-2'>
        <input onChange={()=>setbestSeller(prev => !prev)} checked={bestSeller} type="checkbox" name="" id="bestseller" />
        <label htmlFor="bestseller" className='cursor-pointer'>Add to Best Seller</label>
      </div>
      <button type="submit" className='uppercase w-28 py-3 mt-4 bg-black text-white'>Add</button>
    </form>
  )
}

export default Add