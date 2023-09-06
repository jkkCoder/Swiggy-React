import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [listOfRestaurants , setListOfRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    const [searchText, setSearch] = useState("")

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING')
        const json = await data.json()

        // setListOfRestaurants(json?.data?.card[2]?.data?.data?.cards);     //api has changed, this is fetching wrong so uisng mock data only
        setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }

    return filteredRestaurants.length === 0 ?
        <Shimmer />
    : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="searc-box" value={searchText} onChange={e => setSearch(e.target.value)}/>
                    <button onClick={() => {
                        const filteredRestaurant = listOfRestaurants.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRestaurants(filteredRestaurant)
                    }}>search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredData = filteredRestaurants?.filter(list => {

                        return parseFloat(list?.info?.avgRating) > 4
                    })
                    setFilteredRestaurants(filteredData)
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurants?.map(obj => (
                        <Link key={obj.info.id} to={"/restaurant/" +obj.info.id}>
                            <RestaurantCard resObj={obj?.info}/>
                        </Link>
                    ))
                } 
            </div>
        </div>
    )         
}

export default Body;