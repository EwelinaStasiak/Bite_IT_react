import logo from "../../img/logo.png";
import "./SignInContainer.css";
import SignInForm from "./SignInForm";
import * as url from "url";

function SignInContainer(props) {
    
    function logUserIn(userData){
        props.onLogIn({
            type: "logIn",
            user: userData
        });
    }
    
    return(
        <div className="sign-in-container">
            <div className="logo-container">
                <img src={logo} alt="logo" />
            </div>
            <div className="sign-in-form-container">
                <SignInForm onLogIn={logUserIn} />
            </div>
        </div>
    )
}

export default SignInContainer;