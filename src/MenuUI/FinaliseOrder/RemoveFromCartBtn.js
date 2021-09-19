import deleteIcon from "../../img/pobrane.png";

function RemoveFromCartBtn({RemoveMealFromList, ...props})
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
        //alert("Chcesz usunąć " + props.mealId + " z zamówienia  " + props.orderId);
        await removeMealFromOrder(props.mealId, props.orderId);
        RemoveMealFromList(props.mealId);
    }
    return(
        <button onClick={clickHandler} className="del-from-cart-btn" >
            <img src={deleteIcon} alt="delete-icon"/>
        </button>
    )
}

export default RemoveFromCartBtn;

