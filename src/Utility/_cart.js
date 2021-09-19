export const cartActions = {
    add: "addMealToOrder",
    remove: "removeFromOrder",
    create: "createOrderId"
}

export function countMeals(cart, mealName) {
    let mealsCount = 0;
    cart.map(meal => meal.name === mealName && mealsCount++);
    return mealsCount;
}

export async function removeMealFromOrder(mealId, orderId)
{
    try {
        await fetch(`https://localhost:5001/OrderLine/${orderId}/${mealId}`,{method : 'DELETE'});
    } catch (error) {
    }
}

export async function postCreateOrder(){
    const result = await fetch('https://localhost:5001/Order',{
        method: 'post',
        headers:{
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            "tableNumber": 1,
            "restaurantId": 1,
            "creationDate": 0
        })
    });
    const json = await result.json();
    return json.id;
}

export async function postAddMealToOrderLine(orderId, mealId){
    const result = await fetch('https://localhost:5001/OrderLine',{
        method: 'post',
        headers:{
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            "orderId": orderId,
            "mealId": mealId
        })
    })
};