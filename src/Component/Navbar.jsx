import { faScissors } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { BsCalendar4Event } from "react-icons/bs";
import { TbCategoryPlus } from "react-icons/tb";
import { FiPhone } from "react-icons/fi";
import { TbMessageCirclePlus } from "react-icons/tb";

const Navbar = () => {
  const [openSlider, setOpenSlider] = useState(false);
  return (
    <nav className="border-b border-gray-200 shadow-sm fixed top-0 w-full z-50 left-0 bg-white">
      <div className="max-w-7xl flex justify-between lg:py-4 md:py-4 py-3 mx-auto px-4 w-full">
        <Link to="/">
          <span className="flex items-center gap-1">
            <FontAwesomeIcon
              icon={faScissors}
              fontSize={23}
              style={{ color: "rgb(24, 33, 48)" }}
            />
            <p className="font-extrabold text-[25px] text-[#2B7FFF]">Evently</p>
          </span>
        </Link>

        {/* mobile signup button only for mobile */}

        {/* Nav Menu Bar */}
        <div className="menu hidden lg:block ">
          <ul className="flex gap-6 rounded-full px-4  ">
            <Link to="/">
              <li className="text-[17px] font-medium text-[#212121] hover:border-b-2 border-[#2B7FFF]  py-2 transition transform duration-100 hover:text-[#2B7FFF]">
                Home
              </li>
            </Link>
            <Link to="/event">
              <li className="text-[17px] font-medium text-[#212121] hover:border-b-2 border-[#2B7FFF]  py-2 transition transform duration-300 hover:text-[#2B7FFF]">
                Events
              </li>
            </Link>
            <Link to="/categories">
              <li className="text-[17px] font-medium text-[#212121] hover:border-b-2 border-[#2B7FFF]  py-2 transition transform duration-300 hover:text-[#2B7FFF]">
                Categories
              </li>
            </Link>
            {/* <li className='text-[17px] hover:bg-gray-200 px-5 p-2 rounded-2xl'>Create Events</li> */}
            {/* <li className='text-[17px] hover:bg-gray-200 px-5 p-2 rounded-2xl'>My Events</li> */}
            <Link to="/contactus">
              <li className="text-[17px] font-medium text-[#212121] hover:border-b-2 border-[#2B7FFF]  py-2 transition transform duration-300 hover:text-[#2B7FFF]">
                Contact
              </li>
            </Link>
            <li className="text-[17px] font-medium text-[#212121] hover:border-b-2 border-[#2B7FFF]  py-2 transition transform duration-300 hover:text-[#2B7FFF]">
              About
            </li>
          </ul>
        </div>

        {/* Search & loggedin */}
        <div className="gap-3 flex">
          <div className="hidden lg:block md:block">
            <div className="px-4 gap-3 border  border-gray-200 rounded-3xl py-2 flex items-center   justify-start ">
              <IoSearch />
              <input
                type="text"
                placeholder="Search..."
                className="outline-none w-40 "
              />
            </div>
          </div>
          <div className="pt-1">
            <div className="flex flex-row gap-2 ">
              <Link to="/login" className="md:block lg:block hidden">
                <button className="px-6 py-2 border shadow-sm border-gray-50 rounded-3xl hover:scale-95 transition duration-300 transform font-[550] text-[12px] lg:text-[16px] ">
                  Login
                </button>
              </Link>

              <Link to="/signup">
                <button className="px-6  py-2   bg-[#2B7FFF] rounded-3xl  flex  hover:scale-95 transition duration-300 transform font-[550] shadow-md text-[12px] lg:text-[16px]">
                  <p className="text-white ">Signup</p>
                </button>
              </Link>
            </div>
          </div>
          <div
            className="border h-9.5 border-gray-200 active:scale-95 duration-300 transition-transform  rounded-full w-10  justify-center lg:hidden grid items-center"
            onClick={() => setOpenSlider(!openSlider)}
          >
            <MdMenu size={27} />
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setOpenSlider(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300
    ${openSlider ? "opacity-100 visible" : "opacity-0 invisible"}`}
      ></div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-[80%] max-w-[320px] h-screen bg-white shadow-2xl z-50
  transition-transform duration-300 ease-in-out
  ${openSlider ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center py-4 px-4 border-b border-gray-200">
          <Link to="/">
            <span className="flex items-center gap-1">
              <FontAwesomeIcon
                icon={faScissors}
                fontSize={15}
                style={{ color: "rgb(24, 33, 48)" }}
              />
              <p className="font-extrabold text-[20px] text-[#2B7FFF]">
                Evently
              </p>
            </span>
          </Link>

          <button
            onClick={() => setOpenSlider(false)}
            className="text-xl font-bold"
          >
            ✕
          </button>
        </div>

        {/* Menu */}
        <div className="pt-5">
          <ul className="flex flex-col gap-7 px-5">
            <Link to="/">
              <li className="flex items-center gap-2 hover:text-[#2B7FFF] transition">
                <GoHome color="gray" size={18} />
                Home
              </li>
            </Link>

            <Link to="/event">
              <li className="flex items-center gap-2 hover:text-[#2B7FFF] transition">
                <BsCalendar4Event color="gray" size={18} />
                Events
              </li>
            </Link>

            <Link to="/categories">
              <li className="flex items-center gap-2 hover:text-[#2B7FFF] transition">
                <TbCategoryPlus color="gray" size={18} />
                Categories
              </li>
            </Link>

            <Link to="/contactus">
              <li className="flex items-center gap-2 hover:text-[#2B7FFF] transition">
                <FiPhone color="gray" size={18} />
                Contact
              </li>
            </Link>

            <li className="flex items-center gap-2 hover:text-[#2B7FFF] transition">
              <TbMessageCirclePlus color="gray" size={18} />
              About
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
