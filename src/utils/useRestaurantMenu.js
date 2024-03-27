import { useEffect, useState } from "react";
import {RES_INFO} from './constants'

const useRestaurantmenu=(resId)=>{
    const [resInfo, setResInfo]=useState(null);

    useEffect(()=>{
        fetchResData()
       },[]);
   
       async function fetchResData(){
           const data=await fetch(RES_INFO+resId);
           const json= await data.json();
           // console.log(json.data.cards[0].card.card.info);
           setResInfo(json.data);
           
           
         }


    return  resInfo;

}

export default useRestaurantmenu;

