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
            />
        </div>
    );
};

export default Signup;