import MealAdditionalInfo from "./MealAdditionalInfo";
import {useState} from "react";
import {useOrder} from "../../../OrderContext";
import {cartActions} from "../../../../Utility/_cartActions";

const MealDetails = (props) => {
    const meal = props.meal;
    const [isShown, setShownStatus] = useState(false);

    const toggleShown = () => {
        setShownStatus(!isShown);
    }
    
    const order = useOrder().order;
    const dispatch = useOrder().dispatch;
    
    const clickHandler = () => {
        dispatch({
            type: cartActions.add,
            cart: {mealId: 1}
        })
    }
    
    // console.log("cart: ", order.orderLines);
 
    
    return (
        <div className="table-meal-details">
            <tr key={meal.id} onClick={toggleShown}>
                <td className="table-meal-name">{meal.name}</td>
                <td className="table-meal-price" rowSpan="4">{meal.price} <span>PLN</span></td>
                <td className="table-add-btn" rowSpan="4"><button onClick={clickHandler}>Dodaj</button></td>
            </tr>
            {isShown &&
                <MealAdditionalInfo meal={meal}/>
            }
        </div>
    )
}

export default MealDetails;