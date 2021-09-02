import "./UINavbar.css";

function UINavbar(props) {
    function onClickHandler(){
        props.onLogOut({
            type: "logOut"
        })
    }
    
    return (
        <div className="ui-navbar-container">
            <button onClick={onClickHandler}>Log out</button>
        </div>
    );
}

export default UINavbar;