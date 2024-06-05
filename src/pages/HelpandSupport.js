import React,{useEffect, useState} from 'react'
import Navbar from '../components/Layout/Navbar'
import SidebarNav from '../components/Layout/Sidebar'
import SupportForm from '../components/Support/SupportForm'
import SupportBanner from '../components/Support/SupportBanner'
import { push, ref, set } from 'firebase/database'
import { database, db } from '../firebase.config'
import { useSelector } from 'react-redux'
import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, where } from 'firebase/firestore'
import SupportList from '../components/Support/SupportList'

const HelpandSupport = () => {
    const { error, loading, isAuthenticated,users,userProfile } = useSelector(
        (state) => state.user
      );
    const [formInfo, setFormInfo] = useState({
        name:"",
        email:"",
        contactNo:"",
        orderID:"",
        query:""
    })
   
    const [queryList, setQueryList] = useState([])
    const removeQuery = async (id) =>{
        await deleteDoc(doc(db, "queries", id));
        window.location.reload()
    }
    const handleQuery = () =>{
        if(formInfo?.name?.length === 0){
            alert("Enter Name")
          }
          else if(formInfo?.email?.length === 0){
            alert("Enter Email")
          }
          else if(formInfo?.contactNo?.length === 0){
            alert("Enter  Contact Number")
          }
          else if(formInfo?.orderID?.length === 0){
            alert("Enter OrderID")
          }
          else if(formInfo?.query?.length === 0){
            alert("Enter Query")
          }

          else{
            addDoc(collection(db, "queries" ), {
                name:formInfo.name,
                email:formInfo.email,
                contactNo:formInfo.contactNo,
                orderID:formInfo.orderID,
                query:formInfo.query,
                userId:users
             }).then(()=>{
       
          setFormInfo({
            name:"",
            email:"",
            contactNo:"",
            orderID:"",
            query:""
          })
        })
          }
    }
    const fetchQueries = async () =>{
        const q = query(collection(db, "queries"), where("userId", "==", users));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  setQueryList((prev)=>[...prev,{
    id:doc.id,
    ...doc.data()
   }])
    });
    }
    useEffect(() => {
     fetchQueries()
    
      
    }, [])
    
  return (
    <div>
    <Navbar />
  <div className='flex gap-6' >
<SidebarNav />
<div className='bg-[#f1f1f1] overflow-y-scroll  w-[100vw] h-[100vh]' > 

    <SupportBanner />
    <SupportForm handleQuery={handleQuery} formInfo={formInfo} setFormInfo={setFormInfo} />
    <SupportList removeQuery={removeQuery} supportList={queryList}/>
</div>
</div>
</div>
  )
}

export default HelpandSupport