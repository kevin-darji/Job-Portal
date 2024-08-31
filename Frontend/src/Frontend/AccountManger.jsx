import React from 'react';
import { useNavigate } from 'react-router-dom';

function AccountManager() {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/home');
    };

    const handleAccountManagerClick = () => {
        navigate('/accountmanager');
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
                                    <a href="#" onClick={handleAccountManagerClick} aria-label="Account Manager" role="button">
                                        Account Manager
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
                                    <h3>Account Manager</h3>
                                    <div className="offset-1">
                                        <div className="media py-2">
                                            <div className="company-logo">
                                                <img className="float-start me-4 mb-3" src="images/job-details/company-logo.png" alt="Profile" />
                                            </div>
                                            <div className="media-body">
                                                <h4 className="text-red pb-0">Account Manager</h4>
                                                <ul className="list-unstyled muted">
                                                    <li><i className="fa fa-tag" aria-hidden="true"></i> FinCorp Ltd.</li>
                                                    <li><i className="fa fa-map-marker" aria-hidden="true"></i> 789 Financial St, Suite 300, New York, NY, 10001.</li>
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
                                            As an Account Manager, you will oversee client accounts, ensuring their needs are met and maintaining strong relationships. You will work closely with clients to understand their requirements, develop strategies to meet their goals, and coordinate with internal teams to deliver results. Responsibilities include managing client expectations, handling account renewals, and identifying opportunities for upselling additional services. Excellent communication skills, a proactive attitude, and the ability to manage multiple accounts effectively are crucial for this role.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <h4>Key Responsibilities:</h4>
                                    <div className="offset-1">
                                        <p>
                                            - Develop and maintain strong relationships with client accounts.<br />
                                            - Understand client needs and work with internal teams to deliver solutions.<br />
                                            - Manage client expectations and ensure timely delivery of services.<br />
                                            - Handle account renewals and identify opportunities for upselling.<br />
                                            - Monitor account performance and provide regular updates to clients.<br />
                                            - Resolve any issues or concerns that arise and provide solutions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <h4>Qualifications:</h4>
                                    <div className="offset-1">
                                        <ul>
                                            <li>Bachelor’s degree in Business Administration, Marketing, or a related field.</li>
                                            <li>3+ years of experience in account management or client services.</li>
                                            <li>Strong interpersonal and communication skills.</li>
                                            <li>Proven ability to manage multiple accounts and projects.</li>
                                            <li>Excellent problem-solving and organizational skills.</li>
                                            <li>Experience with CRM software and account management tools.</li>
                                            <li>Ability to work in a fast-paced environment and meet deadlines.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12">
                                    <h4>Requirements:</h4>
                                    <div className="offset-1">
                                        <ul>
                                            <li>Experience in client relationship management.</li>
                                            <li>Proficiency in Microsoft Office Suite (Word, Excel, PowerPoint).</li>
                                            <li>Strong negotiation and presentation skills.</li>
                                            <li>Ability to analyze and interpret data to drive decision-making.</li>
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
                                    <p><i className="fa fa-building me-2" aria-hidden="true"></i> FinCorp Ltd.</p>
                                    <p><i className="fa fa-envelope me-2" aria-hidden="true"></i> hr@fincorp.com</p>
                                    <p><i className="fa fa-globe me-3" aria-hidden="true"></i>www.fincorp.com</p>
                                    <p><i className="fa fa-phone me-3" aria-hidden="true"></i><span className="f_rubik">+9876543210</span></p>
                                    <p>
                                        <i className="fa-solid fa-money-bill me-3"></i>$<span className="f_rubik">600-$1200</span> Month</p>
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

export default AccountManager;
