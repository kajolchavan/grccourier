import React, { useEffect, useState } from 'react'
import LoginForm from '../components/Login.js/LoginForm'
import { useDispatch, useSelector } from 'react-redux'
import { loginUsingEmail } from '../actions/userActions'
import { useNavigate } from 'react-router-dom'
import LoginImage from "../asset/loginVector.jpg"
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const dispatch = useDispatch();
   const navigate =  useNavigate()
    const { error, loading, isAuthenticated,users,userProfile } = useSelector(
    (state) => state.user
  );
    const handleLogin = () =>{
        dispatch(loginUsingEmail(email,password))
    }
    useEffect(() => {
        if(isAuthenticated){
            navigate("/orders")
        }
    }, [isAuthenticated])
  return (
    <div className='grid grid-cols-2 h-[100vh] grid-flow-col' >
    <div >
      <img src={LoginImage} />
    </div>
        <LoginForm email={email} handleLogin={handleLogin} showPassword={showPassword} setShowPassword={setShowPassword} setEmail={setEmail} password={password} setPassword={setPassword} />
    </div>
  )
}

export default Login