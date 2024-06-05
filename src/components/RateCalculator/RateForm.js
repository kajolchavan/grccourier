import React from 'react'

const RateForm = ({volumeDetails,setVolumeDetails,locationDetails,setLocationDetails,handleCharge,setvolumeDetails}) => {
  return (
    <div className='mt-[100px] col-span-3  pl-[100px] pr-[20px]'>
         <h3 className='font-[InterBold] text-[1.3rem]' >Calculate Shipping Rate</h3>
         <div className='bg-white px-6 my-4 py-6 rounded-lg shadow-sm' >
                <h4 className='font-[InterMedium]' >Location Data </h4>
                <div className='flex items-center justify-start gap-8 my-3' >
                    <input
                    value={locationDetails?.pickupLocation}
                    onChange={(e)=>setLocationDetails({...locationDetails,pickupLocation:e.target.value})}
                placeholder="Enter Pickup Pincode"
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
                 <input
                 value={locationDetails?.destionationLocation}
                    onChange={(e)=>setLocationDetails({...locationDetails,destionationLocation:e.target.value})}
                placeholder="Enter Delivery Pincode"
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
                </div>
                 <h4 className='font-[InterMedium] mt-6' >Freight Data </h4>
                <div className='flex items-center flex-wrap justify-start gap-4 my-3' >
                    <input
                    value={volumeDetails?.weight}
                    onChange={(e)=>setvolumeDetails({...volumeDetails,weight:e.target.value})}
                placeholder="Enter Actual Weight(gm)"
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
                 <input
                  value={volumeDetails?.width}
                    onChange={(e)=>setvolumeDetails({...volumeDetails,width:e.target.value})}
                placeholder="Enter Width(cm)"
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
               <input
                value={volumeDetails?.height}
                    onChange={(e)=>setvolumeDetails({...volumeDetails,height:e.target.value})}
                placeholder="Enter Height(cm)"
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
               <input
                value={volumeDetails?.length}
                    onChange={(e)=>setvolumeDetails({...volumeDetails,length:e.target.value})}
                placeholder="Enter Length(cm)"
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
                 <input
                placeholder="Enter Shipment Price"
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
                </div>
                <div>
                <button onClick={handleCharge} className="bg-[#750E21] font-[InterMedium] text-[.8rem] rounded-md py-2 px-8 text-white ">
              Calculate
            </button>
                </div>
         </div>
    </div>
  )
}

export default RateForm