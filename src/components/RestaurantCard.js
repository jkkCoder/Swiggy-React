import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({resObj}) => {
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={CDN_URL + resObj.cloudinaryImageId}></img>
            <h3>{resObj?.name}</h3>
            <h4>{resObj?.cuisines?.join(", ")}</h4>
            <h4>{resObj?.avgRating} stars</h4>
            <h4>{resObj?.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;