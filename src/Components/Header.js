import { useState,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
// import useOnlineStatus from "../utils/useOnlineStatus";
const Header=()=>{
    const [logginBtn, setLoginBtn]=useState("Sign In");
    // const onlineStatus=useOnlineStatus();
    const data=useContext(UserContext);
    ///SUBSCRIBING TO YOUR STORE
    const cart=useSelector((store)=>store.cart.items);
    // console.log(cart)

    return (

    <div className=' shadow-xl flex justify-between rounded-br-md rounded-bl-md bg-pink-400'>
        <Link to={'/'}>
       <div className=' w-32 m-2 p-2'>
           <img className=" rounded-md shadow-2xl" src={LOGO_URL}/>
       </div>
       </Link>
       <div className=' flex m-2 p-8'>
           <ul className=' flex gap-4 mr-6'>
               <li ><Link to={'/'}> Home </Link></li>
               <li> <Link to={'/about'}> About </Link></li>
                
               <li><Link to={'/contact'}> Contact </Link></li>
               <li><Link to={'/cart'}> Cart-({cart.length} items)</Link></li>
               {/* <li> User: {data.loggedInUser}</li> */}
               {/* <li><Link to={'/grocery'}> Grocery </Link></li> */}
               {/* <li > Online {onlineStatus==='true'?'🟢':"🚩"}</li> */}
              
           </ul>
           <div>
           <button  className="   border-2 px-6  rounded-md hover:bg-pink-500"  onClick={()=>{
                logginBtn==='Sign In'?setLoginBtn('Sign Out'):setLoginBtn('Sign In');
               }}>{logginBtn}</button>
           </div>
       </div>
      </div>
      
      )
}

export default Header;