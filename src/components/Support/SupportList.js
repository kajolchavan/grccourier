import React from "react";
import { Card, Typography, Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/solid";
import { HiDotsHorizontal } from "react-icons/hi";
import {
  Navbar,
  IconButton,
  Button,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

const SupportList = ({supportList,removeQuery}) => {
  return (
    <div className="mt-[50px]  pl-[100px] pr-[20px]">
    <div>
      <div className="bg-white py-3 my-4 shadow-sm rounded-md px-8 gap-12 grid grid-cols-6">
        <div className="font-[InterMedium] text-[.9rem] ">
          <p>Name</p>
        </div>
        <div className="font-[InterMedium] text-[.9rem] ">
          <p>Email</p>
        </div>
        <div className="font-[InterMedium] text-[.9rem] ">
          <p>Contact No</p>
        </div>
        <div className="font-[InterMedium] text-[.9rem] ">
          <p>Order ID</p>
        </div>
        <div className="font-[InterMedium] text-[.9rem] ">
          <p>Query</p>
        </div>
        <div className="font-[InterMedium] text-[.9rem] ">
          <p>Actions</p>
        </div>
      </div>
      <div className="h-[300px] overflow-y-scroll">
      {
       supportList?.length !==0 && supportList?.map((order)=>(
          <div className="bg-white py-8  my-4 shadow-sm items-start rounded-md gap-12 px-8 grid grid-cols-6">
          <div className="font-[InterMedium] text-[.9rem] ">
          {  order?.name}
          </div>
          <div className="font-[InterRegular] text-[.8rem] ">
          {  order?.email}
          </div>
          <div className="font-[InterRegular] text-[.8rem] ">
          {  order?.contactNo}
          </div>
          
          <div className="font-[InterBold] text-[1rem] ">
            <p className="text-blue-400">{order?.orderID}</p>
          </div>
          <div className="font-[InterRegular] text-[.7rem] ">
            <p className=" ">
            {order?.query}
            </p>
          </div>
          <div className="font-[InterRegular] text-[.7rem] ">
           <TrashIcon onClick={()=>removeQuery(order?.id)} className="text-red-600 cursor-pointer w-[40px]" />
          </div>
        </div>
        ))
      }
       
      
      
      </div>
    </div>
  </div>
  )
}

export default SupportList