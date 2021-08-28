import './MainPageContent.css';
import Meal from "./Meal";

function MainPageContent ({dispatch, ...props}) {
    return (
        <div className="board-content-container">
            <h1 className="title">
                <u>DZIŚ POLECAMY:</u>
            </h1>
            
            {props.error && <p>{props.error}</p>}
            
            <ul className="meals-list">
                {!props.error && props.meals.map(meal => meal.promotionType === 0 ?
                    <Meal state={props.state} key={meal.id} meal={meal} dispatch={dispatch}/> :
                    null)
                }
            </ul>
        </div>
    );
}

export default MainPageContent;