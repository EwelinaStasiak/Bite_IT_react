import React, {useReducer} from "react";
import {cartActions} from "../Utility/_cart";

const Context = React.createContext();
Context.displayName = 'Order';

export const initOrder = {orderId: "", cart: []};
export const useOrder = () => React.useContext(Context);

export const orderReducer = (prevState, action) => {
        switch (action.type){
            case cartActions.add:
                prevState.cart.push(action.meal);
                return {...prevState, cart: prevState.cart}
            case cartActions.remove:
                const otherMeals = prevState.cart.filter(m => m.id !== action.meal.id);
                const modifiedMeals = prevState.cart.filter(m => m.id === action.meal.id)
                modifiedMeals.pop();
                return {...prevState, cart: [...otherMeals, ...modifiedMeals]}
        }
}

export const OrderProvider = ({ children, initState, reducer }) => {
    const [order, setOrder] = useReducer(reducer, initState);
    
    return (
        <Context.Provider value={{order: order, dispatch: setOrder}}>
            {children}
        </Context.Provider>
    );
}

