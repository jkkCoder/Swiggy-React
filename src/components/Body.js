import { useEffect, useState } from "react";
import { restaurantList } from "../utils/mocks";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants , setListOfRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    const [searchText, setSearch] = useState("")

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING')
        const json = data.json()

        console.log(json) 
        // setListOfRestaurants(json?.data?.card[2]?.data?.data?.cards);     //api has changed, this is fetching wrong so uisng mock data only
        setListOfRestaurants(restaurantList)
        setFilteredRestaurants(restaurantList)
    }

    return filteredRestaurants  .length === 0 ?
        <Shimmer />
    : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="searc-box" value={searchText} onChange={e => setSearch(e.target.value)}/>
                    <button onClick={() => {
                        const filteredRestaurant = listOfRestaurants.filter(res => res.data.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRestaurants(filteredRestaurant)
                    }}>search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredData = restaurantList?.filter(list => parseFloat(list.data.avgRating) > 4)
                    setListOfRestaurants(filteredData)
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurants?.map(obj => <RestaurantCard  key={obj.id} resObj={obj}/>)
                } 
            </div>
        </div>
    )         
}

export default Body;