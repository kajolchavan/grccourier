import React from 'react'
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
const FormStep = ({activeStep,setIsLastStep,setIsFirstStep,setActiveStep}) => {
  return (
    <div className='w-[500px] pl-[30px] my-6' >
         <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step className='w-[30px] h-[30px]' onClick={() => setActiveStep(0)}>
    <p className='text-[.7rem]' >1</p>
          <div className="absolute -bottom-[2.5rem] w-max text-center">
            <p
             className='font-[InterMedium] text-[.8rem] text-black'
            >
              Shipping Details
            </p>
           
          </div>
        </Step>
        <Step className='w-[30px] h-[30px]' onClick={() => setActiveStep(1)}>
         <p className='text-[.7rem]'>2</p>
          <div className="absolute -bottom-[2.5rem] w-max text-center">
            <p
              className='font-[InterMedium] text-[.8rem] text-black'
              
            >
              Pickup Details
            </p>
           
          </div>
        </Step>
        <Step className='w-[30px] h-[30px]' onClick={() => setActiveStep(2)}>
         <p className='text-[.7rem]'>3</p>
          <div className="absolute -bottom-[2.5rem] w-max text-center">
            <p
                className='font-[InterMedium] text-[.8rem] text-black'
            >
            Order Details
            </p>
          
          </div>
        </Step>
      </Stepper>
    </div>
  )
}

export default FormStep