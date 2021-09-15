import logo from "../../img/logo.png";
import "./RegisterContainer.css";
import RegisterForm from "./RegisterForm";
import * as url from "url";

function RegisterContainer(props) {
    
    // function registerUser(userData, errorMessage){
    //     props.onLogIn({
    //         type: "register",
    //         user: userData,
    //         error: errorMessage
    //     });
    // }
    
    return(
        <div className="register-container">
            <div className="logo-container">
                <img src={logo} alt="logo" />
            </div>
            <div className="register-form-container">
                <RegisterForm/>
            </div>
        </div>
    )
}

export default RegisterContainer;