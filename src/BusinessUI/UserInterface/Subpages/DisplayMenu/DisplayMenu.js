import React, {useEffect, useReducer, useState} from "react";
import {fetchMenu, manageMenu} from "../../../../Utility/_menuFetch";
import MenuTable from "./MenuTable";
import {OrderProvider, initOrder, orderReducer} from "../../../OrderContext";

import "./MenuTable.css";
import {CartTable} from "./CartTable";

const emptyObj = {};
const initialMenu = {meals: []};
const mealCategories = ["Zupy", "Dania główne", "Desery", "Napoje"];

const DisplayMenu = () => {
    const [menu, setMenu] = useState(initialMenu);
    const [error, setError] = useState(null);
    
    useEffect(async () => {
        const fetchedData = await fetchMenu(menu.meals);
        fetchResultHandler(fetchedData);
        const interval = intervalHandler();
        return () => {
            clearInterval(interval)
        }
    }, [menu.meals, manageMenu, error]);

    function intervalHandler () {
        return setInterval( async () => {
            fetchResultHandler(await fetchMenu());
        }, 500000);
    }
    
    function fetchResultHandler(result) {
        if (result.menu !== null) {
            setMenu(result.menu);
        } else {
            setError(result.error);
        }
    }
    
    return(
        <OrderProvider initState={initOrder} reducer={orderReducer}>
            <div className="table-container">
                {menu.meals !== emptyObj && mealCategories.map(cat =>
                    <MenuTable 
                        categories={mealCategories}
                        category={cat}
                        meals={menu.meals}
                    />
                )}
            </div>
            <CartTable />
        </OrderProvider>
    );
}

export default DisplayMenu;