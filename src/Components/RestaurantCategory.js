import { useState } from "react";
import CategoryItems from "./CategoryItems";

const RestaurantCategory=({data, showItems,setShowIndex})=>{

   const [arrow, setArrow]=useState(false);

    const toggleHandler=()=>{
       setShowIndex();
       setArrow(!arrow);
    }
     return (<div className=" mt-4">
        <div className=" my-1 bg-pink-400 shadow-md rounded-md p-2 ">
            <div className=" flex justify-between cursor-pointer" onClick={toggleHandler}>
        <span className=" font-sans text-lg">{data.title} ({data.itemCards.length})</span>
        <span>{arrow===false?"🔽":"🔼"}</span>
        </div>
        { showItems && <CategoryItems items={data.itemCards}/>}
        </div>
     </div>)
}

export default RestaurantCategory;