import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { LuCalendarSearch } from "react-icons/lu";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import image1 from "../assets/Image/image 1.png";
import { IoTicketOutline } from "react-icons/io5";
import { MdLockOutline } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { FiBold } from "react-icons/fi";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

const Herosection = ({ search, setSearch, eventsData }) => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [open, setOpen] = useState(false);

  // Searching with unique value in location

  const uniqueLocations = [
    ...new Set((eventsData || []).map((event) => event.location)),
  ];

  const [selectedDate, setSelectedDate] = useState(null);

  // Local Storage data fetching from date title and location
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    // Save search data
    localStorage.setItem(
      "eventSearchData",
      JSON.stringify({
        search,
        selectedLocation,
        selectedDate: selectedDate
          ? selectedDate.toLocaleDateString("en-CA")
          : "",
      }),
    );

    // Navigate to search page
    navigate("/search");
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-10 pt-20">
        {/* LEFT SECTION */}
        <div>
          <div className="bg-[#F2F6FE] px-3 py-1 rounded-xl w-fit flex items-center gap-2">
            <FontAwesomeIcon icon={faCommentDots} className="text-[#2B7FFF]" />
            <p className="font-medium text-[16px]">Discover. Book. Enjoy.</p>
          </div>

          <h3 className="font-bold tracking-tight text-4xl lg:text-5xl pt-6 max-w-xl">
            Find The Best Events Near
            <span className="text-[#2B7FFF]"> You</span>
          </h3>

          <p className="text-[16px] pt-3 text-gray-600 font-medium max-w-lg">
            Explore concerts, workshops, conferences and more amazing events
            happening around you
          </p>

          {/* SEARCH BAR */}

          <div className="py-6 w-full">
            <form onSubmit={handleForm}>
              <div className="sm:w-130 lg:w-[100%] md:w-150   p-3 flex flex-col justify-between md:flex-row gap-2 items-center w-full">
                {/* -----------------------Search selection------------- */}
                <div className="flex gap-1.5 items-center sm:border lg:w-[24%] sm:w-full border-gray-300 rounded-xl p-2 px-3 hover:border hover:border-[#2B7FFF] duration-300 transition-all transform">
                  <IoSearch fontSize={18} color="#6A7282" />
                  <input
                    type="text"
                    value={search}
                    className="outline-none w-20 font-medium "
                    placeholder="Search"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>

                {/* --------------------Select Location------------------*/}

                <div
                  onClick={() => setOpen(!open)}
                  className="flex items-center gap-1.5 relative  group sm:border sm:w-full md:w-40 lg:w-[28%]  border-gray-300 rounded-xl p-2  hover:border hover:border-[#2B7FFF] duration-300 transition-all transform "
                >
                  <IoLocationOutline fontSize={18} color="#6A7282" />
                  <p className="text-gray-500 flex items-center whitespace-nowrap">
                    {selectedLocation || "Location"}
                  </p>
                  <RiArrowDropDownLine size={25} color="#6A7282" />

                  {open && (
                    <div
                      className={`bg-white rounded-md border border-gray-100 shadow-xl w-56 p-3 absolute top-11 left-1 z-50 max-h-47 overflow-y-auto transition-all duration-300 
${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}

    /* The magic to hide scrollbars without external CSS files */
    [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}
                    >
                      <div className="flex flex-col gap-2">
                        {uniqueLocations.map((loc, index) => (
                          <p
                            key={index}
                            className={`p-2 rounded-lg cursor-pointer transition-all duration-200 text-sm
          ${
            selectedLocation === loc
              ? "bg-indigo-50 text-indigo-600 font-medium"
              : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          }`}
                            onClick={(e) => {
                              e.stopPropagation(); // Prevents the parent div from toggling 'open' twice
                              setSelectedLocation(loc);
                              setOpen(false);
                            }}
                          >
                            {loc}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/*-------------------- Selected Date-------------------- */}

                <div className="flex gap-1.5 items-center  sm:border sm:p-2 sm:w-full lg:w-[23%] border-gray-300 rounded-xl  lg:p-1  lg:px-3 md:p-1.5 hover:border hover:border-[#2B7FFF] duration-300 transition-all transform ">
                  <LuCalendarSearch className="lg:text-[33px] sm:text-[20px] md:text-[28px] text-gray-500" />
                  <DatePicker
                    className="outline-0 z-10 w-full"
                    selected={selectedDate}
                    placeholderText="Date"
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="yyyy-MM-dd"
                  />
                </div>

                {/*--------------------- Button Homepage ---------------- */}

                <button className="bg-[#2B7FFF] px-6 py-2.5 active:scale-95 duration-300 transition-all transform rounded-xl text-white shrink-0 lg:w-[20%] sm:w-full md:w-29">
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* FEATURES */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-6 pt-3">
            <div className="flex gap-2">
              <IoTicketOutline className="text-[#2B7FFF] text-3xl" />
              <div>
                <h3 className="font-bold">Easy Booking</h3>
                <p className="text-gray-600 text-sm">
                  Book your tickets in just a few clicks
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <MdLockOutline className="text-[#2B7FFF] text-3xl" />
              <div>
                <h3 className="font-bold whitespace-nowrap">Secure Payments</h3>
                <p className="text-gray-600 text-sm">
                  100% secure and safe payments
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <BiSupport className="text-[#2B7FFF] text-3xl" />
              <div>
                <h3 className="font-bold">24/7 Support</h3>
                <p className="text-gray-600 text-sm">
                  We're here to help you anytime
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex items-center justify-center  md:justify-start md:py-3">
          <img
            src={image1}
            alt="hero"
            className="w-full max-w-lg h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
