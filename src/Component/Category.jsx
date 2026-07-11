import React from "react";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineLaptop } from "react-icons/ai";
import { IoIosFootball } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

import img8 from "../assets/Image/image8.png";
import img9 from "../assets/Image/image9.png";
import img10 from "../assets/Image/image10.png";
import img11 from "../assets/Image/image11.png";
import img12 from "../assets/Image/image12.png";
import img13 from "../assets/Image/image13.png";

import { TbPaletteOff } from "react-icons/tb";

const Category = () => {
  const CategoryData = [
    {
      icons: <IoMusicalNotesOutline size={30} color="#7436D8" />,
      title: "Music",
      image: img8,
    },
    {
      icons: (
        <FontAwesomeIcon
          icon={faBriefcase}
          className="text-[24px]"
          color="#1C7FFD"
        />
      ),
      title: "Business",
      image: img9,
    },
    {
      icons: <AiOutlineLaptop size={30} color="#2CBC5A" />,
      title: "Tech",
      image: img10,
    },
    {
      icons: (
        <FontAwesomeIcon
          icon={faUserGroup}
          color="#FE862D"
          className="text-[24px]"
        />
      ),
      title: "Workshop",
      image: img11,
    },
    {
      icons: <IoIosFootball size={30} color="#FE4B61" />,
      title: "Sports",
      image: img12,
    },
    {
      icons: <TbPaletteOff size={30} color="#7944E1" />,
      title: "Art & Culture",
      image: img13,
    },
  ];
  return (
    <div className="py-5 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-5">
          <h3 className="py-4 font-bold text-[20px]  lg:text-[22px]">
            Browse By Category
          </h3>
          <span className=" hidden lg:block md:block">
            <p className="flex items-center gap-1 text-[#2B7FFF] font-medium ">
              View All Categories
              <FaAngleRight />
            </p>
          </span>
        </div>
        <div className=" grid grid-cols-2  md:grid-cols-3 lg:grid-cols-6 gap-2  lg:gap-2 md:gap-4 px-4">
          {CategoryData.map((Category, idx) => (
            <div
              key={idx}
              className="lg:w-[90%] md:w-[98%] h-[120px] p-4   rounded-xl flex flex-col items-center justify-center gap-2 shadow-md hover:shadow-md transition"
              style={{
                backgroundImage: `url(${Category.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex flex-col  justify-between items-start w-full h-full ">
                <span>{Category.icons}</span>
                <h3 className="font-semibold text-[17px]  flex items-center justify-between w-full">
                  {Category.title}
                  <FaChevronRight
                    size={26}
                    className="rounded-full p-1.5 bg-white text-gray-700 shadow-md "
                  />
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
