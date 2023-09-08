import React, { lazy, Suspense, useEffect, useState } from "react"
import ReactDOM  from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"
// import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
// import Grocery from "./components/Grocery"
import UserContext from "./utils/UserContext"

const Grocery = lazy(() => import("./components/Grocery"))
const About = lazy(() => import("./components/About"))

const AppLayout = () => {

    const [userInfo, setUserInfo] = useState()

    useEffect(() => {
        //api call
        const data = {
            name: "Jayesh"
        }

        setUserInfo(data.name)
    },[])

    return (
        <UserContext.Provider value={{loggedInUser: userInfo, setUserInfo}}>
            <div className="app">
                <Header />
                <Outlet />  {/** children will be filled according in wrt path  */}
            </div>
        </UserContext.Provider>
        
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense><About /></Suspense>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu /> 
            }
        ],
        errorElement: <Error />  
    },
] )

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />)