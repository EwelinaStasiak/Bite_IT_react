import MainPageContent from "../MainPage/MainPageContent";
import './MenuContainer.css';
import OrderSummary from "../FinaliseOrder/OrderSummary";
import MenuContent from "../MenuPage/MenuContent";

function MenuContainer({dispatch, ...props}) {
    return (
        <>
            <div className="content-container scrollable content-container-width">
                {
                    props.isShownMainPage && !props.summaryStatus && 
                    <MainPageContent
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
                        state={props.state}
                        dispatch={dispatch}
                        drinks={props.drinks}
                    />
                }
                {
                    props.summaryStatus && 
                    <OrderSummary
                        order={props.cart}
                        error={props.error}
                    />
                }
            </div>
        </>
    )
}

export default MenuContainer;