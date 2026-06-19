import {
  Bold,
  CalendarDays,
  Check,
  Clock3,
  IndianRupee,
  Italic,
  Lightbulb,
  Link,
  List,
  ListOrdered,
  MapPin,
  Music,
  Underline,
} from "lucide-react";
import React from "react";
import { CiCalendar } from "react-icons/ci";
import { FaArrowUp } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoTicketOutline } from "react-icons/io5";
import { MdCurrencyRupee } from "react-icons/md";
import { RiDeleteBin5Line, RiEditLine } from "react-icons/ri";
import { SlCloudUpload } from "react-icons/sl";
import SliderMenu from "../Component/SliderMenu";

const AddEvent = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto  flex ">
        <div className="w-[20%]">
          <SliderMenu />
        </div>
        <div className="w-[80%]">
          <div className="w-full px-2 mt-7 ">
            <p className="text-[21px] font-bold">Add New Event</p>
            <p className="text-[14px] font-sm">
              Dashbord <span>{">"}</span> Add Event
            </p>
          </div>

          <div className="mt-4 flex justify-between  w-full">
            <div className="flex  gap-2 items-center border w-[24%] border-gray-300 shadow-sm rounded-2xl p-2 justify-center">
              <span className="items-center flex bg-[#EFEDFE] w-13 h-13  justify-center rounded-full">
                <CiCalendar color="#502FF3" fontSize={25} />
              </span>
              <div className="flex gap-0.4 flex-col">
                <p className="text-[15px] font-medium text-gray-800">
                  Total Events
                </p>
                <p className="text-[22px] font-bold">48</p>
                <p className="flex gap-1 text-[14px]">
                  <span className="text-green-500 flex items-center ">
                    <FaArrowUp />
                    12%
                  </span>
                  <span className="text-gray-500">from last month</span>
                </p>
              </div>
            </div>
            <div className="flex  gap-2 items-center border w-[24%] border-gray-300 shadow-sm rounded-2xl p-2 justify-center">
              <span className="items-center flex bg-[#E0F7E8] w-13 h-13  justify-center rounded-full">
                <IoTicketOutline color="#1DAF51" fontSize={25} />
              </span>
              <div className="flex gap-0.4 flex-col">
                <p className="text-[15px] font-medium text-gray-800">
                  Total Booking
                </p>
                <p className="text-[22px] font-bold">1,234</p>
                <p className="flex gap-1 text-[14px]">
                  <span className="text-green-500 flex items-center ">
                    <FaArrowUp />
                    18%
                  </span>
                  <span className="text-gray-500">from last month</span>
                </p>
              </div>
            </div>
            <div className="flex  gap-2 items-center border w-[24%] border-gray-300 shadow-sm rounded-2xl p-2 justify-center">
              <span className="items-center flex bg-[#FEF2DA] w-13 h-13  justify-center rounded-full">
                <FiUsers color="#FEAE22" fontSize={25} />
              </span>
              <div className="flex gap-0.4 flex-col">
                <p className="text-[15px] font-medium text-gray-800">
                  Total Users
                </p>
                <p className="text-[22px] font-bold">856</p>
                <p className="flex gap-1 text-[14px]">
                  <span className="text-green-500 flex items-center ">
                    <FaArrowUp />
                    8%
                  </span>
                  <span className="text-gray-500">from last month</span>
                </p>
              </div>
            </div>
            <div className="flex  gap-2 items-center border w-[24%] border-gray-300 shadow-sm rounded-2xl p-2 justify-center">
              <span className="items-center flex bg-[#FEE2E8] w-13 h-13  justify-center rounded-full">
                <MdCurrencyRupee color="#F91C4B" fontSize={25} />
              </span>
              <div className="flex gap-0.4 flex-col">
                <p className="text-[15px] font-medium text-gray-800">
                  Total Revenue
                </p>
                <p className="text-[22px] font-bold">2,45,678</p>
                <p className="flex gap-1 text-[14px]">
                  <span className="text-green-500 flex items-center ">
                    <FaArrowUp />
                    15%
                  </span>
                  <span className="text-gray-500">from last month</span>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full mt-8 flex gap-3">
            <div className="w-[55%]">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm w-full">
                <h2 className="text-xl font-semibold mb-6">Event Details</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full gap-3.5">
                  {/* Event Title */}
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Event Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Live Concert - Rock Night"
                      className="text-[13px] w-full mt-2 border border-gray-300 rounded-xl p-2 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Category */}
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Category <span className="text-red-500">*</span>
                    </label>

                    <div className="relative mt-2">
                      <Music
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <select className="w-full border text-[13px] border-gray-300 rounded-xl p-2 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                        <option>Music</option>
                        <option>Sports</option>
                        <option>Business</option>
                      </select>
                    </div>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Date
                    </label>

                    <div className="relative mt-2">
                      <CalendarDays
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        type="date"
                        className="text-[13px] w-full border border-gray-300 rounded-xl p-2 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  {/* Time */}
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Time <span className="text-red-500">*</span>
                    </label>

                    <div className="relative mt-2">
                      <Clock3
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        type="text"
                        placeholder="07:00 PM - 11:00 PM"
                        className="text-[13px] w-full border border-gray-300 rounded-xl p-2 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Location <span className="text-red-500">*</span>
                    </label>

                    <div className="relative mt-2">
                      <MapPin
                        size={18}
                        className=" absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        type="text"
                        placeholder="Mumbai, India"
                        className="text-[13px] w-full border border-gray-300 rounded-xl p-2 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  {/* Price */}
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Price (₹) <span className="text-red-500">*</span>
                    </label>

                    <div className="relative mt-2">
                      <IndianRupee
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        type="number"
                        placeholder="799"
                        className="text-[13px] w-full border border-gray-300 rounded-xl p-2 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  {/* Event image */}
                </div>

                <div className="w-full">
                  <p className="mb-2 gap-1 flex text-sm mt-3">
                    Event Image
                    <span className="text-red-500 text-[14px]">*</span>
                  </p>
                  <div className="flex  justify-between max-w-full md:flex-col lg:flex-row gap-2">
                    <div className="border-dotted bg-gray-50 border-2 border-gray-400 flex-col p-4 items-center justify-center flex rounded-2xl">
                      <SlCloudUpload color="gray" fontSize={25} />
                      <p className="text-[13px] text-center  font-sm">
                        Drag & drop an image here or click{" "}
                        <span className="text-blue-600">to upload</span>
                      </p>
                      <p className="text-gray-400 text-[11px] mt-2">
                        JPG, PNG or WEBP (Max, 5MB)
                      </p>
                    </div>

                    <img
                      src="https://www.arabiantourpackages.com/assets/images/tours/gallery/img-world-dubai-tickets.jpeg"
                      alt=""
                      className="rounded-2xl w-60"
                    />
                  </div>
                </div>
                <div className="w-full border border-gray-200 rounded-xl p-4 bg-white mt-2">
                  <label className="text-sm font-medium text-gray-700">
                    Description <span className="text-red-500">*</span>
                  </label>

                  {/* Toolbar */}
                  <div className="flex items-center gap-4 border border-gray-200 rounded-t-lg mt-2 px-4 py-2 text-gray-500">
                    <Bold
                      size={16}
                      className="cursor-pointer hover:text-black"
                    />
                    <Italic
                      size={16}
                      className="cursor-pointer hover:text-black"
                    />
                    <Underline
                      size={16}
                      className="cursor-pointer hover:text-black"
                    />
                    <span className="w-px h-4 bg-gray-300"></span>
                    <List
                      size={16}
                      className="cursor-pointer hover:text-black"
                    />
                    <ListOrdered
                      size={16}
                      className="cursor-pointer hover:text-black"
                    />
                    <span className="w-px h-4 bg-gray-300"></span>
                    <Link
                      size={16}
                      className="cursor-pointer hover:text-black"
                    />
                  </div>

                  {/* Text Area */}
                  <textarea
                    rows={3}
                    placeholder="Get ready for an electrifying night with top rock bands performing live. Enjoy music, lights, and an unforgettable atmosphere."
                    className="text-[14px] w-full border border-t-0 border-gray-200 rounded-b-lg p-4 resize-none outline-none"
                  />

                  {/* Buttons */}
                  <div className="flex justify-between mt-2">
                    <button className="px-5 py-1.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                      Cancel
                    </button>

                    <button className="px-5 py-1.5 bg-violet-600 text-white rounded-lg flex items-center gap-2 hover:bg-violet-700 transition">
                      <span className="text-lg">+</span>
                      Add Event
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[50%] border border-gray-200 rounded-2xl shadow-md p-4">
              <div className="gap-2 flex flex-col">
                <p className="text-xl font-bold">Live Preview</p>
                <img
                  src="https://www.arabiantourpackages.com/assets/images/tours/gallery/img-world-dubai-tickets.jpeg"
                  alt=""
                  className="rounded-xl relative"
                />
                <div className="absolute right-44 top-73 ">
                  <p className="text-center rounded-xl bg-blue-400 w-18 text-white">
                    Music
                  </p>
                </div>
                <div className="absolute bottom-63 right-[34%]">
                  <p className="flex flex-col w-15 h-13 items-center justify-center rounded-md border bg-white shadow-md border-gray-200 font-medium">
                    <span>24</span> <span>May</span>
                  </p>
                </div>

                <div className=" rounded-xl border border-gray-200 overflow-hidden mt-2 ">
                  {/* Event Details */}
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <h2 className="text-xl font-bold text-gray-900">
                        Live Concert - Rock Night
                      </h2>

                      <p className="text-xl font-bold text-violet-600">₹799</p>
                    </div>

                    <div className="flex items-center gap-6 mt-4 text-gray-500 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>Mumbai, India</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock3 size={16} />
                        <span>07:00 PM - 11:00 PM</span>
                      </div>
                    </div>

                    <p className="mt-4 text-gray-600 leading-6 text-[15px]">
                      Get ready for an electrifying night with top rock bands
                      performing live. Enjoy music, lights, and an unforgettable
                      atmosphere.
                    </p>
                  </div>

                  {/* Quick Tips */}
                  <div className="bg-violet-50 border-t border-violet-100 p-5 rounded-2xl m-3 ">
                    <div className="flex items-center gap-2 mb-4 ">
                      <Lightbulb size={18} className="text-gray-700" />
                      <h3 className="font-semibold text-lg text-gray-900">
                        Quick Tips
                      </h3>
                    </div>

                    <div className="space-y-2">
                      {[
                        "Add high quality images for better engagement",
                        "Provide clear event details and timings",
                        "Set the right price to attract more attendees",
                        "Use appropriate categories for better visibility",
                      ].map((tip, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <Check
                            size={14}
                            className="text-green-500 flex-shrink-0"
                          />
                          <span>{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 border rounded-2xl border-gray-200 shadow-xl mt-3">
            <div className="flex justify-between px-2">
              <p className="font-bold text-xl ">Recent Events</p>
              <p className="font-bold text-[14px]  text-blue-500 flex">
                View All
              </p>
            </div>
            <div className="flex justify-between bg-gray-200 px-2 mt-4 py-1">
              <p className="font-bold py-1 ">Event</p>
              <p className="font-bold py-1">Category</p>
              <p className="font-bold py-1">Date</p>
              <p className="font-bold py-1">Location</p>
              <p className="font-bold py-1">Price</p>
              <p className="font-bold py-1">Status</p>
              <p className="font-bold py-1">Actions</p>
            </div>
            <div>
              <div className="flex items-center w-full  bg-blue-400 px-2 py-3 rounded-md mt-2">
                <div className="flex gap-2 w-[15%] ">
                  <p className="text-[14px] flex items-center font-bold ">
                    Tech Submit 2026
                  </p>
                </div>
                <div className="w-[17%] text-[14px] text-white font-medium ">
                  <p>Conference</p>
                </div>
                <div className="w-[15%] text-[14px] text-white font-medium ">
                  <p>10/06/2026</p>
                </div>
                <div className="w-[17%] text-[14px] text-white font-medium  ">
                  <p>Delhi,India</p>
                </div>
                <div className="w-[14%] text-[14px] text-white font-medium  ">
                  <p>1,299</p>
                </div>
                <div>
                  <p className=" text-[14px] font-medium text-white ">
                    Upcomming
                  </p>
                </div>
                <div className="flex gap-2 w-[15%] justify-end">
                  <span className="border p-2 rounded-xl bg-gray-100 border-gray-100 ">
                    <RiEditLine className="text-[#5543E8]" />
                  </span>
                  <span className="border p-2 rounded-xl bg-gray-100 border-gray-100">
                    <RiDeleteBin5Line className="text-[#F34C53]" />
                  </span>
                  <span className="border p-2 rounded-xl bg-gray-100 border-gray-100">
                    <HiOutlineDotsVertical className="text-black" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEvent;
