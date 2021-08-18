import MealPrice from "./MealPrice";

function MealSummary(props) {
    return(
        <li className="meals-list" key={props.meal.id}>
            <div className="meal-name">
                <p>{props.meal.name}</p>
                <p>x{props.count}</p>
                <MealPrice meal={props.meal} mealsCount={props.count}/>
            </div>
        </li>
    )
}

export default MealSummary;