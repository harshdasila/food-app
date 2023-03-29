import { useState,useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurantMenu = (idNo) =>{
    const [restaurant,setRestaurant] = useState(null);
    //api call
    useEffect(()=>{
        getRestaurantMenu();
    },[]);

    
    async function getRestaurantMenu() {
        // const data = await fetch(FETCH_MENU_URL+idNo);
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7688207&lng=76.574615&restaurantId="+idNo);
        const json = await data.json();
        setRestaurant(json.data);
    }
    //return
    return restaurant;
}
export default useRestaurantMenu;