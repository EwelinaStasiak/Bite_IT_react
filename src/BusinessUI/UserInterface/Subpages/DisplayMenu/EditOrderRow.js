import {cartActions, countMeals} from "../../../../Utility/_cartActions";

const EditOrderRow = (props) => {
    const cart = props.cart;
    const meal = props.meal;
    let mealCount = countMeals(cart, meal.name);
    
    const clickHandler = (event) => {
        event.preventDefault();
    }
    
    return (
        <div>
            <button name={cartActions.remove} onClick={clickHandler}> – </button>
            {mealCount} 
            <button name={cartActions.add} onClick={clickHandler}> + </button>
        </div>
    )
}

export default EditOrderRow;