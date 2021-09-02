import "./SignInForm.css";
import {useRef} from "react";

function SignInForm(props) {
    const usernameInputRef = useRef();
    const passwordInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const username = usernameInputRef.current.value;
        const pswrd = passwordInputRef.current.value;

        console.log(username);
        console.log(pswrd);

        let userData = signUserIn(username, pswrd);
        props.onLogIn(userData);
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
        // console.log(data);
        try {
            return await response.json()
        } catch (error) {
            console.log(error)
            return null
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
            <button type="submit" className="login-btn">Sign in</button>
        </form>
    )
}

export default SignInForm;