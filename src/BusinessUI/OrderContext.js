import React, {useReducer} from "react";
import {cartActions} from "../Utility/_cartActions";

const Context = React.createContext();
Context.displayName = 'Order';

export const initOrder = {orderId: "", orderLines: []};
export const useOrder = () => React.useContext(Context);

export const orderReducer = (prevState, action) => {
        switch (action.type){
            case cartActions.add:
                prevState.orderLines.push(action.cart);
                return {...prevState, orderLines: prevState.orderLines}
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

