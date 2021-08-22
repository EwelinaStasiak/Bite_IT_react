import '../../App.css';
import { Container, Navbar} from 'react-bootstrap';
import React, { useState} from 'react';
import Logo from '../../img/logo.png';
import Waiter from '../../img/waiter.png';
import Menu from '../../img/menu.png';
import Order from '../../img/order.png';


const SiteNavbar = (props) => {

    function onClickMenuHandler(){
        props.onShowMenu(true);
        props.onHideMainPage();
        props.handleSummary(false);
    }

    function showSummary() {
        props.handleSummary(true);
    }

    return (
      <div id="navbarContainer">
        <Navbar>
          <Container>
            <Navbar.Brand href="#">
              <img
                src={Logo}
                width="100"
                height="100"
                className="d-inline-block align-top"
                id= "navbarItem"
              ></img>
            </Navbar.Brand>
            <Navbar.Brand href="#">
              <img
                src={Waiter}
                width="100"
                height="100"
                className="d-inline-block align-top"
                id= "navbarItem"
              ></img>
            </Navbar.Brand>
            <Navbar.Brand onClick={onClickMenuHandler} href="#">
              <img
                src={Menu}
                width="100"
                height="100"
                className="d-inline-block align-top"
                id= "navbarItem"
                onClick={onClickMenuHandler}
              ></img>
            </Navbar.Brand>
            <Navbar.Brand href="#">
              <img
                src={Order}
                width="100"
                height="100"
                className="d-inline-block align-top"
                id= "navbarItem"
                onClick={showSummary}
              ></img>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    )
  }

  export default SiteNavbar;