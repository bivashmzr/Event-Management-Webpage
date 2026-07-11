import React, { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { BsCalendar4Event } from "react-icons/bs";
import { RiArrowDropDownLine, RiDropdownList } from "react-icons/ri";
import { LuOmega } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { BsCalendar2Week } from "react-icons/bs";
import { GrTechnology } from "react-icons/gr";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { LuPencilRuler } from "react-icons/lu";
import Cards from "../Component/Cards";
import { FaRegClock } from "react-icons/fa6";
import { LuCalendarCheck } from "react-icons/lu";
import { eventsData } from "../Component/EventsDatas.jsx";
import Navbar from "../Component/Navbar.jsx";
import Footer from "../Component/Footer.jsx";
import { CategoryFilterData } from "../Component/CateData.jsx";

const EventsPage = () => {
  const [sort, setSort] = useState("Popular");
  const [Isopen, setIsopen] = useState(true);
  const [Category, setCategory] = useState(false);
  const [Isopening, setIsopening] = useState(false);

  const [showMore, setShowMore] = useState(false);

  const mobileCategories = CategoryFilterData.slice(0, 0);
  const moreCategories = CategoryFilterData.slice(0);
  const sortOptions = [
    "Popular",
    "Latest",
    "Most Popular",
    "Price: Low to High",
    "Price: High to Low",
  ];

  useEffect(() => {
    document.body.style.overflow = Isopening ? "hidden" : "auto";
  }, [Isopening]);

  return (
    <>
      <Navbar />
      {/*only Mobile Black background */}
      <div
        onClick={() => setIsopening(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-all duration-300
    ${Isopening ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />
      {/* Device view w-2/8 and w-5/6 */}
      <div className="pt-4 pb-10 flex lg:flex-row md:flex-col flex-col mt-20   max-w-7xl mx-auto gap-3">
        {/* Laptop Version Large - first container*/}
        <div className="lg:w-2/8 lg:block  hidden border-boundry mx-auto w-full">
          <div className="flex justify-between pb-4">
            <p className="text-[15px] font-bold">Filters</p>
            <span className="text-[#2B7FFF] font-bold text-[14px]">
              Reset All
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[15px] font-bold">Search</span>
            <span className="border border-gray-300 rounded-md flex items-center justify-between pr-4">
              <input
                type="text"
                placeholder="Search events"
                className=" p-1 py-3 text-[14px]  px-3  outline-0"
              />
              <IoSearch color="#6F7797" />
            </span>
          </div>
          <div className="py-3 flex flex-col gap-2">
            <p className="text-[15px] font-bold">Date</p>
            <div className="p-3 border-gray-300 rounded-md border flex items-center justify-between px-3">
              <span className="flex items-center gap-2">
                <BsCalendar4Event />
                <p className="text-[13px] font-medium text-gray-400">
                  Select Date
                </p>
              </span>
              <RiArrowDropDownLine fontSize={20} />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <p className="text-[15px] font-bold">Price Range</p>
              <p className="text-[15px] font-medium">₹0 - ₹5000+</p>
            </div>
            <div className=" py-2">
              <input type="range" className="w-full  accent-[#2B7FFF]" />
            </div>

            <div className="flex gap-3 justify-between items-center">
              <input
                type="text"
                className="w-30 border border-gray-400 rounded-md p-3 text-[13px]"
                placeholder="₹ 0"
              />
              <p className="font-bold text-[15px]">to</p>
              <input
                type="text "
                className="w-30 border border-gray-400 rounded-md p-3 text-[13px]"
                placeholder="₹ 5000+"
              />
            </div>

            <div className="my-3 py-1 border rounded-md border-gray-300">
              <div
                onClick={() => setIsopen(!Isopen)}
                className="flex items-center justify-between px-3"
              >
                <p className="py-3 font-bold text-[15px]">Categories</p>
                <span
                  className={`transition-transform duration-300 ${Isopen ? "rotate-180" : ""}`}
                >
                  <RiArrowDropDownLine fontSize={25} />
                </span>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  Isopen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {Isopen && (
                  <div className="px-4 pb-4 pt-3 flex flex-col gap-3">
                    <div className="flex gap-2 items-center">
                      <input type="checkbox" className="w-4 h-4" />
                      <label>Music</label>
                    </div>

                    <div className="flex gap-2 items-center">
                      <input type="checkbox" className="w-4 h-4" />
                      <label>Buisness</label>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input type="checkbox" className="w-4 h-4" />
                      <label>Tech</label>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input type="checkbox" className="w-4 h-4" />
                      <label>WorkShop</label>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-bold text-[15px]">Location</p>
              <div className="flex items-center gap-2 border px-2 p-2 rounded-md border-gray-300">
                <span>
                  <IoLocationOutline fontSize={19} />
                </span>
                <input
                  type="text"
                  placeholder="Enter Location..."
                  className="outline-none "
                />
              </div>
            </div>

            <div className=" mt-3 flex justify-center text-[16px] font-bold text-white bg-[#3E36E1] rounded-md py-2 items-center gap-2">
              <span>
                <CiFilter fontSize={17} />
              </span>
              <button className="">Apply Filter</button>
            </div>
          </div>
        </div>

        {/* Mobile Version and Tablet slider */}

        <div
          className={`fixed top-0 px-4 right-0 h-screen w-70  md:w-80 bg-white shadow-2xl z-50 flex flex-col transition-transform duration-500 ease-in-out
  ${Isopening ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex justify-between pb-2 mb-3 px-0.5  pt-5 border-b border-gray-200 shrink-0">
            <p className="lg:text-[18px] text-[18px] font-bold">Filters</p>
            <div onClick={() => setIsopening(false)}>x</div>
          </div>
          <div className="flex flex-col gap-2 ">
            <span className="text-[14px] lg:text-[15px] md:text-[15px] font-bold">
              Search
            </span>
            <span className="border border-gray-300 rounded-md flex items-center justify-between pr-4">
              <input
                type="text"
                placeholder="Search events"
                className=" p-1 lg:py-3 md:py-3 py-2  lg:text-[14px] md:text-[14px] text-[13px]  px-3  outline-0"
              />
              <IoSearch color="#6F7797" />
            </span>
          </div>
          <div className="py-3 flex flex-col gap-2">
            <p className="text-[14px] lg:text-[15px] md:text-[15px] font-bold">
              Date
            </p>
            <div className="lg:p-3 md:p-3 p-2  border-gray-300 rounded-md border flex items-center justify-between px-3">
              <span className="flex items-center gap-2">
                <BsCalendar4Event />
                <p className="lg:text-[14px] md:text-[14px] text-[13px] font-medium text-gray-400">
                  Select Date
                </p>
              </span>
              <RiArrowDropDownLine fontSize={20} />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <p className="text-[14px] lg:text-[15px] md:text-[15px] font-bold">
                Price Range
              </p>
              <p className="lg:text-[15px] md:text-[15px] text-[13px] font-medium">
                ₹0 - ₹5000+
              </p>
            </div>
            <div className=" py-1 lg:py-2 md:py-2">
              <input type="range" className="w-full  accent-[#2B7FFF]" />
            </div>

            <div className="flex gap-3  justify-between items-center">
              <input
                type="text"
                className="lg:w-30 md:w-25 w-25 border border-gray-400 rounded-md lg:p-3 md:p-3 p-2 text-[13px]"
                placeholder="₹ 0"
              />
              <p className="font-bold lg:text-[15px] md:text-[15px] text-[14px] text-gray-600">
                to
              </p>
              <input
                type="text "
                className="lg:w-30 md:w-25 w-25 border border-gray-400 rounded-md lg:p-3 md:p-3 p-2  text-[13px]"
                placeholder="₹ 5000+"
              />
            </div>

            <div className="lg:my-3 md:my-3 mt-3 mb-1 lg:py-1 border rounded-md border-gray-300">
              <div
                onClick={() => setIsopen(!Isopen)}
                className="flex items-center justify-between px-3 border-b border-gray-100"
              >
                <p className="py-3 font-bold lg:text-[15px] md:text-[15px] text-[14px] ">
                  Categories
                </p>
                <span
                  className={`transition-transform duration-300 ${Isopen ? "rotate-180" : ""}`}
                >
                  <RiArrowDropDownLine fontSize={25} />
                </span>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  Isopen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {Isopen && (
                  <div className="px-4 pb-4  bg-gray-100 pt-2  flex flex-col gap-2 lg:gap-3 md:gap-3">
                    <div className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        className="lg:w-4 lg:h-4 md:w-4 md:h-4  w-3.5 h-3.5"
                      />
                      <label className="text-[14px] lg:text-[16px] md:text-[16px]">
                        Music
                      </label>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        className="lg:w-4 lg:h-4 md:w-4 md:h-4  w-3.5 h-3.5"
                      />
                      <label className="text-[14px] lg:text-[16px] md:text-[16px]">
                        Buisness
                      </label>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        className="lg:w-4 lg:h-4 md:w-4 md:h-4  w-3.5 h-3.5"
                      />
                      <label className="text-[14px] lg:text-[16px] md:text-[16px]">
                        Tech
                      </label>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        className="lg:w-4 lg:h-4 md:w-4 md:h-4  w-3.5 h-3.5"
                      />
                      <label className="text-[14px] lg:text-[16px] md:text-[16px]">
                        WorkShop
                      </label>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-bold text-[15px]">Location</p>
              <div className="flex items-center gap-2 border px-2 p-2 rounded-md border-gray-300">
                <span>
                  <IoLocationOutline fontSize={19} />
                </span>
                <input
                  type="text"
                  placeholder="Enter Location..."
                  className="outline-none "
                />
              </div>
            </div>

            <div className=" mt-3 flex  justify-center text-[16px] font-bold text-white bg-[#3E36E1] rounded-md py-2 items-center gap-2">
              <span>
                <CiFilter fontSize={17} />
              </span>
              <button className="">Apply Filter</button>
            </div>
          </div>
        </div>

        {/* Second container main container */}
        <div className="lg:w-5/6 lg:border-boundry mx-auto w-full ">
          <div className="flex lg:px-5 px-4 flex-col lg:flex-row  justify-between">
            <div className="lg:hidden block">
              <div className=" flex items-center gap-1 w-max bg-blue-50 py-0.5 rounded-full px-3 mt-1 mb-4">
                <CiLocationOn color="#4FA0FC" size={14} />
                <div className="flex items-center ">
                  <p className="text-[#4FA0FC] text-semibold text-[13px]">
                    Mumbai, India
                  </p>
                  <RiArrowDropDownLine size={25} color="#4FA0FC" />
                </div>
              </div>
            </div>
            {/* Search Menu mobile version top */}
            <div className="pb-4 lg:hidden block">
              <span className="border  bg-gray-100 border-gray-300 rounded-full flex items-center justify-between pr-1">
                <input
                  type="text"
                  placeholder="Search events, artists, venues..."
                  className=" p-1 py-3 text-[14px]  px-4  outline-0 w-full"
                />
                <div className="w-11 h-9.5 rounded-full bg-blue-400 flex items-center justify-center">
                  <IoSearch color="white" size={20} />
                </div>
              </span>
            </div>
            <div className="flex flex-col mt-2 mb-4 px-3">
              <h2 className="lg:text-[24px] text-[20px] font-bold">
                All Events
              </h2>
              <p className="lg:text-[15px] text-[13px] text-gray-500">
                Discover exciting events happening around you
              </p>
            </div>

            <div className="flex gap-2 items-center px-3 w-max">
              <div
                onClick={() => setIsopening(!Isopening)}
                className="block lg:hidden"
              >
                <p className="text-[14px] border py-1 px-3 border-gray-200 rounded-xl items-center gap-1 flex">
                  <CiFilter /> Filter
                </p>
              </div>

              <div className="relative">
                <button
                  onClick={() => setCategory(!Category)}
                  className="text-[14px] flex items-center gap-2 border py-1 px-3 rounded-xl border-gray-200 w-max"
                >
                  {sort}
                  <FaAngleDown
                    className={`transition-transform duration-300 ${
                      Category ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`absolute lg:right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200  z-50 transition-all duration-300 origin-top
    ${Category ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 -translate-y-2 invisible pointer-events-none"}`}
                >
                  {sortOptions.map((item) => (
                    <p
                      key={item}
                      onClick={() => {
                        setSort(item);
                        setCategory(false);
                      }}
                      className="px-4 py-3 hover:bg-blue-50 cursor-pointer"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 lg:hidden   ">
                {mobileCategories.map((item) => (
                  <button
                    key={item.id}
                    className="flex items-center gap-2 text-[14px] border rounded-2xl border-gray-200 px-4 py-1  whitespace-nowrap"
                  >
                    {item.icon}
                    {item.title}
                  </button>
                ))}

                {/* More Button */}
                <div className="relative">
                  <button
                    onClick={() => setShowMore(!showMore)}
                    className="flex items-center gap-2 border text-[14px] border-gray-200 px-4 py-1 rounded-full"
                  >
                    More
                    <FaAngleDown
                      className={`transition-transform text-[11px] ${
                        showMore ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`absolute right-0 mt-2 w-48  bg-white rounded-xl shadow-lg border border-gray-200 transition-all duration-300 origin-top z-50
      ${
        showMore
          ? "opacity-100 scale-100"
          : "opacity-0 scale-95 pointer-events-none"
      }`}
                  >
                    {moreCategories.map((item) => (
                      <button
                        key={item.id}
                        className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-100"
                      >
                        {item.icon}
                        {item.title}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* only laptop version lg: */}
          <div className="hidden lg:flex gap-3 w-full justify-between px-5">
            {CategoryFilterData.map((item) => (
              <button
                key={item.id}
                className="flex items-center gap-2 border border-gray-300 px-5 py-1 rounded-full"
              >
                {item.icon}
                {item.title}
              </button>
            ))}
          </div>

          {/* All Cards Data */}
          <div className="pt-5">
            <Cards events={eventsData} limit={6} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EventsPage;
