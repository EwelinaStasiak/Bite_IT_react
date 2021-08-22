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
  const [showSummary, setShowSummary] = useState(false);
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
  
  function summaryHandler () {
      setShowSummary(!showSummary);
  }

  return (
      <div>
        <NavbarTest handleSummary={summaryHandler}/>
        <MenuBoard 
            orderLines={state.orderLines} 
            meals={menu.meals} 
            onMenuUpdate={updateMenu} 
            dispatch={dispatch}
            summaryStatus={showSummary}
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

const NavbarTest = (props) => {
    function showSummary() {
        props.handleSummary();
    }
    
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
              onClick={showSummary}
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
