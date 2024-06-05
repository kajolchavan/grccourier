import React,{useState,useEffect} from 'react'
import UpdateOrderForm from '../components/UpdateOrder/UpdateOrderForm'
import Navbar from '../components/Layout/Navbar'
import SidebarNav from '../components/Layout/Sidebar'
import { useNavigate, useParams } from 'react-router-dom'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase.config'
import axios from 'axios'
import InformationForm from '../components/UpdateOrder/InformationForm'
import {
    ref as storeRef,
    getDownloadURL,
    uploadBytesResumable,
    listAll,
  } from "firebase/storage";
  import { storage } from "../firebase.config";
import { ref } from 'firebase/database'
const AddInformation = () => {
    const {id} = useParams()
    const [orderDetails, setOrderDetails] = useState({})
    const [totalPrice, setTotalPrice] = useState("")
    const [invoice, setInvoice] = useState("")
    const [orderStatus, setOrderStatus] = useState("")
    const [currentLocation, setCurrentLocation] = useState("")
    const [forwardingNo, setForwardingNo] = useState("")
  const navigate = useNavigate()
  const updateOrder = async () =>{
    const repairRef = doc(db, "ecomOrder", id);

        await updateDoc(repairRef, {
          totalShippingCharges:totalPrice,
          grcInvoice:invoice,
          orderStatus:orderStatus,
          currentLocation:currentLocation
            });
            navigate("/orders")
   
  }

  
  const fetchOrder =  async () =>{
    const docRef = doc(db, "ecomOrder", id);
    const docSnap = await getDoc(docRef);
          
    if (docSnap.exists()) {
      
      const data = docSnap.data()
     setOrderDetails(data)
       setOrderStatus(data.orderStatus) 
       setTotalPrice(data?.totalShippingCharges ? data?.totalShippingCharges : "")
       setCurrentLocation(data?.currentLocation ? data?.currentLocation : "")
       setInvoice(data?.grcInvoice ?  data?.grcInvoice : "")
     console.log(orderDetails)
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }
  const handleAddInvoice = (e) =>{
    
    const file = e.target[0]?.files[0]
    if (!file) return;
    const storageRef = storeRef(storage, `invoices/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    
    uploadTask.on("state_changed",
      (snapshot) => {
        
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setInvoice(downloadURL)
         
        });
      }
    );
  }
 
  useEffect(()=>{
    fetchOrder();
  },[])
  return (
    <div>
    <Navbar />
  <div className='flex gap-6' >
    <SidebarNav />
    <div className='bg-[#f1f1f1]  w-[100vw] h-[100vh]' > 
     <InformationForm handleAddInvoice={handleAddInvoice} forwardingNo={forwardingNo} setForwardingNo={setForwardingNo} currentLocation={currentLocation} setCurrentLocation={setCurrentLocation} orderStatus={orderStatus} setOrderStatus={setOrderStatus} invoice={invoice} setInvoice={setInvoice} totalPrice={totalPrice} setTotalPrice={setTotalPrice} updateOrder={updateOrder} />
    </div>
    </div>
    </div>
  )
}

export default AddInformation