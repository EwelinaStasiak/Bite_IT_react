import MainPageContent from "../MainPage/MainPageContent";
import './MenuContainer.css';
import MainPageButtons from "../MainPage/MainPageButtons";

function MenuContainer(props) {
    return (
        <div className="content-container content-container-width">
            <MainPageContent meals={props.meals} error={props.error}/>
            <MainPageButtons />
        </div>
    )
}

export default MenuContainer;