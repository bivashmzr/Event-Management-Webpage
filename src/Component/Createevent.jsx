import React from "react";
import image2 from "../assets/Image/image2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsersRays } from "@fortawesome/free-solid-svg-icons";
import { MdVerifiedUser } from "react-icons/md";
import { TfiStatsUp } from "react-icons/tfi";
import { BsLightningChargeFill } from "react-icons/bs";

const Createevent = () => {
  const EventData = [
    {
      icon: <FontAwesomeIcon icon={faUsersRays} />,
      title: "Large Audience",
      caption: "Get more visibility and reach a larger audience",
      bg: "bg-[#DDD3FA]",
      border: "border-l-3 border-[#7F22FE] ",
      color: "text-violet-600 rounded-full w-max p-1 h-max",
    },
    {
      icon: <MdVerifiedUser />,
      title: "Experienced Organizers",
      caption: "Browse events from active community organizers.",
      bg: "bg-[#CEF2E4] ",
      border: "border-l-3 border-[#00A63E] ",
      color: "text-green-600  rounded-full w-max p-2 h-max",
    },
    {
      icon: <TfiStatsUp />,
      title: "Grow Your Brand",
      caption: "Reach thousands of people effortlessly.",
      bg: "bg-[#D1E0FC]",
      border: "border-l-3 border-[#155DFC]",
      color: "text-blue-600  rounded-full w-max p-2 h-max",
    },
    {
      icon: <BsLightningChargeFill />,
      title: "Easy & Fast",
      caption: "Create events within minutes.",
      bg: "bg-orange-100",
      border: "border-l-3 border-[#FF6900]",
      color: "text-orange-500  rounded-full w-max p-2 h-max",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 py-2 ">
      <div className="bg-[#4C2BD4] px-13 lg:py-3 md:py-5 py-7 rounded-2xl lg:flex md:flex">
        <div className="lg:w-[50%] md:w-[50%] w-full ">
          <img src={image2} alt="" />
        </div>
        <div className="lg:w-[40%] md:w-[40%] w-full flex flex-col  justify-center">
          <h2 className="font-bold text-[20px] text-white ">
            Create Your Own Event
          </h2>
          <p className="text-white text-[15px] lg:text-[17px] md:text-[15px] py-5 lg:w-90 md:w-70 w-54">
            Share yout ideas, bring people together and make your event a huge
            success
          </p>
          <button className="bg-white text-black px-4 py-3 rounded-md text-[13px] font-bold w-30">
            Create Event
          </button>
        </div>
      </div>

      {/* -----------Section 2----------- */}
      <div className="flex flex-col py-6">
        <h3 className="py-4 font-bold text-[22px]">Why Choose Us</h3>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 ">
          {EventData.map((event, idx) => (
            <div
              key={idx}
              className={`bg-white gap-4  rounded-xl flex  p-6 shadow-sm ${event.border}   hover:-translate-y-2 hover:shadow-xl transition-all duration-300`}
            >
              <div className={`text-2xl   ${event.bg} ${event.color}`}>
                {event.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-[16px]">{event.title}</h3>
                <p className="font-medium text-gray-500 text-[14px]">
                  {event.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Createevent;
