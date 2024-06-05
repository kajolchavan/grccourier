import React,{useEffect, useState} from 'react'

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Input,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,

  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  PhotoIcon,
  PhoneIcon,
  
} from "@heroicons/react/24/solid";

import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  MagnifyingGlassIcon,
  CalculatorIcon,
    ShoppingBagIcon,
} from "@heroicons/react/24/outline";

import Logo from "../../asset/grc-logo.png"
import { Link } from 'react-router-dom';
import  {HiMenuAlt3} from "react-icons/hi"
import {MdOutlineDashboard} from "react-icons/md"
import {AiOutlineUser} from "react-icons/ai"
import { CiCalculator1 } from "react-icons/ci";
import { LuBoxes } from "react-icons/lu";
import { FaBox } from "react-icons/fa";
import { LuBox } from "react-icons/lu";
import { BiHelpCircle, BiSupport } from "react-icons/bi";
import { IoIosReturnLeft } from "react-icons/io";
import { FaRegListAlt } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi"
import { MdOutlinePeople } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { BsFillPinMapFill } from "react-icons/bs";
import { TbMapPinPlus } from "react-icons/tb";
import { useSelector } from 'react-redux';
const SidebarNav = () => {
     const [open, setOpen] = React.useState(false);
     const { error, loading, isAuthenticated,users,userProfile } = useSelector(
      (state) => state.user
    )
  const menus = [
    // {name:"Dashboard",link:'/',icon:MdOutlineDashboard},
    {name:"Profile",link:'/profile',icon:AiOutlineUser},
    {name:"Help and Support",link:'/helpandsupport',icon:BiSupport},
    
    {name:"Orders",link:'/orders',icon:LuBoxes,margin:true},
    {name:"Create Order",link:'/createOrder',icon:FaBox},
     {name:"Track",link:'/track',icon:IoIosReturnLeft},
     
   
    

     {name:"Address",link:'/addresses',icon:BsFillPinMapFill,margin:true,},
     {name:"Create Address",link:'/create-address',icon:TbMapPinPlus},
    //  {name:"Pin Code Checker",link:'/orders',icon:HiOutlineLocationMarker},
    //  {name:"Associates",link:'/orders',icon:MdOutlinePeople},
  ]
  // const [userInfo, setUserInfo] = useState({})
 
 
  
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  
 
  return (
    <div className={`bg-[#750E21] sidebar min-h-screen ${open ? 'w-60' : 'w-16'} absolute overflow-y-scroll z-[999] duration-500 text-gray-100 px-4`} >
      <div className='py-3 flex justify-end' >
      <HiMenuAlt3  onClick={()=>setOpen(!open)} size={26} className="cursor-pointer" />
      </div>
      <div className='mt-4 flex-col gap-8 relative' > 

     { menus?.map((menu,i)=>(
      <>
      
       <Link key={i} className={`flex group ${menu?.margin ? "mt-12  "   : "mt-0" } items-center text-[1rem] gap-5 font-[InterMedium] p-3 hover:bg-gray-800 rounded-md` } to={menu.link}>
        <div>
          {React.createElement(menu?.icon,{size:"24"})}
        </div>
        <h2 style={{transitionDelay:`${i+3}00ms`}} className={`whitespace-pre duration-500 ${!open && 'opacity-0 traslate-x-28 overflow-hidden'}`} > {menu.name}</h2>
        <h2 className={`${open && "hidden"} absolute left-48 w-0 overflow-hidden bg-white font-[InterSemibold] whitespace-pre text-gray-500 rounded-md drop-shadow-lg px-0 py-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit `}>{menu?.name}</h2>
        </Link>
        </>
     )) }
   {userProfile?.role === "admin" &&  <Link  className={`flex group mt-12 items-center text-[1rem] gap-5 font-[InterMedium] p-3 hover:bg-gray-800 rounded-md` } to="/users">
        <div>
          {React.createElement(AiOutlineUser,{size:"24"})}
        </div>
        <h2 style={{transitionDelay:`${8+3}00ms`}} className={`whitespace-pre duration-500 ${!open && 'opacity-0 traslate-x-28 overflow-hidden'}`} > Users</h2>
        <h2 className={`${open && "hidden"} absolute left-48 w-0 overflow-hidden bg-white font-[InterSemibold] whitespace-pre text-gray-500 rounded-md drop-shadow-lg px-0 py-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit `}>Users</h2>
        </Link>}
        {userProfile?.role === "admin" &&  <Link  className={`flex group items-center text-[1rem] gap-5 font-[InterMedium] p-3 hover:bg-gray-800 rounded-md` } to="/create-user">
        <div>
          {React.createElement(FaUserGroup,{size:"24"})}
        </div>
        <h2 style={{transitionDelay:`${8+3}00ms`}} className={`whitespace-pre duration-500 ${!open && 'opacity-0 traslate-x-28 overflow-hidden'}`} >Create User</h2>
        <h2 className={`${open && "hidden"} absolute left-48 w-0 overflow-hidden bg-white font-[InterSemibold] whitespace-pre text-gray-500 rounded-md drop-shadow-lg px-0 py-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit `}>Create User</h2>
        </Link>}
      </div>
    </div>
  )
}

export default SidebarNav