import '../MainPage/MainPageContent.css';
import "./OrderSummary.css"
import OrderedMeals from "./OrderedMeals";
import OrderSum from "./OderSum";
import SummaryBtns from "./SummaryBtns";

function OrderSummary(props) {
    return(
        <div className="board-content-container">
            <h1 className="summery-title"><u>Podsumowanie:</u></h1>
            <h2 id="order-id">Zamówienie nr <strong>{props.order.id}</strong></h2>
            {props.error && <p>{props.error}</p>}
            {!props.error && <OrderedMeals meals={props.order.meals} />}
            {!props.error && <OrderSum meals={props.order.meals} />}
            <SummaryBtns />
        </div>
    )
}

export default OrderSummary;