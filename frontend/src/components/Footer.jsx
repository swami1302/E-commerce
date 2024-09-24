import React from "react";
import { assets } from "../assets/frontend_assets/assets";

function Footer() {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className="">
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio atque
            saepe nemo delectus eius, ex cumque, voluptates odit animi
            distinctio quo hic dolorum adipisci tempora aliquam nulla, deserunt
            quaerat laudantium.
          </p>
        </div>
        <div>
          <p className="uppercase font-medium text-xl mb-5">company</p>
          <ul className="flex flex-col gap-1 text-gray-600 capitalize">
            <li>Home</li>
            <li>About Us</li>
            <li>Deleivey</li>
            <li>Our Policy</li>
          </ul>
        </div>

        <div>
          <p className="uppercase text-xl font-medium mb-5">get in touch</p>
          <ul className="flex flex-col gap-1 text-gray-600 capitalize">
            <li>+1-234-56789</li>
            <li>sample@foreveryou.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center capitalize">
          Copyright 2024@ forever.com - All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
