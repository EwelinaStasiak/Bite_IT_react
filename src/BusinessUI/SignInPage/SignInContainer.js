import logo from "../../img/logo.png";
import "./SignInContainer.css";
import SignInForm from "./SignInForm";

function SignInContainer(props) {
    
    function logUserIn(userData, errorMessage){
        props.onLogIn({
            type: "logIn",
            user: userData,
            error: errorMessage
        });
    }
    
    return(
        <div className="sign-in-container">
            <div className="logo-container">
                <img src={logo} alt="logo" />
            </div>
            <div className="sign-in-form-container">
                <SignInForm onLogIn={logUserIn} errorMessage={props.errorMessage} />
            </div>
        </div>
    )
}

export default SignInContainer;