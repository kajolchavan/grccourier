import React,{useState,useEffect} from 'react'
import { Card, Typography } from "@material-tailwind/react";
import { db } from '../firebase.config';
import { collection, query, where, getDocs, doc,  onSnapshot, orderBy, updateDoc } from "firebase/firestore";

import Navbar from '../components/Layout/Navbar'
import SidebarNav from '../components/Layout/Sidebar'
import Numbers from '../components/Dashboard/Numbers'
import Orderlist from '../components/Orders/Orderlist'
import MainInfo from '../components/Home/MainInfo';

const Home = () => {
  const [status, setStatus] = useState("all")
  const [orderList, setOrderList] = useState([])
  const [orderStatus, setOrderStatus] = useState("")
  const [pendingOrders, setPendingOrders] = useState([])
  const [deliveredOrder, setDeliveredOrder] = useState([])
  const [shippedOrder, setShippedOrder] = useState([])
  const fetchProperties = async () =>{
    setOrderList([])
if(status==="delivered"){
      const q = query(collection(db, "shieldOrders"), where("orderStatus", "==", "delivered"));
      const querySnapshot = await getDocs(q);
       querySnapshot.forEach((doc) => {
        setOrderList((prev)=>[...prev,{
         id:doc.id,
         ...doc.data()
        }])
        setDeliveredOrder((prev)=>[...prev,{
          id:doc.id,
          ...doc.data()
         }])
    })
    
  }
else if(status==="inTransit"){
    const q = query(collection(db, "ecomOrder"), where("orderStatus", "==", "inTransit"));
    const querySnapshot = await getDocs(q);
     querySnapshot.forEach((doc) => {
      setOrderList((prev)=>[...prev,{
       id:doc.id,
       ...doc.data()
      }])
      setShippedOrder((prev)=>[...prev,{
        id:doc.id,
        ...doc.data()
       }])
  })
  
  
}
else if(status==="pickedUp"){
  const q = query(collection(db, "ecomOrder"), where("orderStatus", "==", "pickedUp"));
  const querySnapshot = await getDocs(q);
   querySnapshot.forEach((doc) => {
    setOrderList((prev)=>[...prev,{
     id:doc.id,
     ...doc.data()
    }])
})

}
else if(status==="pickupRequest"){
  const q = query(collection(db, "ecomOrder"), where("orderStatus", "==", "pickupRequest"));
  const querySnapshot = await getDocs(q);
   querySnapshot.forEach((doc) => {
    setOrderList((prev)=>[...prev,{
     id:doc.id,
     ...doc.data()
    }])
})

}
else if(status==="Pending"){
  const q = query(collection(db, "ecomOrder"), where("orderStatus", "==", "Pending"));
  const querySnapshot = await getDocs(q);
   querySnapshot.forEach((doc) => {
    setOrderList((prev)=>[...prev,{
     id:doc.id,
     ...doc.data()
    }])
    setPendingOrders((prev)=>[...prev,{
      id:doc.id,
      ...doc.data()
     }])
})

}
else{
  const querySnapshot = await getDocs(collection(db, "ecomOrder"));
    querySnapshot.forEach((doc) => {
     setOrderList((prev)=>[...prev,{
      id:doc.id,
      ...doc.data()
     }])
   
  
    });
}
}
const updateOrder= async (id) =>{
  const repairRef = doc(db, "ecomOrder", id);

// Set the "capital" field of the city 'DC'
await updateDoc(repairRef, {
  orderStatus:"pickupRequest",
  
  });
  window.location.reload();

}
const fetchPendingOrders = async () =>{
  const q = query(collection(db, "ecomOrder"), where("orderStatus", "==", "Pending"));
  const querySnapshot = await getDocs(q);
   querySnapshot.forEach((doc) => {
   
    setPendingOrders((prev)=>[...prev,{
      id:doc.id,
      ...doc.data()
     }])
})
}
const fetchShippedOrder = async () =>{
  const q = query(collection(db, "ecomOrder"), where("orderStatus", "==", "inTransit"));
  const querySnapshot = await getDocs(q);
   querySnapshot.forEach((doc) => {
   
    setShippedOrder((prev)=>[...prev,{
      id:doc.id,
      ...doc.data()
     }])
})
}
const fetchDeliveredOrder = async () =>{
  const q = query(collection(db, "ecomOrder"), where("orderStatus", "==", "deliveered"));
  const querySnapshot = await getDocs(q);
   querySnapshot.forEach((doc) => {
   
    setDeliveredOrder((prev)=>[...prev,{
      id:doc.id,
      ...doc.data()
     }])
})
}

  useEffect(() => {
    
    fetchProperties()
    fetchPendingOrders()
    fetchShippedOrder()
    fetchDeliveredOrder()
    }, [status])
  return (
    <div>
        <Navbar />
      <div className='flex gap-6' >
   <SidebarNav />
    <div className='bg-[#f1f1f1]  w-[100vw] h-[100vh]' > 
    <MainInfo />
    <Numbers pendingOrders={pendingOrders} deliveredOrder={deliveredOrder} shippedOrder={shippedOrder} />
  
    </div>
    </div>
    </div>
  )
}

export default Home