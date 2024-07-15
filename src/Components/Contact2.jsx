import React from "react";

const Contact2 = () => {
  return (
    <div className="w-full h-full  flex flex-col p-5 md:p-15 lg:p-20">
      {/*    content ------------*/}
      <div className="text-center">
        <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8]">
          Contact us
        </p>
        <h1 className="font-bold text-3xl">Get in touch</h1>
        <p className="mt-5 md:mt-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
          quam!
        </p>
      </div>

      {/*     form ------------------------*/}
      <div className="text-center flex justify-center mt-5 md:mt-16 lg:mt-20">
        <form action="#">
          {/*   first name and last name -----------------------------------------*/}
          <div className="flex flex-col  md:flex gap-5 md:gap-10 md:flex-row">
            {/*  fist name */}
            <div className="">
              <label className="text-start py-5 md:py-7" htmlFor="#">
                First Name
              </label>
              <br />
              <input
                className=" w-full p-2 px-10 border rounded"
                type="text"
                placeholder="First name"
              />
            </div>

            {/*   last name ------------*/}

            <div>
              <label className="text-start" htmlFor="#">
                Last Name
              </label>
              <br />
              <input
                className=" w-full p-2 px-10 border rounded"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>

          {/*       email --------------------------------*/}

          <div className="">
            <label className="text-start" htmlFor="#">
              Email
            </label>
            <br />
            <input
              className=" w-full p-2 px-10 border rounded"
              type="text"
              placeholder="You@company.com"
            />
          </div>

          {/* phone number------------------------ */}
          <div className="">
            <label className="text-start" htmlFor="#">
              Phone Number
            </label>
            <br />
            <input
              className=" w-full p-2 px-10 border rounded"
              type="text"
              placeholder="+1(555) 000-0000"
            />
          </div>

          {/*      message-------------------------------------- */}

          <div>
            <label className="text-start" htmlFor="#">
              Message
            </label>
            <br />

            <textarea
              className=" w-full p-2 px-10 border rounded"
              name=""
              id=""
            ></textarea>
          </div>
          {/* button -----------------------------------------*/}

          <div className="my-4 md:my-7 ">
            <p className="text-start text-gray-400">
              You agree to our friendly privacy policy
            </p>
          </div>

          <div className=" w-full p-2  border rounded h-auto  bg-gradient-to-r from-[#53ADE4] to-[#277BA8]  text-center">
            <a className="text-white" href="#">
              Send message
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact2;
