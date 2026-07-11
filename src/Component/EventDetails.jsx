import { Link, useParams } from "react-router-dom";
import { eventsData } from "./EventsDatas";
import { IoMdArrowRoundBack } from "react-icons/io";
import { BsCalendar4Week } from "react-icons/bs";
import { BsCalendar4Event } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { BsCalendar2Event } from "react-icons/bs";
import { BiCalendarStar } from "react-icons/bi";
import { MdOutlineDoneOutline } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { FaRegClock, FaRegStar } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { RiVipCrownLine } from "react-icons/ri";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import { RiBankLine } from "react-icons/ri";
import { LuLockKeyhole } from "react-icons/lu";
import { BiErrorCircle } from "react-icons/bi";
import { GiSmartphone } from "react-icons/gi";
import { MdOutlineMail } from "react-icons/md";
import { SlPhone } from "react-icons/sl";
import { IoCardOutline } from "react-icons/io5";
import { LiaWalletSolid } from "react-icons/lia";

import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaLink,
  FaTwitter,
} from "react-icons/fa6";
import { MdVerified } from "react-icons/md";

import { GoArrowLeft, GoShieldCheck } from "react-icons/go";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Email from "./Email";
import { LuCalendarCheck } from "react-icons/lu";
import { useState } from "react";

const EventDetails = () => {
  const [OpenBooking, setOpenBooking] = useState(false);
  const [AddingGeneral, setAddingGeneral] = useState(0);
  const [Addingvip, setAddingvip] = useState(0);

  const { id } = useParams();
  const event = eventsData[id];

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto lg:pt-15 md:pt-20 pt-17">
        <div className=" grid lg:grid-cols-[2fr_1fr]  md:grid-cols-1 grid-cols-1 gap-3 px-4">
          <div className=" lg:py-10 ">
            {/* image container */}
            <div className="">
              <Link to="/">
                <div className=" text-[#58A5FC] border mb-4  items-center bg-[#EFF6FF] gap-1 justify-center flex text-[14px] px-2 rounded-2xl  w-max mt-5 mx-2">
                  <GoArrowLeft />
                  <p>Back to Home</p>
                </div>
              </Link>
              <img
                src={event.img}
                alt={event.title}
                className="max-w-full w-full h-60 lg:h-100 object-cover rounded-xl"
              />
            </div>
            <div className="grid  gap-6  ">
              <div className="py-5 max-w-4xl  ">
                <ul className="flex lg:gap-7 md:gap-6 gap-2 lg:px-2 md:px-2  ">
                  <li className="border-[#2B7FFF] text-blue-400 py-2 transition duration-300 hover:border-b font-bold">
                    About
                  </li>
                  <li className="border-[#2B7FFF] text-blue-400 py-2 transition duration-300 hover:border-b font-bold">
                    Heighlights
                  </li>
                  <li className="border-[#2B7FFF] text-blue-400 py-2 transition duration-300 hover:border-b font-bold">
                    Schedule
                  </li>
                  <li className="border-[#2B7FFF] text-blue-400 py-2 transition duration-300 hover:border-b font-bold">
                    Venue
                  </li>
                  <li className="border-[#2B7FFF] text-blue-400 py-2 transition duration-300 hover:border-b font-bold">
                    FAQ
                  </li>
                </ul>
                <h3 className="text-[18px] pt-5 pb-1 font-bold">
                  About This Event
                </h3>
                <p className="lg:text-[15px] md:text-[15px] text-[14px] max-w-full  font-medium text-gray-500">
                  Experience the ultimate rock night with amazing bands,
                  hogh-energy perfrmances and a crowd like no other. Food,
                  drinks, and merchandise available!
                </p>
                <div className="grid  w-full lg:gap-17 gap-3 md:gap-14  lg:pr-10 md:pr-10 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 pt-5 pb-3 h-20">
                  <div className="flex md:flex-row lg:flex-row gap-9  lg:justify-between md:justify-between">
                    <div className="flex items-center gap-3 ">
                      <span>
                        <BsCalendar4Week size={26} color="#2B7FFF" />
                      </span>
                      <div>
                        <h3 className="font-bold text-[14px]">24 May, 2024</h3>
                        <p className="font-medium text-[13px] text-gray-500">
                          Saturday
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>
                        <BsCalendar4Event size={26} color="#2B7FFF" />
                      </span>
                      <div>
                        <h3 className="font-bold text-[14px]">
                          7:00 PM - 11:00 PM
                        </h3>
                        <p className="font-medium text-[13px] text-gray-500">
                          Add to Calender
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" flex md:flex-row lg:flex-row gap-12 lg:justify-between md:justify-between">
                    <div className="flex items-center gap-3">
                      <span>
                        <IoLocationOutline size={26} color="#2B7FFF" />
                      </span>
                      <div>
                        <h3 className="font-bold text-[14px]">Delhi, India</h3>
                        <p className="font-medium text-[13px] text-gray-500">
                          view on Map
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>
                        <BsCalendar2Event size={26} color="#2B7FFF" />
                      </span>
                      <div>
                        <h3 className="font-bold text-[14px]">500+</h3>
                        <p className="font-medium text-[13px] text-gray-500">
                          People Interested
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-[18px] lg:pt-5 pt-13 md:pt-10 pb-4 font-bold">
                  Event Highlights
                </h3>
                <div className="w-full">
                  <ul className="grid md:grid-cols-5 w-full grid-cols-2 lg:grid-cols-5 pr-3.5   gap-3 md:mx-3">
                    <li className="bg-blue-100 py-2 items-center justify-center flex rounded-2xl px-3 text-[14px] font-bold text-[#4B49DE]">
                      Live Music
                    </li>
                    <li className="bg-blue-100 py-2 items-center justify-center flex rounded-2xl px-3 text-[14px] font-bold text-[#4B49DE]">
                      Top Rock Bands
                    </li>
                    <li className="bg-blue-100 py-2 items-center justify-center flex rounded-2xl px-3 text-[14px] font-bold text-[#4B49DE]">
                      Merchandise
                    </li>
                    <li className="bg-blue-100 py-2 items-center justify-center flex rounded-2xl px-3 text-[14px] font-bold text-[#4B49DE]">
                      Food & Drinks
                    </li>
                    <li className="bg-blue-100 py-2 items-center justify-center flex rounded-2xl px-3 text-[14px] font-bold text-[#4B49DE]">
                      After Party
                    </li>
                  </ul>
                </div>

                <div className="py-2">
                  <h3 className="text-[18px] pt-5 pb-1 font-bold">
                    About the Organizer
                  </h3>
                  <p className="lg:text-[15px] md:text-[14px] text-[14px] pr-6 font-medium text-gray-500">
                    Evently Team organizes some of the most exciting and
                    memorable events across India. From live concerts to tech
                    conferences, we bring people together for unforgettable
                    experiences. Join us and be part of moments that turn into
                    lasting memories.
                  </p>
                </div>

                <div className="py-4 mt-6 px-4 border border-gray-200 w-80 lg:w-full md:w-full rounded-2xl">
                  <p className="text-[16px] font-bold">Venue</p>
                  <div className="rounded-xl overflow-hidden   shadow-sm my-3">
                    <iframe
                      src="https://www.google.com/maps?q=Mumbai&output=embed"
                      width="100%"
                      height="170"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </div>

                  <div className="pl-1">
                    <h3 className="text-[16px] font-bold py-2">
                      Dome Arena, Mumbai
                    </h3>
                    <p className="text-[15px] font-medium text-black">
                      NSCI, SVP Stadium, Worli,
                    </p>
                    <p className="text-[15px] font-medium text-gray-500">
                      Mumbai, Maharastra 400018
                    </p>
                    <button className="py-3 flex font-bold items-center  text-[#4B49DE] gap-2">
                      Get Direction <FaArrowRight fontSize={13} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CheckOut Tickets Book Now */}
          <div className=" lg:pt-12 pt-0">
            <div className="lg:w-full md:w-full lg:flex-col lg:justify-start  md:flex-col flex-col  max-w-full justify-center flex py-10">
              <div className=" py-3 border border-gray-300 rounded-2xl px-3 gap-2 flex flex-col">
                <h3 className="text-[18px] pt-5 pb-1 font-bold">
                  Get Your Tickets
                </h3>
                <div className="flex gap-4">
                  <p className="font-bold text-[15px]">Early Bird</p>
                  <span className=" px-2 bg-blue-100 text-[#4B49DE] font-bold rounded-2xl text-[13px] items-center flex">
                    <p>20% OFF</p>
                  </span>
                </div>
                <div className="flex items-center gap-4 py-2">
                  <h3 className="font-bold text-[19px] text-[#4B49DE]">₹799</h3>
                  <span className="text-gray-400 font-medium line-through">
                    ₹999
                  </span>
                </div>
                <p className="text-[14px] font-medium text-gray-600">
                  Offer ends in:
                </p>

                <div className="flex gap-5">
                  <div className="bg-blue-50 w-16 p-2 rounded-md text-center ">
                    <p className="font-bold">02</p>
                    <span className="text-[13px]">Days</span>
                  </div>
                  <div className="bg-blue-50 w-16 p-2 rounded-md text-center ">
                    <p className="font-bold">14</p>
                    <span className="text-[13px]">Hours</span>
                  </div>
                  <div className="bg-blue-50 w-16 p-2 rounded-md text-center ">
                    <p className="font-bold">45</p>
                    <span className="text-[13px]">Mins</span>
                  </div>
                  <div className="bg-blue-50 w-16 p-2 rounded-md text-center ">
                    <p className="font-bold">30</p>
                    <span className="text-[13px]">Secs</span>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="text-[15px] pt-3">Quality</p>
                  <input
                    type="number"
                    className="outline-0 rounded border w-20 h-10 border-gray-400  pl-3"
                  />
                  <button
                    onClick={() => {
                      setOpenBooking(!OpenBooking);
                    }}
                    className="mt-4 bg-[#4B49DE] text-white font-bold p-2 rounded-xl active:scale-95 shadow-sm transition-transform duration-300 "
                  >
                    Book Now
                  </button>
                  <span className="flex items-center gap-1 justify-center text-[12px] py-1">
                    <GoShieldCheck />
                    <p>100% Secure Checkout</p>
                  </span>

                  {/* button onclick modal */}
                  {OpenBooking && (
                    <div className="fixed flex  lg:pt-19 z-50  justify-center  items-center inset-0 bg-black/40 ">
                      <div className="bg-white overflow-y-auto hide-scrollbar   relative lg:w-[60%] w-[90%] md:w-[90%] h-[90%] rounded-2xl border-gray-300  border md:h-[90%] lg:h-auto gap-3 p-5">
                        <div>
                          <div
                            className="absolute right-5"
                            onClick={() => {
                              setOpenBooking(!OpenBooking);
                            }}
                          >
                            <IoIosCloseCircleOutline
                              fontSize={25}
                              color="#6A7282"
                            />
                          </div>
                          <h2 className="text-[13px] ">Book your Tickets</h2>
                          <p className=" text-black font-bold text-[20px] mb-3">
                            {event.title}
                          </p>
                          <div className="grid md:grid-cols-3 grid-cols-2 gap-2 ">
                            <div className="flex items-center gap-1 text-gray-500">
                              <LuCalendarCheck fontSize={14} />
                              <p className="text-[12px] ">{event.date}</p>
                            </div>
                            <div className="flex items-center gap-1 text-gray-500">
                              <FaRegClock fontSize={12} />
                              <p className="text-[12px]">{event.time}</p>
                            </div>
                            <div className="flex items-center gap-1 text-gray-500">
                              <IoLocationOutline fontSize={14} />
                              <p className="text-[12px]">{event.location}</p>
                            </div>
                          </div>
                        </div>

                        <div className="    flex lg:flex-row  flex-col gap-5">
                          <div className="bg-white  ">
                            <div className="py-3 ">
                              <img
                                src={event.img}
                                alt=""
                                className="rounded-xl"
                              />
                            </div>
                            <div className="flex flex-col gap-2">
                              <p className="text-[16px] font-bold">
                                Order Summary
                              </p>
                              <div className="flex justify-between">
                                <p className="text-[12px] font-bold text-gray-500 ">
                                  Event
                                </p>
                                <p className="text-[12px] font-bold ">
                                  {event.title}
                                </p>
                              </div>
                              <div className="flex justify-between">
                                <p className="text-[12px] font-bold text-gray-500 ">
                                  Date
                                </p>
                                <p className="text-[12px] font-bold ">
                                  24 May, 2024
                                </p>
                              </div>
                              <div className="flex justify-between">
                                <p className="text-[12px] font-bold text-gray-500 ">
                                  Time
                                </p>
                                <p className="text-[12px] font-bold ">
                                  7:00 PM - 11:00 PM
                                </p>
                              </div>
                              <div className="flex justify-between">
                                <p className="text-[12px] font-bold text-gray-500 ">
                                  Location
                                </p>
                                <p className="text-[12px] font-bold ">
                                  Delhi, India
                                </p>
                              </div>
                              <div className="flex justify-between">
                                <p className="text-[12px] font-bold text-gray-500 ">
                                  Tickets
                                </p>
                                <p className="text-[12px] font-bold ">
                                  2x General Admission
                                </p>
                              </div>
                            </div>
                            <div className="border-b py-2 mb-2 mx-1 border-gray-200" />

                            <div className="flex flex-col gap-1">
                              <div className="flex justify-between">
                                <p className="text-[12px] font-bold text-gray-500">
                                  Price (2x ₹799)
                                </p>
                                <p className="text-[12px] font-bold ">
                                  {" "}
                                  ₹1,598
                                </p>
                              </div>
                              <div className="flex justify-between">
                                <p className="flex items-center gap-1 text-[12px] font-bold text-gray-500">
                                  Booking Fee
                                  <BiErrorCircle />
                                </p>
                                <p className="text-[12px] font-bold "> ₹49</p>
                              </div>
                              <div className="flex justify-between">
                                <p className="flex items-center gap-1 text-[12px] font-bold text-gray-500">
                                  Platform Fee
                                  <BiErrorCircle />
                                </p>
                                <p className="text-[12px] font-bold "> ₹35</p>
                              </div>
                            </div>

                            <div className="border-b pt-3 mb-3 mx-1 border-gray-200" />
                            <div className="flex justify-between ">
                              <p className="text-[15px] font-bold">
                                Total Payable
                              </p>
                              <p className="text-[17px] font-bold text-[#5B42E7]">
                                ₹1,682
                              </p>
                            </div>
                            <div className="border-b pt-3 mb-2 mx-1 border-gray-200" />

                            <div className="border mt-2  p-2 border-gray-300 rounded-xl flex items-center gap-2">
                              <div className="border border-gray-300 flex items-center justify-center w-9 h-9  rounded-full ">
                                <BiSupport />
                              </div>
                              <div>
                                <p className="font-bold text-[14px]">
                                  Need Help?
                                </p>
                                <p className="text-[#442DE6] text-[12px] font-bold">
                                  Contact Support
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className=" bg-white  lg:w-[68%] md:w-full w-full  ">
                            {/* Ticket section */}
                            <div className="border mt-3 w-full border-gray-300 p-4 rounded-2xl">
                              <h3 className="font-bold">1. Select Tickets</h3>
                              <div>
                                <div className="flex mt-3 gap-3 border-2 px-4 hover:shadow-sm border-gray-100 p-2 rounded-xl items-center w-full ">
                                  <input type="radio" />
                                  <div className="hidden lg:block md:block">
                                    <span className="border border-gray-100 rounded-xl  bg-[#F4F2FC] w-10 h-10    items-center justify-center flex ">
                                      <RiVipCrownLine color="#5043E0" />
                                    </span>
                                  </div>
                                  <div className="flex lg:flex-row md:flex-row flex-col justify-between w-full">
                                    <div className=" leading-4">
                                      <p className="font-bold text-[14px] text-gray-800">
                                        General Admission
                                      </p>
                                      <p className="text-[11px]  text-gray-500 font-medium">
                                        Access to main event area
                                      </p>
                                    </div>
                                    <div className="flex items-center ">
                                      <div className="flex justify-end  items-center gap-3">
                                        <p className="font-bold text-[#5B42E7]">
                                          ₹799
                                        </p>

                                        <button
                                          onClick={() => {
                                            setAddingGeneral(AddingGeneral - 1);
                                          }}
                                          className="border border-gray-300 rounded-full w-8 h-8 justify-center items-center flex active:hover:bg-gray-100 duratrion-300 transition"
                                        >
                                          -
                                        </button>
                                        <p>{AddingGeneral}</p>
                                        <button
                                          onClick={() => {
                                            setAddingGeneral(AddingGeneral + 1);
                                          }}
                                          className="border border-gray-300 rounded-full w-8 h-8 justify-center items-center flex active:hover:bg-gray-100 duratrion-300 transition"
                                        >
                                          +
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex mt-3 gap-3 border-2 hover:shadow-sm border-gray-100 px-4 justify-between p-2 rounded-xl items-center w-full ">
                                  <input type="radio" />
                                  <div className="hidden md:block lg:block">
                                    <span className="border border-gray-100 rounded-xl  bg-[#F4F2FC] w-10 h-10    items-center justify-center flex ">
                                      <RiVipCrownLine
                                        color="#5043E0"
                                        className="text-[12px] lg:text-[15px] md:text-[15px]"
                                      />
                                    </span>
                                  </div>
                                  <div className="flex lg:flex-row md:flex-row flex-col justify-between w-full">
                                    <div className=" leading-4">
                                      <p className="font-bold text-[14px] text-gray-800">
                                        VIP Acsses
                                      </p>
                                      <p className="text-[11px] text-gray-500 font-medium">
                                        Early entery,premium viewing & lounge
                                        access
                                      </p>
                                    </div>
                                    <div className="flex items-center">
                                      <div className="flex justify-end items-center gap-3">
                                        <p className="font-bold text-[#5B42E7]">
                                          ₹1499
                                        </p>

                                        <button
                                          onClick={() => {
                                            setAddingvip(Addingvip - 1);
                                          }}
                                          className="border border-gray-300 rounded-full w-8 h-8 justify-center items-center flex active:hover:bg-gray-100 duratrion-300 transition"
                                        >
                                          -
                                        </button>
                                        <p>{Addingvip}</p>
                                        <button
                                          onClick={() => {
                                            setAddingvip(Addingvip + 1);
                                          }}
                                          className="border border-gray-300 rounded-full w-8 h-8 justify-center items-center flex active:hover:bg-gray-100 duratrion-300 transition"
                                        >
                                          +
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-3 pt-5 pb-4 items-center">
                                <h3 className="font-bold">2. Your Details</h3>
                                <p className="flex items-center gap-1 text-[14px]">
                                  <GoShieldCheck color="#5043E0" />
                                  Your information is secure
                                </p>
                              </div>
                              <div className="flex lg:flex-row md:flex-row flex-col    gap-3 px-2 w-full justify-between">
                                <div className="flex flex-col  gap-1">
                                  <p className="font-semibold text-[13px]">
                                    Full Name
                                  </p>
                                  <div className="flex items-center gap-1 border lg:w-40 md:w-40 w-full px-2 p-3 border-gray-300 rounded-md">
                                    <LuUser />
                                    <input
                                      type="text"
                                      placeholder="Enter Name"
                                      className="text-[12px] outline-0 w-full"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                  <p className="font-semibold text-[13px]">
                                    Phone Number
                                  </p>
                                  <div className="flex items-center gap-1 border lg:w-40 md:w-40 w-full px-2 p-3 border-gray-300 rounded-md">
                                    <SlPhone />
                                    <input
                                      type="number"
                                      placeholder="Enter Number"
                                      className="text-[12px] outline-0 w-full"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                  <p className="font-semibold text-[13px]">
                                    Email
                                  </p>
                                  <div className="flex items-center gap-1 border lg:w-40 md:w-40 w-full px-2 p-3 border-gray-300 rounded-md">
                                    <MdOutlineMail />
                                    <input
                                      type="text"
                                      placeholder="Enter Email"
                                      className="text-[12px] outline-0 w-full"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div>
                                <h3 className="font-bold py-3">
                                  3. Payment Details
                                </h3>
                                <div className="flex lg:flex-row md:flex-row gap-2 flex-col  ">
                                  <div className="flex border-gray-300 items-center gap-1 border w-40 justify-center p-3 rounded-xl hover:border-[#8576F1] hover:bg-[#F1F0FA] hover:text-[#8576F1]">
                                    <IoCardOutline />
                                    <p className="text-[13px]">UPI/Cards</p>
                                  </div>
                                  <div className="flex border-gray-300 items-center gap-1 border w-40 justify-center p-3 rounded-xl hover:border-[#8576F1] hover:bg-[#F1F0FA] hover:text-[#8576F1]">
                                    <RiBankLine />

                                    <p className="text-[13px]">Net Banking</p>
                                  </div>
                                  <div className="flex border-gray-300 items-center gap-1 border w-40 justify-center p-3 rounded-xl hover:border-[#8576F1] hover:bg-[#F1F0FA] hover:text-[#8576F1]">
                                    <LiaWalletSolid />
                                    <p className="text-[13px]">Wallets</p>
                                  </div>
                                </div>

                                <div className="py-3 border-gray-200 border rounded-xl px-3 mt-3 bg-gray-100 flex items-center gap-3">
                                  <div className="border border-gray-300 bg-white p-1.5 items-center flex justify-center rounded-full">
                                    <GoShieldCheck
                                      color="green"
                                      className="text-[10px] md:text-[14px] lg:text-[14px]"
                                    />
                                  </div>
                                  <div className="flex lg:flex-row md:flex-row flex-col lg:items-center md:items-center justify-between w-full lg:px-3 md:px-3">
                                    <p className="text-gray-500 text-[12px] lg:text-[13px]">
                                      Demo checkout — payment integration coming
                                      soon. No card details are collected here.
                                    </p>
                                  </div>
                                </div>

                                <div className="border border-gray-300 rounded-xl w-full p-3 px-4 flex lg:flex-row md:flex-row flex-col justify-between mt-3">
                                  <div className="flex gap-2 items-center ">
                                    <div className="bg-[#E9E5FB] w-9 h-9  items-center flex justify-center rounded-full">
                                      <GoShieldCheck className="text-[#5843E7] text-[17px]" />
                                    </div>
                                    <div>
                                      <p className="md:text-[16px] text-[13px] font-bold">
                                        Demo Booking
                                      </p>
                                      <p className="font-medium md-text[13px] text-[10px]">
                                        Preview only — you will not be charged
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex flex-col pt-4 md:pt-0 gap-1">
                                    <button
                                      type="button"
                                      className="bg-blue-700 p-2 flex gap-2 rounded-md items-center text-white w-full justify-center "
                                    >
                                      <LuLockKeyhole />
                                      Reserve (Demo)
                                    </button>
                                    <p className="text-[10px] text-center font-medium text-gray-500">
                                      You won't be charged until final Steps
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="border border-gray-300 rounded-2xl px-5 shadow py-3 my-4 gap-4 flex flex-col ">
                <p>Share this event</p>
                <div className="flex gap-6  ">
                  <span className="border justify-center p-2 rounded-full border-gray-300 text-[#063387]">
                    <FaFacebookF />
                  </span>
                  <span className="border justify-center p-2 rounded-full border-gray-300 text-[#1994F4]">
                    <FaTwitter />
                  </span>
                  <span className="border justify-center p-2 rounded-full border-gray-300 text-[#37C47C]">
                    <FaInstagram />
                  </span>
                  <span className="border justify-center p-2 rounded-full border-gray-300 text-[#5A6075]">
                    <FaLink />
                  </span>
                </div>
              </div>

              <div className="border border-gray-300 rounded-2xl m-2 px-5 shadow py-3 flex gap-3">
                <span className="bg-[#4441DA] text-white border flex items-center rounded-full my-8 p-2  ">
                  <BiCalendarStar fontSize={45} />
                </span>
                <div className="flex flex-col gap-1">
                  <p className="font-medium text-[13px] text-gray-500">
                    Organised By
                  </p>
                  <span className="flex gap-1 items-center">
                    <h3 className="font-bold text-[15px]">Evently Team </h3>
                    <MdVerified color="#4441DA" />
                  </span>

                  <span className="flex items-center gap-1">
                    <FaRegStar color="#F8B744" fontSize={14} />
                    <p className="text-[13px] text-gray-500">
                      4.8 (230 events)
                    </p>
                  </span>
                  <button className=" my-2 py-1 w-20 border rounded-md border-[#4441DA] text-[#4441DA]">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Email />
      <Footer />
    </>
  );
};

export default EventDetails;
