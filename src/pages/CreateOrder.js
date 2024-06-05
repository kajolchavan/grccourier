import React,{useState} from 'react'
import Navbar from '../components/Layout/Navbar'
import SidebarNav from '../components/Layout/Sidebar'
import CreateOrderForm from '../components/CreateOrder/CreateOrderForm'

const CreateOrder = () => {
 

  return (
    <div>
        <Navbar />
      <div className='flex gap-6' >
   <SidebarNav />
    <div className='bg-[#f1f1f1]  w-[100vw] h-[100vh]' > 
     <CreateOrderForm  />
        
    </div>
    </div>
    </div>
  )
}

export default CreateOrder