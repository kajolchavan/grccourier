import React from "react";
import { stateData } from "../../data/state";
const ShippingForm = ({consigneeData,setConsigneeData,destinationData,setDestinationData,handleShippingForm}) => {

  return (
    <div className="mt-[70px]  ">
      <div>
        <h4 className="font-[InterBold] text-[1.3rem] ">
          Add Shipping Details
        </h4>
        <div className="bg-white px-16 py-6 my-3 rounded-md">
          <div className="mt-6">
            <h4 className="font-[InterMedium] text-gray-800 my-3">
              Personal Information
            </h4>
            <div className="flex items-center justify-between">
              <input
              value={consigneeData?.consigneeName}
              onChange={(e)=>setConsigneeData({...consigneeData,consigneeName:e.target.value})}
                placeholder="Enter Name"
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
              <input
              value={consigneeData?.consigneeEmail}
              onChange={(e)=>setConsigneeData({...consigneeData,consigneeEmail:e.target.value})}
                placeholder="Enter Email"
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
              <input
             value={consigneeData?.consigneePhone}
              onChange={(e)=>setConsigneeData({...consigneeData,consigneePhone:e.target.value})}
                placeholder="Enter Phone Number (without country code)"
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="number"
              />
            </div>
          </div>
          <div className="my-6">
            <h4 className="font-[InterMedium] text-gray-800 my-3">
              Delivery Information
            </h4>
            <div className="flex items-center flex-wrap gap-3 justify-between">
              <input
              value={destinationData?.destinationLocation}
              onChange={(e)=>setDestinationData({...destinationData,destinationLocation:e.target.value})}
                placeholder="Room no. / Building / Area"
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
              <input
              value={destinationData?.destinationLandmark}
              onChange={(e)=>setDestinationData({...destinationData,destinationLandmark:e.target.value})}
                placeholder="Landmark"
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
              <input
             value={destinationData?.destinationCode}
              onChange={(e)=>setDestinationData({...destinationData,destinationCode:e.target.value})}
                placeholder="Pincode"
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
              <input
              value={destinationData?.destinationCity}
              onChange={(e)=>setDestinationData({...destinationData,destinationCity:e.target.value})}
                placeholder="City"
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
              <select
              value={destinationData?.destinationState}
              onChange={(e)=>setDestinationData({...destinationData,destinationState:e.target.value})}
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                name=""
                id=""
              >
                {stateData?.map((state) => (
                  <option value={state.name}>{state.name}</option>
                ))}
              </select>
              <input
                defaultValue="India"
                placeholder="City"
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center justify-end">
            <button onClick={handleShippingForm} className="bg-[#750E21] font-[InterMedium] text-[.8rem] rounded-md py-2 px-8 text-white ">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingForm;
