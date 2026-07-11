import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import img14 from "../assets/Image/image14.png";
import { FaLinkedinIn } from "react-icons/fa6";
import { faScissors } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="pb-3 bg-gray-100 ">
      <div className="max-w-7xl mx-auto px-6 border-t-2 pt-6 border-gray-200 ">
        <div className="grid lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.6fr] lg:gap-10 md:gap-10 gap-5 pb-3 md:grid-cols-3 ">
          {/* Logo with Copyright */}

          <div className="flex flex-col gap-1.5 ">
            <div className="flex justify-between items-center   border-b border-gray-200 ">
              <Link to="/">
                <span className="flex items-center">
                  <FontAwesomeIcon
                    icon={faScissors}
                    fontSize={16}
                    style={{ color: "rgb(24, 33, 48)" }}
                  />
                  <p className="font-extrabold text-[22px] text-[#2B7FFF]">
                    Evently
                  </p>
                </span>
              </Link>
            </div>
            <div className="hidden lg:block md:block ">
              <p className="text-[14px] font-medium pr-4">
                Discover. Book. Celebrate. Find amazing events near you and
                create unforgettable memories.
              </p>
            </div>
          </div>
          {/* quick link */}
          <div className="gap-2 flex flex-col ">
            <h3 className="font-bold text-[16px]">Quick Link</h3>
            <ul className="gap-1.5 flex flex-col">
              <li className="text-[15px] text-gray-500 font-medium">Home</li>
              <li className="text-[15px] text-gray-500 font-medium">Events</li>
              <li className="text-[15px] text-gray-500 font-medium">
                Categories
              </li>
              <li className="text-[15px] text-gray-500 font-medium">
                Create Event
              </li>
            </ul>
          </div>
          <div className="gap-2 flex flex-col">
            <h3 className="font-bold text-[16px]">Company</h3>
            <ul className="gap-1.5 flex flex-col">
              <li className="text-[15px] text-gray-500 font-medium">
                About Us
              </li>
              <li className="text-[15px] text-gray-500 font-medium">
                Contact Us
              </li>
              <li className="text-[15px] text-gray-500 font-medium">
                Terms & Conditions
              </li>
              <li className="text-[15px] text-gray-500 font-medium">
                Privacy Policy
              </li>
            </ul>
          </div>
          <div className="gap-2 flex flex-col">
            <h3 className="font-bold text-[16px]">Support</h3>
            <ul className="gap-1.5 flex flex-col">
              <li className="text-[15px] text-gray-500  font-medium">
                Help Center
              </li>
              <li className="text-[15px] text-gray-500 font-medium">FAQs</li>
              <li className="text-[15px] text-gray-500 font-medium">
                Community
              </li>
              <li className="text-[15px] text-gray-500 font-medium">
                Report an issue
              </li>
            </ul>
          </div>
          <div className="flex gap-3 flex-col w-70">
            <h3 className="font-bold text-[16px]">Follow Us</h3>

            <div className="flex gap-3  ">
              <span className="border justify-center p-2 rounded-full border-gray-300">
                <FaFacebookF />
              </span>
              <span className="border justify-center p-2 rounded-full border-gray-300">
                <FaTwitter />
              </span>
              <span className="border justify-center p-2 rounded-full border-gray-300">
                <FaInstagram />
              </span>
              <span className="border justify-center p-2 rounded-full border-gray-300">
                <FaLinkedinIn />
              </span>
            </div>
            <div>
              <p className="text-[16px] font-bold">Mobile App</p>
              <p className="text-[13px] text-gray-500 font-medium pt-1">
                Coming soon — web demo only for now.
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 pr-2 items-center justify-between flex ">
          <p className=" py-1 text-[13px] font-medium ">
            © 2024 Evently. All rights reserved.
          </p>
          <div className="hidden md:block">
            <img src={img14} alt="" className="h-5 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
