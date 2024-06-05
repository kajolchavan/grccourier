import React from 'react'
import { stateData } from "../../data/state";
const CreateAddressForm = ({address,setAddress,addAddress}) => {
  return (
    <div className='mt-[100px]  pl-[100px] pr-[20px]'>
        <h3 className='font-[InterBold] text-[1.3rem]' >Create Address</h3>
        <div className='bg-white py-12 mt-8 rounded-lg   px-8' >
        <div className='flex items-center flex-wrap gap-4 justify-start' >
        <input
            placeholder="Enter Name"
                value={address.name}
                onChange={(e)=>setAddress({...address, name: e.target.value})}
                className="border-gray-300 w-[400px]  text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
        <input
                placeholder="Enter Email"
                value={address.email}
                onChange={(e)=>setAddress({...address, email: e.target.value})}
                className="border-gray-300 w-[400px]  text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
        <input
                placeholder="Enter Company Name"
                value={address.password}
                onChange={(e)=>setAddress({...address, password: e.target.value})}
                className="border-gray-300 w-[400px]  text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
                      <input
                placeholder="Enter Phone Number (without country code)"
                value={address.contactNo}
                onChange={(e)=>setAddress({...address, contactNo: e.target.value})}
                className="border-gray-300 w-[400px]  text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
          <input
                placeholder="Room no. / Building / Area"
                value={address.location}
                onChange={(e)=>setAddress({...address, location: e.target.value})}
                className="border-gray-300 w-[400px]  text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
             <input
                placeholder="Landmark"
                value={address.landmark}
              onChange={(e) => setAddress({...address, landmark: e.target.value})}
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
              <input
                placeholder="Pincode"
                value={address.pincode}
              onChange={(e) => setAddress({...address, pincode: e.target.value})}
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
              <input
                placeholder="City"
                value={address.city}
              onChange={(e) => setAddress({...address, city: e.target.value})}
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
              <select
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                name=""
                id=""
                value={address.state}
              onChange={(e) => setAddress({...address, state: e.target.value})}
              >
                {stateData?.map((state) => (
                  <option value={state.name}>{state.name}</option>
                ))}
              </select>
              <input
                defaultValue="India"
                placeholder="Country"
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
             
         
             
              </div>
              <div className='flex items-center justify-end mt-12' >
          <button onClick={addAddress} className="bg-[#750E21] font-[InterMedium] text-[.8rem] rounded-md py-2 px-8 text-white ">
            Create Address
          </button>
        </div>
        </div>
      
    </div>
  )
}

export default CreateAddressForm