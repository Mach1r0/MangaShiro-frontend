'use client';
import React from 'react';
import Style from './login.module.css';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className={Style['container-all']}>
            <div className={Style['container-form']}>
                <h1>Login</h1>
                <input className={Style['container-input']} type="text" placeholder="Username" />
                <input className={Style['container-input']} type="password" placeholder="Password" />
                <button>Login</button>
                <small>Forgot Password?</small>
                <small>
                    Not registered? <a href="/register">Create account</a>
                </small>
            </div>
        </div>
    );
}
