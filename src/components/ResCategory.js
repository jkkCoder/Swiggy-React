import { useState } from "react"
import ItemList from "./ItemList"

const ResCategory = ({data,showItems,setShowIndex}) => {
    const handleClick = () => {
        setShowIndex()
    }
    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <div onClick={handleClick} className="cursor-pointer flex justify-between">
                    <span className="font-bold text-lg">{data.title} ({data?.itemCards?.length})</span>
                    <span>🔽</span>
                </div>
                {showItems && <ItemList items={data?.itemCards} />}
            </div>            
        </div>

        
    )
}

export default ResCategory