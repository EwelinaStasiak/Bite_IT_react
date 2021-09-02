import SignInContainer from "./SignInPage/SignInContainer";
import Homepage from "./Homepage/Homepage";
import {useReducer} from "react";

import "./BusinessUI.css";

const logInAction = "logIn";
const logOutStatus = {user: null};

function BusinessUI() {
    const [logInStatus, setLogInState] = useReducer(logInHandler, logOutStatus, resetLogInStatus);

    function resetLogInStatus() {
        return logOutStatus;
    }

    function logInHandler(logInState, action) {
        if (action.type === logInAction) {
            return action.user;
        } else {
            return resetLogInStatus();
        }
    }
    
    function toggleBackground(){
        return (
            logInStatus.user === null ?
                "sign-in-layout" :
                "user-interface-layout"
        )
    }

    return (
        <div className={toggleBackground()}>
            { logInStatus.user === null && <SignInContainer onLogIn={setLogInState} /> }
            { logInStatus.user !== null && <Homepage onLogOut={setLogInState} /> }
        </div>
        
    );
}

export default BusinessUI