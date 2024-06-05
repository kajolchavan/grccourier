import React, { useState } from 'react'
import SidebarNav from "./Sidebar"
import { Bars3BottomLeftIcon } from '@heroicons/react/24/solid'
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { NavbarDark } from './TopBar';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/userActions';
const Navbar = (props) => {
  const [open, setOpen] = useState(false)
   const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const { error, loading, isAuthenticated,users,userProfile } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch()
  const handleLogout = () =>{
    dispatch(logout())
  }
  return (
   <div>
   <NavbarDark userProfile={userProfile} handleLogout={handleLogout}  />
   
   </div>
  )
}

export default Navbar