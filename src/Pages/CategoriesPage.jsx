import React from 'react'
import img3 from '../assets/Image/image3.png'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { TbCategoryFilled } from "react-icons/tb";
import { LuCalendarRange } from "react-icons/lu";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IoTicketOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaMusic } from "react-icons/fa";
import Categorymap from '../Component/Categorymap';
import { CategoryData } from '../Component/CategoriesData';
import { FaLaptopCode, FaBriefcase, FaBasketballBall, FaUtensils, FaMicrophone, FaPaintBrush, FaUsers } from "react-icons/fa";
import Email from '../Component/Email.jsx'





const CategoriesPage = () => {

  return (
    <>
    <Navbar/>
    <div className='max-w-7xl mx-auto border-[#FBFAFC]'>
        
    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 items-center   px-5'>
        

        
        <div className='gap-2'>
        <h2 className='text-[28px] font-bold'>Categories</h2>
        <p className='text-[16px] text-gray-500 max-w-130'>Explore events by category and find experiences that match your interests and passions.</p>
    </div>


    <div className='justify-self-end sm:justify-self-center'>
        <img src={img3} alt="" className='h-37  '/>
    </div>
    </div>

<div className='py-4 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 px-3 gap-3  '>
    <div className='flex gap-3 items-center border p-1 max-w-74  px-2 rounded-xl border-gray-100 shadow-sm'>
        <div className='w-15 h-16 p-1 items-center flex justify-center rounded-xl bg-[#E7E4FD] p-'><TbCategoryFilled fontSize={40} color='#3B33EA'/></div>
        <span className='flex flex-col'>
            <p className='text-[19px] font-bold'>12+</p>
            <p className='font-bold'>Categories</p>
            <p className='text-[14px] text-gray-500'>wide range of events</p>


        </span>
    </div>

    <div className='flex gap-3 items-center border p-1 max-w-74  px-2 rounded-xl border-gray-100 shadow-sm'>
        <div className='w-15 h-16 p-1 items-center flex justify-center rounded-xl bg-[#E4F8EB] p-'><LuCalendarRange fontSize={43} color='#11C96B'/></div>
        <span className='flex flex-col'>
            <p className='text-[19px] font-bold'>2500+</p>
            <p className='font-bold'>Events</p>
            <p className='text-[14px] text-gray-500'>Across all categories</p>


        </span>
    </div>

    <div className='flex gap-3 items-center border p-1 max-w-74  px-2 rounded-xl border-gray-100 shadow-sm'>
        <div className='w-15 h-16 p-1 items-center flex justify-center rounded-xl bg-[#FEEDDC] p-'><HiMiniUserGroup fontSize={44} color='#F99115'/></div>
        <span className='flex flex-col'>
            <p className='text-[19px] font-bold'>100K+</p>
            <p className='font-bold'>Attendees</p>
            <p className='text-[14px] text-gray-500'>Joined this month</p>


        </span>
    </div>
    <div className='flex gap-3 items-center border p-1 max-w-74  px-2 rounded-xl border-gray-100 shadow-sm'>
        <div className='w-15 h-16 p-1 items-center flex justify-center rounded-xl bg-[#E3F0FE] p-'><IoTicketOutline fontSize={44} color='#229BFD'/></div>
        <span className='flex flex-col'>
            <p className='text-[19px] font-bold flex items-center gap-1'>4.8<FaStar fontSize={16} color='#FDB929'/></p>
            <p className='font-bold'>Rating</p>
            <p className='text-[14px] text-gray-500'>From our users</p>


        </span>
    </div>
    </div>


{/* Category map Data mutiple cards */}
<Categorymap data={CategoryData} /> 


       
        
    </div>
    <Email/>
    <Footer/>
    </>
  )
}

export default CategoriesPage