import React,{useState} from 'react'
import Navbar from '../components/Layout/Navbar'
import SidebarNav from '../components/Layout/Sidebar'
import UserForm from '../components/Createuser/UserForm'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../firebase.config'
import { doc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const CreateUser = () => {
  const [userInfo, setUserInfo] = useState({
    name:"",
    email:"",
    password:"",
    contact:"",
    role:"",
    partnerType:"",
    walletBalance:"",
    service:""
  })
  const navigate = useNavigate()
  const addUser = async () =>{
    createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
.then(async (userCredential) => {
 const user = userCredential.user;
       await setDoc(doc(db, "users",user.uid ), {
          name:userInfo.name,
          email:userInfo.email,
          password:userInfo.password,
          contact:userInfo.contact,
          role:userInfo.role,
          partnerType:userInfo.partnerType,
          walletBalance:userInfo.walletBalance,
          service:userInfo.service,
          uid:user.uid,
       })   
       navigate("/users")
}).catch((err)=>{
 console.log(err)
})
      
 }
  return (
    <div>
        <Navbar />
      <div className='flex gap-6' >
   <SidebarNav />
    <div className='bg-[#f1f1f1]  w-[100vw] h-[100vh]' > 
    <UserForm addUser={addUser} userInfo={userInfo} setUserInfo={setUserInfo} />
    </div>
    </div>
    </div>
  )
}

export default CreateUser