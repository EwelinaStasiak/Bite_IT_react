import MainPageContent from "../MainPage/MainPageContent";
import './MenuContainer.css';
import OrderSummary from "../FinaliseOrder/OrderSummary";

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
    ]
}

function MenuContainer(props) {
    //const [filteredMenu, setFilteredMenu] = useState(props.meals);
    //
    // useEffect(() => {
    //     setFilteredMenu(props.meals);
    // }, [props.meals])
    //
    // function filterHandler(filtered) {
    //     setFilteredMenu(filtered);
    // }
    
    return (
        <div className="content-container content-container-width">
            {!testOrder ? 
                <MainPageContent meals={props.meals} error={props.error}/> :
                <OrderSummary order={testOrder} error={props.error}/>
            }
            {/*<MainPageButtons meals={filteredMenu} onFilter={filterHandler} />*/}
        </div>
    )
}

export default MenuContainer;