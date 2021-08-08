import './FilterBtns.css';
import glutenFree from '../../img/wheat-995055_640.png';
import lactoseFree from '../../img/milk-995051_640.png';
import vegan from '../../img/vegan-zielony.png';
import {useState} from "react";

let filters = [];

function FilterBtns (props) {
    let buttons = {
        GlutenFree: {
            color: "brown",
            img: glutenFree
        },
        LactoseFree: {
            color: "brown",
            img: lactoseFree
        },
        Vegan: {
            color: "brown",
            img: vegan
        }
    }
    const [buttonsSettings, setButtonsSettings] = useState({...buttons})
    
    function clickHandler(event) {
        changeColor(event);
        toggleFilter(event);
        filterMenu();
    }
    
    function toggleFilter (event) {
        const filter = event.target.name;
        
        if (filters.includes(filter)){
            filters = arrayRemove(filters, filter);
        } else {
            filters.push(filter);
        }
    }

    function arrayRemove(arr, value) {
        return arr.filter(el => el != value);
    }

    function filterMenu() {
        let filtered = props.meals;
        
        if (props.meals) {
            filters.forEach(fltr => {
                props.meals.forEach(meal => {
                    if (!(meal.filterMarkers && meal.filterMarkers.includes(fltr))){
                        filtered = arrayRemove(filtered, meal);
                    }
                })
            })
        }
        props.onFilter(filtered)
    }
    
    function changeColor(event) {
        const key = event.target.name;
        
        setButtonsSettings(prevState => ({
            ...prevState,
            [key]: {
                color: buttonsSettings[key].color === "brown" ? "blue" : "brown",
                img: prevState[key].img
            }
        }))
    }
    
    return (
        <div className="filter-btns-container">
            {Object.keys(buttonsSettings).map( key => (
                <button 
                    key={key}
                    style={{backgroundColor: buttonsSettings[key].color}} 
                    type="button"
                    onClick={clickHandler}
                    name={key}
                >
                    <img alt="gluten-free" name={key} src={buttonsSettings[key].img}/>
                </button>
            ))
            }
        </div>
    )
}

export default FilterBtns;