import { Button, Input } from '@material-tailwind/react'
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { Link } from 'react-router-dom';

const Usertop = () => {
  return (
    <div className='mt-[100px]  pl-[100px] pr-[20px]  ' >
    <div className='grid grid-cols-5 items-center grid-flow-col' >
        <div className='col-span-1' >
            <h3 className='font-[InterBold] text-[1.5rem]' >Users</h3>
        </div>
        <div className='col-span-2 flex items-center justify-end'>
            <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              placeholder="Search"
              containerProps={{
                className: "min-w-[450px]",
              }}
              className=" !border-t-blue-gray-200 outline-none bg-white pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-200"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <div className="!absolute left-3 top-[13px]">
             <CiSearch />
            </div>
          </div>
          
        </div>
        <div className='col-span-2 flex gap-3 items-center justify-end' >
          <Link to="/create-user" >  <button className='flex items-center justify-start gap-3 px-4 rounded-lg font-[InterMedium] py-2.5 text-white bg-[#750E21]' > <FaPlus /> Add User</button></Link>
            <button onClick={()=>window.location.reload()} className='flex items-center justify-start gap-3 font-[InterMedium] hover:bg-gray-300 px-4 py-3' ><TfiReload /> Sync User</button>
        </div>
        </div>
    </div>
  )
}

export default Usertop