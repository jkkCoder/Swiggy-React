import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext"

class About extends React.Component{
    render(){
        return (
            <div className="p-4 m-4">
                <h1>About</h1>
                <div>
                    LoggedIn User :
                    <UserContext.Consumer>
                        {(data) => <h1 className="font-bold">{data.loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h2>this is react course</h2>
                <User name="Jayesh Kumar"/> 
                <UserClass name="Jayesh Kumar" location="Chennai" />
            </div>
        )
    }
}


export default About;