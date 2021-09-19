import {cartActions, countMeals} from "../../../../Utility/_cart";
import {useOrder} from "../../../OrderContext";

const EditOrderRow = (props) => {
    const meal = props.meal;
    const order = useOrder().order;
    const dispatch = useOrder().dispatch;
    let mealCount = countMeals(order.cart, meal.name);

    const clickHandler = (event) => {
        event.preventDefault();
        
        dispatch({
            type: event.target.name,
            meal: meal
        })
    }
    
    // console.log("meal: ", meal);
    console.log("order cart: ", order.cart);
    
    return (
        <div>
            <button name={cartActions.remove} onClick={clickHandler}> – </button>
            {mealCount} 
            <button name={cartActions.add} onClick={clickHandler}> + </button>
        </div>
    )
}

export default EditOrderRow;