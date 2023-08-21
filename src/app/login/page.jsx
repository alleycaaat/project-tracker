'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation;';
import { Axios } from 'axios';

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const { email, password } = user;
    const onLogin = async () => {

    };

    return (
        <div>
            <h1>Log In</h1>
            <label htmlFor='email'>Email:</label>
            <input
                id='email'
                type='email'
                value={email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder='email'
            />
            <label htmlFor='password'>Password:</label>
            <input
                id='password'
                type='password'
                value={password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder='password'
            />
            <button
                onClick={onLogin}
            >
                Log in
            </button>
            <p>Need to create an account?</p>
            <Link href='/signup'>Sign up here</Link>
        </div>
    );
};

export default Login;