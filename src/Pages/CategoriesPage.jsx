import React from "react";
import img3 from "../assets/Image/image3.png";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { TbCategoryFilled } from "react-icons/tb";
import { LuCalendarRange } from "react-icons/lu";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IoSearch, IoTicketOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaMusic } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

import Categorymap from "../Component/Categorymap";
import { CategoryData } from "../Component/CategoriesData";
import Email from "../Component/Email";
import { CategoryFilterData } from "../Component/CateData";

const CategoriesPage = () => {
  const statsData = [
    {
      id: 1,
      icon: <TbCategoryFilled size={38} />,
      title: "Categories",
      value: "12+",
      description: "Wide range of events",
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600",
      valueColor: "text-violet-600",
      arrow: true,
    },
    {
      id: 2,
      icon: <LuCalendarRange size={38} />,
      title: "Live Events",
      value: "2,500+",
      description: "Across all categories",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      valueColor: "text-green-600",
      arrow: true,
    },
    {
      id: 3,
      icon: <HiMiniUserGroup size={38} />,
      title: "Attendees",
      value: "100K+",
      description: "Joined this month",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
      valueColor: "text-orange-500",
      arrow: true,
    },
    {
      id: 4,
      icon: <IoTicketOutline size={38} />,
      title: "User Rating",
      value: "4.8",
      description: "Based on 15k+ reviews",
      iconBg: "bg-sky-100",
      iconColor: "text-sky-500",
      valueColor: "text-sky-500",
      rating: true,
      arrow: true,
    },
  ];
  const mobileCategories = CategoryFilterData.slice(1, 7);
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto lg:mt-15 md:mt-10 mt-8 border-[#FBFAFC]  ">
        <div className="hidden md:block">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:items-center items-start lg:mt-4   px-5">
            <div className="gap-1 flex flex-col lg:mt-0 md:mt-0 mt-4 ">
              <h2 className="lg:text-[28px] text-[19px] font-bold">
                Categories
              </h2>
              <p className="text-[14px] lg:text-[16px] text-gray-500  lg:w-110 w-full md:w-90  ">
                Explore events by category and find experiences that match your
                interests and passions.
              </p>
            </div>

            <div className="justify-end flex mt-2">
              <img src={img3} alt="" className="h-37  " />
            </div>
          </div>
        </div>
        {/* icons Different */}
        <div className="block lg:hidden mb-5">
          <div className="flex justify-between md:justify-center md:gap-10 w-full mt-5  px-4">
            {mobileCategories.map((value) => (
              <div className=" flex flex-col gap-2 items-center">
                <div
                  className={`shadow-md border w-max p-4 active:scale-90 transition-transform duration-300 rounded-full ${value.iconcolor}`}
                >
                  {value.icon}
                </div>
                <span className="text-[13px] font-semibold">{value.title}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Search Bar */}
        <div className="pb-4 lg:hidden block px-4">
          <span className="border  bg-gray-100 border-gray-300 rounded-full flex items-center justify-between pr-1">
            <input
              type="text"
              placeholder="Search events, artists, venues..."
              className=" p-1 py-3 text-[14px]  px-4  outline-0 w-full"
            />
            <div className="w-11 active:scale-90 transition-transform duration-300 h-9.5 rounded-full bg-blue-400 flex items-center justify-center">
              <IoSearch color="white" size={20} />
            </div>
          </span>
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-2 md:hidden grid-cols-1 md:items-center items-start lg:mt-4   px-5">
          <div className="gap-1 flex flex-col lg:mt-0 md:mt-0 mt-4 ">
            <h2 className="lg:text-[28px] text-[19px] font-bold">Categories</h2>
            <p className="text-[14px] lg:text-[16px] text-gray-500  lg:w-110 w-full md:w-90  ">
              Explore events by category and find experiences that match your
              interests and passions.
            </p>
          </div>

          <div className="justify-end flex mt-2">
            <img src={img3} alt="" className="h-37  " />
          </div>
        </div>

        {/* Component differents cards */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4 px-3 py-4">
          {statsData.map((item) => (
            <div
              key={item.id}
              className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center ${item.iconBg}`}
              >
                <span className={item.iconColor}>{item.icon}</span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className={`font-bold text-xl ${item.valueColor}`}>
                  {item.rating ? (
                    <div className="flex items-center gap-1">
                      {item.value}
                      <FaStar className="text-yellow-400 text-sm" />
                    </div>
                  ) : (
                    item.value
                  )}
                </div>

                <h3 className="font-bold text-gray-900">{item.title}</h3>

                <p className="text-sm text-gray-500">{item.description}</p>
              </div>

              {/* Optional Arrow */}
              {item.arrow && (
                <div
                  className={`w-6 h-6 rounded-full ${item.iconBg} flex items-center justify-center group-hover:translate-x-1 transition`}
                >
                  <MdKeyboardArrowRight
                    className={`${item.iconColor} text-xl`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Category map Data mutiple cards */}
        <Categorymap data={CategoryData} />
      </div>
      <Email />
      <Footer />
    </>
  );
};

export default CategoriesPage;
