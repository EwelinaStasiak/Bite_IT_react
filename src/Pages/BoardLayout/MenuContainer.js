import MainPageContent from "../MainPage/MainPageContent";
import './MenuContainer.css';
import MainPageButtons from "../MainPage/MainPageButtons";
import {useEffect, useState} from "react";
import MenuContent from "../MenuPage/MenuContent";

function MenuContainer({dispatch, ...props}) {
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
        // <div className="content-container content-container-width">
        //     <MainPageContent orderLines={props.orderLines} meals={props.meals} error={props.error} dispatch={dispatch}/>
        //     {/*<MainPageButtons meals={filteredMenu} onFilter={filterHandler} />*/}
        // </div>
        <>
            <div className="content-container content-container-width">
            {props.isShownMainPage && <MainPageContent orderLines={props.orderLines} dispatch={dispatch} meals={props.meals} error={props.error}/>}
            {props.isShownMenu && <MenuContent orderLines={props.orderLines} dispatch={dispatch} meals={props.meals} soups={props.soups} mainDishes={props.mainDishes} desserts={props.desserts} drinks={props.drinks}/>}
                {/* <MainPageButtons /> */}
            </div>
        </>)
}

export default MenuContainer;