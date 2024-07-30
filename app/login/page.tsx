"use client";
import React, { useState } from "react";
import Style from "./login.module.css";
import Link from "next/link";
import Head from "next/head";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // Add error state for handling errors

  const handleLogin = async (event) => {
    event.preventDefault();

    const data = {
        email,
        password,
    };

    try {
      const response = await fetch("http://localhost:8000/user/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // Make sure this is included to allow cookies
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorMessage = await response.text(); // Get error message from the response
        throw new Error(`Error: ${errorMessage || response.status}`);
      }

      const result = await response.json();
      console.log("Login successful:", result);
      setError(null); // Clear any previous errors
      // Optionally redirect or handle successful login
    } catch (error) {
      console.error("Error on login request:", error.message);
      setError(error.message); // Set error message to display to the user
    }
  };

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Inria+Sans"
          rel="stylesheet"
        />
      </Head>
      <div className={Style["container-all"]}>
        <div className={Style["container-form"]}>
          <h1>Login</h1>
          {error && <p style={{ color: "red" }}>{error}</p>}{" "}
          {/* Display error message */}
          <form onSubmit={handleLogin}>
            <input
              className={Style["container-input"]}
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className={Style["container-input"]}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
          <small>Forgot Password?</small>
          <small className={Style["container-small"]}>
            Not registered? <Link href="/register">Create account</Link>
          </small>
        </div>
      </div>
    </>
  );
}
