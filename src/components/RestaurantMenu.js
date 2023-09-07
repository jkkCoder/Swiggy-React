import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const {resId} = useParams()
    const resInfo = useRestaurantMenu()
    
    const {name , cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info || {}
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ||[]

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