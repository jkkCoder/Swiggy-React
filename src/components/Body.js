import { useState } from "react";
import { restaurantList } from "../utils/mocks";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const [listOfRestaurants , setListOfRestaurants] = useState(restaurantList)
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredData = restaurantList?.filter(list => parseFloat(list.data.avgRating) > 4)
                    setListOfRestaurants(filteredData)
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants?.map(obj => <RestaurantCard  key={obj.id} resObj={obj}/>)
                }
            </div>
        </div>
    )
}

export default Body;