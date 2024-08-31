import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegisterClick = (e) => {
        e.preventDefault();
        navigate('/register');
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:5000/login', { // Ensure the URL is correct
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();

            if (res.ok) {
                console.log('Login successful', data);
                localStorage.setItem('token', data.token); // Store the token in localStorage
                navigate('/home'); // Redirect to the home page
            } else {
                setError(data.msg || 'Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <>
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
                            <form onSubmit={handleLogin}>
                                <h3 className="text-center">LOGIN</h3>
                                <div className="latestForm">
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
                                </div>
                                <div className="row my-4">
                                    <div className="col d-flex justify-content-left">
                                        <div className="checkbox m-0">
                                            <input type="checkbox" name="savepassword" className="form-check-input" id="savePwd" />
                                            <label className="form-check-label p-1" htmlFor="savePwd">Save Password</label>
                                        </div>
                                    </div>
                                </div>
                                {error && <p className="text-danger text-center">{error}</p>}
                                <div className="d-grid">
                                    <input type="submit" name="submit" className="btn btn-danger" id="login" value="LOGIN" />
                                </div>
                                <div className="text-center">
                                    <p>
                                        Haven't Any Account Yet? <a className="clickHere" href="/register" onClick={handleRegisterClick}>Click Here</a>
                                    </p>
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

export default Login;
