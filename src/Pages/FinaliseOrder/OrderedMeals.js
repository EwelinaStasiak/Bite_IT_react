import '../MainPage/MainPageContent.css';
import "./OrderedMeals.css";
import MealSummary from "./MealSummary";
import {useState} from "react";

function OrderedMeals (props) {
    let mealsCount = 0;
    const mealsToDisplay = [];
    
    const [mealsToList,setMealsToList] = useState(props.meals);
    const RemoveMealFromList = MealToRemove => setMealsToList(mealsToList.filter(i => i.mealId !== MealToRemove));
    

    function countMeals(mealName) {
        mealsCount = 0;
        props.meals.map(meal => meal.meal.name === mealName && mealsCount++);
    }
    
    function displayMeal(mealName) {
        if (!mealsToDisplay.includes(mealName)) {
            mealsToDisplay.push(mealName);
            countMeals(mealName);
            return true;
        }
        return false;
    }
    
    return(
        <ul className="ordered-meals-list">
            {mealsToList.map(meal =>
                displayMeal(meal.meal.name) && 
                <MealSummary 
                    orderId={props.orderId} 
                    key={meal.meal.id} 
                    meal={meal.meal} 
                    count={mealsCount}
                    order={mealsToList}
                    RemoveMealFromList = {RemoveMealFromList}
                />
            )}
        </ul>
    )
}

export default OrderedMeals;