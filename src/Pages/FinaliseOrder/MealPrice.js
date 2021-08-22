import "./MealPrice.css";

function MealPrice(props) {
    function sumMealPrice() {
        return props.mealsCount * props.meal.price;;
    }
    
    return(
        <div className="meal-price-container">
            <p className="meal-price">{props.meal.price} PLN</p>
            <span>
                {sumMealPrice()} PLN
            </span>
        </div>
    )
}

export default MealPrice;