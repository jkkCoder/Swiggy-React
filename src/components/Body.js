import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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

    console.log("list of restuarants ", listOfRestaurants)

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false)  return <h1>Looks like your internet connection is gone</h1>

    return filteredRestaurants?.length === 0 ?
        <Shimmer />
    : (
        <div className="body">
            <div className="flex">
                <div className=" m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={e => setSearch(e.target.value)}/>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
                        const filteredRestaurant = listOfRestaurants?.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRestaurants(filteredRestaurant)
                        setSearch("")
                    }}>search</button>
                </div>
                <div className=" m-4 p-4 flex items-center">
                    <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
                        const filteredData = filteredRestaurants?.filter(list => {

                            return parseFloat(list?.info?.avgRating) > 4
                        })
                        setFilteredRestaurants(filteredData)
                    }}>Top Rated Restaurants</button>
                </div>  
            </div>
            <div className="flex flex-wrap">
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