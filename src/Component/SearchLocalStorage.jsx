import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Cards from "./Cards";
import { eventsData } from "./EventsDatas";
import { IoLocationOutline, IoSearch } from "react-icons/io5";
import img5 from "../assets/Image/image5.png";
import {
  BsCalendar2Week,
  BsCalendar4Event,
  BsPersonWorkspace,
} from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { CategoryFilterData } from "../Component/CateData";

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
  const mobileCategories = CategoryFilterData.slice(1, 7);

  return (
    <>
      <Navbar />
      {/* ---------------- Main Container ---------------- */}
      <div className="max-w-7xl mx-auto lg:px-5 px-2 lg:mt-20 md:mt-22 mt-23 ">
        {/* Search Bar Results */}
        <div className="flex justify-between">
          <div className="searchbar mb-5  px-4 flex flex-col gap-1 justify-center">
            {/* ---------------- Heading ---------------- */}
            <h1 className="lg:text-3xl text-xl font-extrabold">
              Search Results
            </h1>
            <p className="lg:text-[15px] md:text-[18px] text-[15px] text-gray-700 font-medium">
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
              className="  p-3 rounded-xl outline-none py-2.5 lg:py-3 md:py-3  "
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
              className=" p-3 rounded-xl outline-none  py-2.5 lg:py-3 md:py-3  "
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
              className=" p-3 rounded-xl outline-none  py-2.5 lg:py-3 md:py-3 "
            />
          </div>
        </div>

        <div className="flex lg:py-2 md:py-1 w-full lg:px-2 px-0 gap-6">
          <div className="w-[100%] flex justify-end flex-col">
            <p className="py-3 px-4 text-[19px] font-bold">Categories</p>
            {/* icons Different */}
            <div className="block lg:hidden mb-5">
              <div className="flex justify-between md:justify-center md:gap-10 w-full md:mt-1 mt-2  px-4">
                {mobileCategories.map((value) => (
                  <div className=" flex flex-col gap-2 items-center">
                    <div
                      className={`shadow-md border w-max p-4 active:scale-90 transition-transform duration-300 rounded-full ${value.iconcolor}`}
                    >
                      {value.icon}
                    </div>
                    <span className="text-[13px] font-semibold">
                      {value.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:px-8 px-5">
          <div className="lg:flex-row flex flex-col w-full justify-between">
            <div className=" py-2 flex md:gap-10 md:flex-row lg:flex-row flex-col  lg:gap-6 lg:w-full">
              <div className="lg:w-[50%] md:w-[50%] ">
                <RangeSlider value={priceRange} setValue={setPriceRange} />
              </div>
              {/* Price value 0 to 5000+ */}
              <div className="flex lg:w-[50%] md:w-[50%]  gap-3  items-center ">
                <input
                  type="number"
                  value={priceRange[0] === 0 ? "" : priceRange[0]}
                  onChange={(e) =>
                    setPriceRange([Number(e.target.value), priceRange[1]])
                  }
                  className="lg:w-full md:w-full w-[45%] border border-gray-300 rounded-md p-3 text-[15px] font-bold"
                  placeholder="₹ 0"
                />
                <p className="font-bold text-[15px]">to</p>
                <input
                  type="text "
                  value={priceRange[1] === 5000 ? "" : priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], Number(e.target.value)])
                  }
                  className="lg:w-full md:w-full w-[45%]  border border-gray-300 rounded-md p-3 text-[15px] font-bold"
                  placeholder="₹ 5000+"
                />
              </div>
            </div>
          </div>
        </div>
        {/* ---------------- Events Count ---------------- */}
        <div className="flex items-center mb-2 sm:mt-3 md:mt-2   justify-between pr-6 pl-2">
          <h2 className="lg:text-xl text-[17px] font-semibold justify-center  px-4">
            {filteredPriceEvents.length} Events Found
          </h2>

          {/* Most relevent section */}
          <div className="hidden md:block lg:block">
            <div className="flex  items-center w-max">
              {/* --------------Sorting most relevent dropdown menu------------------  */}
              <div className="border border-gray-300 justify-center flex lg:p-1  md:p-1  lg:gap-3 md:gap-3 gap-2 rounded-xl items-center  relative lg:w-70 md:w-full w-48 lg:px-3 md:px-3 px-1.5">
                <p className="font-md text-gray-500 lg:text-[16px] text-[13px]">
                  Sort By:
                </p>

                <div className="lg:w-45 md:w-45 w-29">
                  <div
                    onClick={() => setIsSortopen(!IsSortopen)}
                    className="flex items-center justify-between lg:text-[15px] text-[13px] cursor-pointer"
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
                        className={`text-gray-500 cursor-pointer   p-1 duration-300 transition-all  px-3 pt-2 ${
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
