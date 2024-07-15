import React from "react";

const Visit = () => {
  return (
    <div className="w-full h-auto bg-gradient-to-r from-[#53ADE4] to-[#277BA8] flex flex-col justify-evenly p-5 md:p-10 lg:p-20  md:flex md:flex-row ">
      {/*  fist dive */}
      <div className="">
        <p className="text-purple-200">Our locations</p>
        <h1 className="font-bold text-4xl my-4  text-white">
          Visit our offices
        </h1>
        <p className="text-purple-200">Find our at these locations.</p>
      </div>

      {/*    second div */}

      <div className="flex flex-col">
        <div className="py-2">
          <h2 className="font-bold text-white">Melbourne</h2>
          <p className="text-purple-200">
            Lorem ipsum dolor sit amet. <br /> dolor sit amet{" "}
          </p>
        </div>

        <div className="py-2">
          <h2 className="font-bold text-white">Sydney</h2>
          <p className="text-purple-200">
            Lorem ipsum dolor sit amet .<br /> dolor sit amet{" "}
          </p>
        </div>

        <div className="py-2">
          <h2 className="font-bold text-white">Byron Bay</h2>
          <p className="text-purple-200">
            Lorem ipsum dolor sit amet . <br /> dolor sit amet{" "}
          </p>
        </div>
      </div>

      {/*     third div */}

      <div className="flex flex-col">
        <div className="py-2">
          <h2 className="font-bold text-white">Melbourne</h2>
          <p className="text-purple-200">
            Lorem ipsum dolor sit amet. <br /> dolor sit amet{" "}
          </p>
        </div>

        <div className="py-2">
          <h2 className="font-bold text-white">Sydney</h2>
          <p className="text-purple-200">
            Lorem ipsum dolor sit amet .<br /> dolor sit amet{" "}
          </p>
        </div>

        <div className="py-2">
          <h2 className="font-bold text-white">Byron Bay</h2>
          <p className="text-purple-200">
            Lorem ipsum dolor sit amet . <br /> dolor sit amet{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Visit;
