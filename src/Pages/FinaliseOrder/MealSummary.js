import MealPrice from "./MealPrice";
import "./MealSummary.css";
import {useState} from "react";

function MealSummary(props) {
    return(
        <li className="meals-list no-li-mark" key={props.meal.id}>
            <div className="meal-name">
                <p>{props.meal.name}</p>
                <div className="meal-price-display">
                    <p>x{props.count}</p>
                    <MealPrice meal={props.meal} mealsCount={props.count}/>
                </div>
            </div>
        </li>
    )
}

export default MealSummary;