import React from 'react'

const RateCharge = ({locationDetails,volumeDetails,totalCharges,volumetricWeight}) => {
  return (
    <div className='col-span-2 mt-[150px]   pl-[100px] pr-[20px]' >
      <div className='bg-white rounded-lg py-8 px-12' >
        <h3 className='font-[InterBold] text-[1.5rem]' >Calucuated Rate is:</h3>
        <p ><span className='font-[InterMedium]' >Pickup Location:</span>  {locationDetails?.pickupLocation}</p>
        <p><span className='font-[InterMedium]'>Destination Location:</span>  {locationDetails?.destinationLocation}</p>
        <p><span className='font-[InterMedium]'>Actual Weight:</span>  {volumeDetails?.weight}</p>
        <p><span className='font-[InterMedium]'>Volumetric Weight:</span>  {Math.round(volumetricWeight)}kg</p>
        <p className='text-center font-[InterBold] text-[1.5rem] text-green-400' >Rs.{totalCharges}</p>
      </div>
    </div>
  )
}

export default RateCharge