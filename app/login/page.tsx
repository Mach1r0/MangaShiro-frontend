'use client';
import React from 'react';
import Style from './login.module.css';
import Link from 'next/link';
import Head from 'next/head';

export default function Login() {
    return (
        <>
            <Head>
                <link
                    href='https://fonts.googleapis.com/css?family=Inria+Sans'
                    rel='stylesheet'
                />
            </Head>
            <div className={Style['container-all']}>
                <div className={Style['container-form']}>
                    <h1>Login</h1>
                    <input className={Style['container-input']} type="text" placeholder="Username" />
                    <input className={Style['container-input']} type="password" placeholder="Password" />
                    <button>Login</button>
                    <small>Forgot Password?</small>
                    <small className={Style['container-small']}>
                        Not registered? <Link href="/register">Create account</Link>
                    </small>
                </div>
            </div>
        </>
    );
}
