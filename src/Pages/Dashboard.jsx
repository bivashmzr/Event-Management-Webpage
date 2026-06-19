import React from "react";
import StatCard from "../Component/StatCard.jsx";
import EventOverview from "../Component/EventOverview.jsx";
import BookingSummary from "../Component/BookingSummary.jsx";

import { FiCalendar, FiUsers } from "react-icons/fi";
import { MdCurrencyRupee } from "react-icons/md";
import { LuTicket } from "react-icons/lu";
import SliderMenu from "../Component/SliderMenu";

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto flex ">
      <div className="w-[19%]">
        <SliderMenu />
      </div>
      <div className="w-[81%]">
        <div className="p-6 bg-slate-50 min-h-screen font-sans">
          {/* Header (Optional based on your layout) */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-gray-500 text-sm">
              Welcome back, John! Here's what's happening today.
            </p>
          </div>

          {/* Top Stat Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {[
              {
                title: "Total Events",
                value: "48",
                trend: "12%",
                icon: <FiCalendar size={22} />,
                color: "text-indigo-600",
                bg: "bg-indigo-100",
                chartStroke: "stroke-indigo-500",
              },
              {
                title: "Total Bookings",
                value: "1,234",
                trend: "18%",
                icon: <LuTicket size={22} />,
                color: "text-green-600",
                bg: "bg-green-100",
                chartStroke: "stroke-green-500",
              },
              {
                title: "Total Users",
                value: "856",
                trend: "8%",
                icon: <FiUsers size={22} />,
                color: "text-orange-500",
                bg: "bg-orange-100",
                chartStroke: "stroke-orange-500",
              },
              {
                title: "Total Revenue",
                value: "₹2,45,678",
                trend: "15%",
                icon: <MdCurrencyRupee size={22} />,
                color: "text-pink-600",
                bg: "bg-pink-100",
                chartStroke: "stroke-pink-500",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-5 shadow-sm flex flex-col justify-between"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${stat.bg} ${stat.color}`}
                  >
                    {stat.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">
                      {stat.title}
                    </h4>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-3">
                  <span className="text-green-500 font-semibold">
                    ↑ {stat.trend}
                  </span>{" "}
                  from last month
                </p>
                {/* Simple SVG Sparkline Placeholder */}
                <svg
                  className={`w-full h-8 fill-none ${stat.chartStroke}`}
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,15 Q10,5 20,10 T40,15 T60,5 T80,10 T100,2"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            ))}
          </div>

          {/* Main Middle Grid */}
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Event Overview */}
            <div className="lg:col-span-6">
              <EventOverview />
            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-3">
              <BookingSummary />
            </div>

            {/* Upcoming Events */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-5 shadow-sm h-full">
                <div className="flex justify-between mb-4">
                  <h2 className="font-bold text-lg">Upcoming Events</h2>
                  <span className="text-indigo-600 text-sm cursor-pointer font-medium">
                    View All
                  </span>
                </div>

                {[
                  {
                    title: "Live Concert - Rock Night",
                    date: "24 May 2025",
                    location: "Mumbai, India",
                    badge: "In 2 Days",
                  },
                  {
                    title: "React Developer Workshop",
                    date: "30 May 2025",
                    location: "Bangalore, India",
                    badge: "In 8 Days",
                  },
                  {
                    title: "Tech Summit 2026",
                    date: "10 June 2025",
                    location: "Delhi, India",
                    badge: "In 19 Days",
                  },
                  {
                    title: "City Marathon 2026",
                    date: "15 June 2025",
                    location: "Chennai, India",
                    badge: "In 24 Days",
                  },
                ].map((event, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-lg flex-shrink-0"></div>{" "}
                      {/* Image Placeholder */}
                      <div>
                        <h4 className="font-semibold text-sm line-clamp-1">
                          {event.title}
                        </h4>
                        <p className="text-[11px] text-gray-500">
                          {event.date} • {event.location}
                        </p>
                      </div>
                    </div>
                    <span className="bg-indigo-50 text-indigo-600 text-[10px] font-semibold px-2 py-1 rounded-md whitespace-nowrap ml-2">
                      {event.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid lg:grid-cols-12 gap-6 mt-6">
            {/* Top Performing Events */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-3xl p-5 shadow-sm h-full">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-bold">Top Performing Events</h2>
                  <span className="text-indigo-600 text-sm cursor-pointer font-medium">
                    View All
                  </span>
                </div>

                {[
                  {
                    title: "Live Concert - Rock Night",
                    date: "24 May 2025",
                    revenue: "₹89,450",
                  },
                  {
                    title: "Tech Summit 2026",
                    date: "10 June 2025",
                    revenue: "₹67,890",
                  },
                  {
                    title: "Food Festival 2026",
                    date: "20 June 2025",
                    revenue: "₹45,230",
                  },
                  {
                    title: "AI & Future Tech Conference",
                    date: "05 July 2025",
                    revenue: "₹38,760",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center text-xs font-bold shrink-0">
                        {index + 1}
                      </span>
                      <div className="w-10 h-10 bg-gray-200 rounded-lg shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-sm">{item.title}</h4>
                        <p className="text-xs text-gray-500">{item.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-sm block">
                        {item.revenue}
                      </span>
                      <span className="text-[10px] text-gray-400">Revenue</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Bookings */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-5 shadow-sm h-full">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-bold">Recent Bookings</h2>
                  <span className="text-indigo-600 text-sm cursor-pointer font-medium">
                    View All
                  </span>
                </div>

                {[
                  {
                    name: "Rahul Sharma",
                    event: "Live Concert - Rock Night",
                    ticket: "2 Tickets",
                    amount: "₹1,598",
                    status: "Confirmed",
                  },
                  {
                    name: "Priya Verma",
                    event: "React Developer Workshop",
                    ticket: "1 Ticket",
                    amount: "₹499",
                    status: "Confirmed",
                  },
                  {
                    name: "Amit Kumar",
                    event: "Tech Summit 2026",
                    ticket: "3 Tickets",
                    amount: "₹3,897",
                    status: "Pending",
                  },
                  {
                    name: "Sneha Patel",
                    event: "City Marathon 2026",
                    ticket: "1 Ticket",
                    amount: "₹299",
                    status: "Confirmed",
                  },
                ].map((booking, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b last:border-0 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full shrink-0"></div>{" "}
                      {/* Avatar Placeholder */}
                      <div>
                        <h4 className="font-semibold text-sm">
                          {booking.name}
                        </h4>
                        <p className="text-[11px] text-gray-500">
                          {booking.event}
                        </p>
                      </div>
                    </div>

                    <div className="text-right flex items-center gap-6">
                      <div className="text-left hidden sm:block">
                        <p className="text-sm font-semibold">
                          {booking.ticket}
                        </p>
                        <p className="text-[11px] text-gray-500">
                          {booking.amount}
                        </p>
                      </div>
                      <span
                        className={`text-[11px] font-medium px-3 py-1 rounded-full w-20 text-center ${
                          booking.status === "Confirmed"
                            ? "bg-green-50 text-green-600"
                            : "bg-orange-50 text-orange-600"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats - Updated to 2x2 Grid */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-5 shadow-sm h-full">
                <h2 className="font-bold mb-4">Quick Stats</h2>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 rounded-2xl p-4 flex flex-col justify-center">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-2">
                      <MdCurrencyRupee size={18} />
                    </div>
                    <h4 className="text-[11px] text-gray-500 font-medium">
                      Avg. Ticket Price
                    </h4>
                    <p className="text-lg font-bold text-gray-800">₹764</p>
                    <p className="text-[10px] text-green-500 mt-1">
                      ↑ 6%{" "}
                      <span className="text-gray-400">from last month</span>
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-4 flex flex-col justify-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-2">
                      <FiUsers size={18} />
                    </div>
                    <h4 className="text-[11px] text-gray-500 font-medium">
                      Total Attendance
                    </h4>
                    <p className="text-lg font-bold text-gray-800">5,678</p>
                    <p className="text-[10px] text-green-500 mt-1">
                      ↑ 14%{" "}
                      <span className="text-gray-400">from last month</span>
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-4 flex flex-col justify-center">
                    <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-2">
                      <FiCalendar size={18} />
                    </div>
                    <h4 className="text-[11px] text-gray-500 font-medium">
                      Events This Month
                    </h4>
                    <p className="text-lg font-bold text-gray-800">16</p>
                    <p className="text-[10px] text-green-500 mt-1">
                      ↑ 10%{" "}
                      <span className="text-gray-400">from last month</span>
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-4 flex flex-col justify-center">
                    <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-2">
                      <FiUsers size={18} />
                    </div>
                    <h4 className="text-[11px] text-gray-500 font-medium">
                      New Users
                    </h4>
                    <p className="text-lg font-bold text-gray-800">128</p>
                    <p className="text-[10px] text-green-500 mt-1">
                      ↑ 9%{" "}
                      <span className="text-gray-400">from last month</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
