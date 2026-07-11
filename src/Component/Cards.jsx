import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import LazyCard from "./LazyCard";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const Cards = ({ events = [], limit }) => {
  const [favorites, setFavorites] = useState([]);
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };
  // ---------------- Limit Events ----------------

  const displayedEvents = limit ? events.slice(0, limit) : events;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="pt-1 pb-4 px-1">
        <div className="grid gap-6 px-4 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 grid-cols-[repeat(auto-fit,minmax(280px,1fr))] w-full">
          {displayedEvents.map((event, idx) => {
            // ---------------- Date Logic ----------------

            const eventDate = new Date(event.date);

            const day = eventDate.getDate();

            const month = eventDate.toLocaleString("en-US", {
              month: "short",
            });

            return (
              <LazyCard key={event.id || event.title}>
                <Link to={`/event/${event.id}`} key={idx}>
                  <div className="relative rounded-2xl bg-white border border-gray-300 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    {/* ---------------- Category ---------------- */}

                    <div className="absolute flex items-center justify-between w-[89%] top-4 left-4">
                      <span className="inline-flex items-center justify-center min-w-23 h-6 px-3 rounded-full bg-[#2B7FFF] text-white  text-sm  font-semibold">
                        {event.imgtext}
                      </span>

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();

                          toggleFavorite(event.id);
                        }}
                        className="cursor-pointer"
                      >
                        {favorites.includes(event.id) ? (
                          <FaHeart size={22} className="text-red-500" />
                        ) : (
                          <CiHeart size={25} className="text-white" />
                        )}
                      </button>
                    </div>

                    {/* ---------------- Image ---------------- */}

                    <img
                      className="rounded-t-xl h-44 w-full object-cover"
                      loading="lazy"
                      src={event.img}
                      alt={event.title}
                    />

                    {/* ---------------- Date ---------------- */}

                    <div className="bg-white absolute bottom-24 left-4 rounded shadow-md w-14 text-center flex flex-col items-center text-[13px] font-medium py-1">
                      <span className="text-[14px] font-bold">{day}</span>

                      <span className="text-[11px] uppercase">{month}</span>
                    </div>

                    {/* ---------------- Content ---------------- */}

                    <div className="py-5 px-4 pb-5">
                      <h3 className="font-bold">{event.title}</h3>

                      <span className="flex items-center gap-1">
                        <IoLocationOutline size={12} />

                        <p className="text-gray-500 font-medium text-[13px]">
                          {event.location}
                        </p>
                      </span>
                      <div className="flex gap-1">
                        <span className=" text-medium line-through text-gray-400">
                          ₹599
                        </span>
                        <p className="text-medium text-[#2B7FFF] font-bold">
                          ₹{event.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </LazyCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Cards);
