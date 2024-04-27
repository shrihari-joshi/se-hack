import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file for styling


const LoginPage = () => {
    const [loginType, setLoginType] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const history = useNavigate();

    const handleLogin = () => {
        if (loginType === 'farmer') {
            // Perform farmer login logic here
            // For demonstration, just redirect to a specific route
            history('/sell');
        } else {
            // Perform consumer login logic here
            // Redirect to consumer dashboard or perform other actions
        }
    };

    return (
        <div className="loginmain">
            <div className="login-page-container">
                <h2>Login</h2>
                <div className="login-options">
                    <button onClick={() => setLoginType('farmer')}> Farmer</button>
                    <button onClick={() => setLoginType('user')}> Consumer</button>
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