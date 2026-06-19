import React from "react";
import SliderMenu from "../Component/SliderMenu";

import {
  Search,
  Bell,
  Plus,
  Users,
  ShieldCheck,
  UserCog,
  UserMinus,
  Filter,
  Download,
  LayoutGrid,
  MoreVertical,
  ChevronDown,
} from "lucide-react";

export default function UsersDashboard() {
  // Mock Data
  const stats = [
    {
      title: "Total Users",
      count: "856",
      trend: "↑ 8%",
      isPositive: true,
      isNeutral: false,
      icon: Users,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
    {
      title: "Active Users",
      count: "662",
      trend: "↑ 12%",
      isPositive: true,
      isNeutral: false,
      icon: ShieldCheck,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      title: "Organizers",
      count: "128",
      trend: "↑ 5%",
      isPositive: true,
      isNeutral: false,
      icon: UserCog,
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
    {
      title: "Admins",
      count: "18",
      trend: "↑ 0%",
      isPositive: false,
      isNeutral: true,
      icon: ShieldCheck,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Inactive Users",
      count: "66",
      trend: "↓ 10%",
      isPositive: false,
      isNeutral: false,
      icon: UserMinus,
      color: "text-rose-600",
      bg: "bg-rose-50",
    },
  ];

  const users = [
    {
      name: "Rahul Sharma",
      email: "rahul.sharma@example.com",
      role: "Organizer",
      events: 12,
      bookings: 48,
      status: "Active",
      joined: "24 May 2025",
      initials: "RS",
      color: "bg-blue-100 text-blue-700",
    },
    {
      name: "Priya Verma",
      email: "priya.verma@example.com",
      role: "Organizer",
      events: 8,
      bookings: 24,
      status: "Active",
      joined: "22 May 2025",
      initials: "PV",
      color: "bg-pink-100 text-pink-700",
    },
    {
      name: "Amit Kumar",
      email: "amit.kumar@example.com",
      role: "Organizer",
      events: 15,
      bookings: 60,
      status: "Active",
      joined: "20 May 2025",
      initials: "AK",
      color: "bg-emerald-100 text-emerald-700",
    },
    {
      name: "Sneha Patel",
      email: "sneha.patel@example.com",
      role: "Admin",
      events: 20,
      bookings: 102,
      status: "Active",
      joined: "18 May 2025",
      initials: "SP",
      color: "bg-purple-100 text-purple-700",
    },
    {
      name: "Vikram Singh",
      email: "vikram.singh@example.com",
      role: "Organizer",
      events: 6,
      bookings: 18,
      status: "Inactive",
      joined: "15 May 2025",
      initials: "VS",
      color: "bg-amber-100 text-amber-700",
    },
    {
      name: "Neha Gupta",
      email: "neha.gupta@example.com",
      role: "Admin",
      events: 18,
      bookings: 78,
      status: "Active",
      joined: "12 May 2025",
      initials: "NG",
      color: "bg-indigo-100 text-indigo-700",
    },
  ];

  const activities = [
    {
      name: "Priya Verma",
      action: "Created an event",
      time: "2 mins ago",
      initials: "PV",
      color: "bg-pink-100 text-pink-700",
    },
    {
      name: "Amit Kumar",
      action: "Updated event details",
      time: "15 mins ago",
      initials: "AK",
      color: "bg-emerald-100 text-emerald-700",
    },
    {
      name: "Rahul Sharma",
      action: "Added new team member",
      time: "1 hour ago",
      initials: "RS",
      color: "bg-blue-100 text-blue-700",
    },
    {
      name: "Sneha Patel",
      action: "Cancelled an event",
      time: "2 hours ago",
      initials: "SP",
      color: "bg-purple-100 text-purple-700",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto  flex ">
      <div className="w-[20%]">
        <SliderMenu />
      </div>
      <div className="w-[80%]">
        <div className="min-h-screen bg-slate-50/50 p-6 font-sans text-slate-800">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                Users
              </h1>
              <p className="text-sm text-slate-500 mt-1 font-medium">
                Dashboard <span className="mx-2 text-slate-300">/</span> Users
              </p>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search users by name, email or role..."
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200/80 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
                />
              </div>
              <button className="relative p-2.5 bg-white border border-slate-200/80 rounded-xl hover:bg-slate-50 transition-colors shadow-sm">
                <Bell size={18} className="text-slate-600" />
                <span className="absolute top-2 right-2.5 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white"></span>
              </button>
              <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2.5 rounded-xl font-medium text-sm hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-600/20 whitespace-nowrap">
                <Plus size={18} /> Add New User
              </button>
            </div>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 mb-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${stat.bg} ${stat.color}`}
                >
                  <stat.icon size={22} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    {stat.title}
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900 leading-none mb-1.5">
                    {stat.count}
                  </h3>
                  <p
                    className={`text-xs font-medium ${stat.isNeutral ? "text-slate-400" : stat.isPositive ? "text-emerald-500" : "text-rose-500"}`}
                  >
                    {stat.trend}{" "}
                    <span className="text-slate-400 font-normal">
                      from last month
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Section (Table) */}
            <div className="lg:col-span-8 xl:col-span-9 bg-white rounded-2xl border border-slate-200/60 shadow-sm flex flex-col">
              {/* Tabs */}
              <div className="flex px-6 pt-2 border-b border-slate-100">
                {["All Users", "Organizers", "Admins", "Inactive"].map(
                  (tab, i) => (
                    <button
                      key={tab}
                      className={`px-4 py-4 text-sm font-semibold border-b-2 transition-colors ${i === 0 ? "border-indigo-600 text-indigo-600" : "border-transparent text-slate-500 hover:text-slate-800"}`}
                    >
                      {tab}
                    </button>
                  ),
                )}
              </div>

              {/* Table Toolbar */}
              <div className="p-5 flex flex-wrap justify-between items-center gap-4">
                <div className="relative w-full sm:w-64">
                  <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    size={16}
                  />
                  <input
                    type="text"
                    placeholder="Search users..."
                    className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">
                    All Roles{" "}
                    <ChevronDown size={14} className="text-slate-400" />
                  </button>
                  <button className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">
                    All Status{" "}
                    <ChevronDown size={14} className="text-slate-400" />
                  </button>
                  <button className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">
                    <Filter size={14} className="text-slate-400" /> Filters
                  </button>
                  <div className="h-8 w-px bg-slate-200 mx-1"></div>
                  <button className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-indigo-600 hover:bg-indigo-50 border-indigo-100">
                    <Download size={14} /> Export
                  </button>
                  <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-400 hover:bg-slate-50">
                    <LayoutGrid size={16} />
                  </button>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead className="bg-slate-50/80 text-slate-500 font-semibold text-xs uppercase tracking-wider">
                    <tr>
                      <th className="px-6 py-4 rounded-tl-xl">User</th>
                      <th className="px-6 py-4">Role</th>
                      <th className="px-6 py-4">Events</th>
                      <th className="px-6 py-4">Bookings</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Joined On</th>
                      <th className="px-6 py-4 rounded-tr-xl">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {users.map((user, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-slate-50/50 transition-colors group"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${user.color}`}
                            >
                              {user.initials}
                            </div>
                            <div>
                              <p className="font-semibold text-slate-900">
                                {user.name}
                              </p>
                              <p className="text-xs text-slate-500">
                                {user.email}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-2.5 py-1 rounded-md text-xs font-semibold ${user.role === "Admin" ? "bg-purple-50 text-purple-700" : "bg-emerald-50 text-emerald-700"}`}
                          >
                            {user.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 font-medium text-slate-700">
                          {user.events}
                        </td>
                        <td className="px-6 py-4 font-medium text-slate-700">
                          {user.bookings}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 w-max ${user.status === "Active" ? "bg-emerald-100/50 text-emerald-600" : "bg-rose-100/50 text-rose-600"}`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${user.status === "Active" ? "bg-emerald-500" : "bg-rose-500"}`}
                            ></span>
                            {user.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-slate-500">
                          {user.joined}
                        </td>
                        <td className="px-6 py-4">
                          <button className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
                            <MoreVertical size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 xl:col-span-3 flex flex-col gap-6">
              {/* Chart Widget */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-6">
                  User Roles Overview
                </h3>
                <div className="flex flex-col items-center">
                  {/* CSS Donut Chart */}
                  <div
                    className="relative w-40 h-40 rounded-full flex items-center justify-center mb-6"
                    style={{
                      background:
                        "conic-gradient(#10b981 0% 70%, #6366f1 70% 80%, #f43f5e 80% 100%)",
                    }}
                  >
                    {/* Inner white circle for donut effect */}
                    <div className="absolute w-28 h-28 bg-white rounded-full flex flex-col items-center justify-center shadow-inner">
                      <span className="text-2xl font-bold text-slate-900">
                        856
                      </span>
                      <span className="text-xs font-medium text-slate-500">
                        Total
                      </span>
                    </div>
                  </div>

                  {/* Chart Legend */}
                  <div className="w-full space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                        <span className="text-slate-600 font-medium">
                          Organizers
                        </span>
                      </div>
                      <span className="text-slate-900 font-semibold">
                        128{" "}
                        <span className="text-slate-400 font-normal ml-1">
                          (70%)
                        </span>
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                        <span className="text-slate-600 font-medium">
                          Admins
                        </span>
                      </div>
                      <span className="text-slate-900 font-semibold">
                        18{" "}
                        <span className="text-slate-400 font-normal ml-1">
                          (10%)
                        </span>
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                        <span className="text-slate-600 font-medium">
                          Inactive
                        </span>
                      </div>
                      <span className="text-slate-900 font-semibold">
                        66{" "}
                        <span className="text-slate-400 font-normal ml-1">
                          (20%)
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm flex-1">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-slate-900">Recent Activity</h3>
                </div>
                <div className="space-y-6">
                  {activities.map((act, i) => (
                    <div key={i} className="flex gap-4">
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${act.color}`}
                      >
                        {act.initials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-slate-900 truncate">
                          {act.name}
                        </p>
                        <p className="text-xs text-slate-500 truncate">
                          {act.action}
                        </p>
                      </div>
                      <span className="text-[11px] text-slate-400 whitespace-nowrap mt-0.5">
                        {act.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
