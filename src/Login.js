import './Login.css';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navHistory = useNavigate();

    //login form submit actions
    const logInToDash = async (e) => {
        e.preventDefault();
        if (username && password) {
            console.log(username, password);
            const result = await axios.post('http://localhost:8080/user/authenticate'
                , { username, password });
            if (result.data || result.status == 200) {
                const dataStr = JSON.stringify(result.data);
                sessionStorage.setItem('token', dataStr)
                console.log(sessionStorage.getItem('token'));
                navHistory('./dashboard')
            }
        }
    };

    const goToDashBoard = () => {
        console.log("click on register button");
        navHistory('./registration')
    }

    return (
        <div className="container">
            <div id="formContent">
                <form id="myForm" onSubmit={logInToDash}>
                    <div className="inContainer">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" required
                            value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="inContainer">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="formContainerBtn">
                        <button type="submit" id="submitBtn" className="btnLogin">Login</button>
                        <button type="button" id="registerBtn" className="btnRegister" onClick={goToDashBoard}>Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Login;
