import { Button } from '@material-tailwind/react'
import React from 'react'

const InformationForm = ({totalPrice,setTotalPrice,handleAddInvoice,invoice,setInvoice,updateOrder,orderStatus,setOrderStatus,currentLocation,setCurrentLocation}) => {
  return (
    <div className="mt-[100px]   pl-[100px] pr-[20px]">
        <div className='bg-white py-6 px-12 rounded-lg' >
            <h3 className='font-[InterBold] text-[1.5rem]' >Add Order Information:</h3>
            <div className='mt-6 flex items-center gap-12 justify-start' >
                <p>Add Order Total Price</p>
                <input
              value={totalPrice}
              onChange={(e) => setTotalPrice(e.target.value)}
                placeholder="Enter Total Final Price"
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="number"
              />
            </div>
            <div className='mt-6 flex items-center gap-12 justify-start' >
                <p>Add Order Status</p>
                <select
              value={orderStatus}
              onChange={(e) => setOrderStatus(e.target.value)}
               
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                
              >
              <option value="">Select a Status</option>
              <option value="Pending">Pending</option>
              <option value="pickupRequest">Pickup Request</option>
              <option value="pickedUp">Pickedup</option>
              <option value="inTransit">In Transit</option>
              <option value="delivered">Delivered</option>
               </select>
            </div>
          {orderStatus === "inTransit" && <div className='mt-6 flex items-center gap-12 justify-start' >
                <p>Add Current Location</p>
                <input
              value={currentLocation}
              onChange={(e) => setCurrentLocation(e.target.value)}
                placeholder="Enter Current Location"
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
            </div>}
            <div className='mt-6 flex items-center gap-12 justify-start' >
                <p>Add Invoice</p>
                <div className='my-6' >
          <p className='font-[InterBold]' >Upload Invoice</p>
          <form  onSubmit={handleAddInvoice} className='form flex items-center justify-center flex-col my-6 '>
             <input type='file' />
            <Button ha className='my-6' type='submit' size="md">Submit</Button>
         </form>
       
        </div>
        {invoice.length !==0 && <img className='w-[100px]' src={invoice} />}
            </div>
            <div className='flex items-center justify-end' >
                <Button onClick={updateOrder} >Update Order</Button>
            </div>
        </div>
        
    </div>
  )
}

export default InformationForm