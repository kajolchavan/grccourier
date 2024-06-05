import React,{useState,useEffect} from 'react'
import { Card, Typography } from "@material-tailwind/react";
import { db } from '../firebase.config';
import { collection, query, where, getDocs, doc,  onSnapshot, orderBy, updateDoc } from "firebase/firestore";
import Orderlist from '../components/Orders/Orderlist';
import Navbar from '../components/Layout/Navbar';
import SidebarNav from '../components/Layout/Sidebar';
import OrderTop from '../components/Orders/OrderTop';
import OrderTab from '../components/Orders/OrderTab';
import { useSelector } from 'react-redux';

const Orders = () => {
  const [status, setStatus] = useState("all")
  const [orderList, setOrderList] = useState([])
  const [filteredOrderList, setFilteredOrderList] = useState([])
  const [orderStatus, setOrderStatus] = useState("")
  const { error, loading, isAuthenticated,users,userProfile } = useSelector(
    (state) => state.user
  )
  const fetchAdminProperties = async () =>{
    setOrderList([])
    setFilteredOrderList([])
if(status==="delivered"){
      const q = query(collection(db, "shieldOrders"), where("orderStatus", "==", "delivered"));
      const querySnapshot = await getDocs(q);
       querySnapshot.forEach((doc) => {
        const  data = doc.data()
      
          setOrderList((prev)=>[...prev,{
            id:doc.id,
            ...doc.data()
           }])
           setFilteredOrderList((prev)=>[...prev,{
             id:doc.id,
             ...doc.data()
            }])
        
       
    })
    
    
  }
else if(status==="inTransit"){
    const q = query(collection(db, "ecomOrder"), where("orderStatus", "==", "inTransit"));
    const querySnapshot = await getDocs(q);
     querySnapshot.forEach((doc) => {
      const  data = doc.data()
      
        setOrderList((prev)=>[...prev,{
          id:doc.id,
          ...doc.data()
         }])
         setFilteredOrderList((prev)=>[...prev,{
           id:doc.id,
           ...doc.data()
          }])
     
  })
  
  
}
else if(status==="pickedUp"){
  const q = query(collection(db, "ecomOrder"), where("orderStatus", "==", "pickedUp"));
  const querySnapshot = await getDocs(q);
   querySnapshot.forEach((doc) => {
    const  data = doc.data()
    
      setOrderList((prev)=>[...prev,{
        id:doc.id,
        ...doc.data()
       }])
       setFilteredOrderList((prev)=>[...prev,{
         id:doc.id,
         ...doc.data()
        }])
  
})


}
else if(status==="pickupRequest"){
  const q = query(collection(db, "ecomOrder"), where("orderStatus", "==", "pickupRequest"));
  const querySnapshot = await getDocs(q);
   querySnapshot.forEach((doc) => {
   const  data = doc.data()
   
      setOrderList((prev)=>[...prev,{
        id:doc.id,
        ...doc.data()
       }])
       setFilteredOrderList((prev)=>[...prev,{
         id:doc.id,
         ...doc.data()
        }])
   
  
    
})

}
else if(status==="new"){
  const q = query(collection(db, "ecomOrder"), where("orderStatus", "==", "Pending"));
  const querySnapshot = await getDocs(q);
   querySnapshot.forEach((doc) => {
    const  data = doc.data()
   
      setOrderList((prev)=>[...prev,{
        id:doc.id,
        ...doc.data()
       }])
       setFilteredOrderList((prev)=>[...prev,{
         id:doc.id,
         ...doc.data()
        }])
   
})

}
else{
  const querySnapshot = await getDocs(collection(db, "ecomOrder"));
    querySnapshot.forEach((doc) => {
      const  data = doc.data()
     
        setOrderList((prev)=>[...prev,{
          id:doc.id,
          ...doc.data()
         }])
         setFilteredOrderList((prev)=>[...prev,{
           id:doc.id,
           ...doc.data()
          }])
     
  
    });
}
}
  const fetchProperties = async () =>{
    setOrderList([])
    setFilteredOrderList([])
if(status==="delivered"){
      const q = query(collection(db, "shieldOrders"), where("orderStatus", "==", "delivered"));
      const querySnapshot = await getDocs(q);
       querySnapshot.forEach((doc) => {
        const  data = doc.data()
        if(data.uid === users){
          setOrderList((prev)=>[...prev,{
            id:doc.id,
            ...doc.data()
           }])
           setFilteredOrderList((prev)=>[...prev,{
             id:doc.id,
             ...doc.data()
            }])
        }
        else{
          return;
        }
    })
    
    
  }
else if(status==="inTransit"){
    const q = query(collection(db, "ecomOrder"), where("orderStatus", "==", "inTransit"));
    const querySnapshot = await getDocs(q);
     querySnapshot.forEach((doc) => {
      const  data = doc.data()
      if(data.uid === users){
        setOrderList((prev)=>[...prev,{
          id:doc.id,
          ...doc.data()
         }])
         setFilteredOrderList((prev)=>[...prev,{
           id:doc.id,
           ...doc.data()
          }])
      }
      else{
        return;
      }
  })
  
  
}
else if(status==="pickedUp"){
  const q = query(collection(db, "ecomOrder"), where("orderStatus", "==", "pickedUp"));
  const querySnapshot = await getDocs(q);
   querySnapshot.forEach((doc) => {
    const  data = doc.data()
    if(data.uid === users){
      setOrderList((prev)=>[...prev,{
        id:doc.id,
        ...doc.data()
       }])
       setFilteredOrderList((prev)=>[...prev,{
         id:doc.id,
         ...doc.data()
        }])
    }
    else{
      return;
    }
})


}
else if(status==="pickupRequest"){
  const q = query(collection(db, "ecomOrder"), where("orderStatus", "==", "pickupRequest"));
  const querySnapshot = await getDocs(q);
   querySnapshot.forEach((doc) => {
   const  data = doc.data()
    if(data.uid === users){
      setOrderList((prev)=>[...prev,{
        id:doc.id,
        ...doc.data()
       }])
       setFilteredOrderList((prev)=>[...prev,{
         id:doc.id,
         ...doc.data()
        }])
    }
    else{
      return;
    }
  
    
})

}
else if(status==="new"){
  const q = query(collection(db, "ecomOrder"), where("orderStatus", "==", "Pending"));
  const querySnapshot = await getDocs(q);
   querySnapshot.forEach((doc) => {
    const  data = doc.data()
    if(data.uid === users){
      setOrderList((prev)=>[...prev,{
        id:doc.id,
        ...doc.data()
       }])
       setFilteredOrderList((prev)=>[...prev,{
         id:doc.id,
         ...doc.data()
        }])
    }
    else{
      return;
    }
})

}
else{
  const querySnapshot = await getDocs(collection(db, "ecomOrder"));
    querySnapshot.forEach((doc) => {
      const  data = doc.data()
      if(data.uid === users){
        setOrderList((prev)=>[...prev,{
          id:doc.id,
          ...doc.data()
         }])
         setFilteredOrderList((prev)=>[...prev,{
           id:doc.id,
           ...doc.data()
          }])
      }
      else{
        return;
      }
  
    });
}
}
const filterBySearch = (event) => {
  const query = event.target.value;
  var updatedList = [...orderList];
  updatedList = updatedList.filter((item) => {
    return item?.orderID.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });
  setFilteredOrderList(updatedList);
};
const updateOrder= async (id) =>{
  const repairRef = doc(db, "ecomOrder", id);

// Set the "capital" field of the city 'DC'
await updateDoc(repairRef, {
  orderStatus:"pickupRequest",
  
  });
  window.location.reload();

}
console.log(filteredOrderList,orderList)
  useEffect(() => {
    if(userProfile?.role==="admin"){
      fetchAdminProperties()
    }
    else{
      fetchProperties()
    }
    
      
    }, [status,userProfile])
  return (
    <div>
    <Navbar />
    <div className='flex gap-6' >
   <SidebarNav />
    <div className='bg-[#f1f1f1]  w-[100vw] h-[100vh]' > 
     <OrderTop filterBySearch={filterBySearch} />
     <OrderTab  status={status} setStatus={setStatus} />
     <Orderlist filteredOrderList={filteredOrderList} updateOrder={updateOrder} orderStatus={orderStatus} setOrderStatus={setOrderStatus}  orderList={orderList}/>
    </div>
    </div>
    </div>
  )
}

export default Orders