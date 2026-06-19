import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Cards from "./Cards";
import { eventsData } from "./EventsDatas";
import { IoLocationOutline, IoSearch } from "react-icons/io5";
import img5 from "../assets/Image/img 5.png";
import {
  BsCalendar2Week,
  BsCalendar4Event,
  BsPersonWorkspace,
} from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

import { CiFilter } from "react-icons/ci";
import Footer from "../Component/Footer.jsx";
import Email from "./Email.jsx";
import RangeSlider from "./RangeSlider.jsx";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { LuCalendarSearch, LuPencilRuler } from "react-icons/lu";

const SearchLocalStorage = () => {
  const [IsSortopen, setIsSortopen] = useState(false);
  const [Sorttext, setSorttext] = useState("");
  const [priceRange, setPriceRange] = useState([0, 5000]);

  const [searchData, setSearchData] = useState({
    search: "",
    selectedLocation: "",
    selectedDate: "",
  });
  const [searchFilter, setSearchFilter] = useState([]);
  const filteredPriceEvents = searchFilter.filter((event) => {
    return event.price >= priceRange[0] && event.price <= priceRange[1];
  });

  // Get localStorage data
  useEffect(() => {
    const storedData = localStorage.getItem("eventSearchData");

    if (storedData) {
      const parsedData = JSON.parse(storedData);

      setSearchData({
        ...parsedData,
        selectedDate: parsedData.selectedDate
          ? parsedData.selectedDate.split("T")[0]
          : "",
      });
    }
  }, []);

  // Handle input change
  const handleChnage = (e) => {
    const { name, value } = e.target;

    setSearchData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Filter Events
  useEffect(() => {
    const filtered = eventsData.filter((event) => {
      const matchSearch =
        !searchData.search ||
        event.title.toLowerCase().includes(searchData.search.toLowerCase());

      const matchLocation =
        !searchData.selectedLocation ||
        event.location
          .toLowerCase()
          .includes(searchData.selectedLocation.toLowerCase());

      const matchDate =
        !searchData.selectedDate || event.date === searchData.selectedDate;

      return matchSearch && matchLocation && matchDate;
    });

    setSearchFilter(filtered);
  }, [searchData]);

  return (
    <>
      <Navbar />
      {/* ---------------- Main Container ---------------- */}
      <div className="max-w-7xl mx-auto px-5 pt-10 ">
        {/* Search Bar Results */}
        <div className="flex justify-between">
          <div className="searchbar px-4 flex flex-col gap-1 justify-center">
            {/* ---------------- Heading ---------------- */}
            <h1 className="text-3xl font-extrabold">Search Results</h1>
            <p className="text-[15px] text-gray-700 font-medium">
              Discover events that match your interests
            </p>
          </div>
          <div>
            <img src={img5} alt="" className="w-50" />
          </div>
        </div>

        {/* ---------------- Search Bar ---------------- */}

        <div className="bg-white rounded-2xl  grid lg:grid-cols-3 gap-4 px-4">
          {/* Search Input */}

          <div className="border flex items-center px-3 rounded-xl border-gray-300">
            <IoSearch fontSize={18} color="#6A7282" />

            <input
              type="text"
              name="search"
              value={searchData.search}
              placeholder="Search events..."
              onChange={handleChnage}
              className="  p-3 rounded-xl outline-none py-3  "
            />
          </div>

          {/* Location Input */}
          <div className="border flex items-center px-3 rounded-xl border-gray-300">
            <IoLocationOutline fontSize={18} color="#6A7282" />
            <input
              type="text"
              name="selectedLocation"
              value={searchData.selectedLocation}
              placeholder="Location"
              onChange={handleChnage}
              className=" p-3 rounded-xl outline-none  py-3  "
            />
          </div>

          {/* Date Input */}
          <div className="border flex items-center px-3 rounded-xl border-gray-300">
            <LuCalendarSearch fontSize={18} color="#6A7282" />

            <input
              type="date"
              name="selectedDate"
              value={searchData.selectedDate}
              onChange={handleChnage}
              className=" p-3 rounded-xl outline-none  py-3 "
            />
          </div>
        </div>

        <div className="flex py-8 w-full px-5 gap-6">
          <div className="w-[100%] flex justify-end flex-col">
            <p className="py-3 text-[19px] font-bold">Categories</p>
            <div className="flex gap-3">
              <div className="items-center flex text-[20px] gap-2 border justify-center w-[10%] rounded-2xl border-gray-200 active:scale-95 hover:border-[#2B7FFF] duration-300 transition-all transform ease-out shadow-md py-2">
                <span className="border border-gray-50 rounded-full p-2  bg-[#F3F1FC]">
                  <RiBarChartHorizontalLine fontSize={18} />
                </span>
                <p className="text-[17px] font-bold hover:text-[#2B7FFF]">
                  All
                </p>
              </div>
              <div className="items-center flex text-[20px] gap-2 border justify-center w-[13%] rounded-2xl border-gray-200 active:scale-95 hover:border-[#2B7FFF] duration-300 transition-all transform ease-out shadow-md py-2">
                <span className="border border-gray-50 rounded-full p-2 bg-[#F0E6FE]">
                  <IoMusicalNotesOutline fontSize={18} color="#925DF1" />
                </span>
                <p className="text-[17px] font-bold hover:text-[#2B7FFF]">
                  Music
                </p>
              </div>
              <div className="items-center flex text-[20px] gap-2 border justify-center w-[16%] rounded-2xl border-gray-200 active:scale-95 hover:border-[#2B7FFF] duration-300 transition-all transform ease-out shadow-md py-2">
                <span className="border border-gray-50 rounded-full p-2  bg-[#FEF1E8]">
                  <BsPersonWorkspace fontSize={18} color="#FC8537" />
                </span>
                <p className="text-[17px] font-bold hover:text-[#2B7FFF]">
                  Workshop
                </p>
              </div>
              <div className="items-center flex text-[20px] gap-2 border justify-center w-[16%] rounded-2xl border-gray-200 active:scale-95 hover:border-[#2B7FFF] duration-300 transition-all transform ease-out shadow-md py-2 ">
                <span className="border border-gray-50 rounded-full p-2  bg-[#EAF9ED]">
                  <BsCalendar2Week fontSize={18} color="#62B669" />
                </span>
                <p className="text-[17px] font-bold hover:text-[#2B7FFF]">
                  Buisness
                </p>
              </div>
              <div className="items-center flex text-[20px] gap-2 border justify-center w-[17%] rounded-2xl border-gray-200 active:scale-95 hover:border-[#2B7FFF] duration-300 transition-all transform ease-out shadow-md py-2 ">
                <span className="border border-gray-50 rounded-full p-2  bg-[#E5F1FE]">
                  <GrTechnology fontSize={18} color="#5497FA" />
                </span>
                <p className="text-[17px] font-bold hover:text-[#2B7FFF]">
                  Technology
                </p>
              </div>
              <div className="items-center flex text-[20px] gap-2 border justify-center w-[14%] rounded-2xl border-gray-200 active:scale-95 hover:border-[#2B7FFF] duration-300 transition-all transform ease-out shadow-md py-2">
                <span className="border border-gray-50 rounded-full p-2  bg-[#FEE5F2]">
                  <MdOutlineSportsSoccer fontSize={18} color="#EF6EAE" />
                </span>
                <p className="text-[17px] font-bold hover:text-[#2B7FFF]">
                  Sports
                </p>
              </div>
              <div className="items-center flex text-[20px] gap-2 border px-3 w-[14%] rounded-2xl border-gray-200 active:scale-95 hover:border-[#2B7FFF] duration-300 transition-all transform ease-out shadow-md py-2 ">
                <p className="text-[17px] font-bold hover:text-[#2B7FFF]">
                  More
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-8">
          <div className="flex w-full justify-between">
            <div className=" py-2 flex gap-6">
              <div className="w-[40%]">
                <RangeSlider value={priceRange} setValue={setPriceRange} />
              </div>
              <div className="flex w-[50%] gap-3  items-center ">
                <input
                  type="number"
                  value={priceRange[0] === 0 ? "" : priceRange[0]}
                  onChange={(e) =>
                    setPriceRange([Number(e.target.value), priceRange[1]])
                  }
                  className="max-w-[40%] border border-gray-300 rounded-md p-3 text-[15px] font-bold"
                  placeholder="₹ 0"
                />
                <p className="font-bold text-[15px]">to</p>
                <input
                  type="text "
                  value={priceRange[1] === 5000 ? "" : priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], Number(e.target.value)])
                  }
                  className="max-w-[40%] border border-gray-300 rounded-md p-3 text-[15px] font-bold"
                  placeholder="₹ 5000+"
                />
              </div>
            </div>

            <div className="flex">
              <div className="flex items-center ">
                {/* --------------Sorting most relevent dropdown menu------------------  */}
                <div className="border border-gray-300 flex p-2 gap-3 rounded-xl items-center  relative w-70 px-3">
                  <p className="font-md text-gray-500 text-[16px]">Sort By:</p>

                  <div className="w-45">
                    <div
                      onClick={() => setIsSortopen(!IsSortopen)}
                      className="flex items-center justify-between  cursor-pointer"
                    >
                      <p>{Sorttext || "Most Relevent"}</p>
                      {IsSortopen ? (
                        <RiArrowDropUpLine size={30} />
                      ) : (
                        <RiArrowDropDownLine size={30} />
                      )}
                    </div>
                    {IsSortopen && (
                      <div className="flex flex-col absolute overflow-y-scroll bg-white top-13  z-1 w-49 gap-1 left-20  border rounded-md border-gray-300 h-40 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                        <p
                          onClick={() => {
                            setSorttext("Most Relevent");
                            setIsSortopen(false);
                          }}
                          className={`text-gray-500 cursor-pointer  p-1 duration-300 transition-all  px-3 pt-2 ${
                            Sorttext == "Most Relevent"
                              ? "bg-indigo-50 text-indigo-600 font-medium"
                              : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                          }`}
                        >
                          Most Relevent
                        </p>
                        <p
                          onClick={() => {
                            setSorttext("Upcoming Soon");
                            setIsSortopen(false);
                          }}
                          className={` cursor-pointer  p-1 duration-300 transition-all  px-3 pt-2 ${
                            Sorttext == "Upcoming Soon"
                              ? "bg-indigo-50 text-indigo-600 font-medium"
                              : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                          }`}
                        >
                          upcoming Soon
                        </p>
                        <p
                          onClick={() => {
                            setSorttext("Most Popular");
                            setIsSortopen(false);
                          }}
                          className={` cursor-pointer  p-1 duration-300 transition-all  px-3 pt-2 ${
                            Sorttext === "Most Popular"
                              ? "bg-indigo-50 text-indigo-600 font-medium"
                              : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                          }`}
                        >
                          Most Popular
                        </p>
                        <p
                          onClick={() => {
                            setSorttext("Newest First");
                            setIsSortopen(false);
                          }}
                          className={` cursor-pointer  p-1 duration-300 transition-all  px-3 pt-2 ${
                            Sorttext === "Newest First"
                              ? "bg-indigo-50 text-indigo-600 font-medium"
                              : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                          }`}
                        >
                          Newest First
                        </p>
                        <p
                          onClick={() => {
                            setSorttext("Price: Low to High");
                            setIsSortopen(false);
                          }}
                          className={` cursor-pointer  p-1 duration-300 transition-all  px-3 pt-2 ${
                            Sorttext === "Price: Low to High"
                              ? "bg-indigo-50 text-indigo-600 font-medium"
                              : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                          }`}
                        >
                          Price: Low to High
                        </p>
                        <p
                          onClick={() => {
                            setSorttext("Price: High to Low");
                            setIsSortopen(false);
                          }}
                          className={` cursor-pointer  p-1 duration-300 transition-all  px-3 pt-2 ${
                            Sorttext === "Price: High to Low"
                              ? "bg-indigo-50 text-indigo-600 font-medium"
                              : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                          }`}
                        >
                          Price: High to Low
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ---------------- Events Count ---------------- */}
        <h2 className="text-xl font-semibold mb-6 px-4">
          {filteredPriceEvents.length} Events Found
        </h2>
        <div className="w-[100%]">
          {/* ---------------- Cards Grid ---------------- */}

          <Cards events={filteredPriceEvents} limit={8} />
        </div>
      </div>
      <Email />
      <Footer />
    </>
  );
};

export default SearchLocalStorage;
