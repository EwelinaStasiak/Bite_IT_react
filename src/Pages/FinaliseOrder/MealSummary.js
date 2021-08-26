import MealPrice from "./MealPrice";
import "./MealSummary.css";
import deleteIcon from "../../img/pobrane.png";
import {useState} from "react";

function MealSummary(props) {
    return(
        <li className="meals-list no-li-mark" key={props.meal.id}>
            <div className="meal-name">
                <p>{props.meal.name}</p>
                <div className="meal-price-display">
                    <div className="meal-count">
                        <p className="lit-on-hover">+</p>
                        <div className="meal-edition">
                            <p>x{props.count}</p>
                            <img src={deleteIcon} alt="delete-icon" />
                        </div>
                        <p className="lit-on-hover">-</p>
                    </div>
                    <MealPrice meal={props.meal} mealsCount={props.count}/>
                </div>
            </div>
        </li>
    )
}

export default MealSummary;