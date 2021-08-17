import './MainPageContent.css';
import Meal from "./Meal";

function MainPageContent (props) {
    return (
        <div className="board-content-container">
            <h1 className="title"><u>DZIŚ POLECAMY:</u></h1>
            {props.error && <p>{props.error}</p>}
            <ul>
                {!props.error && props.meals.map(meal => meal.promotionType === 0 ?
                    <Meal key={meal.id} meal={meal} /> :
                    null)
                }
            </ul>
        </div>
    );
}

export default MainPageContent;