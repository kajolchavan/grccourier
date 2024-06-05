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
import { useSelector } from "react-redux";
const Orderlist = ({orderList,orderStatus,setOrderStatus,updateOrder,filteredOrderList}) => {
  const { error, loading, isAuthenticated,users,userProfile } = useSelector(
    (state) => state.user
  );
  return (
    <div className="mt-[50px]  pl-[100px] pr-[20px]">
      <div>
        <div className="bg-white py-3 my-4 shadow-sm rounded-md px-8 gap-12 grid grid-cols-5">
          <div className="font-[InterMedium] text-[.9rem] ">
            <p>Order Details</p>
          </div>
          <div className="font-[InterMedium] text-[.9rem] ">
            <p>Consignee Details</p>
          </div>
          <div className="font-[InterMedium] text-[.9rem] ">
            <p>Shipper Details</p>
          </div>
        
          <div className="font-[InterMedium] text-[.9rem] ">
            <p>Status</p>
          </div>
          <div className="font-[InterMedium] text-[.9rem] ">
            <p>Actions</p>
          </div>
        </div>
        <div className="h-[300px] overflow-y-scroll">
        {
          filteredOrderList?.map((order)=>(
            <div className="bg-white py-8  my-4 shadow-sm items-start rounded-md gap-12 px-8 grid grid-cols-5">
            <div className="font-[InterMedium] text-[.9rem] ">
              <Link className="text-blue-600" to="#fab2718r43d">
                {order?.orderID}
              </Link>
              <div className="flex mt-3 items-center justify-start ">
                <p className="pr-2 text-[.8rem] font-[InterMedium]  border-gray-300">
                  {order?.bookingData?.createdDate?.slice(0,10)}
                </p>
              
              </div>
            </div>
            <div className="font-[InterRegular] text-[.8rem] ">
              <p>{order?.consigneeData?.consigneeName}</p>
              <p>{order?.consigneeData?.consigneeEmail}</p>
              <p>{order?.consigneeData?.consigneePhone}</p>
            </div>
            <div className="font-[InterRegular] text-[.8rem] ">
              <p>{order?.shipperData?.shipperName}</p>
              <p>{order?.shipperData?.shipperEmail}</p>
              <p>{order?.shipperData?.shipperContact}</p>
            </div>
           
            <div className="font-[InterRegular] text-[.7rem] ">
              <p className="bg-[#aaffac96] text-[#2da82f] w-[80px] text-center py-2 px-3 rounded-lg ">
                {order?.orderStatus}
              </p>
              <p className="mt-3" >{order?.currentLocation}</p>
            </div>
            <div className="flex items-center justify-start gap-3  ">
            {order?.orderStatus==="Pending" &&  <button onClick={()=>updateOrder(order?.id)} className="bg-[#750E21] font-[InterMedium] text-[.8rem] rounded-md py-2 px-8 text-white ">
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
              { order?.grcInvoice &&  <a href={order?.grcInvoice} download={true}> <MenuItem className="border-b-[1px] rounded-none px-0 border-gray-300 ">
                    <p className="px-6 text-black font-[InterRegular]">
                      {" "}
                      Download Invoice
                    </p>
                  </MenuItem></a> }
               {(userProfile?.role ==="admin" || userProfile?.role ==="associate") &&  <Link className="outline-none border-none" to={`/order/information/${order?.id}`} >
                  <MenuItem className="border-b-[1px] rounded-none px-0 border-gray-300 ">
                    <p className="px-6 text-black font-[InterRegular]">
                      {" "}
                      Add Information
                    </p>
                  </MenuItem>
                  </Link>}
               {order?.orderStatus === "Pending" &&   <Link className="outline-none border-none" to={`/order/${order?.id}`} >
                  <MenuItem className="border-b-[1px] rounded-none  px-0 border-gray-300 ">
                    <p className="px-6 text-black font-[InterRegular]">
                      Update Order
                    </p>
                  </MenuItem>
                  </Link>}
                  {((order?.orderStatus === "pickedUp" || order?.orderStatus === "pickupRequest") && userProfile?.role==="admin") &&   <Link className="outline-none border-none" to={`/order/${order?.id}`} >
                  <MenuItem className="border-b-[1px] rounded-none  px-0 border-gray-300 ">
                    <p className="px-6 text-black font-[InterRegular]">
                     Edit Order
                    </p>
                  </MenuItem>
                  </Link>}
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
  );
};

export default Orderlist;
