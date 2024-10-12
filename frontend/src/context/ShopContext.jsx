import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
export const ShopContext=createContext();

const ShopContextProvider=(props)=>{

    const currency='$';
    const delivery_fee=10;
    const [search, setsearch] = useState("");
    const [showSearch, setshowSearch] = useState(true);
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