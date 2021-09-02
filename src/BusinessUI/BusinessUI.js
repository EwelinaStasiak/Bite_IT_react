import SignInContainer from "./SignInPage/SignInContainer";
import UILayout from "./UserInterface/Layout/UILayout";
import {useReducer, useState} from "react";

import "./BusinessUI.css";

const logInAction = "logIn";
const logOutStatus = {user: null};

function BusinessUI() {
    const [showErrorMessage, setErrorMessage] = useState(false);
    const [logInStatus, setLogInState] = useReducer(logInHandler, logOutStatus, resetLogInStatus);

    function resetLogInStatus() {
        return logOutStatus;
    }

    function logInHandler(logInState, action) {
        if (action.type === logInAction && action.user) {
            return action.user;
        } else {
            setErrorMessage(action.type === logInAction && !action.user);
            return resetLogInStatus();
        }
    }

    console.log(logInStatus);
    
    function toggleBackground(){
        if (logInStatus.user === null) {
            return "sign-in-background";
        }
    }

    return (
        <div className={toggleBackground()}>
            { logInStatus.user === null && <SignInContainer onLogIn={setLogInState} errorMessage={showErrorMessage} /> }
            { logInStatus.user !== null && <UILayout onLogOut={setLogInState} /> }
        </div>
        
    );
}

export default BusinessUI