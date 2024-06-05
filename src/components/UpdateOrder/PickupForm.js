import React from 'react'
import { stateData } from "../../data/state";
const PickupForm = ({shippingDetails,setShippingDetails,handlePickupForm}) => {
  return (
     <div className="mt-[70px]  ">
      <div>
        <h4 className="font-[InterBold] text-[1.3rem] ">
         + Add Consignee Details
        </h4>
        <div className="bg-white h-[380px] overflow-y-scroll px-16 py-6 my-3 rounded-md">
          <div className="mt-6">
            <h4 className="font-[InterMedium] text-gray-800 my-3">
              Personal Information
            </h4>
            <div className="flex items-center flex-wrap gap-3 justify-between">
              <input
              value={shippingDetails?.shipperName}
              onChange={(e)=>setShippingDetails({...shippingDetails,shipperName:e.target.value})}
                placeholder="Enter Name"
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
              <input
             
                placeholder="Enter Company Name"
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
              <input
             value={shippingDetails?.shipperEmail}
              onChange={(e)=>setShippingDetails({...shippingDetails,shipperEmail:e.target.value})}
                placeholder="Enter Email"
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
              <input
              value={shippingDetails?.shipperContact}
              onChange={(e)=>setShippingDetails({...shippingDetails,shipperPhone:e.target.value})}
                placeholder="Enter Phone Number (without country code)"
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
            </div>
          </div>
          <div className="my-6">
            <h4 className="font-[InterMedium] text-gray-800 my-3">
              Pickup Information
            </h4>
            <div className="flex items-center flex-wrap gap-3 justify-between">
              <input
              value={shippingDetails?.shipperLocation}
              onChange={(e)=>setShippingDetails({...shippingDetails,shipperLocation:e.target.value})}
                placeholder="Room no. / Building / Area"
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
              <input
              value={shippingDetails?.shipperLandmark}
              onChange={(e)=>setShippingDetails({...shippingDetails,shipperLandmark:e.target.value})}
                placeholder="Landmark"
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
              <input
               value={shippingDetails?.shipperPinCode}
              onChange={(e)=>setShippingDetails({...shippingDetails,shipperPinCode:e.target.value})}
                placeholder="Pincode"
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
              <input
              value={shippingDetails?.shipperCity}
              onChange={(e)=>setShippingDetails({...shippingDetails,shipperCity:e.target.value})}
                placeholder="City"
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
              <select
              value={shippingDetails?.shipperState}
              onChange={(e)=>setShippingDetails({...shippingDetails,shipperState:e.target.value})}
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
            <button onClick={handlePickupForm} className="bg-[#750E21] font-[InterMedium] text-[.8rem] rounded-md py-2 px-8 text-white ">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PickupForm