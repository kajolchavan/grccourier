import React,{useState,useEffect} from 'react'
import CreateAddressForm from '../components/Adresses/CreateAddressForm'
import SidebarNav from '../components/Layout/Sidebar'
import Navbar from '../components/Layout/Navbar'
import AddressList from '../components/Adresses/AddressList'
import { database } from '../firebase.config'
import { onValue, ref } from 'firebase/database'
import { useSelector } from 'react-redux'
const Addresses = () => {
    const { error, loading, isAuthenticated,users,userProfile } = useSelector(
        (state) => state.user
      );
      const [addressList, setAddressList] = useState([])
    const fetchAddresses = () =>{
        const reviewCountRef = ref(database, 'addresses/' + users);
  
      onValue(reviewCountRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const newProducts = Object.keys(data).map(key => ({
            id: key,
            ...data[key]
          }));
  
        setAddressList(newProducts)
        }
      },);
      }
      useEffect(() => {
        fetchAddresses()
        
      }, [users])
      
  return (
    <div>
    <Navbar />
  <div className='flex gap-6' >
  <SidebarNav />
 <div className='bg-[#f1f1f1]  w-[100vw] h-[100vh]' > 
    <AddressList addressList={addressList} />
    
 </div>
 </div>
 </div>
  )
}

export default Addresses