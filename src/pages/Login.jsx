import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CryptoJS from 'crypto-js';

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";


const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const [token, setToken] = useState(null);
    const [role, setRole] = useState(null);
    const navigate = useNavigate();
    const { email, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error("Please fill out all fields");
            return;
        }

        const response = await axios.post(`${process.env.REACT_APP_URL}/user/login`, formData)
        if (response.data.success) {
            const UserToken = (response.data.token);
            const UserRole = (response.data.role);
           
            document.cookie = `userToken=${UserToken}; path=/; expires=${new Date(Date.now() + 3600000).toUTCString()}; secure`;
            document.cookie = `userRole=${UserRole}; path=/; expires=${new Date(Date.now() + 3600000).toUTCString()}; secure`;

            toast.success(response.data.message);
            navigate("/");
        }
        else {
            toast.error(response.data.message)
        }
    }
    return (

        <div className="content">
            <div className='container-fluid loginform' style={{ marginTop: '30px', padding: '20px 60px' }}>

                <form onSubmit={handleSubmit}>

                    <div className="createteamform">

                        <div className="title"
                            style={{
                                display: 'inline-block',
                                position: 'relative',
                                top: '25px',
                                left: '25px',
                                zIndex: '1',
                                padding: '0 10px',
                                backgroundColor: 'white',
                            }}>
                            <h2> Login </h2>
                        </div>

                        <div className="personalinfo"
                            style={{
                                border: '1px solid #003366',
                                borderRadius: '25px',
                                padding: '35px',
                            }}>

                            <div className='form-group'>
                                <label>E-mail</label>
                                <input className='form-control' type="email" name='email' value={email} onChange={onChange} />
                            </div>

                            <div className='form-group mt-3'>
                                <label>Password</label>

                                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                                    <input
                                        className='form-control'
                                        type={showPassword ? 'text' : 'password'}
                                        name='password'
                                        value={password}
                                        onChange={onChange}
                                        maxLength='8'
                                        pattern='\d{8}'
                                        title='Enter 8 Digit Password Atleast'
                                        style={{ paddingRight: '40px' }} // Extra padding for the icon
                                    />

                                    <span
                                        onClick={() => setShowPassword((prev) => !prev)}
                                        style={{
                                            position: 'absolute',
                                            right: '10px', // Adjust as per need
                                            cursor: 'pointer',
                                            color: '#6c757d',
                                        }}
                                    >
                                        {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                                    </span>
                                </div>
                            </div>


                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px' }}>
                                <button className='btn buttons mt-3' type='submit' style={{ backgroundColor: '#e6007e', color: '#ffffff', }}>
                                    Login
                                </button>
                            </div>

                            <div className="loginPglinks" style={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '40px',
                                marginTop: '25px',
                            }}>

                                <Link className='link' to={'/signup'} >
                                    <p>Don't have an Account ?</p>
                                </Link>

                                <Link className='link' to={'/forgotpassword'} >
                                    <p>Forget Password ?</p>
                                </Link>

                            </div>

                        </div>
                    </div>
                </form>


            </div>
        </div>
    )
}

export default Login;
