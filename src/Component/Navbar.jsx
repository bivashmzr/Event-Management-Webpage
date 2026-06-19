import { faScissors } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="max-w-7xl flex justify-between py-4 mx-auto px-4 w-full">
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
        <div className="menu hidden lg:block">
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

        <div className="gap-3 flex">
          <div className="px-4 gap-3 border border-gray-200 rounded-3xl py-2 flex items-center  bg-[#faf8f8] justify-start ">
            <IoSearch />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none w-25  "
            />
          </div>
          <Link to="/login">
            <button className="px-6 py-2 border border-gray-200 rounded-3xl hover:scale-95 transition duration-300 transform font-[550] ">
              Login
            </button>
          </Link>

          <Link to="/signup">
            <button className="px-6 py-2 text-white bg-[#2B7FFF] rounded-3xl  hover:scale-95 transition duration-300 transform font-[550] shadow-2xl border">
              Signup
            </button>
          </Link>
        </div>
      </div>
      <div className="border-b-2 border-gray-200"></div>
    </nav>
  );
};

export default Navbar;
