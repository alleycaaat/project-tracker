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
    return (
        <div>
            <h1>Sign Up</h1>
        </div>
    );
};

export default Signup;