import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import { Input, Button } from '@material-tailwind/react'
import React from 'react'
import Logo from "../../asset/grc-logo.png"
const LoginForm = ({email,setEmail,password,setPassword,showPassword,setShowPassword,handleLogin}) => {
  return (
    <div className='flex relative items-center justify-center  flex-col ' >
    <div className='absolute right-[5%] top-[5%]' >
    <img className='w-[100px]' src={Logo} />
    </div>
        <h4 className='font-[600] mb-6 text-[2rem]'>Login</h4>
        <div className='flex items-center justify-center flex-col gap-4' >
        <div className=" flex w-full ">
     
            <Input value={email} onChange={(e)=>setEmail(e.target.value)} label='Email' />
            </div>
            <div className="relative flex w-full ">
            <Input
        
        label="Password"
        value={password} 
       
        onChange={(e)=>{setPassword(e.target.value)}}
        type={showPassword ? "text" : "password"}
        className="pr-20"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <button
        
       
        disabled={!password}
        onClick={()=>setShowPassword(!showPassword)}
        className="!absolute  right-2 top-3 "
      >
        {showPassword ? <EyeSlashIcon className='w-[15px]  text-blue-500' /> :<EyeIcon className='w-[15px] text-blue-500' />}
      </button>
      </div>
        <Button onClick={handleLogin} >Submit</Button>
        </div>
    </div>
  )
}

export default LoginForm