import React from 'react'
import { IoMusicalNotesOutline } from "react-icons/io5";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {faUserGroup} from "@fortawesome/free-solid-svg-icons"
import { AiOutlineLaptop } from "react-icons/ai";
import { IoIosFootball } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";

import { TbPaletteOff } from "react-icons/tb";





const Category = () => {
    const CategoryData=[
        {
            icons:<IoMusicalNotesOutline size={25}/>,
            title:"Music",
        },
        {
            icons:<FontAwesomeIcon icon={faBriefcase} className="text-xl text-gray-800" />,
            title:"Business",
        },
        {
            icons:<AiOutlineLaptop size={25}/>,
            title:"Tech",
        },
        {
            icons:<FontAwesomeIcon icon={faUserGroup} style={{color: "rgb(24, 33, 48)",}} />,
            title:"Workshop",
        },
        {
            icons:<IoIosFootball size={25}/>,
            title:"Sports",
        },
        {
            icons:<TbPaletteOff size={25}/>,
            title:"Art & Culture",
        }
    ]
  return (
    <div className='py-5 '>
        <div className='max-w-7xl mx-auto'>
            <div className='flex items-center justify-between px-5'>
            <h3 className='py-4 font-bold text-[22px]'>Browse By Category</h3>
            <p className='flex items-center gap-1 text-[#2B7FFF] font-[500]'>View All Categories<FaAngleRight/></p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 px-4'>
        {CategoryData.map((Category,idx)=>(
            <div key={idx} className=' w-[90%] h-[120px] p-4 border border-gray-200 rounded-xl bg-white flex flex-col items-center justify-center gap-2 shadow-xl hover:shadow-md transition'>
                <span>{Category.icons}</span>
                <h3 className='font-medium text-[16px]'>{Category.title}</h3>
            </div>
            
            
        ))}
        </div>
        </div>

    </div>
  )
}

export default Category