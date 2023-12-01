// src/Register.js
import React, { useState } from 'react';
import './Register.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add registration logic here
        console.log('Registration data:', formData);
        console.log(Object.entries(formData)[0][1]);
        const firstName = Object.entries(formData)[0][1]
        const lastName = Object.entries(formData)[1][1]
        const email = Object.entries(formData)[2][1]
        const password = Object.entries(formData)[3][1]
        const res = await createUserWithEmailAndPassword(auth, email, password)
        await setDoc(doc(db, "dme", res.user.uid),
            { firstName, lastName, email, password }
        )
        await setDoc(doc(db, "dmechats", res.user.uid), {})
        navigate("/")
    };

    return (
        <div className="register-container">
            <form onSubmit={handleSubmit} className="register-form">
                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
