import React from 'react'
import { RxAvatar } from "react-icons/rx";
const UserInformation = ({userProfile}) => {
  return (
    <div className='pl-[100px] mt-[80px]' >
        <div className='bg-white rounded-lg py-8 px-12' >
            <h3 className='font-[InterBold] text-[2rem]' >Profile Details:</h3>
            <div>
                <RxAvatar className='text-[80px] my-4 text-[#750E21]' />
                <div className='w-[600px]' > 
                    <div className='flex my-6 items-center justify-between' >
                        <p className='font-[InterMedium]' >Name</p>
                        <p className='capitalize'>
                            {userProfile?.name}
                        </p>
                    </div>
                    <div className='flex my-6 items-center justify-between' >
                        <p className='font-[InterMedium]' >Email</p>
                        <p>{userProfile?.email}</p>
                    </div>
                    <div className='flex my-6 items-center justify-between' >
                        <p className='font-[InterMedium]' >Contact</p>
                        <p>{userProfile?.contact}</p>
                    </div>
                    <div className='flex my-6 items-center justify-between' >
                        <p className='font-[InterMedium]' >Wallet Balance</p>
                        <p>{userProfile?.walletBalance}</p>
                    </div>
                    <div className='flex my-6 items-center justify-between' >
                        <p className='font-[InterMedium]' >Account Type</p>
                        <p className='capitalize' >{userProfile?.partnerType}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserInformation