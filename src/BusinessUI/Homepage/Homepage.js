function Homepage(props) {
    function onClickHandler(){
        props.onLogOut({
            type: "logOut"
        })
    }
    
    return (
        <div>
            <p>You're logged in</p>
            <button onClick={onClickHandler}>Log out</button>
        </div>
    )
}

export default Homepage;