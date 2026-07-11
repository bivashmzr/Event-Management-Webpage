import React, { useState } from "react";
import img4 from "../assets/Image/image4.png";
import Navbar from "../Component/Navbar";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { LuClock } from "react-icons/lu";
import Footer from "../Component/Footer";
import { MdOutlineEmail } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { LuNotepadText } from "react-icons/lu";
import { LiaTelegramPlane } from "react-icons/lia";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import img15 from "../assets/Image/image15.png";
import img16 from "../assets/Image/image16.png";
import img17 from "../assets/Image/image17.png";
import img18 from "../assets/Image/image18.png";
import { TiDelete } from "react-icons/ti";
import { BsChatDots } from "react-icons/bs";

function Contactuspage() {
  const [contact, setContact] = useState(false);
  const contactData = [
    {
      title: "Phone",
      main: "+91 98765 43210",
      sub: "Mon - Fri, 9:00 AM - 6:00 PM",
      icon: <IoCallOutline size={28} color="#6150F3" />,
      iconBg: "bg-[#ECEBFF]",
      img: img15,
    },
    {
      title: "Email",
      main: "support@evently.com",
      sub: "We reply within 24 hours",
      icon: <HiOutlineMail size={28} color="#16A34A" />,
      iconBg: "bg-[#E6F8EC]",
      img: img16,
    },

    {
      title: "Working Hours",
      main: "Mon - Fri: 9:00 AM - 6:00 PM",
      sub: "Sat - Sun: 10:00 AM - 4:00 PM",
      icon: <LuClock size={28} color="#2563EB" />,
      iconBg: "bg-[#E7F0FE]",
      img: img17,
    },
    {
      title: "Live Chat",
      main: "Chat with our team",
      sub: "Available 24/7 for support",
      icon: <BsChatDots size={28} color="#06B6D4" />,
      iconBg: "bg-[#E7FAFD]",
      img: img18,
    },
  ];
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto lg:flex lg:mt-15 md:mt-10   py-10 px-5">
        <div className="lg:w-3/5 w-full px-3 ">
          <div className="flex flex-col ">
            <p className=" bg-[#EBEBFE] lg:text-[15px] text-[13px] flex justify-center font-bold text-[#4544E6] w-40 rounded-2xl px-2 py-1">
              We're Here to Help
            </p>

            <div className="py-4 ">
              <h2 className="lg:text-[34px] text-[20px] md:text-[22px] font-bold ">
                Contact Us
              </h2>
              <p className="lg:text-[16px] md:text-[16px] text-[14px]  font-medium text-gray-600 max-w-105 py-1">
                Have questions or need support? Reach out to us and we'll get
                back to you as soon as possible
              </p>
              <img src={img4} alt="" className="w-130 " />
            </div>
          </div>
          <div className="mt-4 flex lg:hidden py-1 lg:py-1.5 bg-blue-100 justify-between pr-1.5 pl-4   items-center mb-5 rounded-full ">
            <p className="lg:text-[23px] text-[16px] font-bold">
              Other Ways to Reach Us
            </p>
            <button
              onClick={() => setContact(!contact)}
              className=" rounded-full bg-blue-600 shadow-md p-2.5 active:scale-90 transition-transform duration-300"
            >
              <LiaTelegramPlane color="white" />
            </button>
          </div>

          {/* three different cards */}
          <div className="grid lg:grid-cols-2 gap-3 mt-5 ">
            {contactData.map((elem, idx) => (
              <div
                key={idx}
                className="border  relative rounded-2xl  lg:max-w-90 py-5 md:py-7 flex lg:items-start flex-col lg:flex-col md:flex-row md:items-center md:gap-10 lg:gap-2 px-4 border-gray-200 shadow-sm"
              >
                <img
                  src={elem.img}
                  alt=""
                  className="absolute -z-50 right-1 top-1/2 -translate-y-1/2 w-55 h-40 object-fit"
                />
                <div
                  className={`border border-gray-200 w-13 h-13 items-center justify-center flex rounded-full ${elem.iconBg}`}
                >
                  {elem.icon}
                </div>
                <div className="pt-4 flex flex-col  gap-1">
                  <p className="text-[17px] font-bold">{elem.title}</p>
                  <p className="text-[15px]   font-medium text-gray-600">
                    {elem.main}
                  </p>
                  <p className="text-[15px] font-medium text-gray-600">
                    {elem.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:block hidden ">
          <div className="w-full  flex justify-center lg:items-end md:items-start">
            <form className="border rounded-2xl border-gray-200 ">
              <div className="p-5">
                <h2 className="text-xl font-bold ">Send Us a Message</h2>
                <div className="grid lg:grid-cols-2 md:grid-cols-1 py-4 gap-3">
                  <div className="flex flex-col gap-2">
                    <p className="font-medium ">Full Name</p>
                    <div className="flex lg:max-w-50 border  p-3 rounded-md gap-2 border-gray-200 items-center ">
                      <FontAwesomeIcon
                        icon={faUser}
                        style={{ color: "rgb(24, 33, 48)" }}
                      />
                      <input
                        type="text"
                        placeholder="Full name"
                        className="outline-0 w-full  "
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-medium ">Email Address</p>
                    <div className="flex border p-3 lg:max-w-45 rounded-md border-gray-200 gap-2 items-center ">
                      <MdOutlineEmail />
                      <input
                        type="text"
                        placeholder="Email Address"
                        className="outline-0 w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p>Subject</p>
                  <div className="border border-gray-200 rounded flex gap-2 items-center  p-3 ">
                    <LuNotepadText />
                    <input
                      type="text"
                      placeholder="what is this regarding?"
                      className="outline-0"
                    />
                  </div>
                </div>

                <div className="py-4 flex flex-col gap-3">
                  <p>Message</p>
                  <textarea
                    name=""
                    id=""
                    placeholder="Type your message here..."
                    className="border border-gray-200 rounded-md p-3 h-30 outline-0"
                  ></textarea>
                </div>

                <div className="bg-[#3A34E1] flex items-center rounded-md justify-center active:scale-95 duration-300 transition mt-2 ">
                  <LiaTelegramPlane color="white" />
                  <button className="text-white  p-3">Send Message</button>
                </div>
                <div className="flex items-center gap-1 justify-center my-1">
                  <IoShieldCheckmarkOutline color="green" />
                  <p className="text-[14px]">
                    We respect your privacy. Your informatin is safe with us.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* overlay card message */}
      </div>

      {contact && (
        <div className="inset-0 bg-black/40  z-50 items-center  justify-center  flex  fixed  ">
          <div className="  w-[85%]  md:w-max rounded-2xl  flex justify-center lg:items-end md:items-start">
            <form className="border bg-white rounded-2xl border-gray-200 ">
              <div className="p-5">
                <div className="flex justify-between ">
                  <h2 className="text-xl font-bold ">Send Us a Message</h2>
                  <button
                    onClick={() => setContact(false)}
                    className="items-center justify-center flex"
                  >
                    <TiDelete size={25} className="text-gray-700" />
                  </button>
                </div>
                <div className="grid lg:grid-cols-2 md:grid-cols-1 py-4 gap-3">
                  <div className="flex flex-col gap-2">
                    <p className="font-medium ">Full Name</p>
                    <div className="flex lg:max-w-50 border  p-3 rounded-md gap-2 border-gray-200 items-center ">
                      <FontAwesomeIcon
                        icon={faUser}
                        style={{ color: "rgb(24, 33, 48)" }}
                      />
                      <input
                        type="text"
                        placeholder="Full name"
                        className="outline-0 w-full  "
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-medium ">Email Address</p>
                    <div className="flex border p-3 lg:max-w-45 rounded-md border-gray-200 gap-2 items-center ">
                      <MdOutlineEmail />
                      <input
                        type="text"
                        placeholder="Email Address"
                        className="outline-0 w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p>Subject</p>
                  <div className="border border-gray-200 rounded flex gap-2 items-center  p-3 ">
                    <LuNotepadText />
                    <input
                      type="text"
                      placeholder="what is this regarding?"
                      className="outline-0"
                    />
                  </div>
                </div>

                <div className="py-4 flex flex-col gap-3">
                  <p>Message</p>
                  <textarea
                    name=""
                    id=""
                    placeholder="Type your message here..."
                    className="border border-gray-200 rounded-md p-3 h-30 outline-0"
                  ></textarea>
                </div>

                <div className="bg-[#3A34E1] flex items-center rounded-md justify-center active:scale-95 duration-300 transition mt-2 ">
                  <LiaTelegramPlane color="white" />
                  <button className="text-white  p-3">Send Message</button>
                </div>
                <div className="flex items-center gap-1 justify-center my-1">
                  <IoShieldCheckmarkOutline color="green" />
                  <p className="text-[14px]">
                    We respect your privacy. Your informatin is safe with us.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Contactuspage;
