import React from 'react'
import Headphones from "../../asset/headphones.png"
const SupportBanner = () => {
  return (
    <div className="mt-[100px]  pl-[100px] pr-[20px]">
        <div className='bg-white flex items-center justify-start gap-6 px-16 py-6' >
        <div>
            <img className='w-[80px]' src={Headphones} />
            </div>
            <div>
                <h3 className='font-[InterBold] text-[1.5rem]' >Help Center</h3>
                <p>Explore our Help Center for quick and easy solutions. Your satisfaction is our priority, and we're here to support you every step of the way.</p>
            </div>
        </div>
    </div>
  )
}

export default SupportBanner