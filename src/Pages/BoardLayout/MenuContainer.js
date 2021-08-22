import MainPageContent from "../MainPage/MainPageContent";
import './MenuContainer.css';
import OrderSummary from "../FinaliseOrder/OrderSummary";
import MenuContent from "../MenuPage/MenuContent";

const testOrder = {
    id: "add6acbcadz",
    creationDate: "2021-08-21",
    meals: [
        {
            id: 1,
            menuId: 1,
            description: "Zupa pomidorowa ze świeżych pomidorów z dodatkiem bazylii",
            price: 35,
            name: "Zupa Pomidorowa",
            mealType: 1,
            promotionType: 1,
            filterMarkers: []
        },
        {
            id: 1,
            menuId: 1,
            description: "Zupa pomidorowa ze świeżych pomidorów z dodatkiem bazylii",
            price: 35,
            name: "Zupa Pomidorowa",
            mealType: 1,
            promotionType: 1,
            filterMarkers: []
        },
        {
            id: 2,
            menuId: 1,
            description: "Spaghetti bolognese",
            price: 48,
            name: "Spaghetti bolognese",
            mealType: 1,
            promotionType: 1,
            filterMarkers: []
        },
        {
            id: 3,
            menuId: 1,
            description: "Sok ze swierzych pomarańczy",
            price: 7,
            name: "Sok pomarańczowy",
            mealType: 1,
            promotionType: 1,
            filterMarkers: []
        },
    ]
}

function MenuContainer({dispatch, ...props}) {
    
    return (
        <>
            {console.log("menu container type of ", props.orderLines)}
            <div className="content-container content-container-width">
<<<<<<< HEAD
            {props.isShownMainPage && <MainPageContent orderLines={props.orderLines} dispatch={dispatch} meals={props.meals} error={props.error}/>}
            {props.isShownMenu && <MenuContent orderLines={props.orderLines} dispatch={dispatch} meals={props.meals} soups={props.soups} mainDishes={props.mainDishes} desserts={props.desserts} drinks={props.drinks}/>}
=======
                {props.isShownMainPage && !props.summaryStatus && <MainPageContent orderLines={props.orderLines} dispatch={dispatch} meals={props.meals} error={props.error}/>}
                {props.isShownMenu && !props.summaryStatus && <MenuContent meals={props.meals} soups={props.soups} mainDishes={props.mainDishes} desserts={props.desserts} drinks={props.drinks}/>}
                {props.summaryStatus && <OrderSummary order={props.orderLines} error={props.error}/>}
>>>>>>> b65247a771d3dcb2cf90e327e39644d51df9edd8
                {/* <MainPageButtons /> */}
            </div>
        </>
    )
}

export default MenuContainer;