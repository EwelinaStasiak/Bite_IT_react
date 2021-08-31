import '../MainPage/MainPageContent.css';
import "./OrderSummary.css"
import OrderedMeals from "./OrderedMeals";
import OrderSum from "./OderSum";
import SummaryBtns from "./SummaryBtns";
import {useState} from "react";
import PayCheckbox from "./PayCheckbox";

function OrderSummary(props) {
    // const tables = 15;
    const [checked, setChecked] = useState(false);
    const [counter, setCounter] = useState(props.order.length);
    const decrementCounter = () => setCounter(counter - 1);
    function checkHandler() {
        setChecked(!checked);
    }
    
    console.log("lista dań " + props.order)
    
    return(
        <div className="board-content-container scrollable">
            <h1 className="summery-title"><u>Podsumowanie:</u></h1>
            {props.error && <p>{props.error}</p>}
            {(!props.error && props.order.length > 0) ?
                (<div className="ordered-meals-list-container">
                    <h2 id="order-id">Zamówienie nr <strong>{props.order[0].orderId} + {counter}</strong></h2>
                    <OrderedMeals meals={props.order} orderId={props.order[0].orderId} decrementCounter={decrementCounter} counter={counter}/>
                    <OrderSum meals={props.order} />
                    <PayCheckbox onCheck={checkHandler} />
                    <SummaryBtns />
                </div>) :
                <p>Koszyk jest pusty</p>
            }
        </div>
    )
}

export default OrderSummary;