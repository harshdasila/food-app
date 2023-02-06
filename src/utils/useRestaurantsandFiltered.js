// import { useState,useEffect } from "react";
// const useRestaurantsandFiltered = () =>{

//     const [restaurants,setRestaurants] = useState([]);
//     const [filteredRestaurants,setFilteredRestaurants] = useState([]);

//     useEffect(() => {
//         getRestaurants();
//         }, []);
    
//         async function getRestaurants(){
//           const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.22305508561769&lng=79.49672799557447&page_type=DESKTOP_WEB_LISTING");
//           const json = await data.json();
//           console.log(json);
//           setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
//           setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);

//         return [restaurants,filteredRestaurants];
// }
// export default useRestaurantsandFiltered;