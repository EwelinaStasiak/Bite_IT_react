import MealPrice from "./MealPrice";
import "./MealSummary.css";
import deleteIcon from "../../img/pobrane.png";
import {useState} from "react";
import RemoveFromCartBtn from "./RemoveFromCartBtn";
import RemoveFromCartModal from "./RemoveFromCartModal";

function MealSummary({RemoveMealFromList, ...props}) {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return(
        <div>
            <li className="meals-list no-li-mark" key={props.meal.id}>
                <div className="meal-name">
                    <p>{props.meal.name}</p>
                    <div className="meal-price-display">
                        <div className="meal-count">
                            <p className="lit-on-hover">+</p>
                            <div className="meal-edition">
                                <p>x{props.count}</p>
                                    <button onClick={handleShow}>
                                        <RemoveFromCartBtn 
                                        mealId={props.meal.id} 
                                        orderId ={props.orderId}  
                                        RemoveMealFromList = {RemoveMealFromList}
                                        />
                                    </button>
                            </div>
                            <p className="lit-on-hover">-</p>
                        </div>
                        <MealPrice meal={props.meal} mealsCount={props.count}  />
                    </div>
                </div>
            </li>
        </div>
    )
}

export default MealSummary;