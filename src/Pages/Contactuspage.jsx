import React from "react";
import img4 from "../assets/Image/img 4.png";
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

function Contactuspage() {
  const contactData = [
    {
      title: "Phone",
      main: "+91 98765 43210",
      sub: "Mon - Fri, 9:00 AM - 6:00 PM",
      icon: <IoCallOutline size={28} color="#6150F3" />,
      iconBg: "bg-[#ECEBFF]",
    },
    {
      title: "Email",
      main: "support@evently.com",
      sub: "We reply within 24 hours",
      icon: <HiOutlineMail size={28} color="#16A34A" />,
      iconBg: "bg-[#E6F8EC]",
    },

    {
      title: "Working Hours",
      main: "Mon - Fri: 9:00 AM - 6:00 PM",
      sub: "Sat - Sun: 10:00 AM - 4:00 PM",
      icon: <LuClock size={28} color="#2563EB" />,
      iconBg: "bg-[#E7F0FE]",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto flex py-10 px-5">
        <div className="w-3/5 px-3 ">
          <div className="flex flex-col border-b border-gray-200">
            <p className=" bg-[#EBEBFE] text-[15px] flex justify-center font-bold text-[#4544E6] w-40 rounded-2xl px-3">
              We're Here to Help
            </p>

            <div className="py-4 ">
              <h2 className="text-[34px] font-extrabold ">Contact Us</h2>
              <p className="text-[16px] font-medium text-gray-600 max-w-105 py-1">
                Have questions or need support? Reach out to us and we'll get
                back to you as soon as possible
              </p>
              <img src={img4} alt="" className="w-130 " />
            </div>
          </div>
          <div className="pt-4">
            <p className="text-[23px] font-bold pb-5">Other Ways to Reach Us</p>

            <div className="grid lg:grid-cols-3  gap-3 ">
              {contactData.map((elem, idx) => (
                <div
                  key={idx}
                  className="border rounded-2xl  lg:max-w-70 py-5 flex flex-col px-4 border-gray-200 shadow-sm"
                >
                  <div
                    className={`border border-gray-200 w-13 h-13 items-center justify-center flex rounded-full ${elem.iconBg}`}
                  >
                    {elem.icon}
                  </div>
                  <div className="pt-4 flex flex-col gap-1">
                    <p className="text-[17px] font-bold">{elem.title}</p>
                    <p className="text-[15px] font-medium text-gray-600">
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
        </div>
        <div className="w-2/5  flex justify-center lg:items-end md:items-start">
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
      <Footer />
    </>
  );
}

export default Contactuspage;
