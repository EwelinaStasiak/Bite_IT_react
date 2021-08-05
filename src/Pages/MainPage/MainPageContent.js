import './MainPageContent.css';

function MainPageContent (props) {
    return (
        <div className="meals-list-container">
            <h1 className="title">DZIŚ POLECAMY:</h1>
            {props.error && <p>{props.error}</p>}
            <ul>
                {!props.error && props.meals.map(meal => meal.promotionType === 0 ? <li className="meals-list" key={meal.id}><span>{meal.name}</span></li> : null)}
            </ul>
        </div>
    );
}

export default MainPageContent;