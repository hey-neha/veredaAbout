import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";

const Team = () => {
  return (
    <>
      <div className=" w-full h-auto bg-gray-100 text-center p-5 md:p-10 lg:p-20">
        {/*    for content  ------------------------------------*/}
        <div>
          <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8]">
            We're hiring
          </p>
          <h1 className="font-semibold text-4xl">Meet our team</h1>
          <p className="px-5 md:px-60 mt-5 md:mt-6      text-center  text-[16px] lg:text-[20px]  text-[#42526B]    font-light      ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
            voluptas?Lorem ipsum dolor sit, amet consectetur Aperiam, deserunt.
          </p>
        </div>

        {/*    for image ------------------------------*/}

        <div className="grid grid-cols-2 gap-5 md:gap-9 place-content-center  md:grid-cols-4  mt-5 md:mt-9  ">
          <div className="text-center">
            <img src={img1} className="ml-14 md:ml-20 lg:ml-20" alt="" />
            <h1 className="font-semibold pt-4 pb-1">Olivia Rhye</h1>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8] ">
              Founder & CEO
            </p>
          </div>

          <div className="text-center">
            <img src={img2} className="ml-14 md:ml-20 lg:ml-20" alt="" />
            <h1 className="font-semibold pt-4 pb-1">Olivia Rhye</h1>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8] ">
              Founder & CEO
            </p>
          </div>

          <div className="text-center">
            <img src={img3} className="ml-14 md:ml-20 lg:ml-20" alt="" />
            <h1 className="font-semibold pt-4 pb-1">Olivia Rhye</h1>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8] ">
              Founder & CEO
            </p>
          </div>

          <div className="text-center">
            <img src={img4} className="ml-14 md:ml-20 lg:ml-20" alt="" />
            <h1 className="font-semibold pt-4 pb-1">Olivia Rhye</h1>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8] ">
              Founder & CEO
            </p>
          </div>

          <div className="text-center">
            <img src={img5} className="ml-14 md:ml-20 lg:ml-20" alt="" />
            <h1 className="font-semibold pt-4 pb-1">Olivia Rhye</h1>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8] ">
              Founder & CEO
            </p>
          </div>

          <div className="text-center">
            <img src={img6} className="ml-14 md:ml-20 lg:ml-20" alt="" />
            <h1 className="font-semibold pt-4 pb-1">Olivia Rhye</h1>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8] ">
              Founder & CEO
            </p>
          </div>

          <div className="text-center">
            <img src={img7} className="ml-14 md:ml-20 lg:ml-20" alt="" />
            <h1 className="font-semibold pt-4 pb-1">Olivia Rhye</h1>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8] ">
              Founder & CEO
            </p>
          </div>

          <div className="text-center">
            <img src={img8} className="ml-14 md:ml-20 lg:ml-20" alt="" />
            <h1 className="font-semibold pt-4 pb-1">Olivia Rhye</h1>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8] ">
              Founder & CEO
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
