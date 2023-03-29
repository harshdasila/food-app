import { useParams} from "react-router-dom";
import { useEffect ,useState} from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () =>{
    const params = useParams();
    const resID = params;
    const idNo = resID.id;
    console.log(idNo);
    const restaurant = useRestaurantMenu(idNo);
    console.log(restaurant)
    
    
    return (!restaurant) ? <Shimmer/>:(
        <>
            <div>
                <h1>{restaurant?.cards[0]?.card?.card?.info?.name}</h1>
                <img src={IMG_CDN_URL+restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId}/>
                <h2>City - {restaurant?.cards[0]?.card?.card?.info?.city}</h2>
                <h2>Average Rating - {restaurant?.cards[0]?.card?.card?.info?.avgRatingString}</h2>
            </div>
            <div>
                <h1>MENU</h1>
                
                <ul>
                    {Object.values(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards).map((item)=>(
                        <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
                    ))}
                </ul> 
            </div>
        </>
    );
}
export default RestaurantMenu;