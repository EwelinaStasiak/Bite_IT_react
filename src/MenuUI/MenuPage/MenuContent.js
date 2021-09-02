import "./MenuContent.css";
import "../MainPage/MainPageContent.css";
import Meal from "../MainPage/Meal";

function MenuContent({dispatch, ...props}){
    console.log(props.soups)
    
    return (
        <div className="board-content-container">
            <h1 className="title"><u>MENU</u></h1>
            <ul className="meals-list">
                
                {props.soups && props.meals.map(meal => meal.mealType === 0 ?
                    <Meal state={props.state} key={meal.id} meal={meal} dispatch={dispatch} /> :
                    null)
                }
                {props.mainDishes && props.meals.map(meal => meal.mealType === 1 ?
                    <Meal state={props.state} key={meal.id} meal={meal} dispatch={dispatch} /> :
                    null)
                }
                {props.desserts && props.meals.map(meal => meal.mealType === 2 ?
                    <Meal state={props.state} key={meal.id} meal={meal} dispatch={dispatch}/> :
                    null)
                }
                {props.drinks && props.meals.map(meal => meal.mealType === 3 ?
                    <Meal state={props.state} key={meal.id} meal={meal} dispatch={dispatch}/> :
                    null)
                }
                
            </ul>
        </div>
    );
}

export default MenuContent;