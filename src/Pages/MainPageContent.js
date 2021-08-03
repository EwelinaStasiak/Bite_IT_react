import './MainPageContent.css';
import {useEffect} from "react";

function MainPageContent (props) {
    useEffect(() => {
        fetch('https://localhost:5001/Menu')
            .then(response => response.json())
            .then(data => manageMenu(data));
    }, [props.meals, manageMenu])

    function manageMenu (fetchResponse) {
        if (fetchResponse.meals.length > 0 && !objListsAreEqual(props.meals, fetchResponse.meals)) {
            props.onMenuUpdate(fetchResponse);
            //setMenu(fetchResponse);
            console.log('menu updated');
        } else {
            console.log('no update');
        }
    }

    function objListsAreEqual(list1, list2) {
        if (list1.length !== list2.length) return false;

        for (let i = 0; i < list1.length; i++) {
            if (!objAreEqual(list1[i], list2[i])) return false
        }

        return true;
    }

    function objAreEqual(obj1, obj2) {
        let keys1 = Object.keys(obj1);
        let keys2 = Object.keys(obj2);

        if (keys1.length !== keys2.length) return false;

        for (let key of keys1) {
            if (`${obj1[key]}` !== `${obj2[key]}`) return false;
        }
        return true;
    }
    
    return (
        <div className="content-container">
            {props.meals.map(meal => meal.promotionType === 0 ? <h2 key={meal.id}>{meal.name}</h2> : null)}
        </div>
    );
}

export default MainPageContent;