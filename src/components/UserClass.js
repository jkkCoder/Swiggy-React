import React from "react"

class UserClass extends React.Component {

    constructor(props) {
        super(props) 

        this.state = {
            count1:0,
            count2:0
        }
    }

    componentDidMount() {
        // it's like useEffect with array dependency
    }

    componentDidUpdate() {

    }

    componentWillUnmount() {
        
    }

    render() {
        return (
            <div className="user-card">
                <h1>Count : {this.state.count1}</h1>
                <button onClick={() => {
                    this.setState({
                        count1: this.state.count1 + 1
                    })
                }}>Increment</button>
                <h2>Name: {this.props.name}</h2>
                <h3>Location: {this.props.location}</h3>
                <h4>Contact: 9080498487</h4>
            </div>
        )
    }
}

export default UserClass;