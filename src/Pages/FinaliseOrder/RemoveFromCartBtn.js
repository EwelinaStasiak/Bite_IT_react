import { useState, useEffect } from "react";
import deleteIcon from "../../img/pobrane.png";
import RemoveFromCartModal from "./RemoveFromCartModal";
import "./OrderedMeals.css";

function RemoveFromCartBtn({RemoveMealFromList, ...props})
{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function removeMealFromOrder(mealId, orderId)
    {
        handleClose();
        console.log("zmianna show " + show);
        try {
            await fetch(`https://localhost:5001/OrderLine/${orderId}/${mealId}`,{method : 'DELETE'});
        } catch (error) {
        }
        RemoveMealFromList(props.mealId);
    }

    function closeModal(){
        console.log("zamykam modal");
        handleClose();
        console.log("zmianna show " + show);
    }

    async function clickHandler()
    {
        //alert("Chcesz usunąć " + props.mealId + " z zamówienia  " + props.orderId);
        //await removeMealFromOrder(props.mealId, props.orderId);
        //RemoveMealFromList(props.mealId);
    }
    return(
        <div>
            <button onClick={handleShow}>
                <RemoveFromCartModal show={show} meal={props.name} handleClose={closeModal} removeMealFromOrder={removeMealFromOrder} />
                <button onClick={clickHandler} className="del-from-cart-btn" >                       
                    <img src={deleteIcon} alt="delete-icon"/>
                </button>
            </button>
        </div>
    )
}

export default RemoveFromCartBtn;

