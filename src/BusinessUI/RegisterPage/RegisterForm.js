import "./RegisterForm.css";
import {useRef} from "react";

function RegisterForm(props) {
    const usernameInputRef = useRef();
    const passwordInputRef = useRef();
    const firstNameInputRef = useRef();
    const lastNameInputRef = useRef();
    const emailInputRef = useRef();
    const phoneNumberInputRef = useRef();
    const birthDateInputRef = useRef();
    const roleInputRef = useRef();

    const failedAddNewUser = "There was an error registering a new user.";
    const failedToFetch = "Server error. Try again later.";

    async function submitHandler(event) {
        event.preventDefault();
        const username = usernameInputRef.current.value;
        const password = passwordInputRef.current.value;
        const firstName = firstNameInputRef.current.value;
        const lastName = lastNameInputRef.current.value;
        const email = emailInputRef.current.value;
        const phoneNumber = phoneNumberInputRef.current.value;
        const birthDate = birthDateInputRef.current.value;
        const role = roleInputRef.current.value;

        console.log("handler")
        console.log(username)

        let userData = null;
        let errorMessage = null;

        try {
            userData = await registerNewUser(username, password, firstName, lastName, email, phoneNumber);
            if (userData === null)
                errorMessage = failedAddNewUser;
        }
        catch (error){
            errorMessage = failedToFetch;
        }
        props.onRegister(userData, errorMessage);
        
    }

    async function registerNewUser(username, password, firstName, lastName, email, phoneNumber) {
        const response = await fetch('https://localhost:5001/Identity/register', {
            method: 'post',
            headers:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                UserName: username,
                PasswordHash: password,
                Email: email,
                PhoneNumber: phoneNumber,
                FisrtName: firstName,
                LastName: lastName,
                // BirtDateTime: birthDate,
                // Role: role,
            })
        })
        if (response.ok)
        {
            return await response.json();
        } else {
            return null;
        }
    }
    
    return (
        <form className="register-form" onSubmit={submitHandler}>
            <div>
                <div className="label-input-cluster">
                    <label>Login:</label>
                    <input type="text" id="username" required ref={usernameInputRef} />
                </div>
                <div className="label-input-cluster">
                    <label>Hasło:</label>
                    <input type="password" id="password" required ref={passwordInputRef} />
                </div>
                <div className="label-input-cluster">
                    <label>Imię:</label>
                    <input type="text" id="first-name" required ref={firstNameInputRef} />
                </div>
                <div className="label-input-cluster">
                    <label>Nazwisko:</label>
                    <input type="text" id="last-name" required ref={lastNameInputRef} />
                </div>
                <div className="label-input-cluster">
                    <label>Email:</label>
                    <input type="text" id="email" required ref={emailInputRef} />
                </div>
                <div className="label-input-cluster">
                    <label>Numer telefonu:</label>
                    <input type="text" id="phone-number" required ref={phoneNumberInputRef} />
                </div>
                {/* <div className="label-input-cluster">
                    <label>Data urodzenia:</label>
                    <input type="datetime" id="birth-date" required ref={birthDateInputRef} />
                </div> */}
                {/* <div className="label-input-cluster">
                    <label>Rola:</label>
                    <datalist id="role" required ref={roleInputRef}>
                        <option>Kucharz</option>
                        <option data-value="0" value="Kucharz"/>
                        <option data-value="1" value="Kelner"/>
                        <option data-value="2" value="Manager"/>
                        <option data-value="3" value="Właściciel"/>
                    </datalist>
                </div> */}
            </div>
            {props.errorMessage && <p className="error-message">{props.errorMessage}</p>}
            <button type="submit" className="register-btn">Register</button>
        </form>
    )
}
export default RegisterForm;