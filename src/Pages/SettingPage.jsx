import React, { useState } from "react";
import SliderMenu from "../Component/SliderMenu";
import {
  Search,
  Bell,
  User,
  Lock,
  Shield,
  Palette,
  CreditCard,
  Mail,
  Blocks,
  CloudUpload,
  Trash2,
  Camera,
  Calendar,
  BarChart2,
  ShieldCheck,
  Monitor,
  Smartphone,
  ChevronRight,
  Sun,
  Moon,
  Star,
} from "lucide-react";

export default function SettingsPage() {
  // State for toggles
  const [toggles, setToggles] = useState({
    email: true,
    booking: true,
    events: true,
    marketing: false,
  });

  const handleToggle = (key) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const sidebarItems = [
    { name: "Profile Settings", icon: User, active: true },
    { name: "Account Settings", icon: Lock, active: false },
    { name: "Notifications", icon: Bell, active: false },
    { name: "Security", icon: Shield, active: false },
    { name: "Appearance", icon: Palette, active: false },
    { name: "Payment Methods", icon: CreditCard, active: false },
    { name: "Email Templates", icon: Mail, active: false },
    { name: "Integrations", icon: Blocks, active: false },
    { name: "Backup & Export", icon: CloudUpload, active: false },
    { name: "Delete Account", icon: Trash2, active: false, danger: true },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto  flex ">
        <div className="w-[20%]">
          <SliderMenu />
        </div>

        <div className="w-[80%]">
          <div className="min-h-screen bg-slate-50/50 p-6 font-sans text-slate-800 flex flex-col ">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div>
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Settings
                </h1>
                <p className="text-sm text-slate-500 mt-1 font-medium">
                  Dashboard <span className="mx-2 text-slate-300">/</span>{" "}
                  Settings
                </p>
              </div>
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-72">
                  <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="Search events, bookings, users..."
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200/80 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
                  />
                </div>
                <button className="relative p-2.5 bg-white border border-slate-200/80 rounded-xl hover:bg-slate-50 transition-colors shadow-sm shrink-0">
                  <Bell size={18} className="text-slate-600" />
                  <span className="absolute top-2 right-2.5 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white"></span>
                </button>
                <div className="flex items-center gap-3 shrink-0 cursor-pointer pl-2">
                  <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border border-slate-200">
                    <img
                      src="https://i.pravatar.cc/150?img=11"
                      alt="John Doe"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-semibold text-sm hidden sm:block">
                    John Doe
                  </span>
                </div>
              </div>
            </div>

            {/* Main Layout Grid */}
            <div className="flex flex-col lg:flex-row gap-8 flex-1">
              {/* Left Sidebar Navigation */}
              <div className="w-full lg:w-64 shrink-0 space-y-1">
                {sidebarItems.map((item, index) => (
                  <button
                    key={index}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      item.active
                        ? "bg-indigo-50/80 text-indigo-700"
                        : item.danger
                          ? "text-slate-600 hover:bg-rose-50 hover:text-rose-600 mt-4"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    <item.icon
                      size={18}
                      className={
                        item.active ? "text-indigo-600" : "text-slate-400"
                      }
                    />
                    {item.name}
                  </button>
                ))}
              </div>

              {/* Right Content Area */}
              <div className="flex-1 space-y-6">
                {/* Profile Settings Card */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm">
                  <div className="mb-6">
                    <h2 className="text-lg font-bold text-slate-900">
                      Profile Settings
                    </h2>
                    <p className="text-sm text-slate-500">
                      Update your personal information and profile details.
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Avatar Uploader */}
                    <div className="relative shrink-0">
                      <div className="w-28 h-28 rounded-full border-4 border-white shadow-sm overflow-hidden bg-slate-100">
                        <img
                          src="https://i.pravatar.cc/150?img=11"
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <button className="absolute bottom-1 right-1 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-md hover:bg-indigo-700 transition-colors border-2 border-white">
                        <Camera size={14} />
                      </button>
                    </div>

                    {/* Form Fields */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-600">
                          Full Name
                        </label>
                        <input
                          type="text"
                          defaultValue="John Doe"
                          className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-600">
                          Email Address
                        </label>
                        <input
                          type="email"
                          defaultValue="john.doe@example.com"
                          className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-600">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          defaultValue="+91 98765 43210"
                          className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-600">
                          Role
                        </label>
                        <select className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%24%2024%22%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-no-repeat bg-[position:right_1rem_center] pr-10">
                          <option>Administrator</option>
                          <option>Organizer</option>
                          <option>User</option>
                        </select>
                      </div>
                      <div className="md:col-span-2 flex justify-end mt-2">
                        <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm">
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2x2 Grid for Bottom Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Notification Preferences */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm">
                    <div className="mb-6">
                      <h2 className="text-lg font-bold text-slate-900">
                        Notification Preferences
                      </h2>
                      <p className="text-sm text-slate-500">
                        Choose how you want to receive notifications.
                      </p>
                    </div>
                    <div className="space-y-5">
                      {[
                        {
                          id: "email",
                          title: "Email Notifications",
                          desc: "Receive updates via email",
                          icon: Mail,
                          color: "bg-blue-50 text-blue-600",
                        },
                        {
                          id: "booking",
                          title: "Booking Alerts",
                          desc: "Get notified for new bookings",
                          icon: Bell,
                          color: "bg-orange-50 text-orange-600",
                        },
                        {
                          id: "events",
                          title: "Event Reminders",
                          desc: "Receive reminders for events",
                          icon: Calendar,
                          color: "bg-purple-50 text-purple-600",
                        },
                        {
                          id: "marketing",
                          title: "Marketing & Offers",
                          desc: "Receive updates on offers and features",
                          icon: BarChart2,
                          color: "bg-indigo-50 text-indigo-600",
                        },
                      ].map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between group"
                        >
                          <div className="flex items-center gap-4">
                            <div
                              className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}
                            >
                              <item.icon size={18} />
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-slate-900">
                                {item.title}
                              </h4>
                              <p className="text-xs text-slate-500">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                          {/* Custom Toggle Switch */}
                          <div
                            onClick={() => handleToggle(item.id)}
                            className={`w-12 h-6 rounded-full flex items-center p-1 cursor-pointer transition-colors duration-300 ease-in-out shrink-0 ${toggles[item.id] ? "bg-indigo-600" : "bg-slate-200"}`}
                          >
                            <div
                              className={`w-4 h-4 bg-white rounded-full shadow-sm transform transition-transform duration-300 ease-in-out ${toggles[item.id] ? "translate-x-6" : "translate-x-0"}`}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Security */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm">
                    <div className="mb-6">
                      <h2 className="text-lg font-bold text-slate-900">
                        Security
                      </h2>
                      <p className="text-sm text-slate-500">
                        Manage your password and security settings.
                      </p>
                    </div>
                    <div className="space-y-2">
                      {[
                        {
                          title: "Change Password",
                          desc: "Update your account password",
                          icon: Lock,
                          iconBg: "bg-slate-50 text-slate-600",
                          action: "arrow",
                        },
                        {
                          title: "Two-Factor Authentication",
                          desc: "Add an extra layer of security",
                          icon: ShieldCheck,
                          iconBg: "bg-rose-50 text-rose-600",
                          action: "badge",
                          badgeText: "Enabled",
                          badgeColor: "text-emerald-600 bg-emerald-50",
                        },
                        {
                          title: "Login Sessions",
                          desc: "Manage your active sessions",
                          icon: Monitor,
                          iconBg: "bg-blue-50 text-blue-600",
                          action: "arrow",
                        },
                        {
                          title: "Active Devices",
                          desc: "You're logged in on 2 devices",
                          icon: Smartphone,
                          iconBg: "bg-cyan-50 text-cyan-600",
                          action: "arrow",
                        },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-3 -mx-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-4">
                            <div
                              className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.iconBg}`}
                            >
                              <item.icon size={18} />
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-slate-900">
                                {item.title}
                              </h4>
                              <p className="text-xs text-slate-500">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                          {item.action === "arrow" ? (
                            <ChevronRight
                              size={18}
                              className="text-slate-400"
                            />
                          ) : (
                            <span
                              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold ${item.badgeColor}`}
                            >
                              {item.badgeText}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Appearance */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm">
                    <div className="mb-6">
                      <h2 className="text-lg font-bold text-slate-900">
                        Appearance
                      </h2>
                      <p className="text-sm text-slate-500">
                        Customize the look and feel of your dashboard.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="text-xs font-semibold text-slate-900 block mb-3">
                          Theme
                        </label>
                        <div className="flex gap-3">
                          <button className="flex-1 flex items-center justify-center gap-2 py-2.5 border-2 border-indigo-600 bg-indigo-50/50 text-indigo-700 rounded-xl text-sm font-medium transition-all">
                            <Sun size={16} /> Light
                          </button>
                          <button className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-slate-200 bg-white text-slate-600 rounded-xl text-sm font-medium hover:bg-slate-50 transition-all">
                            <Moon size={16} /> Dark
                          </button>
                          <button className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-slate-200 bg-white text-slate-600 rounded-xl text-sm font-medium hover:bg-slate-50 transition-all">
                            <Monitor size={16} /> System
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-900 block mb-3">
                          Primary Color
                        </label>
                        <div className="flex gap-4">
                          {[
                            "bg-indigo-600",
                            "bg-blue-500",
                            "bg-emerald-500",
                            "bg-amber-500",
                            "bg-rose-500",
                            "bg-purple-500",
                          ].map((color, i) => (
                            <button
                              key={i}
                              className={`w-7 h-7 rounded-full flex items-center justify-center ${color} shadow-sm ring-offset-2 transition-all hover:scale-110 ${i === 0 ? "ring-2 ring-indigo-600" : ""}`}
                            >
                              {i === 0 && (
                                <span className="w-2 h-2 bg-white rounded-full"></span>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* System Information */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm flex flex-col">
                    <div className="mb-6">
                      <h2 className="text-lg font-bold text-slate-900">
                        System Information
                      </h2>
                      <p className="text-sm text-slate-500">
                        General information about your account.
                      </p>
                    </div>

                    <div className="space-y-4 mt-auto">
                      <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                        <span className="text-sm text-slate-600">
                          Account Created
                        </span>
                        <span className="text-sm font-medium text-slate-900">
                          12 March 2024
                        </span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                        <span className="text-sm text-slate-600">
                          Last Login
                        </span>
                        <span className="text-sm font-medium text-slate-900">
                          24 May 2025, 09:30 AM
                        </span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                        <span className="text-sm text-slate-600">
                          Account Status
                        </span>
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold text-emerald-700 bg-emerald-50">
                          Active
                        </span>
                      </div>
                      <div className="flex justify-between items-center pt-1">
                        <span className="text-sm text-slate-600">
                          Current Plan
                        </span>
                        <span className="text-sm font-bold text-indigo-600 flex items-center gap-1.5">
                          Pro Plan{" "}
                          <Star size={14} className="fill-indigo-600" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
