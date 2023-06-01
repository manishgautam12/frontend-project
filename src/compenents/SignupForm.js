import React, { useState } from 'react';
import axios from 'axios';
import './signup.css'

const SignupForm = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Make a POST request to the signup API
        axios.post('https://example.com/signup', {name, username, password ,email})
            .then((response) => {
                // Handle successful signup
                console.log('Signup successful');
            })
            .catch((error) => {
                // Handle signup error
                setError('An error occurred during signup.');
                console.error(error);
            });
    };

    return (
        <form className='form' onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name" className='box'>name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                />
            </div>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={handleUsernameChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
            </div>
            <div>
                <label htmlFor="email">email:</label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                />
            </div>
            <div>
                <button type="submit">Signup</button>
            </div>
            {error && <p>{error}</p>}
        </form>
    );
};

export default SignupForm;
