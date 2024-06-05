import { Button } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className='flex items-center justify-center h-[100vh]' >
        <div>
            <h3 className='font-[InterBlack] text-[3rem] text-center ' >Order Created Successfully</h3>
            <div className='flex items-center justify-center' >
           <Link to="/orders" > <Button>View Orders</Button></Link>
            </div>
        </div>
    </div>
  )
}

export default Success