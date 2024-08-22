import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';
import { Button } from './ui/button';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password }); // Assuming setUser expects an object with username and password
    };

    return (
      <div className='flex justify-center flex-col bg-slate-300'>

        <div className='m-5 flex flex-col'>
            <h2>Login</h2>
            <div className='container'>

            <input className='m-4 p-1 block'
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                />
            <input className='m-4 p-1 block'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                />
            <Button className='m-4 p-1 block' onClick={handleSubmit}>Submit</Button> 
            </div>
                </div>
        </div>
    );
};

export default Login;
