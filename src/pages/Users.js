import React, { useEffect, useState } from 'react'
import Navbar from '../components/Layout/Navbar'
import SidebarNav from '../components/Layout/Sidebar'
import Usertop from '../components/Createuser/Usertop'
import Userlist from '../components/Createuser/Userlist'
import { collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore'
import { db } from '../firebase.config'

const Users = () => {
  const [status, setStatus] = useState("all")
  const [userList, setuserList] = useState([])
  const [userStatus, setuserStatus] = useState("")
  const fetchProperties = async () =>{
    
    const q = query(collection(db, "users"), where("service", "==", "ecommerce"));
    const querySnapshot = await getDocs(q);
     querySnapshot.forEach((doc) => {
      setuserList((prev)=>[...prev,{
       id:doc.id,
       ...doc.data()
      }])
  })
}
const updateuser= async (id) =>{
  const repairRef = doc(db, "users", id);

// Set the "capital" field of the city 'DC'
await updateDoc(repairRef, {
  userStatus:"pickupRequest",
  
  });
  window.location.reload();

}
  useEffect(() => {
    
    fetchProperties()
      
    }, [status])
  return (
    <div>
    <Navbar />
  <div className='flex gap-6' >
  <SidebarNav />
  <div className='bg-[#f1f1f1]  w-[100vw] h-[100vh]' > 
    <Usertop />
    <Userlist userList={userList} />
  </div>
  </div>
  </div>
  )
}

export default Users