import './MenuBoard.css';
import Board from '../../img/menuBoard.png';
import MenuContainer from "./MenuContainer";
import React, {useEffect, useReducer, useState} from "react";
import FilterBtns from "../MainPage/FilterBtns";
//import { HubConnectionBuilder } from '@microsoft/signalr';
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

    useEffect(() => {
        fetchMenu();
        const interval = intervalHandler();
        return () => {
            clearInterval(interval)
        }
    }, [props.meals, manageMenu, error]);

    function intervalHandler () {
        return setInterval( () => {
            fetchMenu();
        }, 500000);
    }

    async function fetchMenu () {
        try {
            const response = await fetch('https://localhost:5001/Menu');
            throwErrorMessage(response);
            const data = await response.json();
            manageMenu(data);
        } catch (error) {
            setError(error.message);
        }
    }

    function throwErrorMessage(response) {
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`)
        }
        setError(null);
    }

    function manageMenu (fetchResponse) {
        if (fetchResponse.meals.length > 0 && !objListsAreEqual(props.meals, fetchResponse.meals)) {
            props.onMenuUpdate(fetchResponse);
        } else {
            console.log('no update');
        }
    }

    function objListsAreEqual(list1, list2) {
        if (list1.length !== list2.length) return false;

        for (let i = 0; i < list1.length; i++) {
            if (!objAreEqual(list1[i], list2[i])) return false
        }

        return true;
    }

    function objAreEqual(obj1, obj2) {
        let keys1 = Object.keys(obj1);
        let keys2 = Object.keys(obj2);

        if (keys1.length !== keys2.length) return false;

        for (let key of keys1) {
            if (`${obj1[key]}` !== `${obj2[key]}`) return false;
        }
        return true;
    }

    useEffect(() => {
        setFilteredMenu(props.meals);
    }, [props.meals])

    function filterHandler(filtered) {
        setFilteredMenu(filtered);
    }

    console.log("menu board : ", props.cart)

    return (
        
        <div className="menu-board">
            {/*<img alt="menu-board" src={Board} className="board-img"/>*/}
            <FilterBtns meals={props.meals} onFilter={filterHandler} />
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