import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { BellIcon, ChevronDownIcon, Cog6ToothIcon, UserCircleIcon, UserIcon } from "@heroicons/react/24/solid";
import { Bars3BottomLeftIcon } from '@heroicons/react/24/solid'
import {Link} from "react-router-dom"
 import Logo from "../../asset/grc-logo.png"
export function NavbarDark({openDrawer,userProfile,handleLogout}) {

  return (
    <div
     
      className=" w-[100vw]  fixed left-10 bg-white max-w-full m-0 h-[60px]  rounded-none shadow-none px-4 py-3"
    >
     <div className="ml-12 mt-2" > 
       <Link to="/" >   <img className="w-[100px]" src={Logo} /></Link>
        </div>
      <div className="flex absolute right-[90px] top-[8px]  flex-wrap items-center  justify-between gap-y-2 text-white">
       
       <Menu>
      <MenuHandler>
        <Button className="bg-transparent px-[10px] py-[10px] shadow-none  hover:shadow-none" >
          <p className="flex items-center justify-end gap-2" >
       <UserIcon className="w-[20px] text-gray-600 " />
      <ChevronDownIcon className="w-[10px] text-gray-600 " />
       </p>
        </Button>
      </MenuHandler>
      <MenuList>
       <Link to="/profile" >   <MenuItem>Profile</MenuItem></Link>
        <MenuItem onClick={handleLogout} >Logout</MenuItem>
       
      </MenuList>
    </Menu>
      
        <Bars3BottomLeftIcon className='bg-white block lg:hidden px-2 py-2 text-black w-[30px] ' onClick={openDrawer} />
      </div>
    </div>
  );
}