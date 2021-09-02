import logo from "../../../img/logo.png"

import "./UIHeader.css";

function UIHeader() {
    return (
        <div className="ui-header-container">
            <img src={logo} alt="logo" />
            <div className="restaurant-name">
                <h1>Name of the Restaurant</h1>
            </div>
        </div>
    )
}

export default UIHeader;