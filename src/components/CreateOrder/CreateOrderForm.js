import React,{useState,useEffect} from 'react'
import FormStep from './FormStep'
import ShippingForm from './ShippingForm';
import PickupForm from './PickupForm';
import OrderForm from './OrderForm';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { database, db } from '../../firebase.config';
import { collection, getDocs } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import ChooseAddressModal from './ChooseAddressModal';
import { onValue, ref } from 'firebase/database';
const CreateOrderForm = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const { error, loading, isAuthenticated,users,userProfile } = useSelector(
      (state) => state.user
    );
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const [addressModel, setAddressModel] = useState(false)
  const [addressList, setAddressList] = useState([])
  const handleAddressOpenModal = () =>{
    setAddressModel(!addressModel)
  }
  const [orderList, setOrderList] = useState([])
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
  const [totalWeight, setTotalWeight] = useState(0)
  const [totalLength, setTotalLength] = useState(0)
  const [totalHeight, setTotalHeight] = useState(0)
  const [totalWidth, setTotalWidth] = useState(0)
  const [productList, setProductList] = useState([])
  const navigate = useNavigate()
  const fetchProperties = async () =>{
    const querySnapshot = await getDocs(collection(db, "ecomOrder"));
    querySnapshot.forEach((doc) => {
     setOrderList((prev)=>[...prev,{
      id:doc.id,
      ...doc.data()
     }])
   
  
    });
  }
  const handleShippingForm = () =>{
    if(consigneeDetails?.consigneeName?.length===0 || consigneeDetails?.consigneeEmail?.length===0 || consigneeDetails?.consigneePhone?.length===0){
       alert("Enter Consignee Details")
    }
    else if(destinationData?.destinationLocation?.length===0 || destinationData?.destinationCity?.length===0 || destinationData?.destinationCode?.length===0 || destinationData?.destinationState?.length===0){
      alert("Enter the Destination Details")
    }
    else{
      setActiveStep(1)
      console.log(consigneeDetails,destinationData)
    }
  }
  const handlePickupForm = () =>{
    if(shippingDetails?.shipperName?.length===0 || shippingDetails?.shipperEmail?.length===0 || shippingDetails?.shipperContact?.length===0){
       alert("Enter Shipper Details")
    }
    else if(shippingDetails?.shipperCity?.length===0 || shippingDetails?.shipperPinCode?.length===0 || shippingDetails?.shipperState?.length===0 || shippingDetails?.shipperLocation?.length===0){
      alert("Enter the Pickup Details")
    }
    else{
      setActiveStep(2)
      console.log(shippingDetails)
    }
  }
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
 
  const handleOrder = async () =>{
    const date = new Date()
    if(productList.length===0){
       alert("Add Product")
    }
   
    else{
    if(orderList) {  axios.post("https://us-central1-grc-logistics.cloudfunctions.net/app/api/ecom_order/booking",{
      destinationData: destinationData,
      freightData: {
        productList : productList,
      },
      consigneeData: {
        ...consigneeDetails,
        pickupPincode: shippingDetails?.shipperPinCode
      },
      shipperData: shippingDetails,
      bookingData: {
        "bookingTime": date.getTime(),
        "createdDate": date,
        "inscanDate": "",
        "manifestDate": "",
        "serviceCode": "",
        "paymentMode": "prepaid"
      },
    
      "payment_method": "Prepaid",
      "uid": users,
      "orderData": {},
      awbNumber:"GRC"+date.getFullYear()+(orderList?.length+1),
      orderID:"ecom"+"-"+"123" + "-" + (orderList?.length+1)
      }).then((res)=>{
        navigate("/success")
      }).catch(err=>{
        alert(err)
      })
    }}
  }
  useEffect(() => {
    
  fetchProperties()
  fetchAddresses()  
  }, [])
  

 
  return (
    <div className='mt-[100px]  pl-[100px] pr-[20px]'>
    <ChooseAddressModal shippingDetails={shippingDetails} setShippingDetails={setShippingDetails} addressList={addressList} setAddressModel={setAddressModel} addressModel={addressModel} handleAddressOpenModal={handleAddressOpenModal} />
        <h3 className='font-[InterBold] text-[1.3rem]' >Create Order</h3>
        <div>
            <FormStep activeStep={activeStep} setActiveStep={setActiveStep} setIsLastStep={setIsLastStep} setIsFirstStep={setIsFirstStep}  />
        </div>
       {
        activeStep === 0 && <ShippingForm handleShippingForm={handleShippingForm} consigneeDetails={consigneeDetails} setConsigneeDetails={setConsigneeDetails} destinationData={destinationData} setDestinationData={setDestinationData} />
       }
       {
        activeStep === 1 && <PickupForm handleAddressOpenModal={handleAddressOpenModal} handlePickupForm={handlePickupForm} shippingDetails={shippingDetails} setShippingDetails={setShippingDetails}  />
       }
       {
        activeStep === 2 && <OrderForm setTotalWidth={setTotalWidth} setTotalHeight={setTotalHeight} setTotalLength={setTotalLength} setTotalWeight={setTotalWeight} handleOrder={handleOrder} totalLength={totalLength} totalHeight={totalHeight} totalWeight={totalWeight} totalWidth={totalWidth} productData={productData} setProductData={setProductData} productList={productList} setProductList={setProductList}  />
       }
    </div>
  )
}

export default CreateOrderForm