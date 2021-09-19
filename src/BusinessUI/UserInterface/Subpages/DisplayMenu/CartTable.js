import {useOrder} from "../../../OrderContext";
import {countMeals} from "../../../../Utility/_cart";

import "./CartTable.css";

export const CartTable = () => {
    const cart = useOrder().order.cart;
    const mealsDisplayed = [];
    
    const displayMeal = (meal) => {
        let mealCount = 0;
        
        if (!mealsDisplayed.includes(meal.name)) {
            mealsDisplayed.push(meal.name);
            mealCount = countMeals(cart, meal.name);
            return <p>– {mealCount} x {meal.name} ({mealCount * meal.price} PLN)</p>
        }
    }
    
    return (
        <div className="cart-container">
            <h1>Koszyk:</h1>
            <div className="waiter-cart-meals-list">
                {cart.length <= 0 && <p>Koszyk jest pusty</p>}
                {cart.length > 0 &&
                    cart.map(meal => displayMeal(meal))
                }
            </div>
        </div>
    )
}