import React,{useState} from 'react'
import Navbar from '../components/Layout/Navbar'
import SidebarNav from '../components/Layout/Sidebar'
import RateForm from '../components/RateCalculator/RateForm'
import RateCharge from '../components/RateCalculator/RateCharge'

const RateCalculator = () => {
  const [volumeDetails, setvolumeDetails] = useState({
    height:"",
    width:"",
    length:"",
    weight:""
  })  
  const [volumetricWeight, setVolumetricWeight] = useState(0)
  const [totalCharges, setTotalCharges] = useState(0)
  const [locationDetails, setLocationDetails] = useState({
    pickupLocation:"",
    destinationLocation:""
  })
  const handleRate = () =>{
    const baseFreightUnitPrice = 100; // 1kg = 100rs
    const baseFuelUnitPrice = 50; // 1km = 50rs
    const gstRate = 0.18
    const volume = (Number(volumeDetails?.width) * Number(volumeDetails?.height) * Number(volumeDetails?.length) * baseFreightUnitPrice) / 4500;
    setVolumetricWeight((Number(volumeDetails?.width) * Number(volumeDetails?.height) * Number(volumeDetails?.length))/4500)
    const gst = volume * gstRate;

    const totalChargesIncludingGST = totalCharges + gst;
    setTotalCharges(totalChargesIncludingGST)
  }
  return (
    <div>
        <Navbar />
      <div className='flex gap-6' >
   <SidebarNav />
    <div className='bg-[#f1f1f1]  w-[100vw] h-[100vh]' > 
    <div className='grid grid-cols-5 grid-flow-col' >
        <RateForm locationDetails={locationDetails} handleCharge={handleRate} setLocationDetails={setLocationDetails} volumeDetails={volumeDetails} setvolumeDetails={setvolumeDetails}  />
    {totalCharges !==0 &&  <RateCharge volumetricWeight={volumetricWeight} volumeDetails={volumeDetails} locationDetails={locationDetails} totalCharges={totalCharges} />}
        </div>
    </div>
    </div>
    </div>
  )
}

export default RateCalculator