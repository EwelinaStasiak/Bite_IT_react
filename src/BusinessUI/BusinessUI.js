import SignInContainer from "./SignInPage/SignInContainer";
import UILayout from "./UserInterface/Layout/UILayout";
import {useReducer} from "react";

import "./BusinessUI.css";

const logInAction = "logIn";
// const logOutStatus = {user: null, error: null};
const logOutStatus = {user: "user", error: null};

function BusinessUI() {
    const [logInStatus, setLogInState] = useReducer(logInHandler, logOutStatus, resetLogInStatus);

    function resetLogInStatus() {
        return logOutStatus;
    }

    function logInHandler(logInState, action) {
        if (action.type === logInAction && action.user) {
            return {user: action.user, error: null};
        } else if (action.type === logInAction && !action.user) {
            return {user: null, error: action.error}
        } else {
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
            { logInStatus.user === null && <SignInContainer onLogIn={setLogInState} errorMessage={logInStatus.error} /> }
            { logInStatus.user !== null && <UILayout onLogOut={setLogInState} /> }
        </div>
        
    );
}

export default BusinessUI