import './App.css';
import { Container, Navbar} from 'react-bootstrap';
import React, { useReducer, useState} from 'react';
import Logo from './img/logo.png';
import Waiter from './img/waiter.png';
import Menu from './img/menu.png';
import Order from './img/order.png';
import MenuBoard from "./Pages/BoardLayout/MenuBoard";

const App = () => {
  const [menu, setMenu] = useState({meals: []});
  const [orders, dispatch] = useReducer((old, action) => {
    switch(action.type) {
        case "addToOrder":
            return [...old, action.item];
        case "removeFromOrder":
            return old.filter(i => i !== action.item);
    }        
    return old;
}, []);
  
  function updateMenu (newMenu){
      setMenu(newMenu);
      console.log('menu updated');
  }

  return (
      <div>
        <NavbarTest/>
        <MenuBoard meals={menu.meals} onMenuUpdate={updateMenu} dispatch={dispatch}/>
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

const NavbarTest = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#">
            <img
              src={Logo}
              width="70"
              height="70"
              className="d-inline-block align-top"
              id= "navbarItem"
            ></img>
          </Navbar.Brand>
          <Navbar.Brand href="#">
            <img
              src={Waiter}
              width="70"
              height="70"
              className="d-inline-block align-top"
              id= "navbarItem"
            ></img>
          </Navbar.Brand>
          <Navbar.Brand href="#">
            <img
              src={Menu}
              width="70"
              height="70"
              className="d-inline-block align-top"
              id= "navbarItem"
            ></img>
          </Navbar.Brand>
          <Navbar.Brand href="#">
            <img
              src={Order}
              width="70"
              height="70"
              className="d-inline-block align-top"
              id= "navbarItem"
            ></img>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}
export default App;
