import "./SignInForm.css";
import {useRef} from "react";

function SignInForm(props) {
    const usernameInputRef = useRef();
    const passwordInputRef = useRef();
    const invalidCredentials = "Incorrect login or password. Try again.";
    const failedToFetch = "Server error. Try again later."

    async function submitHandler(event) {
        event.preventDefault();

        const username = usernameInputRef.current.value;
        const pswrd = passwordInputRef.current.value;
        let userData = null;
        let errorMessage = null;

        try {
            userData = await signUserIn(username, pswrd);
            if (userData === null)
                errorMessage = invalidCredentials;
        } catch (error) {
            console.log(error);
            errorMessage = failedToFetch;
        }
        
        props.onLogIn(userData, errorMessage);
    }

    async function signUserIn(username, password) {
        const response = await fetch('https://localhost:5001/Identity/login',{
            method: 'post',
            headers:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                UserName: username,
                Password: password,
            })
        })

        if (response.ok) {
            return await response.json();
        } else {
            return null;
        }
    }
    
    return (
        <form className="sign-in-form" onSubmit={submitHandler}>
            <div>
                <div className="label-input-cluster">
                    <label htmlFor="email">Login:</label>
                    <input type="text" id="username" required ref={usernameInputRef} />
                </div>
                <div className="label-input-cluster">
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" required ref={passwordInputRef} />
                </div>
            </div>
            {props.errorMessage && <p className="error-message">{props.errorMessage}</p>}
            <button type="submit" className="login-btn">Sign in</button>
        </form>
    )
}

export default SignInForm;