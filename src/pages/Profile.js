import React from 'react'
import Navbar from '../components/Layout/Navbar'
import SidebarNav from '../components/Layout/Sidebar'
import UserInformation from '../components/Profile/UserInformation'
import { useSelector } from 'react-redux'

const Profile = () => {
  const { error, loading, isAuthenticated,users,userProfile } = useSelector(
    (state) => state.user
  );
  return (
   
        <div>
            <Navbar />
          <div className='flex gap-6' >
       <SidebarNav />
        <div className='bg-[#f1f1f1]  w-[100vw] h-[100vh]' > 
        <UserInformation userProfile={userProfile} />
        </div>
        </div>
        </div>
  )
}

export default Profile