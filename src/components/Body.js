//Body
import { useState,useEffect } from "react";
import Card from "./RestaurantCard";
import { restaurantData } from "../constants";
import Shimmer from './Shimmer'
import About from "./About";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {

  const [searchText,setSearchText] = useState("");
  const [restaurants,setRestaurants] = useState([]);
  const [filteredRestaurants,setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
    }, []);

    async function getRestaurants(){
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.22305508561769&lng=79.49672799557447&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log(json);
      setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    const online = useOnline();//custom hook 
    if(!online) return <h1>🔴🔴🔴No internet connection 🔴🔴🔴</h1>

    
    if(!restaurants) return null; //early return -> not render component
    if(filteredRestaurants.length === 0 && restaurants.length>0) return <h1>Search not found</h1>;

    

    return (restaurants.length<1) ? <Shimmer/> : (
      <>
      <input className="inputText" placeholder="Search" type="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} ></input>
      <button className="search-btn" onClick={() => 
      {
        const data = filterData(searchText,restaurants)
        setFilteredRestaurants(data)
      }
      }>Search</button>
      <div className='container'>
        {
          filteredRestaurants.map((restaurant) =>{
            return  <Link to ={'/restaurantMenu/'+restaurant.data.id} key={restaurant.data.id}>
              <Card {...restaurant.data} />
              </Link>
          })
        }
      
      </div>
      </>
      
    )
}
export default Body;