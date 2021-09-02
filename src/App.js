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
  const [cart, setCart] = useState([]);
  
  const [state, dispatch] = useReducer((old, action) => {
    switch(action.type) {
        case "removeFromOrder":
            return old.filter(i => i !== action.item);
        case "createOrderId" :
          return{...old, orderId: action.item};
        case "addMealToOrder":
          return{...old, orderId: action.orderId, orderLines:[...old.orderLines, [action.orderId, action.mealId]] };      
    }        
    
}, {orderLines: [], orderId:''});
  
  
  function updateMenu (newMenu){
      setMenu(newMenu);
      console.log('menu updated');
  }
  
  function summaryHandler (isVisible, cartData) {
      setCart(cartData)
      setShowSummary(isVisible);
  }

  function menuHandler(value){
    setIsShownMenu(value);
  }

  function mainPageHandler(value){
    setIsShownMainPage(value);
  }

  function hideMainPage(){
    setIsShownMainPage(false);
  }
  
  //console.log("app.js : ", cart)  
  
    
  return (
      <div className="layout-container">
        <SiteNavbar 
            handleMenu={menuHandler} 
            handleMainPage={mainPageHandler} 
            handleSummary={summaryHandler}
            orderId={state.orderId}
        />
        <MenuBoard
            meals={menu.meals} 
            state={state} 
            dispatch={dispatch} 
            onMenuUpdate={updateMenu} 
            isShownMenu={isShownMenu} 
            isShownMainPage={isShownMainPage}
            summaryStatus={showSummary}
            handleSummary={summaryHandler}
            cart={cart}
        />
      </div>
  );
}

export default App;
