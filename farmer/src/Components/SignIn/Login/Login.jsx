import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // Import the CSS file 

const LoginPage = () => {
    const [loginType, setLoginType] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const history = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.get(`http://localhost:3500/${loginType}/login` , {
                params : {
                    username: username,
                    farmername: username, 
                    password : password
                }
            })
            localStorage.setItem('user', JSON.stringify(response.data));
            console.log(response.data);
            history('/sell')
        } catch (err) {
            console.log(err.message);

        }
    };

    return (
        <div className="loginmain">
            <div className="login-page-container">
                <h2>Login</h2>
                <div className="login-options">
                    <button onClick={() => setLoginType('farmer')}> Farmer</button>
                    <button onClick={() => setLoginType('user')}> User</button>

                </div>
                {loginType && (
                    <form className="login-form" onSubmit={handleLogin}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit">Login</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default LoginPage;