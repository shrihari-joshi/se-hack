import React, { useState } from 'react';
import './Signup.css'; // Import the CSS file for styling

const SignupPage = () => {
    const [signupType, setSignupType] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');
    const [state, setState] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = () => {
        if (signupType === 'farmer') {
            // Perform farmer signup logic here
        } else {
            // Perform consumer signup logic here
        }
    };

    return (
        <div className="signup-page-container">
            <h2>Signup</h2>
            <div className="signup-options">
                <button onClick={() => setSignupType('farmer')}> Signup as Farmer</button>
                <button onClick={() => setSignupType('consumer')}> Signup as Consumer</button>
            </div>
            {signupType && (
                <form className="signup-form" onSubmit={handleSignup}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="text" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    </div>
                    {signupType === 'farmer' && (
                        <div>
                            <div className="form-group">
                                <label htmlFor="street">Street</label>
                                <input type="text" id="street" value={street} onChange={(e) => setStreet(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pincode">Pincode</label>
                                <input type="text" id="pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="state">State</label>
                                <input type="text" id="state" value={state} onChange={(e) => setState(e.target.value)} />
                            </div>
                        </div>
                    )}
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    <button type="submit">Signup</button>
                </form>
            )}
        </div>
    );
};

export default SignupPage;
