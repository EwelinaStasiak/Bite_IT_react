import '../../App.css';
import './SiteNavbar.css';
import { Container, Navbar} from 'react-bootstrap';
import React, { useState} from 'react';
import Logo from '../../img/logo.png';
import Waiter from '../../img/waiter.png';
import Menu from '../../img/menu.png';
import Order from '../../img/order.png';


const SiteNavbar = (props) => {

    function onClickMenuHandler(){
        props.onShowMenu();
        props.onHideMainPage();
        props.handleSummary(false);
    }
    
    
    function showSummary() {
        if (props.orderId) {
            getData(props.orderId);
        } else {
            props.handleSummary(true, {});
        }
        
        // const order = props.orderId ? getData(props.orderId) : {};
        // props.handleSummary(true, order);
    }
    
    function onClickMainPageHandler(){
        props.onHideMenu();
        props.onShowMainPage();
    }

    async function getData (orderId) {
        try {
            const response = await fetch(`https://localhost:5001/OrderLine/${orderId}`);
            const data = await response.json();
            props.handleSummary(true, data);
            // dispatch({ type: "addToOrder", item: data });
        } catch (error) {
        }
    }

    return (
      // <div id="navbarContainer">
        <Navbar id="navbar">
          <Container id="navbarContainer">
            <Navbar.Brand href="#" onClick={onClickMainPageHandler}>
              <img
                src={Logo}
                className="d-inline-block align-top nav-image"
                id= "navbarItem"
              ></img>
            </Navbar.Brand>
            <Navbar.Brand href="#">
              <img
                src={Waiter}
                className="d-inline-block align-top nav-image"
                id= "navbarItem"
              ></img>
            </Navbar.Brand>
            <Navbar.Brand onClick={onClickMenuHandler} href="#">
              <img
                src={Menu}
                className="d-inline-block align-top nav-image"
                id= "navbarItem"
                onClick={onClickMenuHandler}
              ></img>
            </Navbar.Brand>
            <Navbar.Brand href="#">
              <img
                src={Order}
                className="d-inline-block align-top nav-image"
                id= "navbarItem"
                onClick={showSummary}
              ></img>
            </Navbar.Brand>
          </Container>
        </Navbar>
      // </div>
    )
  }

  export default SiteNavbar;