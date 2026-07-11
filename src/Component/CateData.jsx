import { IoMusicalNotesOutline } from "react-icons/io5";
import { BsCalendar2Week, BsPersonWorkspace } from "react-icons/bs";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { LuPencilRuler } from "react-icons/lu";


export const CategoryFilterData = [
  {
    id: 1,
    title: "All",
    icon: null,
    
  },
  {
    id: 2,
    title: "Music",
    icon: <IoMusicalNotesOutline className="" size={18} />,
    iconcolor: "text-[#01BE61]",
  },
  {
    id: 3,
    title: "Business",
    icon: <BsCalendar2Week size={16} />,
    iconcolor: "text-[#982EF3]",
  },
  {
    id: 4,
    title: "Tech",
    icon: <GrTechnology size={16} />,
    iconcolor: "text-[#FD6F03]",
  },

  {
    id: 6,
    title: "Sports",
    icon: <MdOutlineSportsSoccer size={18} />,
    iconcolor: "text-[#F85A96]",
  },
  {
    id: 7,
    title: "Art",
    icon: <LuPencilRuler size={18} />,
    iconcolor: "text-[#3683FE]",
  },
];
