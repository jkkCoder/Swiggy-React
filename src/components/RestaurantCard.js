import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({resObj}) => {
    console.log("rest obj is ", resObj)
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={CDN_URL}></img>
            <h3>{resObj?.data?.name}</h3>
            <h4>{resObj?.data?.cuisines?.join(", ")}</h4>
            <h4>{resObj?.data?.avgRating} stars</h4>
            <h4>{resObj?.data?.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;