import React, { useState } from "react";
import SliderMenu from "../Component/SliderMenu";

import {
  Search,
  Filter,
  Plus,
  Bell,
  Calendar,
  Clock,
  CheckCircle2,
  XCircle,
  Download,
  ChevronDown,
  Eye,
  Edit2,
  Trash2,
  MoreVertical,
  MapPin,
} from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("All Events");

  const stats = [
    {
      title: "Total Events",
      value: "48",
      trend: "+ 12%",
      trendUp: true,
      icon: Calendar,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
    {
      title: "Upcoming Events",
      value: "32",
      trend: "+ 8%",
      trendUp: true,
      icon: Clock,
      color: "text-orange-500",
      bg: "bg-orange-50",
    },
    {
      title: "Published Events",
      value: "42",
      trend: "+ 15%",
      trendUp: true,
      icon: CheckCircle2,
      color: "text-emerald-500",
      bg: "bg-emerald-50",
    },
    {
      title: "Cancelled Events",
      value: "6",
      trend: "- 3%",
      trendUp: false,
      icon: XCircle,
      color: "text-red-500",
      bg: "bg-red-50",
    },
  ];

  const tabs = [
    { name: "All Events", count: 48 },
    { name: "Upcoming", count: 32 },
    { name: "Ongoing", count: 5 },
    { name: "Completed", count: 11 },
    { name: "Cancelled", count: 6 },
  ];

  const events = [
    {
      id: "EVT-001",
      title: "Live Concert - Rock Night",
      category: "Music",
      date: "24 May 2026",
      time: "07:00 PM - 11:00 PM",
      location: "Mumbai, India",
      price: "₹799",
      sold: 320,
      total: 500,
      status: "Upcoming",
      image:
        "https://images.unsplash.com/photo-1540039155732-68ee23e15b51?auto=format&fit=crop&q=80&w=100&h=60",
    },
    {
      id: "EVT-002",
      title: "React Developer Workshop",
      category: "Workshop",
      date: "30 May 2026",
      time: "10:00 AM - 04:00 PM",
      location: "Bangalore, India",
      price: "₹499",
      sold: 45,
      total: 100,
      status: "Upcoming",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=100&h=60",
    },
    {
      id: "EVT-003",
      title: "Tech Summit 2026",
      category: "Conference",
      date: "10 Jun 2026",
      time: "09:00 AM - 06:00 PM",
      location: "Delhi, India",
      price: "₹1,299",
      sold: 620,
      total: 800,
      status: "Upcoming",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=100&h=60",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto  flex ">
      <div className="w-[20%]">
        <SliderMenu />
      </div>
      <div className="w-[80%]">
        <div className="min-h-screen  bg-gray-50/50 font-sans text-gray-900 ">
          <div className=" space-y-8">
            {/* Header Section */}
            <header className=" mx-auto mt-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">
                  All Events
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                  Dashboard <span className="mx-1">&rsaquo;</span> All Events
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search events..."
                    className="pl-9 pr-4 py-2 w-64 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                  />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                  <Filter className="h-4 w-4" /> Filter
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-600/20">
                  <Plus className="h-4 w-4" /> Add Event
                </button>
                <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 border-2 border-gray-50"></span>
                </button>
              </div>
            </header>

            {/* Stats Grid */}
            <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-start  gap-4"
                >
                  <div className={`p-3 rounded-lg   ${stat.bg}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div>
                    <p className="text-[14px] text-gray-500 font-medium">
                      {stat.title}
                    </p>
                    <h3 className="text-[20px] font-bold mt-1">{stat.value}</h3>
                    <p
                      className={`text-xs mt-1 font-medium ${stat.trendUp ? "text-emerald-600" : "text-red-500"}`}
                    >
                      {stat.trendUp ? "↑" : "↓"} {stat.trend}{" "}
                      <span className="text-gray-400 font-normal text-[12px]">
                        from last month
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Content Area */}
            <div className="bg-white mx-auto rounded-xl border border-gray-200 shadow-sm overflow-hidden wibket:[scroller-hidden]">
              {/* Tabs & Actions */}
              <div className="border-b border-gray-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex space-x-6 overflow-x-auto pb-1 hide-scrollbar">
                  {tabs.map((tab) => (
                    <button
                      key={tab.name}
                      onClick={() => setActiveTab(tab.name)}
                      className={`flex items-center gap-2 pb-4 -mb-4 text-sm font-medium transition-colors whitespace-nowrap border-b-2 ${
                        activeTab === tab.name
                          ? "border-indigo-600 text-indigo-600"
                          : "border-transparent text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {tab.name}
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs ${
                          activeTab === tab.name
                            ? "bg-indigo-100 text-indigo-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {tab.count}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-sm hover:bg-gray-50 transition-colors text-gray-600">
                    <Download className="h-4 w-4" /> Export
                  </button>
                  <div className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-sm hover:bg-gray-50 transition-colors cursor-pointer text-gray-600">
                    Sort by:{" "}
                    <span className="font-medium text-gray-900">Newest</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Data Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead className="bg-gray-50/50 text-gray-500 border-b border-gray-100">
                    <tr>
                      <th className="px-6 py-4 font-medium">Event</th>
                      <th className="px-6 py-4 font-medium">Category</th>
                      <th className="px-6 py-4 font-medium">Date & Time</th>
                      <th className="px-6 py-4 font-medium">Location</th>
                      <th className="px-6 py-4 font-medium">Price</th>
                      <th className="px-6 py-4 font-medium">Tickets Sold</th>
                      <th className="px-6 py-4 font-medium">Status</th>
                      <th className="px-6 py-4 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {events.map((event) => (
                      <tr
                        key={event.id}
                        className="hover:bg-gray-50/50 transition-colors"
                      >
                        <td className="px-6 py-4 flex items-center gap-4">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="h-12 w-20 rounded-lg object-cover shadow-sm"
                          />
                          <div>
                            <p className="font-semibold text-gray-900">
                              {event.title}
                            </p>
                            <p className="text-xs text-gray-500 mt-0.5">
                              ID: {event.id}
                            </p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex px-2.5 py-1 rounded-md text-xs font-medium ${
                              event.category === "Music"
                                ? "bg-purple-100 text-purple-700"
                                : event.category === "Workshop"
                                  ? "bg-orange-100 text-orange-700"
                                  : "bg-blue-100 text-blue-700"
                            }`}
                          >
                            {event.category}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-gray-900 font-medium">
                            {event.date}
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5">
                            {event.time}
                          </p>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1.5 text-gray-600">
                            <MapPin className="h-3.5 w-3.5" />
                            <span>{event.location}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-medium text-gray-900">
                          {event.price}
                        </td>
                        <td className="px-6 py-4 w-48">
                          <div className="flex justify-between text-xs mb-1.5">
                            <span className="font-medium text-gray-900">
                              {event.sold}
                            </span>
                            <span className="text-gray-500">
                              / {event.total}
                            </span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-1.5">
                            <div
                              className="bg-indigo-600 h-1.5 rounded-full"
                              style={{
                                width: `${(event.sold / event.total) * 100}%`,
                              }}
                            ></div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-700 text-xs font-medium">
                            {event.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <button className="p-1.5 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors">
                              <Eye className="h-4 w-4" />
                            </button>
                            <button className="p-1.5 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors">
                              <Edit2 className="h-4 w-4" />
                            </button>
                            <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors">
                              <Trash2 className="h-4 w-4" />
                            </button>
                            <button className="p-1.5 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors ml-1">
                              <MoreVertical className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
