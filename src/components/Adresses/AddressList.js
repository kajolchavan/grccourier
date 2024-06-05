import React from 'react'
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
const AddressList = ({addressList}) => {
  return (
    <div className="mt-[100px]  pl-[100px] pr-[20px]">
      <div>
        <div className="bg-white py-3 my-4 shadow-sm rounded-md px-8 gap-12 grid grid-cols-5">
          <div className="font-[InterMedium] text-[.9rem] ">
            <p>Name</p>
          </div>
          <div className="font-[InterMedium] text-[.9rem] ">
            <p>Email</p>
          </div>
          <div className="font-[InterMedium] text-[.9rem] ">
            <p>Location</p>
          </div>
          <div className="font-[InterMedium] text-[.9rem] ">
            <p>Contact No</p>
          </div>
         
          <div className="font-[InterMedium] text-[.9rem] ">
            <p>Actions</p>
          </div>
        </div>
        <div className="h-[300px] overflow-y-scroll">
        {
          addressList.map((order)=>(
            <div className="bg-white py-8  my-4 shadow-sm items-start rounded-md gap-12 px-8 grid grid-cols-5">
            <div className="font-[InterMedium] text-[.9rem] ">
            
                {order?.name}
          
              
            </div>
            <div className="font-[InterRegular] text-[.8rem] ">
              {order?.email}
            </div>
            <div className="font-[InterRegular] capitalize text-[.8rem] ">
              <p>{order?.location}</p>
              <p>{order?.city}</p>
              <p>{order?.state}, India</p>
            </div>
            <div className="font-[InterBold] text-[1rem] ">
              <p >{order?.contactNo}</p>
            </div>
        
            <div className="flex items-center justify-start gap-3  ">
            {order?.orderStatus==="Pending" &&  <button onClick={()=>{}} className="bg-[#750E21] font-[InterMedium] text-[.8rem] rounded-md py-2 px-8 text-white ">
                 Pickup Request
              </button>}
              <Menu className=" rounded-none px-0 py-0">
                <MenuHandler>
                  <Button className="bg-transparent px-[10px] py-[10px] shadow-none  hover:shadow-none">
                    <p className="flex items-center justify-end gap-2">
                      <HiDotsHorizontal className="text-black text-[1.3rem]" />{" "}
                    </p>
                  </Button>
                </MenuHandler>
                <MenuList className="w-[150px] px-0 rounded-none">
                  <MenuItem className="border-b-[1px] rounded-none px-0 border-gray-300 ">
                    <p className="px-6 text-black font-[InterRegular]">
                      {" "}
                      Download Invoice
                    </p>
                  </MenuItem>
                  <Link className="outline-none border-none" to="/order/1" >
                  <MenuItem className="border-b-[1px] rounded-none  px-0 border-gray-300 ">
                    <p className="px-6 text-black font-[InterRegular]">
                      Update Order
                    </p>
                  </MenuItem>
                  </Link>
                  <MenuItem className=" rounded-none  px-0 border-gray-300 ">
                    <p className="px-6  text-red-600 font-[InterRegular]">
                      Cancel Order
                    </p>
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>
          ))
        }
         
        
        
        </div>
      </div>
    </div>
  )
}

export default AddressList