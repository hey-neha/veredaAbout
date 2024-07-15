import React from "react";
import map from "../assets/MapImage.png";

const Contact = () => {
  return (
    <div className="w-full h-auto text-center bg-gray-100 p-16 ">
      <div>
        <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8] ">
          Contact us
        </p>
        <h1 className=" text-4xl text-center md:text-[30px]  text-[24px] lg:text-[36px] font-semibold">
          We are dedicated serve you and create the <br /> Upward trajectory for
          your company.let your <br /> hardwork be visible
        </h1>
        <p className="py-5">we have offices and teams all around world</p>
      </div>

      {/* images------------------------------------------------------------ */}
      <div className="mt-11">
        <img className="w-full h-auto" src={map} alt="" />
      </div>

      {/*  another container */}

      <div className="flex flex-col justify-between md:flex md:flex-row p-5 md:p-8 lg:p-10">
        {/*     support ---------------------- */}
        <div className="">
          <h3 className="font-bold">Support</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p className="mt-3  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8]">
            Support@untitledui.com
          </p>
        </div>
        {/*  sales --------------------*/}
        <div>
          <h3 className="font-bold">Sales</h3>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
          <p className="mt-3 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8]">
            Sales@untitledui.com
          </p>
        </div>

        {/*   phone ---------------------*/}

        <div>
          <h3 className="font-bold">Phone</h3>
          <p>Lorem ipsum dolor sit amet .</p>
          <p className="mt-3 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8]">
            +1 (555) 000-0000
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
