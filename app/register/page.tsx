'use client';
import React, { useState } from 'react';
import Style from './register.module.css';

export default function Register() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [nickname, setNickname] = useState(''); 
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        
        const data = { email, name: username, nickname, password };

        try {
            const response = await fetch('http://localhost:8000/user/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.detail || 'Failed to create user');
            }

            const result = await response.json();
            console.log('User created:', result);
            setError(null);
        } catch (error) {
            setError(error.message || 'An unknown error occurred');
        }
    };

    return (
        <div className={Style['container-all']}>
            <div className={Style['container-content']}>
                <h1>Sign up to MangaShiro</h1>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form className={Style['container-input']} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Nickname"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <div className={Style['container-down']}>
                        <button type="submit">Sign up</button>
                        <small>
                            <a href="/login">Login</a>
                        </small>
                    </div>
                </form>
            </div>
        </div>
    );
}
