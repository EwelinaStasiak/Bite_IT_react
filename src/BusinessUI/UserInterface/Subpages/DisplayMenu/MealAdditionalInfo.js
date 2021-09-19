const MealAdditionalInfo = (props) => {
    function getString(arr) {
        if (!arr || arr.length <= 0 || !(arr instanceof  Array)) return "";

        if (arr && Object.getOwnPropertyNames(arr[0]).includes("ingredient"))
            return arr.map(ing => `${ing.ingredient.productName.toLowerCase()}, `);

        return arr.map(el => `${el.toString().toLowerCase()}, `);
    }
    
    return (
        <div>
            <tr>
                <td className="table-meal-description"><span>Opis:</span> {props.meal.description}</td>
            </tr>
            <tr>
                <td className="table-meal-ingredients"><span>Skład:</span> {getString(props.meal.mealsIngredients)}</td>
            </tr>
            <tr>
                <td className="table-meal-allergens"><span>Alergeny:</span> {getString(props.meal.filterMarkers)}</td>
            </tr>
        </div>
    )
}

export default MealAdditionalInfo;