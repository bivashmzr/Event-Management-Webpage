import React from "react";
import {
  FaMusic,
  FaLaptopCode,
  FaBriefcase,
  FaBasketballBall,
  FaUtensils,
  FaMicrophone,
  FaPaintBrush,
  FaUsers,
} from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const Categorymap = ({ data, limit }) => {
  const items = limit ? data.slice(0, limit) : data;

  return (
    <div className="max-w-7xl mx-auto pb-4">
      <div className="pt-6 px-3   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((elem, index) => (
          <div
            key={index}
            className=" border-gray-600 rounded-b-2xl shadow-md w-max-75 relative"
          >
            <img
              src={elem.image}
              alt=""
              className="w-full rounded-t-2xl h-43"
            />
            <div className="absolute left-4  bottom-[129px] border border-gray-300 w-13 h-13 flex items-center justify-center rounded-xl bg-white">
              {elem.icon}
            </div>
            <div className="p-3 flex flex-col gap-2  ">
              <div className="flex pt-2 items-center justify-between">
                <p className="text-[18px] font-bold">{elem.title}</p>
                <p className=" bg-gray-200 px-2 rounded-xl text-[14px] py-[2px] font-medium">
                  {elem.events}
                </p>
              </div>
              <p className="text-[15px] text-gray-500 font-medium">
                {elem.content}
              </p>
              <button className="flex items-center gap-2 text-blue-500 text-[16px] font-bold ">
                Explore Events <FaArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categorymap;
