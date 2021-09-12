import MealDetails from "./MealDetails";

const MenuTableBody = (props) => {
    
    return (
        <tbody>
        {props.meals.filter(m => m.mealType === props.categoryId).map(meal =>
            <MealDetails meal={meal} />
        )}
        </tbody>
    )
}

export default MenuTableBody;