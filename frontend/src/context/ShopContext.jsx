import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
export const ShopContext=createContext();

const ShopContextProvider=(props)=>{

    const currency='$';
    const delivery_fee=10;
    const [search, setsearch] = useState("");
    const [showSearch, setshowSearch] = useState(false);
    const [cartItems, setcartItems] = useState({});

    const addToCart= async(itemId,size)=>{
        let cartData={...cartItems};
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size]++
            }else{
                cartData[itemId][size]=1;
            }
        }else{
            cartData[itemId]={};
            cartData[itemId][size]=1;
        }
        setcartItems(cartData);
    }

    useEffect(()=>{
        console.log(cartItems);
        
    },[cartItems])

    const value={
        products,delivery_fee,currency,search,showSearch,setsearch,setshowSearch,cartItems,setcartItems,addToCart
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;