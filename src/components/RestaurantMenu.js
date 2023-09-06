import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null)

    const {resId} = useParams()

    useEffect(() => {
        fetchMenu()
    },[])

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId)
        const json = await data.json()

        setResInfo(json?.data )
    }
    
    const {name , cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info || {}
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ||[]
    console.log("item careds Is ", itemCards)

    return !resInfo ? (<Shimmer />)
    :(
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines?.join(', ')} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards?.map(card => (
                    <li key={card?.card?.info?.id}>{card?.card?.info?.name} - Rs.{card?.card?.info?.defaultPrice/100 || card?.card?.info?.price/100}</li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;