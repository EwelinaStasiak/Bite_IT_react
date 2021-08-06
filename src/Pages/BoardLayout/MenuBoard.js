import './MenuBoard.css';
import Board from '../../img/menubackground.png';
import MenuContainer from "./MenuContainer";
import {useEffect, useState} from "react";

function MenuBoard (props) {
    const [error, setError] = useState(null);

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
        }, 5000);
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
    
    return (
        <div className="menu-board">
            <img alt="menu-board" src={Board} className="board-img"/>
            <MenuContainer meals={props.meals} error={error}/>
        </div>
    )
}

export default MenuBoard;