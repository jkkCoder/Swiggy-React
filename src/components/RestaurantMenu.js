import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const {resId} = useParams()
    const resInfo = useRestaurantMenu(resId)

    const [showIndex, setShowIndex] = useState(null)
    
    const {name , cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info || {}

    const categories = resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )

    return !resInfo ? (<Shimmer />)
    :(
        <div className="text-center">
            <h1 className="font-bold my-5 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines?.join(', ')} - {costForTwoMessage}</p>
            {
                categories.map((category, index) => (
                    <ResCategory 
                        key={category?.card?.card?.title} 
                        data={category?.card?.card} 
                        showItems={showIndex === index}
                        setShowIndex={() => {
                            if(index === showIndex)
                                return setShowIndex(null)
                            setShowIndex(index)
                        }}
                    />
                ))
            }
        </div>
    )
}

export default RestaurantMenu;