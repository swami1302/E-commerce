import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProducts from "../components/RelatedProducts";

function Product() {
  const { productId } = useParams();
  // console.log(productId);
  const { products,currency } = useContext(ShopContext);
  const [productData, setproductData] = useState(null);
  const [image, setimage] = useState("");
  const [size, setsize] = useState('');

  const fetchProductData = async () => {
    const foundProduct = products.find((item) => item._id === productId);
    if (foundProduct) {
      setproductData(foundProduct);
      setimage(foundProduct.image[0]); // Set the first image
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 ">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row ">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row ">
          <div className="flex flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full ">
            {productData.image &&
              productData.image.map((item, index) => {
                return (
                  <img
                    src={item}
                    onClick={() => setimage(item)}
                    alt="img"
                    key={index}
                    className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                  />
                );
              })}
          </div>
          <div className="w-full sm:w-[80%] ">
            <img src={image} alt="" className="w-full h-auto" />
          </div>
        </div>
        {/* Product Information */}
        <div className="flex-1 ">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="font-medium text-3xl mt-5">{currency}{productData.price}</p>
          <p className="text-gray-500 mt-5 md:w-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
              <p>Select Size</p>
              <div className="flex gap-2">
                {productData.sizes.map((item,index)=>(
                  <button  onClick={()=>(setsize(item))} className={`border py-2 px-4 bg-gray-100 ${item===size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
                ))}
              </div>
          </div>
        <button className="uppercase bg-black text-white px-8 py-3 text-sm active:bg-gray-700">add to cart</button>
        <hr className="mt-8 sm:w-4/5 "/>
        <div className="text-sm flex flex-col mt-5 text-gray-500 gap-1">
          <p>100% Original Product.</p>
          <p>Cash on delivery is available on this product.</p>
          <p>Easy returns and exchange policy within 7 days.</p>
        </div>
        </div>
      </div>
      {/* Description and review */}
      <div className="mt-20 ">
        <div className="flex">
          <b className="border px-5 py-3 text-sm ">Description</b>
          <p className="border px-5 py-3 text-sm">Review (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vel minima non nam nulla sit nesciunt. Quibusdam minus, inventore consequuntur sequi excepturi explicabo? Minus error quo doloribus incidunt, quam qui!</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, quibusdam assumenda nemo blanditiis minus ipsam totam doloribus. Quo, unde optio!</p>
        </div>
      </div>
      {/* Display Related products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}

export default Product;
