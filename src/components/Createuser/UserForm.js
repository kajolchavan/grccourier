import React from 'react'

const UserForm = ({userInfo,setUserInfo,addUser}) => {
  return (
    <div className='mt-[100px]  pl-[100px] pr-[20px]'>
        <h3 className='font-[InterBold] text-[1.3rem]' >Create User</h3>
        <div className='bg-white py-12 mt-8 rounded-lg   px-8' >
        <div className='flex items-center flex-wrap gap-4 justify-start' >
        <input
            placeholder="Name"
                value={userInfo.name}
                onChange={(e)=>setUserInfo({...userInfo, name: e.target.value})}
                className="border-gray-300 w-[400px]  text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
        <input
                placeholder="Email"
                value={userInfo.email}
                onChange={(e)=>setUserInfo({...userInfo, email: e.target.value})}
                className="border-gray-300 w-[400px]  text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
        <input
                placeholder="Password"
                value={userInfo.password}
                onChange={(e)=>setUserInfo({...userInfo, password: e.target.value})}
                className="border-gray-300 w-[400px]  text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
                      <input
                placeholder="contact"
                value={userInfo.contact}
                onChange={(e)=>setUserInfo({...userInfo, contact: e.target.value})}
                className="border-gray-300 w-[400px]  text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
          <input
                placeholder="Wallet Balance"
                value={userInfo.walletBalance}
                onChange={(e)=>setUserInfo({...userInfo, walletBalance: e.target.value})}
                className="border-gray-300 w-[400px]  text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="number"
              />
              <select  
                onChange={(e)=>setUserInfo({...userInfo, role: e.target.value})}
                className="border-gray-300 w-[400px]  text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="number">
              <option value="" >Select a Role</option>
              <option value="admin" >Admin</option>
              <option value="developer" >Developer</option>
              <option value="associate" >Associate</option>
              <option value="client" >Client</option>
              </select>
             
              <select  
                onChange={(e)=>setUserInfo({...userInfo, partnerType: e.target.value})}
                className="border-gray-300 w-[400px]  text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="number">
              <option value="" >Select a Partner</option>
              <option value="prepaid" >Prepaid</option>
              <option value="postpaid" >Postpaid</option>
      
              </select>
              <select  
               
                onChange={(e)=>setUserInfo({...userInfo, service: e.target.value})}
                className="border-gray-300 w-[400px]  text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="number">
              <option value="" >Select a Service</option>
              <option value="ecommerce" >Ecommerce</option>
              <option value="logistics" >Logistics</option>
              <option value="international" >International Courier</option>
              </select>
              </div>
              <div className='flex items-center justify-end mt-12' >
          <button onClick={addUser} className="bg-[#750E21] font-[InterMedium] text-[.8rem] rounded-md py-2 px-8 text-white ">
            Create User
          </button>
        </div>
        </div>
      
    </div>
  )
}

export default UserForm