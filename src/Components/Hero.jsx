import React from "react";
import bhaskar from "../assets/bhaskar.png";
import hindustan from "../assets/hindustan.png";
import news from "../assets/new18.png";
import dailynwes from "../assets/dailyhunt.png";

const Hero = () => {
  return (
    <div className=" w-full h-auto text-center p-10 md:p-20">
      <h1 className=" text-4xl text-center md:text-[30px] text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8] text-[24px] lg:text-[36px] font-semibold">
        Big Companies are here
      </h1>
      <p className="px-5 md:px-28 my-4 md:py-4 lg:py-4 lg:px-48">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur sint
        nesciunt dicta dolore dolores quod, magnam voluptas accusantium
        consequatur, sapiente eveniet Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Voluptatum, eum.
      </p>

      {/*   image section */}

      <div className="  grid grid-cols-2 md:grid-cols-4  mx-5 md:mx-10 lg:mx-20 ">
        <img className=" w-20 md:w-32 h-auto mx-auto" src={bhaskar} alt="" />
        <img
          className="w-20 md:w-36 h-auto mx-auto md:mt-4"
          src={hindustan}
          alt=""
        />
        <img
          className="w-20 md:w-24 md:mt-4 h-auto mx-auto"
          src={news}
          alt=""
        />
        <img
          className="w-20 md:w-28 md:mt-4 h-auto mx-auto"
          src={dailynwes}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
