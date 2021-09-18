import "./RegisterForm.css";
import {useState} from "react";
import ReactHTMLDatalist from "react-html-datalist";
import { Redirect } from "react-router-dom";

function RegisterForm(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [role, setRole] = useState({ role: "" });

    const failedAddNewUser = "There was an error registering a new user.";
    const failedToFetch = "Server error. Try again later.";

    async function submitHandler(event) {
        event.preventDefault();
    
        let userData = null;
        let errorMessage = null;

        try {
            userData = await registerNewUser(username, password, firstName, lastName, email, phoneNumber, birthDate, role);
            if (userData === null)
                errorMessage = failedAddNewUser;
                
        }
        catch (error){
            errorMessage = failedToFetch;
            
        }
        
        
    }
    const handleChange = e => {
        setRole({ ...role, [e.target.name]: e.target.value })
        console.log(role);
        
    
        
      };

    async function registerNewUser(username, password, firstName, lastName, email, phoneNumber, birthDate, role) {
        console.log(birthDate, role, role.valueOf().role);
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
                FirstName: firstName,
                LastName: lastName,
                BirthDateTime: birthDate,
                Role: role.valueOf().role,
                
            })
        })
        if (response.ok)
        {
            console.log(response)
            return response.json();
        } else {
            console.log(response)
            return null;
        }
        
    }
    
    return (
            <div>
                <div className="label-input-cluster">
                    <label>Login:</label>
                    <input type="text" id="username" required value={username} onChange={(e)=> setUsername(e.target.value)} />
                </div>
                <div className="label-input-cluster">
                    <label>Hasło:</label>
                    <input type="password" id="password" required value={password} onChange={(e)=> setPassword(e.target.value)} />
                </div>
                <div className="label-input-cluster">
                    <label>Imię:</label>
                    <input type="text" id="first-name" required  value={firstName} onChange={(e)=> setFirstName(e.target.value)}/>
                </div>
                <div className="label-input-cluster">
                    <label>Nazwisko:</label>
                    <input type="text" id="last-name" required value={lastName} onChange={(e)=> setLastName(e.target.value)} />
                </div>
                <div className="label-input-cluster">
                    <label>Email:</label>
                    <input type="text" id="email" required value={email} onChange={(e)=> setEmail(e.target.value)} />
                </div>
                <div className="label-input-cluster">
                    <label>Numer telefonu:</label>
                    <input type="text" id="phone-number" required value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)} />
                </div>
                <div className="label-input-cluster">
                    <label>Data urodzenia:</label>
                    <input type="text" id="birth-date" required value={birthDate} onChange={(e)=> setBirthDate(e.target.value)} />
                </div>
                <div className="label-input-cluster">
                    <label>Rola:</label>
                    <ReactHTMLDatalist
                            name={"role"}
                            onChange={handleChange}
                            // classNames={"classone classtwo"}
                            options={[
                            { text: "Kucharz", value: "0" },
                            { text: "Kelner", value: "1" },
                            { text: "Manager", value: "2" },
                            { text: "Właściciel", value: "3" }
                            ]}
                    />
                </div>
                <button type="submit" className="register-btn" onClick={submitHandler}>Register</button>
            </div>
            
        )
}
export default RegisterForm;