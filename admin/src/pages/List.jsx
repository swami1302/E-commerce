import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

function List() {
  const [list, setlist] = useState([]);
  const fetchList =  async () => {
    try{
      const response = await axios.get(backendUrl+"/api/product/all");
      // console.log(response)
      if(response.data.success){
        setlist(response.data.products);
      }else{
        toast.error(response.data.msg);
      }
    }catch(error){
      console.log(error);
      toast.error(error.message);
    }
  }
  useEffect(()=>{
    fetchList();
  },[])
  return (
    <div>List</div>
  )
}

export default List