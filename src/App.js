import './App.css';
import React, { useReducer, useState} from 'react';
import MenuBoard from "./Pages/BoardLayout/MenuBoard";
import SiteNavbar from "./Pages/BoardLayout/SiteNavbar";
// import Footer from "./Pages/BoardLayout/Footer";


const App = () => {
  const [menu, setMenu] = useState({meals: []});
  const [showSummary, setShowSummary] = useState(false);
  const [isShownMenu, setIsShownMenu] = useState(false);
  const [isShownMainPage, setIsShownMainPage] = useState(true);
  
  const [state, dispatch] = useReducer((old, action) => {
    switch(action.type) {
        case "addToOrder":
            return {...old, orderLines:action.item };
        case "removeFromOrder":
            return old.filter(i => i !== action.item);
    }        
    return old;
}, {orderLines: []});
  
  console.log("order line: ", state.orderLines);
  
  function updateMenu (newMenu){
      setMenu(newMenu);
      console.log('menu updated');
  }
  
  function summaryHandler (value) {
      setShowSummary(value);
  }

  function menuHandler(value){
    setIsShownMenu(value);
  }

  function mainPageHandler(value){
    setIsShownMainPage(value);
  }

  
  return (
      <div className="layout-container">
        <SiteNavbar 
            handleMenu={menuHandler} 
            handleMainPage={mainPageHandler} 
            handleSummary={summaryHandler}
        />
        <MenuBoard
            meals={menu.meals} 
            orderLines={state.orderLines} 
            dispatch={dispatch} 
            onMenuUpdate={updateMenu} 
            isShownMenu={isShownMenu} 
            isShownMainPage={isShownMainPage}
            summaryStatus={showSummary}
            handleSummary={summaryHandler}
        />
      </div>
  );
}

export default App;
