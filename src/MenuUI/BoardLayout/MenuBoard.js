import './MenuBoard.css';
import MenuContainer from "./MenuContainer";
import React, {useEffect, useState} from "react";
import FilterBtns from "../MainPage/FilterBtns";
import {fetchMenu, manageMenu} from "../../Utility/_menuFetch";
import CategoryMenu from "../MenuPage/CategoryMenu";
import Footer from "../BoardLayout/Footer";


function MenuBoard ({dispatch, ...props}) {
    const [error, setError] = useState(null);
    const [filteredMenu, setFilteredMenu] = useState(props.meals);
    const [isShownSoups, setIsShownSoups] = useState(false);
    const [isShownMainDishes, setIsShownMainDish] = useState(false);
    const [isShownDesserts, setIsShownDesserts] = useState(false);
    const [isShownDrinks, setIsShownDrinks] = useState(false);

    function showSoups(){
        setIsShownSoups(true);
        props.handleSummary(false);
    }
    function showMainDishes(){
        
        setIsShownMainDish(true);
        props.handleSummary(false);
    }

    function showDesserts(){
        
        setIsShownDesserts(true);
        props.handleSummary(false);
    }

    function showDrinks(){
        
        setIsShownDrinks(true);
        props.handleSummary(false);
    }
    function hideSoups(){
        setIsShownSoups(false);
    }
    function hideMainDishes(){
        setIsShownMainDish(false);
    }
    function hideDesserts(){
        setIsShownDesserts(false);
    }
    function hideDrinks(){
        setIsShownDrinks(false);
    }
    
    useEffect(async () => {
        fetchResultHandler(await fetchMenu(props.meals));
        const interval = intervalHandler();
        return () => {
            clearInterval(interval)
        }
    }, [props.meals, manageMenu, error]);
    
    function fetchResultHandler(result) {
        console.log("menu: ", result);
        if (result.menu !== null) {
            props.onMenuUpdate(result.menu);
        } else {
            setError(result.error);
        }
    }
    
    function intervalHandler () {
        return setInterval( async () => {
            fetchResultHandler(await fetchMenu());
        }, 500000);
    }

    useEffect(() => {
        setFilteredMenu(props.meals);
    }, [props.meals])

    function filterHandler(filtered) {
        setFilteredMenu(filtered);
    }

    // console.log("menu board : ", props.cart)

    return (
        
        <div className="menu-board">
            {/*<img alt="menu-board" src={Board} className="board-img"/>*/}
            {
                props.isShownMenu &&
                <FilterBtns meals={props.meals} onFilter={filterHandler} />
            }
            {
                props.isShownMainPage &&
                <FilterBtns meals={props.meals} onFilter={filterHandler} />
            }
            
            {
                props.isShownMenu && 
                <CategoryMenu 
                    onShowSoups={showSoups} 
                    onShowMainDishes={showMainDishes} 
                    onShowDesserts={showDesserts} 
                    onShowDrinks={showDrinks} 
                    onHideSoups={hideSoups} 
                    onHideMainDishes={hideMainDishes} 
                    onHideDesserts={hideDesserts} 
                    onHideDrinks={hideDrinks}
                />
            }
            <MenuContainer 
                // orderLines={props.orderLines}
                state={props.state}
                cart={props.cart}
                meals={filteredMenu} 
                error={error} 
                dispatch={dispatch}
                summaryStatus={props.summaryStatus}
                isShownMainPage={props.isShownMainPage} isShownMenu={props.isShownMenu} soups={isShownSoups} 
                mainDishes={isShownMainDishes} desserts={isShownDesserts} drinks={isShownDrinks}
            />
            <Footer/>
        </div>
        
    )
}

export default MenuBoard;