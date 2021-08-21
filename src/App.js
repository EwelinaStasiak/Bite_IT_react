import './App.css';
import React, { useState} from 'react';
import MenuBoard from "./Pages/BoardLayout/MenuBoard";
import SiteNavbar from "./Pages/BoardLayout/SiteNavbar";


const App = () => {
  const [menu, setMenu] = useState({meals: []});
  const [isShownMenu, setIsShownMenu] = useState(false);
  const [isShownMainPage, setIsShownMainPage] = useState(true);
  
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
