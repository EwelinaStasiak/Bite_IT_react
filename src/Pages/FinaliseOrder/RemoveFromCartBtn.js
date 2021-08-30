import { useState } from "react";
import deleteIcon from "../../img/pobrane.png";

function RemoveFromCartBtn({setOrder, ...props})
{
    async function removeMealFromOrder(mealId, orderId)
    {
        try {
            await fetch(`https://localhost:5001/OrderLine/${orderId}/${mealId}`,{method : 'DELETE'});
        } catch (error) {
        }
    }

    async function clickHandler()
    {
        alert("Chcesz usunąć " + props.mealId + " z zamówienia  " + props.orderId);
        await removeMealFromOrder(props.mealId, props.orderId);
        setOrder(order => [...order,'t']);
        console.log("zmiany " + props.order);
    }
    return(
        <button onClick={clickHandler} className="add-to-cart-btn" >
            <img src={deleteIcon} alt="delete-icon"/>
        </button>
    )
}

export default RemoveFromCartBtn;

