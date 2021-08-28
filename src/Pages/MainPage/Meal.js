import IngredientsList from "./IngredientsList";
import {useState} from "react";
import './MainPageContent.css';
import CartBtn from "./AddToCartBtn";

function Meal ({dispatch, ...props}) {
    const [listIsShown, setListStatus] = useState(false);

    function toggleShowStatus () {
        setListStatus(!listIsShown);
        console.log(props.meal);
    }

    return (
        <li className="meal-details" key={props.meal.id}>
            <div className="meal-name">
                <span onClick={toggleShowStatus}>{props.meal.name}</span>
                {/*<CartBtn orderLines={props.orderLines} mealId={props.meal.id} dispatch={dispatch}/>*/}
                <CartBtn state={props.state} mealId={props.meal.id} dispatch={dispatch}/>
            </div>
            {listIsShown && <IngredientsList meal={props.meal}/>}
        </li>
    );
}

export default Meal;