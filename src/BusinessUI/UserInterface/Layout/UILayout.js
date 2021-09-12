import Homepage from "../Subpages/Homepage";
import UIHeader from "./UIHeader";
import UINavbar from "./UINavbar";
import {subPageNames} from "../../../Utility/_subPages";

import "./UILayout.css";
import DisplayMenu from "../Subpages/DisplayMenu/DisplayMenu";
import {useReducer} from "react";

const initContent = <Homepage />;

function UILayout(props) {
    const [content, setContent] = useReducer(contentReducer, initContent);
    
    function contentReducer(prevContent, action) {
        switch (action.type){
            case subPageNames.home:
                return <Homepage />
            case subPageNames.menu:
                return <DisplayMenu />
        }
    }
    
    return (
        <div className="ui-layout">
            <UIHeader />
            <UINavbar onLogOut={props.onLogOut} contentHandler={setContent} />
            {content}
        </div>
    )
}

export default UILayout;