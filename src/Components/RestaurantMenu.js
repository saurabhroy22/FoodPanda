import { useParams } from "react-router-dom";
import useRestaurantmenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState} from 'react'


const RestaurantMenu=()=>{
    const {resId}=useParams();
    const resInfo=useRestaurantmenu(resId);
    
    const [showIndex, setShowIndex]=useState(null);

      if(resInfo===null) return;  
      
      
      const {name, cuisines,avgRatingString, costForTwoMessage,totalRatingsString}=resInfo?.cards[2]?.card?.card?.info;
      const {cards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
      // console.log(cards)

     const categories=cards.filter(c=>c?.card?.["card"]?.["@type"]=='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
    //  console.log(categories)

      

    return (<div className="text-center mx-auto w-6/12">
       <div className=" mt-10 flex justify-between border-b-2 py-4">
       <div className=" text-start">
       <h1 className=" font-sans text-2xl mb-1">{name}</h1>
      <span>{cuisines.join(', ')}--</span>
      <span>{costForTwoMessage}</span>
       </div>
       <div className=" border p-1 shadow-2xl rounded-md bg-pink-400">
          <span>⭐  {avgRatingString}</span><br></br>
          <span className=" text-xs">{totalRatingsString}</span>
       </div>
       </div>
        {categories.map((category, index)=>(<RestaurantCategory key={category?.card?.card.title} data={category?.card?.card} showItems={index==showIndex  ? true: false} setShowIndex={()=>{showIndex==null?setShowIndex(index):setShowIndex(null) }}/>))}
        
    </div>)
}
export default RestaurantMenu;