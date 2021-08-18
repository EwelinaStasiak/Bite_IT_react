import './App.css';
import React, { useState} from 'react';
import MenuBoard from "./Pages/BoardLayout/MenuBoard";
import SiteNavbar from "./Pages/BoardLayout/SiteNavbar";


const App = () => {
  const [menu, setMenu] = useState({meals: []});
  const [isShownMenu, setIsShownMenu] = useState(false);
  
  function updateMenu (newMenu){
      setMenu(newMenu);
      console.log('menu updated');
  }

  function showMenu(newValue){
    setIsShownMenu(newValue);
    console.log("show")
  }

  function hideMenu(){
    setIsShownMenu(false);
  }
  console.log(isShownMenu);
  return (
      <div>
        <SiteNavbar onShowMenu={showMenu}/>
        <MenuBoard meals={menu.meals} onMenuUpdate={updateMenu}/>
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
