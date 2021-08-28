import MainPageContent from "../MainPage/MainPageContent";
import './MenuContainer.css';
import OrderSummary from "../FinaliseOrder/OrderSummary";
import MenuContent from "../MenuPage/MenuContent";
import Footer from "./Footer";

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

    console.log("menu container : ", props.cart)

    return (
        <>
            <div className="content-container content-container-width">
                {
                    props.isShownMainPage && !props.summaryStatus && 
                    <MainPageContent
                        // orderLines={props.orderLines}
                        state={props.state}
                        dispatch={dispatch}
                        meals={props.meals}
                        error={props.error}
                    />
                }
                {
                    props.isShownMenu && !props.summaryStatus && 
                    <MenuContent
                        meals={props.meals}
                        soups={props.soups}
                        mainDishes={props.mainDishes}
                        desserts={props.desserts}
                        // orderLines={props.orderLines}
                        state={props.state}
                        dispatch={dispatch}
                        drinks={props.drinks}
                    />
                }
                {
                    props.summaryStatus && 
                    <OrderSummary 
                        // order={props.orderLines} 
                        order={props.cart}
                        error={props.error}
                    />
                }
                {/* <MainPageButtons /> */}
            </div>
        </>
    )
}

export default MenuContainer;