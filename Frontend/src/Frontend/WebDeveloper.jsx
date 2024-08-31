import React from 'react';
import { useNavigate } from 'react-router-dom';

function WebDeveloper() {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/home');
    };

    const handleWebDeveloperClick = () => {
        navigate('/webdeveloper');
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
                                    <img className="w-100" src="images/company-details/banner.png" alt="Banner" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <nav className="topbreadcrumb">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#" onClick={handleHomeClick} aria-label="Home" role="button">
                                        Home
                                    </a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    <a href="#" onClick={handleWebDeveloperClick} aria-label="Web Developer" role="button">
                                        Web Developer
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <section className="candidate">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-8 leftcandi">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h3>Web Developer</h3>
                                    <div className="offset-1">
                                        <div className="media py-2">
                                            <div className="company-logo">
                                                <img className="float-start me-4 mb-3" src="images/job-details/company-logo.png" alt="Profile" />
                                            </div>
                                            <div className="media-body">
                                                <h4 className="text-red pb-0">Web Developer</h4>
                                                <ul className="list-unstyled muted">
                                                    <li><i className="fa fa-tag" aria-hidden="true"></i> Tech Innovations Inc.</li>
                                                    <li><i className="fa fa-map-marker" aria-hidden="true"></i> 456 Tech Park, Silicon Valley, CA, 94043.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12">
                                    <h4>Job Description:</h4>
                                    <div className="offset-1">
                                        <p>
                                            As a Web Developer, you will design, code, and maintain web applications that meet client needs and align with our company's standards. You will work on both front-end and back-end development, collaborating with designers and other developers to create responsive, user-friendly websites. Key responsibilities include writing clean, scalable code, optimizing website performance, and troubleshooting any issues. Strong problem-solving skills and a passion for web technologies are essential for this role.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <h4>Key Responsibilities:</h4>
                                    <div className="offset-1">
                                        <p>
                                            - Develop and maintain web applications and websites.<br />
                                            - Write clean, efficient code using modern programming languages.<br />
                                            - Collaborate with designers to create user-friendly interfaces.<br />
                                            - Test and debug applications to ensure optimal performance.<br />
                                            - Stay up-to-date with the latest web development trends and technologies.<br />
                                            - Manage and prioritize multiple projects simultaneously.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <h4>Qualifications:</h4>
                                    <div className="offset-1">
                                        <ul>
                                            <li>Bachelor’s degree in Computer Science, Web Development, or a related field.</li>
                                            <li>Proven experience as a Web Developer or similar role.</li>
                                            <li>Proficiency in HTML, CSS, JavaScript, and modern frameworks (React, Angular, etc.).</li>
                                            <li>Experience with back-end technologies (Node.js, PHP, Ruby on Rails, etc.).</li>
                                            <li>Strong problem-solving skills and attention to detail.</li>
                                            <li>Ability to work effectively in a team and independently.</li>
                                            <li>Knowledge of SEO principles and web performance optimization.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12">
                                    <h4>Requirements:</h4>
                                    <div className="offset-1">
                                        <ul>
                                            <li>Experience with version control systems (e.g., Git).</li>
                                            <li>Familiarity with content management systems (e.g., WordPress).</li>
                                            <li>Ability to create responsive designs for various devices.</li>
                                            <li>Strong understanding of web security practices.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 rightcandi offset-md-1">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h6><i className="fa fa-map-marker me-2" aria-hidden="true"></i> Job Location</h6>
                                    <div className="border-bottom w-75"></div>
                                    <p><i className="fa fa-building me-2" aria-hidden="true"></i> Tech Innovations Inc.</p>
                                    <p><i className="fa fa-envelope me-2" aria-hidden="true"></i> hr@techinnovations.com</p>
                                    <p><i className="fa fa-globe me-3" aria-hidden="true"></i>www.techinnovations.com</p>
                                    <p><i className="fa fa-phone me-3" aria-hidden="true"></i><span className="f_rubik">+1234567890</span></p>
                                    <p>
                                        <i className="fa-solid fa-money-bill me-3"></i>$<span className="f_rubik">400-$800</span> Month</p>
                                </div>
                            </div>
                            <div className="row pt-5">
                                <div className="col-sm-12">
                                    <h6><i className="fa fa-share-alt me-2"></i> Share Job</h6>
                                    <div className="border-bottom w-75"></div>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a href="javascript:void(0);"><i className="fa fa-facebook fs-6" aria-hidden="true"></i></a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="javascript:void(0);"><i className="fa fa-instagram fs-6" aria-hidden="true"></i></a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="javascript:void(0);">
                                                <i className="fa-brands fa-linkedin-in fs-6"></i></a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="javascript:void(0);"><i className="fa fa-twitter fs-6" aria-hidden="true"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row pt-5">
                                <div className="col-sm-12">
                                    <h6>
                                        <i className="fa-regular fa-clock me-2 fa-lg fs-5"></i>
                                        Opening Hours</h6>
                                    <div className="border-bottom w-75"></div>
                                    <table className="table w-100">
                                        <tbody>
                                            <tr className="border-white">
                                                <td>Monday</td>
                                                <td className="text-end">9AM to 6:30PM</td>
                                            </tr>
                                            <tr className="border-white">
                                                <td>Tuesday</td>
                                                <td className="text-end">9AM to 6:30PM</td>
                                            </tr>
                                            <tr className="border-white">
                                                <td>Wednesday</td>
                                                <td className="text-end">9AM to 6:30PM</td>
                                            </tr>
                                            <tr className="border-white">
                                                <td>Thursday</td>
                                                <td className="text-end">9AM to 6:30PM</td>
                                            </tr>
                                            <tr className="border-white">
                                                <td>Friday</td>
                                                <td className="text-end">9AM to 6:30PM</td>
                                            </tr>
                                            <tr className="border-white">
                                                <td>Saturday</td>
                                                <td className="text-end">10AM to 5:30PM</td>
                                            </tr>
                                            <tr className="border-white">
                                                <td>Sunday</td>
                                                <td className="text-end">Closed</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="d-grid">
                                        <a href="job-listing.html" className="btn btn-danger btn-block my-5">
                                            Apply For Job
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div id="footer"></div>
        </>
    );
}

export default WebDeveloper;
