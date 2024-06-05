import React from 'react'
import MainImage from "../../asset/mainInfo.jpg"
import { Link } from 'react-router-dom'
const MainInfo = () => {
  return (
    <div className='mt-[100px]  pl-[100px] pr-[20px]'>
        <div className='bg-white grid grid-cols-2 items-center justify-center grid-flow-col py-6 gap-12 px-24' >
        <div>
            <h3 className='font-[InterBold] text-[1.5rem]' >Welcome to GRC Express and Logistics</h3>
            <p className='font-[InterMedium]' >Experience effortless shipping with our user-friendly dashboard. As a trusted logistics brand, we prioritize reliability, ensuring your ecommerce journey is smooth from order to delivery.</p>
           <Link to="/createOrder" > <button className='bg-black font-[InterMedium] py-3 px-8 rounded-lg text-white mt-4' >Book Your Shipment Now</button></Link>
            </div>
            <div className='flex items-center justify-end' >
                <img className='w-[300px]' src={MainImage} />
            </div>
        </div>
    </div>
  )
}

export default MainInfo