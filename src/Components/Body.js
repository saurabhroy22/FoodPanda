import { useEffect, useState } from "react";
import RestaurantCard, {WithPromoted}from "./RestaurantCard";
import { API_RES } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body=()=>{
    const [listOfRestaurant, setListOfRestaurant]=useState([]);
    const [filteredRestaurant, setFilteredRestaurant]=useState([]);

    const [searchText,setSearchText]=useState('');

    const PromotedRestaurantCard=WithPromoted(RestaurantCard);

    const fetchData= async()=>{
       const data= await fetch(API_RES);
       const json= await data.json();
    //    console.log(json.data.cards[4].card.card.gridElements.infoWithStyle);
       const {restaurants}=json.data.cards[4].card.card.gridElements.infoWithStyle;
    //    console.log(restaurants)
       setListOfRestaurant(restaurants);
       setFilteredRestaurant(restaurants);
    };

    useEffect(()=>{
        fetchData();
    },[]);

    if(filteredRestaurant.length===0) return <Shimmer/>;
    
    return(<div className=" mt-8">
        <div className="  flex justify-between">
        <div className= " m-4 mx-16 p-4">
        <button onClick={()=>{
                
                setFilteredRestaurant(listOfRestaurant);

            }} className=" px-6 py-2 font-sans bg-pink-400 hover:bg-pink-500 rounded-md"> All</button>
          
        <button onClick={()=>{
                const filterRestaurant=listOfRestaurant.filter(res=>res.info.avgRating>4);
                setFilteredRestaurant(filterRestaurant);

            }} className=" p-2  font-sans bg-pink-400 ml-9 hover:bg-pink-500 rounded-md"> TOP RATED</button>
          
        <button className=" p-2  font-sans bg-pink-400 ml-9 hover:bg-pink-500 rounded-md"> ONLY VEG</button>
          
        <button className=" p-2  font-sans bg-pink-400 ml-9 hover:bg-pink-500 rounded-md"> FAST DELIVERY</button>

         </div>
         <div className=" m-10">
            <input className=" h-9 border border-solid border-black px-2 rounded-md" placeholder="Search Restaurants" type=" text" value={searchText} onChange={(e)=>setSearchText(e.target.value)} ></input>
            <button className=" p-2  font-sans bg-pink-400 ml-4 hover:bg-pink-500 rounded-md" onClick={
            ()=>{
            const filterName=listOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestaurant(filterName);

            }
            
            }> SEARCH</button>

         </div>

         </div>

        <div className=' w-[100%] flex flex-wrap gap-16 justify-center py-6'>
            {
                filteredRestaurant.map(restaurant=><Link key= {restaurant.info.id} to={'/restaurants/'+restaurant.info.id}>
                   
                    {restaurant.info.avgRating>=4.3?(<PromotedRestaurantCard resData={restaurant}/>):(<RestaurantCard  resData={restaurant}/>)}
                    </Link>)
            }
            
        </div>
        </div>
    )
}
export default Body;