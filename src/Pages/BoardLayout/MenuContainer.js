import MainPageContent from "../MainPage/MainPageContent";
import './MenuContainer.css';
import MainPageButtons from "../MainPage/MainPageButtons";
import MenuContent from "../MenuPage/MenuContent";

function MenuContainer(props) {
    console.log("menuContainer");
    console.log("mainPage " + props.isShownMainPage);
    console.log("showMenu " + props.isShownMenu);
    return (
        <>
           
            <div className="content-container content-container-width">
            {props.isShownMainPage && <MainPageContent meals={props.meals} error={props.error}/>}
            {props.isShownMenu && <MenuContent meals={props.meals} soups={props.soups} mainDishes={props.mainDishes} desserts={props.desserts} drinks={props.drinks}/>}
                <MainPageButtons />
            </div>
        </>
        
    )
}

export default MenuContainer;