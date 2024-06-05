import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Select,
  Option,
  Textarea,
  
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ChooseAddressModal = ({addressModel,setAddressModel,handleAddressOpenModal,addressList,setShippingDetails,shippingDetails}) => {
  return (
    <div>
      <Dialog
        size="sm"
        open={addressModel}
        handler={handleAddressOpenModal}
        className="bg-transparent  shadow-none"
      >
        <Card className="mx-auto relative overflow-scroll lg:overflow-hidden  w-full ">
        <div onClick={()=>setAddressModel(!addressModel)} className="absolute cursor-pointer top-2 right-[10px] flex items-center justify-center px-2 py-2 w-[25px] h-[25px] rounded-full bg-gray-200" >
          <p className="text-[.7rem]" >X</p>
        </div>
          <CardBody className=" lg:gap-[44px]   h-[500px] overflow-y-scroll  lg:overflow-hidden ">
          <div className="col-span-1 w-full" >
            <h3 className="font-[InterBold] text-[1.5rem]" >Choose an Address</h3>
          <div className="mt-4" >
             { addressList?.map((address)=>(
                <div onClick={()=>{
                  setShippingDetails({
                    shipperName:address?.name,
                   shipperEmail:address?.email,
                   shipperContact:address?.contactNo,
                  shipperCity:address?.city,
                  shipperPinCode:address?.pincode,
                  shipperState:address?.state,
                   shipperLocation:address?.location,
                 shippingCompanyName:"",
                 shipperLandmark:address?.landmark
                  })
                  handleAddressOpenModal()
                }}  className="bg-gray-100 cursor-pointer flex items-start justify-between rounded-lg my-2 py-4 px-6" >
                  <div>
                    <h3 className=" font-[InterMedium] text-[.8rem]" >{address?.name}</h3>
                    <h3 className=" font-[InterRegular] text-[.7rem]">{address?.email}</h3>
                    <h3 className=" font-[InterRegular] text-[.7rem]">{address?.contactNo}</h3>
                  </div>
                  <div>
                    <h3 className=" font-[InterMedium] text-[.8rem]" >{address?.location}</h3>
                    <h3 className=" font-[InterRegular] text-[.7rem]">{address?.pincode}, {address?.city}, {address?.state}</h3>
                  </div>
                </div>
              ))}
          </div>
            
          </div>
         
            
              
            
          </CardBody>
        </Card>
      </Dialog>
    </div>
  )
}

export default ChooseAddressModal