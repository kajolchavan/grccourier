import { Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react'
import React from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Userlist = ({userList,updateUser}) => {
  return (
    <div className="mt-[50px]  pl-[100px] pr-[20px]">
      <div>
        <div className="bg-white py-3 my-4 shadow-sm rounded-md px-8 gap-12 grid grid-cols-6">
       
          <div className="font-[InterMedium] text-[.9rem] ">
            <p>Name</p>
          </div>
          <div className="font-[InterMedium] text-[.9rem] ">
            <p>Email</p>
          </div>
          <div className="font-[InterMedium] text-[.9rem] ">
            <p>Partner Type</p>
          </div>
          <div className="font-[InterMedium] text-[.9rem] ">
            <p>Wallet Balance</p>
          </div>
          <div className="font-[InterMedium] text-[.9rem] ">
            <p>Role</p>
          </div>
          <div className="font-[InterMedium] text-[.9rem] ">
            <p>Actions</p>
          </div>
        </div>
        <div className="h-[400px] overflow-y-scroll">
        {
          userList.map((user)=>(
            <div className="bg-white py-8  my-4 shadow-sm items-start rounded-md gap-12 px-8 grid grid-cols-6">
           
            <div className="font-[InterRegular] text-[.8rem] ">
              <p>{user?.name}</p>
              
            </div>
            <div className="font-[InterRegular] text-[.8rem] ">
              <p>{user?.email}</p>
        
            </div>
            <div className="font-[InterRegular] text-[.8rem] ">
              <p>{user?.partnerType}</p>
        
            </div>
            <div className="font-[InterBold] text-[1rem] ">
              <p className="text-blue-400">Rs. {user?.walletBalance}</p>
            </div>
            <div className="font-[InterRegular] text-[.7rem] ">
              <p className="bg-[#aaffac96] text-[#2da82f] w-[80px] text-center py-2 px-3 rounded-lg ">
                {user?.role}
              </p>
            </div>
            <div className="flex items-center justify-start gap-3  ">
            {user?.userStatus==="Pending" &&  <button onClick={()=>updateUser(user?.id)} className="bg-[#750E21] font-[InterMedium] text-[.8rem] rounded-md py-2 px-8 text-white ">
                 Pickup Request
              </button>}
              <Menu className=" rounded-none px-0 py-0">
                <MenuHandler>
                  <Button className="bg-transparent px-[10px] py-[10px] shadow-none  hover:shadow-none">
                    <p className="flex items-center justify-end gap-2">
                      <HiDotsHorizontal className="text-black text-[1.3rem]" />{" "}
                    </p>
                  </Button>
                </MenuHandler>
                <MenuList className="w-[150px] px-0 rounded-none">
                  <MenuItem className="buser-b-[1px] rounded-none px-0 buser-gray-300 ">
                    <p className="px-6 text-black font-[InterRegular]">
                      {" "}
                      Download Invoice
                    </p>
                  </MenuItem>
                  <Link className="outline-none buser-none" to="/user/1" >
                  <MenuItem className="buser-b-[1px] rounded-none  px-0 buser-gray-300 ">
                    <p className="px-6 text-black font-[InterRegular]">
                      Update user
                    </p>
                  </MenuItem>
                  </Link>
                  <MenuItem className=" rounded-none  px-0 buser-gray-300 ">
                    <p className="px-6  text-red-600 font-[InterRegular]">
                      Cancel user
                    </p>
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>
          ))
        }
         
        
        
        </div>
      </div>
    </div>
  )
}

export default Userlist