import '../../App.css';
import './SiteNavbar.css';
import { Container, Navbar} from 'react-bootstrap';
import Logo from '../../img/logo.png';
import Waiter from '../../img/waiter.png';
import Menu from '../../img/menu.png';
import Order from '../../img/order.png';


const SiteNavbar = (props) => {

    function onClickMenuHandler(){
        props.handleMenu(true);
        props.handleMainPage(false);
        props.handleSummary(false);
    }
    
    
    function showSummary() {
      if (props.orderId) {
        console.log("showSummery ify: ", props.orderId)
        getData(props.orderId);
    } else {
        props.handleSummary(true);
        props.handleMainPage(false);
        props.handleMenu(false);
    }


    }
    
    function onClickMainPageHandler(){
      props.handleMainPage(true);
      props.handleSummary(false);
      props.handleMenu(false);
    }

    async function getData (orderId) {
        try {
            const response = await fetch(`https://localhost:5001/OrderLine/${orderId}`);
            const data = await response.json();
            console.log("fetch result: ", data)
            props.handleSummary(true, data);
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
                alt="logo"
              ></img>
            </Navbar.Brand>
            <Navbar.Brand href="#">
              <img
                src={Waiter}
                className="d-inline-block align-top nav-image"
                id= "navbarItem"
                alt="waiter"
              ></img>
            </Navbar.Brand>
            <Navbar.Brand onClick={onClickMenuHandler} href="#">
              <img
                src={Menu}
                className="d-inline-block align-top nav-image"
                id= "navbarItem"
                onClick={onClickMenuHandler}
                alt="menu"
              ></img>
            </Navbar.Brand>
            <Navbar.Brand href="#">
              <img
                src={Order}
                className="d-inline-block align-top nav-image"
                id= "navbarItem"
                onClick={showSummary}
                alt="order"
              ></img>
            </Navbar.Brand>
          </Container>
        </Navbar>
      // </div>
    )
  }

  export default SiteNavbar;