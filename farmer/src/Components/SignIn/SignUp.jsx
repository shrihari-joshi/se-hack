import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import Login from './Login';
import Loading from '../Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import './Register.css';

const Register = () => {
    const [Name, setName] = useState()
    const [username, setUsername] = useState('');
    const [Phone, setPhone] = useState('');
    const [Street, setStreet] = useState('')
    const [City, setCity] = useState('')
    const [State, setState] = useState('')
    const [Country, setCountry] = useState('')
    const [PinCode, setPinCode] = useState('')
    const [pass, setPass] = useState('');
    const [retypePass, setRetypePass] = useState('');
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const notifyError = (msg) => toast.error(msg, { position: 'top-center' });
    const notifyWarning = (msg) => toast.warn(msg, { position: 'top-center'})
    const notifySuccess = (msg) => toast.success(msg, { position: 'top-center' });

    const isPassMatch = (pass, rePass) => {
        if (pass !== rePass) {
            setPass('');
            setRetypePass('');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => 
    {
        e.preventDefault();
        
        if (!username || !Phone || !pass)
            return;
        
        if (!isPassMatch(pass, retypePass))
        {
            notifyWarning('Password and confirm password should be same')
            return;
        }

        const user = 
        {
            Name : Name,
            Phone: Phone,
            username: username,
            password: pass
        };

        try 
        {
            setLoading(true);
            const response = await axios.post('http://localhost:3500/register', user);
                notifySuccess(`${user.username} has been registered`)
                console.log(response + '\nregistered');
                setName('')
                setUsername('');
                setPhone('');
                setStreet('')
                setCity('')
                setState('')
                setCountry('')
                setPinCode('')
                setPass('');
                setRetypePass('');
                setLoading(false);
        } 
        catch (error) 
        {
            console.error('Cannot send data:', error);
            notifyError("Couldn't register user");
            setLoading(false);
        }
    };

    return (
        <div className='full'>
            <form className='page'>
                
                    <input  
                        placeholder='Name:'
                        required
                        type='text'
                        id='Name'
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                        className='input1'
                        title='Enter your Name'
                    />
                
                    <input  
                        placeholder='Username:'
                        required
                        type='text'
                        id='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className='input1'
                        title='Enter your username'
                    />
                
                    <input  
                        placeholder='Phone no.:'
                        required
                        type='Phone'
                        id='Phone'
                        value={Phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className='input1'
                        title='Enter your Phone number'
                    />

                    <input  
                        placeholder='Street: '
                        required
                        type='Street'
                        id='Street'
                        value={Street}
                        onChange={(e) => setPhone(e.target.value)}
                        className='input1'
                        title='Enter your Street'
                    />

                <div className='address-input'>
                    <input  
                        placeholder='Street: '
                        required
                        type='Street'
                        id='Street'
                        value={Street}
                        onChange={(e) => setStreet(e.target.value)}
                        className='input1'
                        title='Enter your Street'
                    />

                    <input  
                        placeholder='City: '
                        required
                        type='City'
                        id='City'
                        value={City}
                        onChange={(e) => setCity(e.target.value)}
                        className='input1'
                        title='Enter your City'
                    />
                </div>
                    
                <div className='address2-input'>
                    <input  
                        placeholder='State: '
                        required
                        type='State'
                        id='State'
                        value={State}
                        onChange={(e) => setState(e.target.value)}
                        className='input1'
                        title='Enter your State'
                    />

                    <input  
                        placeholder='Country: '
                        required
                        type='Country'
                        id='Country'
                        value={Country}
                        onChange={(e) => setCountry(e.target.value)}
                        className='input1'
                        title='Enter your Country'
                    />
                </div>

                    <input  
                        placeholder='Pin Code: '
                        required
                        type='Pin Code'
                        id='Pin Code'
                        value={PinCode}
                        onChange={(e) => setPinCode(e.target.value)}
                        className='input1'
                        title='Enter your Pin Code'
                    />

                <div className='password-input'>
                    <input
                        placeholder='Password:'
                        required
                        type='password' 
                        id='pass'
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        className='input1'
                        title='Enter password'
                    />
                    <input
                        placeholder='Confirm Password:'
                        required
                        type='password' 
                        id='retype-pass'
                        value={retypePass}
                        onChange={(e) => setRetypePass(e.target.value)}
                        className='input1'
                        title='Enter password to confirm'
                    />
                </div>
                <button className='regbutton' type='submit' onClick={handleSubmit}>Register</button>
            </form>
            {loading && <Loading />}
            <ToastContainer position="bottom-center" autoClose={2000} hideProgressBar={true} />
        </div>
    );
};

export default Register;