import "./MenuContent.css";
import "../MainPage/MainPageContent.css";
import Meal from "../MainPage/Meal";

function MenuContent({dispatch, ...props}){
    console.log(props.soups)
    return (
        // <div className="meals-list-container">
        <div className="board-content-container">
            <h1 className="title"><u>MENU</u></h1>
            <ul className="meals-list">
                
                {props.soups && props.meals.map(meal => meal.mealType === 0 ?
            
                    <Meal meal={meal} orderLines={props.orderLines} dispatch={dispatch} /> :
                    null)
                }
                {props.mainDishes && props.meals.map(meal => meal.mealType === 1 ?
                    <Meal meal={meal} orderLines={props.orderLines} dispatch={dispatch} /> :
                    null)
                }
                {props.desserts && props.meals.map(meal => meal.mealType === 2 ?
                    <Meal meal={meal} orderLines={props.orderLines} dispatch={dispatch}/> :
                    null)
                }
                {props.drinks && props.meals.map(meal => meal.mealType === 3 ?
                    <Meal meal={meal} orderLines={props.orderLines} dispatch={dispatch}/> :
                    null)
                }
                
            </ul>
        </div>
    );
}

export default MenuContent;