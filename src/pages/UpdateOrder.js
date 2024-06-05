import React,{useState,useEffect} from 'react'
import UpdateOrderForm from '../components/UpdateOrder/UpdateOrderForm'
import Navbar from '../components/Layout/Navbar'
import SidebarNav from '../components/Layout/Sidebar'
import { useNavigate, useParams } from 'react-router-dom'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase.config'
import axios from 'axios'

const UpdateOrder = () => {
  const {id} = useParams()
  const [orderDetails, setOrderDetails] = useState({})
  const navigate = useNavigate()
  const [shippingDetails, setShippingDetails] = useState({
    shipperName:"",
    shipperEmail:"",
    shipperContact:"",
    shipperCity:"",
    shipperPinCode:"",
    shipperState:"",
    shipperLocation:"",
    shipperLandmark:"",
    shippingCompanyName:""
  })
  const [destinationData, setDestinationData] = useState({
    destinationLocation:"",
    destinationCity:"",
    destinationCode:"",
    destinationState:"",
    destinationLandmark:""
  })
  const [consigneeDetails, setConsigneeDetails] = useState({
    consigneeName:"",
    consigneeEmail:"",
    consigneePhone:"",

  })
  const [productList, setProductList] = useState([])
  const [productData, setProductData] = useState({
    name:"",
    sku:"123",
    units: 1,
        "selling_price": "900",
        discount: "",
        tax: "",
      hsn: 441122,
        
    weight:"",
    length:"",
    height:"",
    width:""
  })
  const fetchOrder =  async () =>{
    const docRef = doc(db, "ecomOrder", id);
    const docSnap = await getDoc(docRef);
          
    if (docSnap.exists()) {
      
      const data = docSnap.data()
     setOrderDetails(docSnap.data())
     setConsigneeDetails({
      consigneeName:data?.consigneeData?.consigneeName,
      consigneeEmail:data?.consigneeData?.consigneeEmail,
      consigneePhone:data?.consigneeData?.consigneePhone,
     })
     setShippingDetails({
      shipperName:data?.shipperData?.shipperName,
    shipperEmail:data?.shipperData?.shipperEmail,
    shipperContact:data?.shipperData?.shipperContact,
    shipperCity:data?.shipperData?.shipperCity,
    shipperPinCode:data?.shipperData?.shipperPinCode,
    shipperState:data?.shipperData?.shipperState,
    shipperLocation:data?.shipperData?.shipperLocation,
    shipperLandmark:data?.shipperData?.shipperLandmark,
    shippingCompanyName:data?.shipperData?.shippingCompanyName
     })
     setDestinationData({
      destinationLocation:data?.destinationData?.destinationLocation,
    destinationCity:data?.destinationData?.destinationCity,
    destinationCode:data?.destinationData?.destinationCode,
    destinationState:data?.destinationData?.destinationState,
    destinationLandmark:data?.destinationData?.destinationLandmark
     })
     setProductList(data?.freightData?.productList)
     console.log(orderDetails)
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }
  const updateOrder = async () =>{
    const date = new Date()
    if(productList.length===0){
       alert("Add Product")
    }
   
    else{
      const repairRef = doc(db, "ecomOrder", id);

      // Set the "capital" field of the city 'DC'
          await updateDoc(repairRef, {
            destinationData: destinationData,
            freightData: {
              productList : productList,
            },
            consigneeData: {
              ...consigneeDetails,
              pickupPincode: shippingDetails?.shipperPinCode
            },
            shipperData: shippingDetails,
              });
              navigate("/orders")
     
    }
  }
  useEffect(()=>{
    fetchOrder()
  },[])
  return (
      <div>
        <Navbar />
      <div className='flex gap-6' >
   <SidebarNav />
    <div className='bg-[#f1f1f1]  w-[100vw] h-[100vh]' > 
     <UpdateOrderForm updateOrder={updateOrder} shippingDetails={shippingDetails} productList={productList} setProductList={productList} productData={productData} setProductData={setProductData}  setShippingDetails={setShippingDetails} consigneeData={consigneeDetails} destinationData={destinationData} setDestinationData={setDestinationData} setConsigneeData={setConsigneeDetails} orderDetails={orderDetails} />
    </div>
    </div>
    </div>
  )
}

export default UpdateOrder