import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItems } from "../utils/cartSlice";

const ItemList = ({items,btnName, btnCtaType}) => {
    const dispatch = useDispatch()
    const handleAddItem = (item) => {
        if(btnCtaType === "delete"){
            dispatch(removeItems(item?.card?.info?.id))
            return;
        }
        dispatch(addItem(item))
    }
    return (
        <div>
            {items?.map(item => (
                <div key={item?.card?.info?.id} className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between">
                    <div className="w-9/12">
                        <div  className="py-2">
                            <span>{item?.card?.info?.name}</span>
                            <span> - Rs.{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</span>
                        </div>
                        <p className="text-xs">{item?.card?.info?.description}</p>
                    </div> 
                    <div  className="w-3/12">
                        <div className="absolute">
                            <button onClick={() => handleAddItem(item)} className="p-2 mx-16 text-xs rounded-lg bg-black text-white shadow-lg m-auto">{btnName}</button>
                        </div>
                        <img src={CDN_URL + item?.card?.info?.imageId}/>
                    </div>           
                </div>
            ))}
        </div>
    )
}

export default ItemList;