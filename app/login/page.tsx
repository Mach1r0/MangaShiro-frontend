'use client';
import React, { useState } from 'react';
import Style from './login.module.css';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [nickname, setnickname] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();

    const data = { nickname, password };

    try {
      const response = await fetch('http://localhost:8000/user/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', 
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Login successful');
        setError(null);
        router.push('/'); // Redirect on successful login
      } else {
        const errorMessage = await response.text();
        throw new Error(`Error: ${errorMessage || response.status}`);
      }
    } catch (error) {
      console.error('Error on login request:', error.message);
      setError(error.message);
    }
  };

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Inria+Sans" rel="stylesheet" />
      </Head>
      <div className={Style['container-all']}>
        <div className={Style['container-form']}>
          <h1>Login</h1>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <form onSubmit={handleLogin}>
            <input
              className={Style['container-input']}
              type="text"
              placeholder="nickname"
              value={nickname}
              onChange={(e) => setnickname(e.target.value)}
            />
            <input
              className={Style['container-input']}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
          <small>Forgot Password?</small>
          <small className={Style['container-small']}>
            Not registered? <Link href="/register">Create account</Link>
          </small>
        </div>
      </div>
    </>
  );
}
