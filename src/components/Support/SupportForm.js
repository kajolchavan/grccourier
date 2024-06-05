import { Button } from '@material-tailwind/react'
import React from 'react'

const SupportForm = ({handleQuery,formInfo,setFormInfo}) => {
  return (
    <div className="mt-[40px]  pl-[100px] pr-[20px]">
        <div className='grid px-16 py-6 bg-white grid-cols-3 grid-flow-col' >
            <div className='col-span-2 ' >
                <h3 className='font-[InterBold] text-[1.5rem]' > Add Your Query</h3>
                <div className='flex items-center justify-start gap-6 flex-wrap mt-3' >
                <input
              value={formInfo.name}
              onChange={(e)=>setFormInfo({...formInfo,name:e.target.value})}
                placeholder="Enter Name"
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
               <input
              value={formInfo.email}
              onChange={(e)=>setFormInfo({...formInfo,email:e.target.value})}
                placeholder="Enter Email"
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
               <input
              value={formInfo.contactNo}
              onChange={(e)=>setFormInfo({...formInfo,contactNo:e.target.value})}
                placeholder="Enter Contact No"
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
                 <input
              value={formInfo.orderID}
              onChange={(e)=>setFormInfo({...formInfo,orderID:e.target.value})}
                placeholder="Enter OrderID"
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
              <input
              value={formInfo.query}
              onChange={(e)=>setFormInfo({...formInfo,query:e.target.value})}
                placeholder="Enter Query"
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
                </div>
                <div className='flex items-center justify-end mt-3' >
                    <Button onClick={handleQuery} >Add Query</Button>
                </div>
            </div>
            <div className='col-span-1'>
                    <h3 className='font-[InterBold] mb-4 text-[1.2rem]'>Contact Information</h3>
                    <p className='font-[InterMedium]' >Contact No: <strong> +91 8104744056</strong></p>
                    <p className='font-[InterMedium]'>Email: <strong>support@grcecom.com</strong></p>
            </div>
        </div>
    </div>
  )
}

export default SupportForm