import IngredientsList from "./IngredientsList";
import {useState} from "react";
import './MainPageContent.css';
import CartBtn from "./AddToCartBtn";
import AddToCartModal from "./AddToCartModal";

function Meal ({dispatch, ...props}) {
    const [listIsShown, setListStatus] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function toggleShowStatus () {
        setListStatus(!listIsShown);
    }

    return (
        <div>
        
        <li className="meal-details" key={props.meal.id}>
        <AddToCartModal show={show} meal={props.meal.name} onHide={handleClose}/>
            <div className="meal-name">
                <span onClick={toggleShowStatus}>{props.meal.name}</span>
                <button onClick={handleShow} className="add-to-cart-btn" >
                    <CartBtn state={props.state} mealId={props.meal.id} dispatch={dispatch}/>
                </button>
            </div>
            {listIsShown && <IngredientsList meal={props.meal}/>}
        </li>
        </div>
        
    );
}

export default Meal;