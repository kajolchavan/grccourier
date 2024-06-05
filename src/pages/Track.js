import React,{useState} from 'react'
import SidebarNav from '../components/Layout/Sidebar'
import Navbar from '../components/Layout/Navbar'
import TrackingForm from '../components/Track/TrackForm'
import OrderDetails from '../components/Track/OrderDetails'
import { collection, getDoc, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase.config'
import axios from 'axios'

const Track = () => {
    const [activeTrack, setActiveTrack] = useState("awb")
    const [code, setCode] = useState("")
    const [orderDetails, setOrderDetails] = useState({})
    const handleTrack = async () =>{
    if(activeTrack === "awb"){
      axios.post("https://us-central1-grc-logistics.cloudfunctions.net/app/api/ecom_order/track_order",{
        awbNumber:code
      }).then((response)=>(
        setOrderDetails(response.data.data)
      ))

        }
    else if(activeTrack === "forwarding"){
      axios.post("https://us-central1-grc-logistics.cloudfunctions.net/app/api/ecom_order/track_order",{
        forwardingNo:code
      }).then((response)=>(
        setOrderDetails(response.data.data)
      ))
        }
    else{
      axios.post("https://us-central1-grc-logistics.cloudfunctions.net/app/api/ecom_order/track_order",{
        orderID:code
      }).then((response)=>(
        setOrderDetails(response.data.data)
      ))
    }
  }
    console.log(orderDetails)
  return (
    <div>
        <Navbar />
      <div className='flex gap-6' >
   <SidebarNav />
    <div className='bg-[#f1f1f1]  w-[100vw] h-[100vh]' > 
    <TrackingForm code={code} handleTrack={handleTrack} setCode={setCode} activeTrack={activeTrack} setActiveTrack={setActiveTrack}/>
  {orderDetails &&  <OrderDetails orderDetails={orderDetails} />}
    </div>
    </div>
    </div>
  )
}

export default Track