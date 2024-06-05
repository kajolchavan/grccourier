import React from 'react'

const OrderDetails = ({orderDetails}) => {
  return (
    <div className='pl-[75px] pt-[30px] pr-[24px]' >
     {Object.keys(orderDetails).length !== 0 &&   <div className=' bg-white rounded-lg py-6 px-8 grid-flow-col' >
            <h3 className='font-[InterMedium] my-2 text-[1.2rem]' >
                Order ID: &nbsp;<strong> {orderDetails?.orderID}</strong>
            </h3>
            <h3 className='font-[InterMedium] my-2 text-[1rem]' >
                Order Status: &nbsp;<strong className='text-green-500' > {orderDetails?.orderStatus}</strong>
            </h3>
            <h3 className='font-[InterMedium] my-2 text-[1rem]' >
                Order Information: &nbsp;<strong className='text-gray-600' > {orderDetails?.message}</strong>
            </h3>
        </div>}
    </div>
  )
}

export default OrderDetails