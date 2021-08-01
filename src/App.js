import './App.css';
import { Container, Navbar} from 'react-bootstrap';
import React, {useState} from 'react';
import Logo from './img/logo3.png';
import Waiter from './img/waiter.png';
import Menu from './img/menu.png';
import Order from './img/order.png';
import FetchMenu from "./FetchApi/FetchMenu";

const App = () => {
  const [menu, setMenu] = useState();
  
  function getMenu (fetchResponse) {
    if (menu === undefined) {
      setMenu(fetchResponse);
    }
    console.log(menu);
  }
  
  return (
    <div>
      <NavbarTest/>
      <FetchMenu onFetch={getMenu} />
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
