
import { useDispatch } from "react-redux";
import { RESTAURANTS_IMG } from "../utils/constants";
import { addItems } from "../utils/cartSlice";
const CategoryItems=({items})=>{
    // console.log(items)
    const dispatch=useDispatch();
    const addItemsHandler=(item)=>{
        dispatch(addItems(item))
    }
    return (<div>
        {items.map((item)=>(<div key={item.card.info.id} className=" border-b p-2 ">
            <div className=" flex justify-between text-left ">
                <div className=" w-9/12 ">
             <div >
                <span>{item.card.info.name}-</span>
                <span> ₹{ item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100}</span>
             </div>
             <p className=" text-xs mt-3 truncate">{item.card.info.description}</p>
             </div>
             <div className=" w-3/12">
                <button className=" absolute bg-black text-white py-1 px-2 rounded-md mx-14 my-16" onClick={()=>addItemsHandler(item)}>Add+</button>
                <img className=" rounded-md  w-full h-24" src={  RESTAURANTS_IMG+item.card.info.imageId}/>
             </div>
             </div>
        </div>
        ))}
    </div>)
}

export default CategoryItems;