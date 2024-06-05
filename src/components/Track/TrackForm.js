import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid';
import React from 'react'
import { GrMapLocation } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
const TrackingForm = ({activeTrack,setActiveTrack,code,setCode,handleTrack}) => {
  const activeClass = "py-4 px-6 bg-gray-100 rounded-lg text-[0.9rem] "
  const inActiveClass = "py-4 px-6  text-[0.9rem]"
  return (
    <div className='md:block mt-[120px] xl:pl-[75px]  lg:pl-[60px] px-3 md:px-[30px]  rounded-[12px]   z-[900]'>
      <div className='bg-white  shadow-md  rounded-lg    ' >
        <div className='grid grid-cols-5 gap-4 grid-flow-col' >
          <div className=' rounded-l-lg py-4 col-span-1 text-white flex items-center justify-center bg-[#750E21] flex-col gap-4 ' >
          <GrMapLocation className='text-[30px]' />
            <h3 className='font-[InterMedium]' >Track Your Shipment</h3>
          </div>
          <div className='col-span-2 py-4 font-[InterMedium] text-[#272727] flex items-center justify-center gap-4 ' >
            <button onClick={()=>{setActiveTrack("awb")}} className={activeTrack==="awb" ? activeClass : inActiveClass} >AWB Number</button>
            <button onClick={()=>{setActiveTrack("forwarding")}} className={activeTrack==="forwarding" ? activeClass : inActiveClass}>Forwarding Number</button>
            <button onClick={()=>{setActiveTrack("orderId")}} className={activeTrack==="orderId" ? activeClass : inActiveClass}>Order ID</button>
          </div>
          <div className='w-[27vw] col-span-1 rounded-lg relative top-[25%]  ' >
            <input value={code} onChange={(e)=>setCode(e.target.value)} placeholder={`Enter ${activeTrack==="awb" ? "AWB Number" : ""}${activeTrack==="forwarding" ? "Forwarding Number" : ""}${activeTrack==="orderId" ? "Order ID" : ""}`}  className='w-[90%] border-gray-300 font-[InterRegular] text-[#272727] outline-none rounded-lg py-3 px-6 border-[1px]'  />
            <MagnifyingGlassCircleIcon  className='absolute text-blue-400 w-[35px] top-[6%] right-[13%]' />
          </div>
          <div className='col-span-1 ml-24 mt-8' >
          <button onClick={handleTrack} className="bg-[#750E21] font-[InterMedium] text-[.8rem] rounded-md py-2 px-8 text-white ">
              Track
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrackingForm