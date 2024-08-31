import React from 'react';
import { useNavigate } from 'react-router-dom';
// import Home from './Home.jsx';

function Contact() {

    const navigate = useNavigate();
    const handleHomeClick = () => {
        navigate('/home'); // Navigates to the Home page
    };

    const handleContactClick = () => {
        navigate('/contact'); // Navigates to the Contact page
    };

    return (
        <>
            {/* <!-- header start here --> */}
            <div id="header"></div>
            {/* <!-- header end here --> */}

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

            {/* <!-- /.nearJob-- > */}
            <nav class="topbreadcrumb">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12">
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item"><a onClick={handleHomeClick}>Home</a></li>
                                <li class="breadcrumb-item"><a onClick={handleContactClick}>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <section className="contacts">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 mb-4">
                            <a>
                                <div className="contInner">
                                    <i className="fa fa-map" aria-hidden="true"></i>
                                    <h4>Address</h4>
                                    <p>228-5 Main Street, Georgia.</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-4 mb-4">
                            <a>
                                <div className="contInner">
                                    <i className="fa fa-envelope-open" aria-hidden="true"></i>
                                    <h4>E-mail</h4>
                                    <p>contact.jp@gmail.com</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-4 mb-4">
                            <a>
                                <div className="contInner">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <h4>Phone Number</h4>
                                    <p className="f_rubik">+61589-35968</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /. contacts --> */}

            <section className="contactForm">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <p>Have A Question ?</p>
                            <h3>Get in <span className="text-red">Touch Now?</span></h3>

                            <form className="form" method="post">
                                <div className="row">
                                    <div className="col-sm-6 form-group">
                                        <input type="text" name="username" id="username" className="form-control" placeholder="User Name" value="" required />
                                    </div>
                                    <div className="col-sm-6 form-group">
                                        <input type="email" name="email" id="email" className="form-control" placeholder="Email Address" value="" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 form-group">
                                        <input type="text" name="subject" id="subject" className="form-control" placeholder="Subject" value="" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 form-group">
                                        <input type="text" name="write" className="form-control" placeholder="Write your Message" value="" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="mb-3">
                                        <div className="checkbox">
                                            <input type="checkbox" name="accept" className="form-check-input" id="accept" required />
                                            <label className="form-check-label" for="accept">Accept Term & privacy Policy</label>
                                        </div>

                                        <input type="submit" name="submit" id="sendMsg" className="btn btn-danger rounded-pill" value="Send Message" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /. contactForm --> */}

            <div className="contactMap">
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d717777.9481649355!2d-85.3557869889404!3d33.3103748058766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s228-5%20Main%20Street%2C%20Georgia.!5e0!3m2!1sen!2sin!4v1612943904611!5m2!1sen!2sin" height="385" style={{ border: '0', width: '100%' }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>

            <div className="intro">
                <div className="way-success"></div>
                <div className="caption">
                    <div className="way-inner">
                        <h3>WAY TO SUCCESS</h3>
                    </div>
                </div>
                <span className="overlay">
                    <svg viewBox="0 0 500 250" enableBackground="new 0 0 500 250" xmlSpace="preserve" preserveAspectRatio="none">
                        <path fill="#282b4a"
                            d="M 250 180.5 c -53.85 0 -135.344 -30.044 -250 -165.633 V 262 h 500 V 15.867 C 405.344 180.456 280.85 180.5 250 180.5 Z" />
                    </svg>
                </span>
            </div>

            <footer id="footer">
                {/*<!-- <svg viewBox="0 0 1440 250">
                                                <path fill="#fff" fill-opacity="1" d="M0,96L120,122.7C240,149,480,203,720,202.7C960,203,1200,149,1320,122.7L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
                                            </svg> -->*/}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3">
                            <a>
                                <img src="images/home/jobLogo-footer.png" alt="Logo" title="Logo" />
                            </a>
                            <div className="footer_inner">
                                <p className="w-90">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut<br />labore et dolore accumsan lacus <br /> vel facilisis.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-2 mx-auto">
                            <h5>Usefull Links</h5>
                            <div className="footer_inner">
                                <ul className="list-unstyled">
                                    <li><a>About Us</a></li>
                                    <li><a>Contact Us</a></li>
                                    <li><a>Services</a></li>
                                    <li><a>News & Blog </a></li>
                                    <li><a>Our features</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <h5>Contact Us</h5>
                            <div className="footer_inner">
                                <div className="d-flex media">
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                    <div className="media-body">
                                        <p> <span className="f_rubik">456,</span> tredy Road, New york <br /> USA, MD <span
                                            className="f_rubik">210093</span> </p>
                                    </div>
                                </div>
                                <div className="d-flex media">
                                    <i className="fa-regular fa-envelope"></i>
                                    <div className="media-body">
                                        <p>hr@gmail.com</p>
                                    </div>
                                </div>
                                <div className="d-flex media">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <div className="media-body">
                                        <p className="f_rubik">+61-5869259325</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <h5>Get In Touch</h5>
                            <div className="footer_inner">
                                <form className="form-inline valid" method="post">
                                    <div className="input-group mb-4">
                                        <input type="email" name="email" className="form-control" id="email"
                                            placeholder="E-mail Address" value="" required />
                                        <button className="btn btn-white" name="submit" type="submit" id="submit">
                                            <i className="fa-regular fa-paper-plane"></i>
                                        </button>
                                    </div>
                                </form>
                                <ul className="list-inline">
                                    <li className="list-inline-item"><a><i className="fa fa-facebook"
                                        aria-hidden="true"></i></a></li>
                                    <li className="list-inline-item"><a><i className="fa fa-twitter"
                                        aria-hidden="true"></i></a></li>
                                    <li className="list-inline-item"><a><i className="fa fa-instagram"
                                        aria-hidden="true"></i></a></li>
                                    <li className="list-inline-item"><a>
                                        <i className="fa-brands fa-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    );
}

export default Contact;
