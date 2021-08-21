import { ButtonGroup } from "react-bootstrap";
import React from 'react';
import "./CategoryMenu.css";

function CategoryMenu(props)
{
    function onClickSoupsHandler(){
        props.onHideMainDishes();
        props.onHideDesserts();
        props.onHideDrinks();
        props.onShowSoups();
    }

    function onClickMainDishesHandler(){
        props.onHideSoups();
        props.onHideDesserts();
        props.onHideDrinks();
        props.onShowMainDishes();
    }
    function onClickDessertsHandler(){
        props.onHideMainDishes();
        props.onHideSoups();
        props.onHideDrinks();
        props.onShowDesserts();
    }
    function onClickDrinksHandler(){
        props.onHideMainDishes();
        props.onHideDesserts();
        props.onHideSoups();
        props.onShowDrinks();
    }


    return(
        <>
            <ButtonGroup id="categoryMenu">
                <button id="categoryMenuBtn" onClick={onClickSoupsHandler}>Zupy</button>
                <button id="categoryMenuBtn" onClick={onClickMainDishesHandler}>Dania głowne</button>
                <button id="categoryMenuBtn" onClick={onClickDessertsHandler}>Desery</button>
                <button id="categoryMenuBtn" onClick={onClickDrinksHandler}>Napoje</button>
            </ButtonGroup>
         </>
    )
}


export default CategoryMenu;