import './MainPageButtons.css';

function MainPageButtons (props) {
    
    function filterMenu() {
        if (props.meals) {
            let filtered = props.meals.filter(meal => meal.filterMarkers ? meal.filterMarkers.includes("GlutenFree") : null);
            props.onFilter(filtered);
        }
    }
    
    return (
        <div className="main-page-btns-container">
            <button className="main-page-btn" type="button" onClick={filterMenu}>Filtruj</button>
            <button className="main-page-btn" type="button">Złóż zamówienie</button>
        </div>
    )
}

export default MainPageButtons;