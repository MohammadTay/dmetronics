// src/Register.js
import React, { useState } from 'react';
import './Register.css';
import upload from '../../utils/upload'
import { useNavigate } from 'react-router-dom';
import newRequest from '../../utils/Request'

const Register = () => {
    const [file, setFile] = useState(null);
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        img: "",
        country: "",
        desc: "",
        phone: ""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };
    // const handleSeller = (e) => {
    //     setUser((prev) => {
    //       return { ...prev, isSeller: e.target.checked };
    //     });
    //   };



    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = await upload(file);
        try {
            await newRequest.post("/auth/register", {
                ...user,
                img: url,
            });
            navigate("/login")
        } catch (err) {
            console.log(err);
        }
        navigate("/")
    };

    return (
        <div className="register-container">
            <form onSubmit={handleSubmit} className="register-form">
                <label>
                    UserName:
                    <input
                        type="text"
                        name="username"
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Image:
                    <input
                        type="file"
                        name="img"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </label>
                <label>
                    Country:
                    <input
                        type="text"
                        name="country"
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Phone:
                    <input
                        type="text"
                        name="phone"
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Description:
                    <input
                        type="text"
                        name="desc"
                        onChange={handleChange}
                    />
                </label>
                {/* <label className="switch">
              <input type="checkbox" onChange={handleSeller} />
              <span className="slider round"></span>
            </label> */}
                <button type="submit">Register</button>
            </form>
        </div>
    );
};


export default Register;
