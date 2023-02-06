import { useState,useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurantMenu = (idNo) =>{
    const [restaurant,setRestaurant] = useState(null);
    //api call
    useEffect(()=>{
        getRestaurantMenu();
    },[]);

    
    async function getRestaurantMenu() {
        const data = await fetch(FETCH_MENU_URL+idNo);
        const json = await data.json();
        setRestaurant(json.data);
    }
    //return
    return restaurant;
}
export default useRestaurantMenu;