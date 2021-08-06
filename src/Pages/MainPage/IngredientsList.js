import './Ingredients.css';

function IngredientsList (props) {
    const meal = props.meal;
    const mealsIngredients = meal.mealsIngredients;
    
    function getProductsList() {
        let ingredients = '';
        let listLength = mealsIngredients.length;
        let lastIndex = listLength - 1;

        for (let i = 0; i < listLength; i++){
            let ingredientName =  mealsIngredients[i].ingredient.productName;

            if (i !== lastIndex) ingredientName += ', ';

            ingredients += ingredientName
        }

        return ingredients;
    }
    
    return (
        <div>
            <p>{meal.description}</p>
            <p>Skład: {getProductsList()}</p>
        </div>
    )
}

export default IngredientsList;