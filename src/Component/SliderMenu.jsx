import React from "react";
import {
  LayoutDashboard,
  CalendarPlus,
  CalendarDays,
  Ticket,
  Users,
  FolderOpen,
  BarChart3,
  LineChart,
  Settings,
  ChevronRight,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menus = [
  {
    title: "Dashboard",
    icon: <LayoutDashboard size={20} />,
    path: "/dashboard",
  },
  {
    title: "Add Event",
    icon: <CalendarPlus size={20} />,
    path: "/AddEvent",
  },
  {
    title: "All Events",
    icon: <CalendarDays size={20} />,
    path: "/AllEvents",
  },
  {
    title: "Bookings",
    icon: <Ticket size={20} />,
    path: "/booking",
  },
  {
    title: "Users",
    icon: <Users size={20} />,
    path: "/user",
  },
  {
    title: "Settings",
    icon: <Settings size={20} />,
    path: "/Setting",
  },
];

export default function EventSidebar() {
  return (
    <div className="w-[260px] h-screen border-r border-gray-200 bg-white flex flex-col justify-between sticky top-0">
      {/* Logo */}
      <div>
        <div className="px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-500 flex items-center justify-center">
              <CalendarDays className="text-white" size={24} />
            </div>

            <div>
              <h2 className="font-bold text-2xl text-gray-900">EventHub</h2>
              <p className="text-xs text-gray-500">Event Management</p>
            </div>
          </div>
        </div>

        {/* Menus */}
        <div className="px-3 mt-4 space-y-1">
          {menus.map((menu, idx) => (
            <NavLink
              key={idx}
              to={menu.path}
              className={({ isActive }) =>
                `w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300  ${
                  isActive
                    ? "bg-indigo-50 text-indigo-600 font-semibold"
                    : "text-gray-700 hover:bg-gray-50"
                }`
              }
            >
              {menu.icon}
              <span>{menu.title}</span>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="p-4">
        {/* Upgrade Card */}
        <div className="bg-gradient-to-b from-indigo-50 to-violet-50 rounded-2xl p-5 text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-white flex items-center justify-center shadow-sm mb-4">
            <div className="text-4xl">🛡️</div>
          </div>

          <h3 className="font-semibold text-gray-900">
            Keep your events secure and organized.
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            Manage preferences and system settings easily.
          </p>

          <button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-medium transition">
            🚀 Upgrade to Pro
          </button>
        </div>

        {/* User Profile */}
        <div className="mt-5 flex items-center justify-between border-t pt-4">
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/100"
              alt=""
              className="w-11 h-11 rounded-full"
            />

            <div>
              <h4 className="font-semibold text-sm">John Doe</h4>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
          </div>

          <ChevronRight size={18} className="text-gray-500" />
        </div>
      </div>
    </div>
  );
}
