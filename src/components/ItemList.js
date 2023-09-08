import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {
    return (
        <div>
            {items.map(item => (
                <div key={item?.card?.info?.id} className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between">
                    <div>
                        <div  className="py-2">
                            <span>{item?.card?.info?.name}</span>
                            <span> - Rs.{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</span>
                        </div>
                        <p className="text-xs">{item?.card?.info?.description}</p>
                    </div> 
                    <div>
                        <div className="absolute">
                        <button className="p-2 mx-16 rounded-lg bg-white shadow-lg m-auto">Add +</button>
                        </div>
                        <img src={CDN_URL + item?.card?.info?.imageId} className="w-32"/>
                    </div>           
                </div>
            ))}
        </div>
    )
}

export default ItemList;