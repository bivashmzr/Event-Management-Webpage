import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { BsCalendar4Event } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
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

const EventsPage = () => {
  const [Isopen, setIsopen] = useState(true);
  return (
    <>
      <Navbar />
      <div className="pt-4 pb-10 flex max-w-7xl mx-auto gap-3">
        <div className="w-2/8 border-boundry mx-auto">
          <div className="flex justify-between pb-4  ">
            <p className="text-[15px]  font-bold">Filters</p>
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
          <div className="py-3 flex flex-col gap-2 ">
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
        <div className="w-5/6 border-boundry mx-auto">
          <div className="flex px-5  justify-between">
            <div className="flex flex-col mt-2">
              <h2 className="text-[24px] font-bold">All Events</h2>
              <p className="text-[15px] text-gray-500">
                Discover exciting events happening arund you
              </p>
            </div>

            <div className="flex gap-3">
              <span className="border h-10 px-3 text-[15px] border-gray-400 rounded-md items-center flex font-medium gap-1">
                <CiFilter />
                <p>Filter</p>
              </span>
              <p className="border h-10 text-[15px] px-3 border-gray-400 rounded-md items-center gap-2 flex font-medium">
                Sort By: Popular
                <FaAngleDown />
              </p>
            </div>
          </div>

          <div className="pt-6 px-5 flex gap-3">
            <span className="border text-[15px] font-bold px-5 py-1 rounded-full border-gray-400">
              All
            </span>
            <span className="flex items-center gap-1 border px-5 text-[15px] font-bold py-1 rounded-full border-gray-400">
              <IoMusicalNotesOutline /> Music
            </span>
            <span className="flex items-center gap-1 border px-5 text-[15px] font-bold py-1 rounded-full border-gray-400">
              <BsCalendar2Week />
              Buisness
            </span>
            <span className="flex items-center gap-1 border px-5 text-[15px] font-bold py-1 rounded-full border-gray-400">
              <GrTechnology />
              Tech
            </span>
            <span className="flex items-center gap-1 border px-5 text-[15px] font-bold py-1 rounded-full border-gray-400">
              <BsPersonWorkspace />
              Workshop
            </span>
            <span className=" flex items-center gap-1 border px-5 text-[15px] font-bold py-1 rounded-full border-gray-400">
              <MdOutlineSportsSoccer />
              Sports
            </span>
            <span className="flex items-center gap-1 border px-5 text-[15px] font-bold py-1 rounded-full border-gray-400">
              <LuPencilRuler />
              Art & Culture
            </span>
          </div>

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
