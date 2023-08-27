import React from "react"
import ReactDOM  from "react-dom/client"

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/premium-vector/food-box-logo-template-design_316488-1554.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = ({resObj}) => {
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src="https://b.zmtcdn.com/data/pictures/chains/9/65499/8096b242f31979a560e923310e07ee16_o2_featured_v2.jpg"></img>
            <h3>{resObj?.name}</h3>
            <h4>{resObj?.cuisines?.join(", ")}</h4>
            <h4>{resObj?.avgRating} stars</h4>
            <h4>{resObj?.time} minutes</h4>
        </div>
    )
}

const restObj = [
    {
        id: 1,
        name: "kfc",
        cuisines: ["Indian", "Italian", "Chinese", "Spanish"],
        avgRating: 3.8,
        time: 38
    },
    {
        id:2,
        name: "McDonalds",
        cuisines: ["Indian", "Italian"],
        avgRating: 4.3,
        time: 17
    },
]

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    restObj?.map(obj => <RestaurantCard  key={obj.id} resObj={obj}/>)
                }
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />)