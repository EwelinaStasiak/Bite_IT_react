import './App.css';
import React, { useReducer, useState} from 'react';
import MenuBoard from "./Pages/BoardLayout/MenuBoard";
import SiteNavbar from "./Pages/BoardLayout/SiteNavbar";


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
        case "createOrderId" :
          return{...old, orderId:action.item};
        case "addMealToOrder":
          return{...old, orderLines:[...old.orderLines, action.item] };      
    }        
    
}, {orderLines: [], orderId:''});
  
  console.log("Aktualna zawartość zamówienia: ", state.orderLines);
  console.log("Aktualny numer zamówienia: ", state.orderId);
  
  function updateMenu (newMenu){
      setMenu(newMenu);
      console.log('menu updated');
  }
  
  function summaryHandler (value) {
      setShowSummary(value);
  }

  function showMenu(){

    setIsShownMenu(true);
    
  }

  function hideMenu(){
    setIsShownMenu(false);
  }

  function showMainPage(){
    setIsShownMainPage(true);
  }

  function hideMainPage(){
    setIsShownMainPage(false);
  }
  console.log(isShownMenu);
  return (
      <div>
        <SiteNavbar 
            onShowMenu={showMenu} 
            onShowMainPage={showMainPage} 
            onHideMainPage={hideMainPage} 
            onHideMenu={hideMenu}
            handleSummary={summaryHandler}
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
        />
        <Footer/>
      </div>
  );
}

const Footer = () => {
  return (
    <>
      <p className="footer">
        ©Bite-IT 2021
        <p>
        Kamil Trąba, Wojciech Dziadon, Szymon Pluta, Ewelina Stasiak
        </p>
      </p>
    </>
    
  
  )
}

export default App;
