import Homepage from "../Subpages/Homepage";
import UIHeader from "./UIHeader";
import UINavbar from "./UINavbar";

import "./UILayout.css";


function UILayout(props) {
    return (
        <div className="ui-layout">
            <UIHeader />
            <UINavbar onLogOut={props.onLogOut} />
            <Homepage />
        </div>
    )
}

export default UILayout;