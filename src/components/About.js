import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component{
    render(){
        return (
            <div>
                <h1>About</h1>
                <h2>this is react course</h2>
                <User name="Jayesh Kumar"/> 
                <UserClass name="Jayesh Kumar" location="Chennai" />
            </div>
        )
    }
}


export default About;