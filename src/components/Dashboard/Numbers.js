import React from 'react'
import { MdOutlineFiberNew } from "react-icons/md";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiShipLine } from "react-icons/ri";
import { MdOutlineDeliveryDining } from "react-icons/md";
const Numbers = ({pendingOrders,deliveredOrder,shippedOrder}) => {
  return (
    <div className='mt-[40px]  pl-[100px] pr-[20px]'>
        <div className='grid grid-cols-3 gap-8 grid-flow-col' > 
            <div className='bg-white flex items-center justify-between  py-6 px-12' >
            <div>
                <p className='font-[InterMedium]  text-[1.5rem]' > New Orders</p>
                <p className='font-[InterBold] text-[2.2rem]'>{pendingOrders?.length !==0 ? pendingOrders?.length : 0}</p>
                </div>
                <MdOutlineFiberNew className='mr-3 bg-red-400 px-2 py-2 rounded-full text-white text-[70px]' />
            </div>
            <div className='bg-white flex items-center justify-between py-6 px-12' >
            <div>
                <p className='font-[InterMedium] text-[1.5rem]' >Order Shipped</p>
                <p className='font-[InterBold] text-[2.2rem]'>{shippedOrder?.length !==0 ? shippedOrder?.length : 0}</p>
                </div>
                <RiShipLine className='mr-3 bg-blue-400 px-2 py-2 rounded-full text-white text-[70px]' />
            </div>
            <div className='bg-white flex items-center justify-between py-6 px-12' >
            <div>
                <p className='font-[InterMedium] text-[1.5rem]' >Order Delivered</p>
                <p className='font-[InterBold] text-[2.2rem]'>{deliveredOrder?.length !==0 ? deliveredOrder?.length : 0}</p>
                </div>
                <MdOutlineDeliveryDining className='mr-3 bg-yellow-800 px-2 py-2 rounded-full text-white text-[70px]' />
            </div>
        </div>
    </div>
  )
}

export default Numbers