import React from "react";
import { MdMailOutline } from "react-icons/md";

const Email = () => {
  return (
    <div className="max-w-7xl mx-auto hidden lg:block md:block">
      <div className="px-4 py-10 ">
        <div className="grid grid-cols-2 bg-blue-50 py-7 rounded-2xl px-7 justify-around">
          <div className="flex gap-4 ">
            <div className="border border-gray-200 px-5  items-center flex rounded-full bg-white shadow-md">
              <MdMailOutline size={30} />
            </div>
            <div className="flex flex-col w-90">
              <h3 className="font-bold text-[17px]">Stay Updated</h3>
              <p className="text-[16px] text-gray-500">
                Subscribe to our newsletter and never miss any exciting events
                hear you
              </p>
            </div>
          </div>
          <div className=" flex justify-center gap-3 items-center">
            <input
              type="text"
              placeholder="Enter your Email Address"
              className="bg-white border border-gray-300 rounded-xl p-4 w-150"
            />
            <button className="bg-[#2B7FFF] p-4 rounded-2xl  px-6 w-full text-white font-bold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
