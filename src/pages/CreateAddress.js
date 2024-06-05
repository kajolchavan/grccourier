import React,{useState} from 'react'
import Navbar from '../components/Layout/Navbar'
import SidebarNav from '../components/Layout/Sidebar'
import CreateAddressForm from '../components/Adresses/CreateAddressForm'
import { push, ref, set } from 'firebase/database'
import { database } from '../firebase.config'
import { useSelector } from 'react-redux'

const CreateAddress = () => {
  const { error, loading, isAuthenticated,users,userProfile } = useSelector(
    (state) => state.user
  );
   const [address, setAddress] = useState({
    name:"",
    email:"",
    contactNo:"",
    location:"",
    landmark:"",
    pincode:"",
    city:"",
    state:"",
    
   })
   const addAddress = ()=>{
    if(address?.name?.length === 0){
      alert("Enter Name")
    }
    else if(address?.email?.length === 0){
      alert("Enter Email")
    }
    else if(address?.contactNo?.length === 0){
      alert("Enter  Contact Number")
    }
    else if(address?.location?.length === 0){
      alert("Enter Location")
    }
    else if(address?.landmark?.length === 0 ){
      alert("Enter Landmark")
    }
    else if(address?.pincode?.length === 0){
      alert("Enter Pincode")
    }
    else if(address?.city?.length === 0){
      alert("Enter City")
    }
    else if(address?.state?.length === 0){
      alert("Enter State")
    }
    else{
      const productListRef = ref(database, "addresses/" + users);
  const newProductRef = push(productListRef);
  set(newProductRef, {
   userId:users,
   name:address?.name,
   email:address?.email,
   contactNo:address?.contactNo,
   location:address?.location,
   landmark:address?.landmark,
   pincode:address?.pincode,
   city:address?.city,
   state:address?.state,
    }).then(()=>{
 
    setAddress({
      name:"",
      email:"",
      contactNo:"",
      location:"",
      landmark:"",
      pincode:"",
      city:"",
      state:"",
    })
  })
    }
   }
  return (
    <div>
    <Navbar />
  <div className='flex gap-6' >
  <SidebarNav />
 <div className='bg-[#f1f1f1]  w-[100vw] h-[100vh]' > 
  <CreateAddressForm address={address} addAddress={addAddress} setAddress={setAddress} />
    
 </div>
 </div>
 </div>
  )
}

export default CreateAddress