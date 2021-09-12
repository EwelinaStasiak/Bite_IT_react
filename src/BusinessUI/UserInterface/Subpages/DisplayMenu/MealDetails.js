import MealAdditionalInfo from "./MealAdditionalInfo";
import {useState} from "react";

const MealDetails = (props) => {
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
                <td className="table-add-btn" rowSpan="4"><button>Dodaj</button></td>
            </tr>
            {isShown &&
                <MealAdditionalInfo meal={meal}/>
            }
        </div>
    )
}

export default MealDetails;