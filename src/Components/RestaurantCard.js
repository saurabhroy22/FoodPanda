import { RESTAURANTS_IMG } from "../utils/constants";

const RestaurantCard=(props)=>{
    const {resData}=props;
    const {name,id,avgRating,costForTwo,cloudinaryImageId,cuisines}=resData.info;
 return (    
    <div className='  w-64  p-2 rounded-md shadow-lg hover:rounded-lg hover:bg-pink-300'>
      <div className=" ">
      <img  className=' shadow-xl rounded-md w-full h-52'  src={RESTAURANTS_IMG+cloudinaryImageId}/>

      </div>
      <h6 className=' font-sans mt-8 text-xl truncate'>{name}</h6>

       <div className=' mt-2 flex justify-between'>
         
       <p>{avgRating+'⭐'}</p>
       <p>{costForTwo}</p>
       
       </div>
       <p className=' mt-2 truncate'>{cuisines.join(', ')}</p>

    </div>
)
}

export const WithPromoted=(RestaurantCard)=>{
   return (props)=>{
      return (<div>
         <label className=" absolute p-1 text-sm rounded-md  bg-pink-400"> Promoted</label>
         <RestaurantCard {...props}/>
      </div>)
   }

}
export default RestaurantCard;