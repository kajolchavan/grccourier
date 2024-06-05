import React from 'react'

const OrderTab = ({status,setStatus}) => {
    const inactiveClass = "font-[InterMedium] w-[150px] text-center transition border-b-[5px] border-b-transparent pb-4 text-gray-600 cursor-pointer"
    const activeClass = "font-[InterMedium] text-[#000] w-[150px] text-center border-b-[5px] border-b-[#750E21] pb-4 cursor-pointer"
  return (
    <div className='mt-[50px]  pl-[100px] pr-[20px]'>
        <div className='flex gap-12 border-b-[2px] border-gray-300  items-center justify-start' >
            <p onClick={()=>setStatus("all")} className={status === "all" ? activeClass : inactiveClass} >All</p>
            <p onClick={()=>setStatus("new")} className={status === "new" ? activeClass : inactiveClass } >New</p>
            <p onClick={()=>setStatus("pickupRequest")} className={status === "pickupRequest" ? activeClass : inactiveClass } >Ready for Pickup</p>
            <p onClick={()=>setStatus("pickedUp")} className={status === "pickedUp" ? activeClass : inactiveClass } >Picked Up</p>
            <p onClick={()=>setStatus("inTransit")} className={status === "inTransit" ? activeClass : inactiveClass } >In-transit</p>
            <p onClick={()=>setStatus("delivered")} className={status === "delivered" ? activeClass : inactiveClass } >Delivered</p>
        </div>
    </div>
  )
}

export default OrderTab