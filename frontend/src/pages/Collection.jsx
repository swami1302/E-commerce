import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useState } from 'react';
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

function Collection() {
  const {products} = useContext(ShopContext);
  // console.log(products);
  const [showFilter, setshowFilter] = useState(false);

  const [filterProducts, setfilterProducts] = useState([]);
  const [category, setcategory] = useState([]);
  const [subCategory, setsubCategory] = useState([]);
  const [sortType, setsortType] = useState('relevant');


  const toggleCategory=(e)=>{
    if (category.includes(e.target.value)) {
      setcategory(prev=>prev.filter(item=>item!==e.target.value));
      
    }else{
      setcategory(prev=>[...prev,e.target.value]);
    }
  }

  const toggleSubCategory=(e)=>{
    if(subCategory.includes(e.target.value)){
      setsubCategory(prev=>prev.filter(item=>item!==e.target.value));
    }else{
      setsubCategory(prev=>[...prev,e.target.value]);
    }
  }

  const applyFilter=()=>{
    let productCopy=products.slice();
    if(category.length>0){
      productCopy=productCopy.filter(item=> category.includes(item.category));
    }
    if(subCategory.length>0){
      productCopy=productCopy.filter(item=>subCategory.includes(item.subCategory));
    }
    setfilterProducts(productCopy);
  }

  const sortProduct=()=>{
    let fileterProductCopy=filterProducts.slice();
    switch (sortType) {
      case 'low-high':
        setfilterProducts(fileterProductCopy.sort((a,b)=>(a.price-b.price)));
        break;
      case 'high-low':
        setfilterProducts(fileterProductCopy.sort((a,b)=>(b.price-a.price)));
        break;
    
      default:
        applyFilter();
        break;
    }

  }

    useEffect(() => {
      console.log(category);
      
    }, [category]);
    
    useEffect(() => {
      console.log(subCategory);
  
    }, [subCategory]);

    useEffect(() => {
      applyFilter();
    }, [category,subCategory]);
    
    useEffect(()=>{
      sortProduct();
    },[sortType])
  

  return (
    <div className='flex flex-col sm:flex-row gap-1 s,:gap-10 pt-10 border-t'>

    {/* Filter Option */}
    <div className='min-w-60 '>
      <p onClick={()=>setshowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2 uppercase'>
        Filters
        <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter?'rotate-90':''}`} alt="" />
      </p>
      {/* Category filter */}
      <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter?'':'hidden'} sm:block`}>
        <p className='mb-3 text-sm font-medium uppercase'>categroies</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700 '>
          <p className='flex gap-2'>
            <input type="checkbox" className='w-3' value={'Men'} onChange={toggleCategory}/> Men
          </p>
          <p className='flex gap-2'>
            <input type="checkbox" className='w-3' value={'Women'} onChange={toggleCategory}/> Women
          </p>
          <p className='flex gap-2'>
            <input type="checkbox" className='w-3' value={'Kids'} onChange={toggleCategory}/> Kids
          </p>
        </div>
      </div>
      {/* SUb - category */}
      <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter?'':'hidden'} sm:block`}>
        <p className='mb-3 text-sm font-medium uppercase'>type</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700 '>
          <p className='flex gap-2'>
            <input type="checkbox" className='w-3' value={'Topwear'} onChange={toggleSubCategory}/> Topwear
          </p>
          <p className='flex gap-2'>
            <input type="checkbox" className='w-3' value={'Bottomwear'} onChange={toggleSubCategory}/> Bottom wear
          </p>
          <p className='flex gap-2'>
            <input type="checkbox" className='w-3' value={'Winterwear'} onChange={toggleSubCategory}/> Winter wear
          </p>
        </div>
      </div>
    </div>

    {/* Right side */}
    <div className='flex-1 ml-6'>
      <div className='flex justify-between text-base sm:text-2xl mb-4 '>
        <Title text1={'ALL'} text2={'COLLECTIONS'}/>
        {/* Product Sort */}
        <select onChange={(e)=>setsortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2 outline-none'>
          <option value="Relevant">Sort by: Relevant</option>
          <option value="low-high">Sort by: Low-High</option>
          <option value="high-low">Sort by: High-Low</option>
        </select>

      </div>

      {/* Map products */}

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>

      {
        filterProducts.map((item,index)=>{
          return <ProductItem key={index} id={item.name} image={item.image} name={item.name} price={item.price}/>
        })
      }
      </div>

    </div>

    </div>
  )
}

export default Collection