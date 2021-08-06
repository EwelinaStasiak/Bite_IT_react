import IngredientsList from "./IngredientsList";
import {useState} from "react";
import './MainPageContent.css';

function Meal (props) {
    const [listIsShown, setListStatus] = useState(false);

    function toggleShowStatus () {
        setListStatus(!listIsShown);
        console.log(props.meal);
    }
    
    return (
        <li className="meals-list" key={props.meal.id}>
            <span onClick={toggleShowStatus} >{props.meal.name}</span>
            {/*<span className="down-arrow">*/}
            {/*   {listIsShown ? ' 🔼' : ' 🔽'}*/}
            {/*</span>*/}
            <br/>
            {listIsShown && <IngredientsList meal={props.meal}/>}
        </li>
    )
}

export default Meal;