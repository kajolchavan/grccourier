import { useEffect } from "react";
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Orders from "./pages/Orders"
import { useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import Login from "./pages/Login";
import { loadUser } from "./actions/userActions";
import CreateOrder from "./pages/CreateOrder";
import UpdateOrder from "./pages/UpdateOrder";
import RateCalculator from "./pages/RateCalculator";
import Success from "./pages/Success";
import Track from "./pages/Track";
import Profile from "./pages/Profile";
import CreateUser from "./pages/CreateUser";
import Users from "./pages/Users";
import CreateAddress from "./pages/CreateAddress";
import Addresses from "./pages/Addresses";
import AddInformation from "./pages/AddInformation";
import HelpandSupport from "./pages/HelpandSupport";
function App() {
   const { error, loading, isAuthenticated,users,userProfile } = useSelector(
    (state) => state.user
  );
  const navigate = useNavigate()
    const dispatch = useDispatch();
  useEffect(() => {
     if(isAuthenticated && !userProfile) {
    dispatch(loadUser(users));
  }
    if  (!isAuthenticated){
        navigate("/login")
      }
         
  }, [isAuthenticated])
  return (
    <div className="App">
     <Routes>
   {isAuthenticated &&   <Route exact path="/" element={<Home /> }   />}
   {isAuthenticated &&   <Route exact path="/track" element={<Track /> }   />}
    {isAuthenticated &&  <Route exact path="/orders" element={<Orders /> }   />}
    {isAuthenticated &&  <Route exact path="/success" element={<Success /> }   />}
    {isAuthenticated &&  <Route exact path="/createOrder" element={<CreateOrder /> }   />}
    {isAuthenticated &&  <Route exact path="/order/:id" element={<UpdateOrder /> }   />}
    {isAuthenticated &&  <Route exact path="/order/information/:id" element={<AddInformation /> }   />}
    {isAuthenticated &&  <Route exact path="/order/information/:id" element={<AddInformation /> }   />}
     {isAuthenticated &&  <Route exact path="/rateCalculator" element={<RateCalculator /> }   />}
     {isAuthenticated &&  <Route exact path="/profile" element={<Profile /> }   />}
     {isAuthenticated &&   <Route exact path="/create-user" element={<CreateUser /> }   />}
     {isAuthenticated &&   <Route exact path="/users" element={<Users /> }   />}
     {isAuthenticated &&   <Route exact path="/create-address" element={<CreateAddress /> }   />}
     {isAuthenticated &&   <Route exact path="/addresses" element={<Addresses /> }   />}
     {isAuthenticated &&   <Route exact path="/helpandsupport" element={<HelpandSupport /> }   />}
      <Route exact path="/login" element={<Login /> }   />
     </Routes>
    </div>
  );
}

export default App;
