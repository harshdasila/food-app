import { useParams} from "react-router-dom";
import { useEffect ,useState} from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () =>{
    const params = useParams();
    const resID = params;
    const idNo = resID.id;
    const restaurant = useRestaurantMenu(idNo);
    
    
    return (!restaurant) ? <Shimmer/>:(
        <>
            <div>
                <h1>{restaurant.name}</h1>
                <img src={IMG_CDN_URL+restaurant.cloudinaryImageId}/>
                <h2>City - {restaurant.city}</h2>
                <h2>Average Rating - {restaurant.avgRating}</h2>
            </div>
            <div>
                <h1>MENU</h1>
                
                <ul>
                    {Object.values(restaurant?.menu?.items).map((item)=>(
                        <li key={item?.id}>{item?.name}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}
export default RestaurantMenu;