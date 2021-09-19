import MealAdditionalInfo from "./MealAdditionalInfo";
import {useState} from "react";
import EditOrderRow from "./EditOrderRow";

const MealDetails = (props) => {
    const meals = props.meals;
    const meal = props.meal;
    const [isShown, setShownStatus] = useState(false);

    const toggleShown = () => {
        setShownStatus(!isShown);
    }
    
    return (
        <div className="table-meal-details">
            <tr key={meal.id} onClick={toggleShown}>
                <td className="table-meal-name">{meal.name}</td>
                <td className="table-meal-price" rowSpan="4">{meal.price} <span>PLN</span></td>
            </tr>
            <tr>
                <EditOrderRow
                    meal={meal}
                    meals={meals}
                />
            </tr>
            {isShown &&
                <MealAdditionalInfo meal={meal}/>
            }
        </div>
    )
}

export default MealDetails;