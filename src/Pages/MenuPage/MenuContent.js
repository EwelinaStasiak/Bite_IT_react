import "./MenuContent.css";
import Meal from "../MainPage/Meal";

function MenuContent(props){
    console.log(props.soups)
    return (
        <div className="meals-list-container">
            <ul className="meals-list">
                
                {props.soups && props.meals.map(meal => meal.mealType === 0 ?
            
                    <Meal meal={meal} /> :
                    null)
                }
                {props.mainDishes && props.meals.map(meal => meal.mealType === 1 ?
                    <Meal meal={meal} /> :
                    null)
                }
                {props.desserts && props.meals.map(meal => meal.mealType === 2 ?
                    <Meal meal={meal} /> :
                    null)
                }
                {props.drinks && props.meals.map(meal => meal.mealType === 3 ?
                    <Meal meal={meal} /> :
                    null)
                }
                
            </ul>
        </div>
    );
}

export default MenuContent;