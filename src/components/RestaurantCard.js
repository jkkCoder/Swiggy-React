import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({resObj}) => {
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="rounded-lg" alt="res-logo" src={CDN_URL + resObj.cloudinaryImageId}></img>
            <h3 className="font-bold py-4 text-lg2">{resObj?.name}</h3>
            <h4>{resObj?.cuisines?.join(", ")}</h4>
            <h4>{resObj?.avgRating} stars</h4>
            <h4>{resObj?.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;