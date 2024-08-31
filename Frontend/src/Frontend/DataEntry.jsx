import React from 'react';
import { useNavigate } from 'react-router-dom';

function DataEntry() {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/home');
    };

    const handleDataEntryClick = () => {
        navigate('/dataentry');
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
                                    <a href="#" onClick={handleDataEntryClick} aria-label="Data Entry" role="button">
                                        Data Entry
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
                                    <h3>Data Entry Specialist</h3>
                                    <div className="offset-1">
                                        <div className="media py-2">
                                            <div className="company-logo">
                                                <img className="float-start me-4 mb-3" src="images/job-details/company-logo.png" alt="Profile" />
                                            </div>
                                            <div className="media-body">
                                                <h4 className="text-red pb-0">Data Entry Specialist</h4>
                                                <ul className="list-unstyled muted">
                                                    <li><i className="fa fa-tag" aria-hidden="true"></i> DataCorp Ltd.</li>
                                                    <li><i className="fa fa-map-marker" aria-hidden="true"></i> 123 Business Ave, Suite 400, San Francisco, CA, 94105.</li>
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
                                            As a Data Entry Specialist, you will be responsible for accurately inputting and managing data into our databases and systems. Your role involves ensuring data accuracy, performing data validation, and generating reports as needed. You will work closely with other team members to maintain data integrity and support various administrative tasks. Attention to detail, strong organizational skills, and the ability to work efficiently with minimal supervision are crucial for this position.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <h4>Key Responsibilities:</h4>
                                    <div className="offset-1">
                                        <p>
                                            - Input and manage data accurately and efficiently.<br />
                                            - Perform data validation and verification to ensure accuracy.<br />
                                            - Generate and maintain data reports as required.<br />
                                            - Update and maintain databases and spreadsheets.<br />
                                            - Collaborate with team members to ensure data consistency and integrity.<br />
                                            - Handle confidential information with discretion.<br />
                                            - Assist with administrative tasks and other duties as needed.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <h4>Qualifications:</h4>
                                    <div className="offset-1">
                                        <ul>
                                            <li>High school diploma or equivalent; associate's degree or higher preferred.</li>
                                            <li>Proven experience as a Data Entry Clerk or similar role.</li>
                                            <li>Proficiency in Microsoft Office Suite (Word, Excel, Outlook).</li>
                                            <li>Strong attention to detail and accuracy.</li>
                                            <li>Excellent organizational and time management skills.</li>
                                            <li>Ability to work independently and handle multiple tasks.</li>
                                            <li>Strong communication skills, both written and verbal.</li>
                                            <li>Familiarity with data entry software and systems is a plus.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12">
                                    <h4>Requirements:</h4>
                                    <div className="offset-1">
                                        <ul>
                                            <li>Proficiency in Microsoft Excel and Google Sheets.</li>
                                            <li>Experience with data entry and management software.</li>
                                            <li>Ability to type quickly and accurately.</li>
                                            <li>Basic understanding of data privacy and security.</li>
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
                                    <p><i className="fa fa-building me-2" aria-hidden="true"></i> DataCorp Ltd.</p>
                                    <p><i className="fa fa-envelope me-2" aria-hidden="true"></i> contact@datacorp.com</p>
                                    <p><i className="fa fa-globe me-3" aria-hidden="true"></i>www.datacorp.com</p>
                                    <p><i className="fa fa-phone me-3" aria-hidden="true"></i><span className="f_rubik">+1234567890</span></p>
                                    <p>
                                        <i className="fa-solid fa-money-bill me-3"></i>$<span className="f_rubik">300-$600</span> Month</p>
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

export default DataEntry;
