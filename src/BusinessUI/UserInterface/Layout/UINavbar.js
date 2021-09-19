import {subPageNames} from "../../../Utility/_subPages";
import "./UINavbar.css";

function UINavbar(props) {
    function logOut(){
        props.onLogOut({
            type: "logOut"
        })
    }
    
    function contentHandler(event) {
        event.preventDefault();
        props.contentHandler({
            type: event.target.name,
        });
    }
    
    return (
        <div className="ui-navbar-container">
            <button onClick={contentHandler} name={subPageNames.menu}>Menu</button>
            <button onClick={logOut}>Log out</button>
        </div>
    );
}

export default UINavbar;