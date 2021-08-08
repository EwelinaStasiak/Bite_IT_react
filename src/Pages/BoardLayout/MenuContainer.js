import MainPageContent from "../MainPage/MainPageContent";
import './MenuContainer.css';
import MainPageButtons from "../MainPage/MainPageButtons";
import {useEffect, useState} from "react";

function MenuContainer(props) {
    //const [filteredMenu, setFilteredMenu] = useState(props.meals);
    //
    // useEffect(() => {
    //     setFilteredMenu(props.meals);
    // }, [props.meals])
    //
    // function filterHandler(filtered) {
    //     setFilteredMenu(filtered);
    // }
    
    return (
        <div className="content-container content-container-width">
            <MainPageContent meals={props.meals} error={props.error}/>
            {/*<MainPageButtons meals={filteredMenu} onFilter={filterHandler} />*/}
        </div>
    )
}

export default MenuContainer;