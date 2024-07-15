import React from "react";
import vereda from "../assets/vereda2.png";

const Navbar = () => {
  return (
    <>
      <div className=" w-full h-auto md:p-2 p-5 px-5 md:px-10 lg:px-20 flex flex-col justify-between md:flex md:flex-row ">
        {/*  image section ------------------------------------------------------------------------------*/}
        <div>
          <img className=" w-32 md:w-36 mt-1" src={vereda} alt="" />
        </div>

        {/*   another section ------------------------------*/}
        <ul className=" hidden md:flex md:justify-between md:my-3 gap-10">
          <li className="text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8] font-semibold">
            About
          </li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact Us</li>
          <li> Blogs</li>
        </ul>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
