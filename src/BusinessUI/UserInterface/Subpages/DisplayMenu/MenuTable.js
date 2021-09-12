import MenuTableHeader from "./MenuTableHeader";
import MenuTableBody from "./MenuTableBody";
import {useState} from "react";

const MenuTable = (props) => {
    const meals = props.meals;
    const category = props.category;
    const categories = props.categories;
    const [isShown, setShownStatus] = useState(false);
    
    function toggleShownStatus () {
        console.log(isShown);
        setShownStatus(!isShown);
    }
    
    return (
        <table>
            <MenuTableHeader
                headerName={props.category}
                changeStatus={toggleShownStatus}
            />
            {isShown &&
                <MenuTableBody
                    meals={meals}
                    categoryId={categories.indexOf(category)}
                    category={category}
                />
            }
        </table>
    )
}

export default MenuTable;