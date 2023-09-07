const User = ({name}) => {
    return (
        <div className="m-4 p-4 bg-gray-50 rounded-lg border border-solid border-black">
            <h2>Name: {name}</h2>
            <h3>Location: Chennai</h3>
            <h4>Contact: 9080498487</h4>
        </div>
    )
}

export default User;