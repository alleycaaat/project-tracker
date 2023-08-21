'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation;';
import { Axios } from 'axios';

const Signup = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
    })
    const {username, email, password} = user
    const onSignup = async () => {

    }

    return (
        <div>
            <h1>Sign Up</h1>
            <label htmlFor='username'>Username:</label>
            <input
                id='username'
                type='text'
                value={username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder='username'
            />
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
                onClick={onSignup}
            >
                Sign Up
            </button>
            <p>Already have an account?</p>
            <Link href='/login'>Log in here</Link>
        </div>
    );
};

export default Signup;