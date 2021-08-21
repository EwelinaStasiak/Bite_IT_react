import './App.css';
import { Container, Navbar} from 'react-bootstrap';
import React, { useReducer, useState} from 'react';
import Logo from './img/logo.png';
import Waiter from './img/waiter.png';
import Menu from './img/menu.png';
import Order from './img/order.png';
import MenuBoard from "./Pages/BoardLayout/MenuBoard";
import SiteNavbar from "./Pages/BoardLayout/SiteNavbar";


const App = () => {
  const [menu, setMenu] = useState({meals: []});
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
  
  
  function updateMenu (newMenu){
      setMenu(newMenu);
      console.log('menu updated');
  }

  function showMenu(newValue){

    setIsShownMenu(newValue);
    
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
        <SiteNavbar onShowMenu={showMenu} onShowMainPage={showMainPage} onHideMainPage={hideMainPage} onHideMenu={hideMenu}/>
        <MenuBoard meals={menu.meals} onMenuUpdate={updateMenu} isShownMenu={isShownMenu} isShownMainPage={isShownMainPage}/>
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
