import React from 'react'
import FormStep from './FormStep';
import ShippingForm from './ShippingForm';
import PickupForm from "./PickupForm"
import OrderForm from "./OrderForm"
const UpdateOrderForm = ({orderDetails,consigneeData,setConsigneeData,shippingDetails,setShippingDetails,destinationData,setDestinationData,productList,setProductList,updateOrder,productData,setProductData}) => {

     const [activeStep, setActiveStep] = React.useState(0);
     const handleShippingForm = () =>{
      if(consigneeData?.consigneeName?.length===0 || consigneeData?.consigneeEmail?.length===0 || consigneeData?.consigneePhone?.length===0){
         alert("Enter Consignee Details")
      }
      else if(destinationData?.destinationLocation?.length===0 || destinationData?.destinationCity?.length===0 || destinationData?.destinationCode?.length===0 || destinationData?.destinationState?.length===0){
        alert("Enter the Destination Details")
      }
      else{
        setActiveStep(1)
       
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
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  return (
        <div className='mt-[100px]  pl-[100px] pr-[20px]'>
        <h3 className='font-[InterBold] text-[1.3rem]' >Update Order</h3>
        <div>
            <FormStep activeStep={activeStep} setActiveStep={setActiveStep} setIsLastStep={setIsLastStep} setIsFirstStep={setIsFirstStep}  />
        </div>
       {
        activeStep === 0 && <ShippingForm handleShippingForm={handleShippingForm}  consigneeData={consigneeData} setConsigneeData={setConsigneeData} destinationData={destinationData} setDestinationData={setDestinationData} orderDetails={orderDetails} />
       }
       {
        activeStep === 1 && <PickupForm shippingDetails={shippingDetails} setShippingDetails={setShippingDetails} handlePickupForm={handlePickupForm} />
       }
       {
        activeStep === 2 && <OrderForm updateOrder={updateOrder} productData={productData} setProductData={setProductData} productList={productList} />
       }
    </div>
  )
}

export default UpdateOrderForm