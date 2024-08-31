import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Search query:', searchQuery);
    };

    const navigate = useNavigate();
    const handleHomeClick = () => {
        navigate('/home');
    };
    const handleCategoriesClick = () => {
        navigate('/categories');
    };

    const handleContactClick = () => {
        navigate('/contact');
    };

    const handleAboutClick = () => {
        navigate('/aboutus');
    };

    const handleSignupClick = () => {
        navigate('/login');
    };

    const handleJobDetailsClick = () => {
        navigate('/graphicdesigner');
    };

    const handleDataEntryClick = () => {
        navigate('/dataentry');
    };

    const handleWebDeveloperClick = () => {
        navigate('/webdeveloper');
    };

    const handleAccountManagerClick = () => {
        navigate('/accountmanager');
    };

    return (
        <>
            <div className="banner">
                <header id="header">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
                                <img src="./images/logo/Logo.png" className="w-100 main-logo" alt="Logo" title="Logo" />
                            </a>

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav navbar-center m-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="/" onClick={(e) => { e.preventDefault(); handleHomeClick(); }}>Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/categories" onClick={(e) => { e.preventDefault(); handleCategoriesClick(); }}>Categories</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/about" onClick={(e) => { e.preventDefault(); handleAboutClick(); }}>About Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/contact" onClick={(e) => { e.preventDefault(); handleContactClick(); }}>Contact</a>
                                    </li>
                                </ul>
                                <ul className="navbar-nav navbar-right">
                                    <li><a className="btn btn-danger" href="signup" onClick={(e) => { e.preventDefault(); handleSignupClick(); }}>Sign Up</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>

                <section className="homePage">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6">
                                <h1>Find Your Favourite</h1>
                                <h2 className="text-red">Job Immediete</h2>
                                <p>Explore a world of career possibilities with us.
                                    Whether you're looking for your next big challenge or a
                                    fresh start, we offer a range of opportunities to suit
                                    every skill set and interest. Join our community and take
                                    the first step toward a fulfilling career. Embrace new
                                    experiences and find the perfect role that aligns with your
                                    aspirations and talents.
                                </p>

                                <form className="form-inline" method="post" onSubmit={handleSubmit}>
                                    <div className="input-group mb-4 w-100">
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                        <input
                                            type="search"
                                            name="search"
                                            id="search"
                                            className="form-control"
                                            placeholder="Search by Skill,job and Company"
                                            value={searchQuery}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <input type="submit" name="searchbtn" className="btn btn-dark rounded-pill" id="searchBtn" value="Search" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-8">
                                <div className="socialImage">
                                    <img className="ml-0" src="./images/home/Google-logo.png" alt="Google" title="Google" />
                                    <img src="./images/home/Microsoft-Logo-PNG.png" alt="Microsoft" title="Microsoft" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className="jobPart">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="jobImage">
                                <div className="image-card">
                                    <img className="w-100" src="./images/home/women.png" alt="Job" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-8 pt-md-4 pt-sm-0">
                            <h1>Find Million Of Jobs And</h1>
                            <h2 className="text-red">Achieve Success</h2>
                            <p className="py-3">Explore a world of possibilities with our comprehensive job listings.
                                From exciting new roles to industry-leading positions, we have the perfect opportunity
                                to elevate your career. Dive into a wealth of resources and support designed to help you
                                succeed and achieve your professional goals. Start your journey towards a brighter future
                                today.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ourJob">
                <div className="container-fluid">
                    <h1>Our Job <span className="text-red">Process</span></h1>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="ourjobInner mb-4">
                                <i className="fa fa-users" aria-hidden="true"></i>
                                <h3 className="text-red"> Create Account</h3>
                                <p>Start by creating a detailed profile to showcase your skills and experience. A well-crafted profile increases your chances of connecting with potential employers.</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="ourjobInner mb-4">
                                <i className="fa fa-search" aria-hidden="true"></i>
                                <h3 className="text-red"> Search Job</h3>
                                <p>Utilize our advanced search features to find job listings that match your skills, interests, and career goals. Explore opportunities tailored just for you.</p>

                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="ourjobInner mb-4">
                                <i className="fa-regular fa-file-lines"></i>
                                <h3 className="text-red"> Upload Resume</h3>
                                <p>Upload your resume to apply for jobs quickly and efficiently. Ensure your resume highlights your qualifications to attract potential employers.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="jobforYou">
                <div className="container-fluid">
                    <div id="jobSlider" className="carousel slide">
                        <div className="controls-top">
                            <h1>
                                <button className="btn-floating pre" data-bs-target="#jobSlider" data-bs-slide="prev" aria-label="Previous Slide">
                                    <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                                </button>
                                Job For <span className="text-red">You</span>
                                <button className="btn-floating next" data-bs-target="#jobSlider" data-bs-slide="next" aria-label="Next Slide">
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                </button>
                            </h1>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <div className="jobBox">
                                            <img className="w-100" src="./images/home/job-for-you.png" alt="Job" />
                                            <div className="jobBox-content">
                                                <h3>Graphic Desginer</h3>
                                                <button type="button" className="btn btn-outline-warning" onClick={handleJobDetailsClick}>Apply Now</button>
                                            </div>
                                            <div className="jobBox-hover">
                                                <div className="card">
                                                    <img className="card-img-top" src="./images/home/job-hover.png" alt="Job" />
                                                    <div className="jobBox-hover-content">
                                                        <i className="fa fa-cube" aria-hidden="true"></i>
                                                        <h3>Graphic Desginer</h3>
                                                    </div>
                                                    <div className="card-body">
                                                        <h4>Graphic Desginer</h4>
                                                        <ul className="list-unstyled mb-0">
                                                            <li>Building No.-563, klinton Pair, <br /> St, 1.New York, USA.</li>
                                                            <li>Mob:- 9876543210</li>
                                                            <li>Status:- Active</li>
                                                        </ul>
                                                    </div>
                                                    <a onClick={handleJobDetailsClick}>Apply Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-3 clearfix d-md-block">
                                        <div className="jobBox">
                                            <img className="w-100" src="./images/home/job-for-you.png" alt="Job" />
                                            <div className="jobBox-content">
                                                <h3>Data Entry</h3>
                                                <button type="button" className="btn btn-outline-warning" onClick={handleDataEntryClick}>Apply Now</button>
                                            </div>
                                            <div className="jobBox-hover">
                                                <div className="card">
                                                    <img className="card-img-top" src="./images/home/job-hover.png" alt="Job" />
                                                    <div className="jobBox-hover-content">
                                                        <i className="fa fa-cube" aria-hidden="true"></i>
                                                        <h3>Data Entry</h3>
                                                    </div>
                                                    <div className="card-body">
                                                        <h4>Data Entry</h4>
                                                        <ul className="list-unstyled mb-0">
                                                            <li>Building No.-563, klinton Pair, <br /> St, 1.New York, USA.</li>
                                                            <li>Mob:- 9876543210</li>
                                                            <li>Status:- Active</li>
                                                        </ul>
                                                    </div>
                                                    <a onClick={handleDataEntryClick}>Apply Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-3 clearfix d-md-block">
                                        <div className="jobBox">
                                            <img className="w-100" src="./images/home/job-for-you.png" alt="Job" />
                                            <div className="jobBox-content">
                                                <h3>Web Developer</h3>
                                                <button type="button" className="btn btn-outline-warning" onClick={handleWebDeveloperClick}>Apply Now</button>
                                            </div>
                                            <div className="jobBox-hover">
                                                <div className="card">
                                                    <img className="card-img-top" src="./images/home/job-hover.png" alt="Job" />
                                                    <div className="jobBox-hover-content">
                                                        <i className="fa fa-cube" aria-hidden="true"></i>
                                                        <h3>Web Developer</h3>
                                                    </div>
                                                    <div className="card-body">
                                                        <h4>Web Developer</h4>
                                                        <ul className="list-unstyled mb-0">
                                                            <li>Building No.-563, klinton Pair, <br /> St, 1.New York, USA.</li>
                                                            <li>Mob:- 9876543210</li>
                                                            <li>Status:- Active</li>
                                                        </ul>
                                                    </div>
                                                    <a onClick={handleWebDeveloperClick}>Apply Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-3 clearfix d-md-block">
                                        <div className="jobBox">
                                            <img className="w-100" src="./images/home/job-for-you.png" alt="Job" />
                                            <div className="jobBox-content">
                                                <h3>Account Manager</h3>
                                                <button type="button" className="btn btn-outline-warning" onClick={handleAccountManagerClick}>Apply Now</button>
                                            </div>
                                            <div className="jobBox-hover">
                                                <div className="card">
                                                    <img className="card-img-top" src="./images/home/job-hover.png" alt="Job" />
                                                    <div className="jobBox-hover-content">
                                                        <i className="fa fa-cube" aria-hidden="true"></i>
                                                        <h3>Account Manager</h3>
                                                    </div>
                                                    <div className="card-body">
                                                        <h4>Account Manager</h4>
                                                        <ul className="list-unstyled mb-0">
                                                            <li>Building No.-563, klinton Pair, <br /> St, 1.New York, USA.</li>
                                                            <li>Mob:- 9876543210</li>
                                                            <li>Status:- Active</li>
                                                        </ul>
                                                    </div>
                                                    <a onClick={handleAccountManagerClick}>Apply Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <div className="jobBox">
                                            <img className="w-100" src="./images/home/job-for-you.png" alt="Job" />
                                            <div className="jobBox-content">
                                                <h3>Graphic Desginer</h3>
                                                <button type="button" className="btn btn-outline-warning" onClick={handleJobDetailsClick}>Apply Now</button>
                                            </div>
                                            <div className="jobBox-hover">
                                                <div className="card">
                                                    <img className="card-img-top" src="./images/home/job-hover.png" alt="Job" />
                                                    <div className="jobBox-hover-content">
                                                        <i className="fa fa-cube" aria-hidden="true"></i>
                                                        <h3>Graphic Desginer</h3>
                                                    </div>
                                                    <div className="card-body">
                                                        <h4>Graphic Desginer</h4>
                                                        <ul className="list-unstyled mb-0">
                                                            <li>Building No.-563, klinton Pair, <br /> St, 1.New York, USA.</li>
                                                            <li>Mob:- 9876543210</li>
                                                            <li>Status:- Active</li>
                                                        </ul>
                                                    </div>
                                                    <a onClick={handleJobDetailsClick}>Apply Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-3 clearfix d-none d-md-block">
                                        <div className="jobBox">
                                            <img className="w-100" src="./images/home/job-for-you.png" alt="Job" />
                                            <div className="jobBox-content">
                                                <h3>Data Entry</h3>
                                                <button type="button" className="btn btn-outline-warning" onClick={handleDataEntryClick}>Apply Now</button>
                                            </div>
                                            <div className="jobBox-hover">
                                                <div className="card">
                                                    <img className="card-img-top" src="./images/home/job-hover.png" alt="Job" />
                                                    <div className="jobBox-hover-content">
                                                        <i className="fa fa-cube" aria-hidden="true"></i>
                                                        <h3>Data Entry</h3>
                                                    </div>
                                                    <div className="card-body">
                                                        <h4>Data Entry</h4>
                                                        <ul className="list-unstyled mb-0">
                                                            <li>Building No.-563, klinton Pair, <br /> St, 1.New York, USA.</li>
                                                            <li>Mob:- 9876543210</li>
                                                            <li>Status:- Active</li>
                                                        </ul>
                                                    </div>
                                                    <a onClick={handleDataEntryClick}>Apply Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-3 clearfix d-md-block">
                                        <div className="jobBox">
                                            <img className="w-100" src="./images/home/job-for-you.png" alt="Job" />
                                            <div className="jobBox-content">
                                                <h3>Web Developer</h3>
                                                <button type="button" className="btn btn-outline-warning" onClick={handleWebDeveloperClick}>Apply Now</button>
                                            </div>
                                            <div className="jobBox-hover">
                                                <div className="card">
                                                    <img className="card-img-top" src="./images/home/job-hover.png" alt="Job" />
                                                    <div className="jobBox-hover-content">
                                                        <i className="fa fa-cube" aria-hidden="true"></i>
                                                        <h3>Web Developer</h3>
                                                    </div>
                                                    <div className="card-body">
                                                        <h4>Web Developer</h4>
                                                        <ul className="list-unstyled mb-0">
                                                            <li>Building No.-563, klinton Pair, <br /> St, 1.New York, USA.</li>
                                                            <li>Mob:- 9876543210</li>
                                                            <li>Status:- Active</li>
                                                        </ul>
                                                    </div>
                                                    <a onClick={handleWebDeveloperClick}>Apply Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-3 clearfix d-md-block">
                                        <div className="jobBox">
                                            <img className="w-100" src="./images/home/job-for-you.png" alt="Job" />
                                            <div className="jobBox-content">
                                                <h3>Account Manager</h3>
                                                <button type="button" className="btn btn-outline-warning" onClick={handleAccountManagerClick}>Apply Now</button>
                                            </div>
                                            <div className="jobBox-hover">
                                                <div className="card">
                                                    <img className="card-img-top" src="./images/home/job-hover.png" alt="Job" />
                                                    <div className="jobBox-hover-content">
                                                        <i className="fa fa-cube" aria-hidden="true"></i>
                                                        <h3>Account Manager</h3>
                                                    </div>
                                                    <div className="card-body">
                                                        <h4>Account Manager</h4>
                                                        <ul className="list-unstyled mb-0">
                                                            <li>Building No.-563, klinton Pair, <br /> St, 1.New York, USA.</li>
                                                            <li>Mob:- 9876543210</li>
                                                            <li>Status:- Active</li>
                                                        </ul>
                                                    </div>
                                                    <a onClick={handleAccountManagerClick}>Apply Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="weCompany">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-8 pt-md-5 pt-sm-0">
                            <h1>We are Trusted by Popular</h1>
                            <h2 className="text-red">800+ Company</h2>
                            <p className="more">
                                We are proud to be the preferred choice for over 800 leading companies across
                                various industries. Our platform is trusted for its reliability and efficiency,
                                helping companies and job seekers connect seamlessly. With our extensive network
                                and comprehensive services, we ensure that both employers and candidates find the
                                best opportunities and solutions. Join the many organizations that rely on us to
                                meet their recruitment needs and achieve their business goals.
                            </p>
                        </div>
                        <div className="col-sm-4 text-center">
                            <div className="d-flex w-100 pb-4">
                                <div className="w-25">
                                    <img src="images/home/brand9.png" className="img-fluid" alt="Logo" />
                                </div>
                                <div className="w-25">
                                    <img src="images/home/brand10.png" className="img-fluid" alt="Logo" />
                                </div>
                                <div className="w-25">
                                    <img src="images/home/brand11.png" className="img-fluid" alt="Logo" />
                                </div>
                                <div className="w-25">
                                    <img src="images/home/brand12.png" className="img-fluid" alt="Logo" />
                                </div>
                            </div>
                            <div className="d-flex w-100 pb-4">
                                <div className="w-25">
                                    <img src="images/home/brand1.png" className="img-fluid" alt="Logo" />
                                </div>
                                <div className="w-25">
                                    <img src="images/home/brand2.png" className="img-fluid" alt="Logo" />
                                </div>
                                <div className="w-25">
                                    <img src="images/home/brand3.png" className="img-fluid" alt="Logo" />
                                </div>
                                <div className="w-25">
                                    <img src="images/home/brand4.png" className="img-fluid" alt="Logo" />
                                </div>
                            </div>

                            <div className="d-flex w-100 pb-4">
                                <div className="w-25">
                                    <img src="images/home/brand5.png" className="img-fluid" alt="Logo" />
                                </div>
                                <div className="w-25">
                                    <img src="images/home/brand6.png" className="img-fluid" alt="Logo" />
                                </div>
                                <div className="w-25">
                                    <img src="images/home/brand7.png" className="img-fluid" alt="Logo" />
                                </div>
                                <div className="w-25">
                                    <img src="images/home/brand8.png" className="img-fluid" alt="Logo" />
                                </div>
                            </div>
                        </div >
                    </div >
                </div >
            </section >

            <div className="intro">
                <div className="way-success"></div>
                <div className="caption">
                    <div className="way-inner">
                        <h3>WAY TO SUCCESS</h3>
                    </div>
                </div>
                <span className="overlay">
                    <svg viewBox="0 0 500 250" enable-background="new 0 0 500 250" xmlSpace="preserve" preserveAspectRatio="none">
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
                            <a className="navbar-brand" href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
                                <img src="images/home/jobLogo-footer.png" className="w-100 main-logo" alt="Logo" title="Logo" />
                            </a>
                            <div className="footer_inner">
                                <p className="w-90">
                                    Discover more about our company and the services we offer. We are committed to providing top-notch solutions and support to help you achieve your career goals. From innovative job search tools to personalized career advice, we have everything you need to succeed.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-2 mx-auto">
                            <h5>Usefull Links</h5>
                            <div className="footer_inner">
                                <ul className="list-unstyled">
                                    <li><a href="/categories" onClick={(e) => { e.preventDefault(); handleCategoriesClick(); }}>Categories</a></li>
                                    <li><a href="/about" onClick={(e) => { e.preventDefault(); handleAboutClick(); }}>About Us</a></li>
                                    <li><a href="/contact" onClick={(e) => { e.preventDefault(); handleContactClick(); }}>Contact</a></li>
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
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default Home;
