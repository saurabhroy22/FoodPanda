import { useDispatch, useSelector } from "react-redux";
import CategoryItems from "./CategoryItems";
import { Link } from "react-router-dom";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{
    const cart=useSelector((store)=>store.cart.items)
    const dispatch=useDispatch();
    const clearCartHandler=()=>{
        dispatch(clearCart())
    }
    // console.log(cart)
    return (<div className=" text-center mt-4 mx-auto p-2 w-1/2 ">
         <span className=" font-sans text-xl bg-pink-400 p-2 rounded-md shadow-xl"> Welcome to your Cart</span>
         <div className="mt-4 flex justify-between">
           <Link to={'/'}> <button className=" bg-pink-400 p-2 rounded-md hover:bg-pink-500">Add more items</button></Link>
            <button className=" bg-pink-400 p-2 rounded-md hover:bg-pink-500" onClick={clearCartHandler}>Clear Cart</button>
         </div>
         <div className="  mx-auto my-6 p-2 bg-pink-400 rounded-md">
            {cart.length===0?"Want to have something? Add some items mate..":(<CategoryItems items={cart}/>)}
         
         </div>
    </div>)
}

export default Cart;