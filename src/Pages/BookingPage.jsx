import React, { useState } from "react";
import {
  Search,
  Bell,
  Download,
  Calendar,
  CheckCircle2,
  Clock,
  XCircle,
  ChevronDown,
  Filter,
  MoreVertical,
  X,
  MapPin,
  User,
  Phone,
  Mail,
  CreditCard,
  FileText,
  IndianRupee,
} from "lucide-react";
import SliderMenu from "../Component/SliderMenu";

export default function BookingPage() {
  const [open, SetOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const bookingFee = 49;
  const platformFee = 35;

  const ticketPrice = selectedBooking
    ? Number(selectedBooking.amount.replace(/[₹,]/g, "")) *
      selectedBooking.tickets.count
    : 0;

  const totalPaid = ticketPrice + bookingFee + platformFee;

  // Mock data for the table
  const bookings = [
    {
      id: "BK-1001",
      event: {
        title: "Live Concert - Rock Night",
        date: "24 May 2026",
        img: "bg-gray-800",
      },
      customer: { name: "Rahul Sharma", email: "rahul@gmail.com" },
      dateTime: { date: "24 May 2026", time: "07:00 PM" },
      tickets: { count: 2, type: "General Admission" },
      amount: "₹1,598",
      status: "Confirmed",
    },
    {
      id: "BK-1002",
      event: {
        title: "React Developer Workshop",
        date: "30 May 2026",
        img: "bg-orange-800",
      },
      customer: { name: "Priya Verma", email: "priya@example.com" },
      dateTime: { date: "30 May 2026", time: "10:00 AM" },
      tickets: { count: 1, type: "VIP Access" },
      amount: "₹1,499",
      status: "Confirmed",
    },
    {
      id: "BK-1003",
      event: {
        title: "Tech Summit 2026",
        date: "10 June 2026",
        img: "bg-blue-900",
      },
      customer: { name: "Amit Kumar", email: "amit.k@example.com" },
      dateTime: { date: "10 June 2026", time: "09:00 AM" },
      tickets: { count: 3, type: "General Admission" },
      amount: "₹3,897",
      status: "Pending",
    },
    {
      id: "BK-1004",
      event: {
        title: "City Marathon 2026",
        date: "15 June 2026",
        img: "bg-green-800",
      },
      customer: { name: "Sneha Patel", email: "sneha.p@example.com" },
      dateTime: { date: "15 June 2026", time: "06:00 AM" },
      tickets: { count: 1, type: "General Admission" },
      amount: "₹299",
      status: "Confirmed",
    },
    {
      id: "BK-1005",
      event: {
        title: "Street Food Festival",
        date: "20 June 2026",
        img: "bg-orange-600",
      },
      customer: { name: "Vikram Singh", email: "vikram.s@example.com" },
      dateTime: { date: "20 June 2026", time: "05:00 PM" },
      tickets: { count: 2, type: "General Admission" },
      amount: "₹398",
      status: "Cancelled",
    },
    {
      id: "BK-1006",
      event: {
        title: "Startup Networking Meetup",
        date: "25 June 2026",
        img: "bg-slate-800",
      },
      customer: { name: "Neha Gupta", email: "neha.g@example.com" },
      dateTime: { date: "25 June 2026", time: "03:00 PM" },
      tickets: { count: 1, type: "VIP Access" },
      amount: "₹399",
      status: "Confirmed",
    },
    {
      id: "BK-1007",
      event: {
        title: "AI & Future Tech Conference",
        date: "05 July 2026",
        img: "bg-indigo-900",
      },
      customer: { name: "Rohan Mehta", email: "rohan.m@example.com" },
      dateTime: { date: "05 July 2026", time: "09:30 AM" },
      tickets: { count: 2, type: "VIP Experience" },
      amount: "₹4,998",
      status: "Pending",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-50 text-green-600";
      case "Pending":
        return "bg-orange-50 text-orange-600";
      case "Cancelled":
        return "bg-red-50 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="max-w-7xl mx-auto  flex ">
      <div className="w-[20%]">
        <SliderMenu />
      </div>
      <div className="w-[80%]">
        <div className="flex min-h-screen bg-slate-50 font-sans text-gray-800 ">
          {/* Main Content Area */}
          <div className="flex-1 p-6 pr-4 overflow-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold">Bookings</h1>
                <p className="text-sm text-gray-500 mt-1">
                  Dashboard <span className="mx-1">&gt;</span> Bookings
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search
                    className="absolute left-3 top-2.5 text-gray-400"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="Search bookings by name, email, event..."
                    className="pl-10 pr-4 py-2 w-80 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  />
                </div>
                <button className="relative p-2 rounded-full hover:bg-gray-200 bg-white border border-gray-200">
                  <Bell size={20} className="text-gray-600" />
                  <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
                <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 font-medium text-sm">
                  <Download size={16} /> Export
                </button>
              </div>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-5 gap-4 mb-6">
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Total Bookings</p>
                  <h3 className="text-xl font-bold">1,234</h3>
                  <p className="text-[10px] text-green-500 mt-1 font-medium flex items-center gap-1">
                    ↑ 18%{" "}
                    <span className="text-gray-400 font-normal">
                      this month
                    </span>
                  </p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Confirmed</p>
                  <h3 className="text-xl font-bold">1,012</h3>
                  <p className="text-[10px] text-green-500 mt-1 font-medium">
                    82%{" "}
                    <span className="text-gray-400 font-normal">of total</span>
                  </p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Pending</p>
                  <h3 className="text-xl font-bold">156</h3>
                  <p className="text-[10px] text-gray-500 mt-1 font-medium">
                    13%{" "}
                    <span className="text-gray-400 font-normal">of total</span>
                  </p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <XCircle size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Cancelled</p>
                  <h3 className="text-xl font-bold">66</h3>
                  <p className="text-[10px] text-red-500 mt-1 font-medium">
                    5%{" "}
                    <span className="text-gray-400 font-normal">of total</span>
                  </p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <IndianRupee size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Total Revenue</p>
                  <h3 className="text-xl font-bold">₹2,45,678</h3>
                  <p className="text-[10px] text-green-500 mt-1 font-medium flex items-center gap-1">
                    ↑ 15%{" "}
                    <span className="text-gray-400 font-normal">
                      this month
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Filters Bar */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search
                    className="absolute left-3 top-2.5 text-gray-400"
                    size={16}
                  />
                  <input
                    type="text"
                    placeholder="Search bookings..."
                    className="pl-9 pr-4 py-2 w-64 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none"
                  />
                </div>

                <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 bg-white rounded-lg text-sm font-medium">
                  All Events <ChevronDown size={14} className="text-gray-500" />
                </button>
                <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 bg-white rounded-lg text-sm font-medium">
                  All Status <ChevronDown size={14} className="text-gray-500" />
                </button>

                <div className="flex items-center gap-2 px-3 py-2 border border-gray-200 bg-white rounded-lg text-sm font-medium text-gray-500 cursor-pointer">
                  <Calendar size={14} /> From Date{" "}
                  <span className="mx-1 text-gray-300">→</span> To Date
                </div>
              </div>

              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 bg-white rounded-lg text-sm font-medium">
                <Filter size={16} /> Filter
              </button>
            </div>

            {/* Data Table */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-gray-50 border-b border-gray-200 text-gray-500 font-medium">
                  <tr>
                    <th className="px-4 py-3 w-12">
                      <input
                        type="checkbox"
                        className="rounded text-indigo-600 w-4 h-4"
                      />
                    </th>
                    <th className="px-4 py-3">Booking ID</th>
                    <th className="px-4 py-3">Event</th>
                    <th className="px-4 py-3">Customer</th>
                    <th className="px-4 py-3">Date & Time</th>
                    <th className="px-4 py-3">Tickets</th>
                    <th className="px-4 py-3">Amount</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3 w-12 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {bookings.map((booking, index) => (
                    <tr
                      key={index}
                      className="hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-4 py-4">
                        <input
                          type="checkbox"
                          className="rounded text-indigo-600 w-4 h-4 border-gray-300"
                        />
                      </td>
                      <td className="px-4 py-4 font-medium text-gray-700">
                        {booking.id}
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-lg ${booking.event.img} shrink-0`}
                          ></div>
                          <div>
                            <p className="font-semibold text-gray-800">
                              {booking.event.title}
                            </p>
                            <p className="text-[11px] text-gray-500 mt-0.5">
                              {booking.event.date}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <p className="font-medium text-gray-800">
                          {booking.customer.name}
                        </p>
                        <p className="text-[11px] text-gray-500 mt-0.5">
                          {booking.customer.email}
                        </p>
                      </td>
                      <td className="px-4 py-4 text-gray-600">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <Calendar size={12} className="text-gray-400" />{" "}
                          {booking.dateTime.date}
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
                          <Clock size={12} className="text-gray-400" />{" "}
                          {booking.dateTime.time}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <p className="font-medium text-gray-800">
                          {booking.tickets.count}
                        </p>
                        <p className="text-[11px] text-gray-500 mt-0.5">
                          {booking.tickets.type}
                        </p>
                      </td>
                      <td className="px-4 py-4 font-bold text-gray-800">
                        {booking.amount}
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${getStatusColor(booking.status)}`}
                        >
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <button
                          className="text-gray-400 hover:text-gray-600"
                          onClick={() => {
                            setSelectedBooking(booking);
                            SetOpen(!open);
                          }}
                        >
                          <MoreVertical size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Sidebar - Booking Details */}
          {open && selectedBooking && (
            <div className="w-80 bg-white border-l border-gray-200 p-6 flex flex-col h-screen overflow-y-auto shrink-0 shadow-[-4px_0_15px_-3px_rgba(0,0,0,0.05)] ">
              {/* Sidebar Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-bold text-lg">Bookings</h2>
                <button
                  className="text-gray-400 hover:text-gray-600 bg-gray-50 p-1.5 rounded-full"
                  onClick={() => SetOpen(false)}
                >
                  <X size={18} />
                </button>
              </div>

              {/* Status Badge */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-xs text-gray-500 mr-2">Booking ID</span>
                  <span className="text-sm font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                    {selectedBooking.bookingId}
                  </span>
                </div>
                <span className="bg-green-50 text-green-600 text-[11px] font-semibold px-2.5 py-1 rounded-full">
                  Confirmed
                </span>
              </div>

              {/* Event Card Info */}
              <div className="flex gap-4 items-start mb-8">
                <div className="w-14 h-14 rounded-xl bg-gray-800 shrink-0"></div>
                <div>
                  <h3 className="font-bold text-[15px] leading-tight mb-1">
                    {selectedBooking.event.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 mb-1">
                    {selectedBooking.dateTime.date} |
                    {selectedBooking.dateTime.time}
                  </p>
                  <p className="text-[11px] text-gray-500 flex items-center gap-1">
                    <MapPin size={10} /> Mumbai, India
                  </p>
                </div>
              </div>

              {/* Customer Information Section */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <User size={16} className="text-indigo-600" />
                  <h4 className="font-semibold text-sm">
                    Customer Information
                  </h4>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Name</span>
                    <span className="font-medium">
                      {selectedBooking.customer.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Email</span>
                    <span className="font-medium">
                      {selectedBooking.customer.email}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Phone</span>
                    <span className="font-medium">+91 98765 43210</span>
                  </div>
                </div>
              </div>

              {/* Booking Information Section */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <FileText size={16} className="text-indigo-600" />
                  <h4 className="font-semibold text-sm">Booking Information</h4>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Tickets</span>
                    <span className="font-medium">
                      {selectedBooking.tickets.count} x
                      {selectedBooking.tickets.type}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Booking Date</span>
                    <span className="font-medium">
                      {selectedBooking.dateTime.date},
                      {selectedBooking.dateTime.time}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Payment Method</span>
                    <span className="font-medium uppercase">UPI</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Payment ID</span>
                    <span className="font-medium text-gray-600">
                      pay_8X7sdf8s9d
                    </span>
                  </div>
                  <div className="flex justify-between mt-1 pt-1">
                    <span className="text-gray-500">Amount</span>
                    <span className="font-bold">{selectedBooking.amount}</span>
                  </div>
                </div>
              </div>

              {/* Order Summary Section */}
              <div className="mb-auto">
                <div className="flex items-center gap-2 mb-4">
                  <CreditCard size={16} className="text-indigo-600" />
                  <h4 className="font-semibold text-sm">Order Summary</h4>
                </div>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-500">
                      Ticket Price ({selectedBooking?.tickets?.count} x
                      {selectedBooking?.amount})
                    </span>
                    <span>₹ ₹{ticketPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Booking Fee</span>
                    <span>₹49</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-gray-100">
                    <span className="text-gray-500">Platform Fee</span>
                    <span>₹35</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="font-bold text-gray-800">Total Paid</span>
                    <span className="font-bold text-indigo-600 text-base">
                      ₹{totalPaid.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* View Invoice Button */}
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 mt-6 transition-colors">
                <FileText size={16} /> View Invoice
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
