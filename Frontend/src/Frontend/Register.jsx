import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [conPassword, setConPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleLoginClick = (e) => {
        e.preventDefault();
        navigate('/login');
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== conPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/register', {
                firstName,
                lastName,
                email,
                username,
                password,
            });

            if (response.status === 201) {
                setSuccess('Registration successful. Please log in.');
                setError('');
                navigate('/login');
            } else {
                setError(response.data.message || 'Registration failed');
                setSuccess('');
            }
        } catch (err) {
            console.error('Error during registration:', err);
            setError(err.response?.data?.message || 'An error occurred. Please try again.');
            setSuccess('');
        }
    };

    return (
        <>
            <div id="header"></div>

            <section className="nearJob">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-5 nearcol">
                            <h1>Your dream Job</h1>
                            <h2 className="text-red">Is Near to You</h2>
                        </div>
                        <div className="col-sm-7 d-none d-md-block">
                            <div className="row">
                                <div className="d-flex w-100">
                                    <img className="w-100" src="images/contact-us/banner.png" alt="Banner" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="loginForm">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 mx-auto">
                            <form onSubmit={handleRegister}>
                                <h3 className="text-center">REGISTRATION</h3>

                                <div className="latestForm">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="firstname"
                                            id="firstName"
                                            className="form-control"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            required
                                        />
                                        <label className="form-control-placeholder" htmlFor="firstName">First Name</label>
                                        <i className="fa-solid fa-user iconSet"></i>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="lastname"
                                            id="lastName"
                                            className="form-control"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            required
                                        />
                                        <label className="form-control-placeholder" htmlFor="lastName">Last Name</label>
                                        <i className="fa-solid fa-user iconSet"></i>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="form-control"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                        <label className="form-control-placeholder" htmlFor="email">E-mail Address</label>
                                        <i className="fa-regular fa-envelope iconSet"></i>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="username"
                                            id="userName"
                                            className="form-control"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            required
                                        />
                                        <label className="form-control-placeholder" htmlFor="userName">Username</label>
                                        <i className="fa fa-user iconSet" aria-hidden="true"></i>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            className="form-control"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                        <label className="form-control-placeholder" htmlFor="password">Password</label>
                                        <i className="fa fa-lock iconSet" aria-hidden="true"></i>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            name="conpassword"
                                            id="conpwd"
                                            className="form-control"
                                            value={conPassword}
                                            onChange={(e) => setConPassword(e.target.value)}
                                            required
                                        />
                                        <label className="form-control-placeholder" htmlFor="conpwd">Confirm Password</label>
                                        <i className="fa fa-lock iconSet" aria-hidden="true"></i>
                                    </div>
                                </div>
                                {error && <p className="text-danger text-center">{error}</p>}
                                {success && <p className="text-success text-center">{success}</p>}
                                <div className="d-grid">
                                    <input type="submit" name="submit" className="btn btn-danger mb-4" id="register" value="Register Now" />
                                </div>
                                <div className="text-center">
                                    <p>Have an Account? <a className="clickHere" href="/login" onClick={handleLoginClick}>Click Here</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <div id="footer"></div>
        </>
    );
}

export default Register;
