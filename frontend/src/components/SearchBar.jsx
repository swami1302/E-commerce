import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets';
import { useLocation } from 'react-router-dom';

function SearchBar() {
    const {search, setsearch, showSearch, setshowSearch}=useContext(ShopContext);
    const [visible, setvisible] = useState(false);
    console.log(search);
    console.log(showSearch);
    const location =useLocation();

    useEffect(()=>{
        // console.log(location.pathname);
        if(location.pathname.includes('collection')){
            setvisible(true);
        }else{
            setvisible(false);
        }
        
    },[location]);
    
  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center '>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-2 mx-3 rounded-full w-3/4 sm:w-1/2 '>
            <input type="text" name="" id="" placeholder='search' className='flex-1 outline-none bg-inherit text-sm' value={search} onChange={(e)=>setsearch(e.target.value)}/>
            <img src={assets.search_icon} alt="search icon" className='w-4' />

        </div>
        <img src={assets.cross_icon} className='inline w-3 cursor-pointer' onClick={()=>setshowSearch(false)} alt="" />

    </div>
  ): null;
}

export default SearchBar