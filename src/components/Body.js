import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState} from "react";


const Body = () => {
    //local state variable - super power variable
    const [listOfRestaurants, setListOfRestaurant] = useState(resList);

    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={() => {
                const filteredListOfRestaurants = listOfRestaurants.filter((res)=>res.info.avgRating>4);
                setListOfRestaurant(filteredListOfRestaurants);
                console.log(filteredListOfRestaurants);
                }}>
                    Top Rated Restaurants
            </button>
        </div>
        <div className="res-container">
          {listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;