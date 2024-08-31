import React from 'react';
import { useNavigate } from 'react-router-dom';

function GraphicDesigner() {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/home');
    };

    const handleGraphicDesignerClick = () => {
        navigate('/graphicdesigner');
    };

    return (
        <>
            <div id="header"></div>

            <section class="nearJob">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-5 nearcol">
                            <h1>Your dream Job</h1>
                            <h2 class="text-red">Is Near to You</h2>
                        </div>
                        <div class="col-sm-7 d-none d-md-block">
                            <div class="row">
                                <div class="d-flex w-100">
                                    <img class="w-100" src="images/company-details/banner.png" alt="Banner" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <nav class="topbreadcrumb">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12">
                            <ul class="breadcrumb">
                                <li className="breadcrumb-item">
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="#" onClick={handleHomeClick} aria-label="Home" role="button">
                                        Home
                                    </a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="#" onClick={handleGraphicDesignerClick} aria-label="Graphic Designer" role="button">
                                        Graphic Designer
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <section class="candidate">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-8 leftcandi">
                            <div class="row">
                                <div class="col-sm-12">
                                    <h3>Graphic Designer:-</h3>
                                    <div class="offset-1">
                                        <div class="media py-2">
                                            <div class="company-logo">
                                                <img class="float-start me-4 mb-3" src="images/job-details/company-logo.png" alt="Profile" />
                                            </div>
                                            <div class="media-body">
                                                <h4 class="text-red pb-0">Graphic Designer</h4>
                                                <ul class="list-unstyled muted">
                                                    <li><i class="fa fa-tag" aria-hidden="true"></i> Graphicmania.Pvt.Ltd</li>
                                                    <li><i class="fa fa-map-marker" aria-hidden="true"></i> 245, Kilnton park , FG Road, New York, USA, 256321.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-12">
                                    <h4>Job Description:</h4>
                                    <div class="offset-1">
                                        <p>As a Graphic Designer, you will be responsible for creating visually appealing and engaging designs that align with our brand identity and communicate our message effectively. You will work closely with the marketing and content teams to produce graphics for various platforms, including digital, print, and social media. Your role will involve brainstorming creative concepts, developing design mockups, and iterating on feedback to deliver polished final products. Attention to detail, a strong sense of aesthetics, and the ability to manage multiple projects simultaneously are key to succeeding in this role.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <h4>Key Responsibilities:</h4>
                                    <div class="offset-1">
                                        <p>
                                            - Collaborate with the marketing team to understand project requirements and create compelling visuals.<br />
                                            - Design and produce a wide range of materials such as banners, social media graphics, brochures, presentations, and infographics.<br />
                                            - Ensure all designs are aligned with the brand guidelines and maintain a consistent look and feel across all platforms.<br />
                                            - Stay updated with the latest design trends and tools to ensure our creative outputs are cutting-edge and relevant.<br />
                                            - Manage multiple design projects from concept to completion, meeting deadlines and client expectations.<br />
                                            - Prepare and present design concepts for approval, incorporating feedback and revisions as needed.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <h4>Qualifications:</h4>
                                    <div class="offset-1">
                                        <ul>
                                            <li>Bachelor’s degree in Graphic Design, Visual Arts, or a related field.</li>
                                            <li>Minimum of 2-3 years of experience in graphic design, with a strong portfolio showcasing a variety of design projects.</li>
                                            <li>Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign).</li>
                                            <li>Solid understanding of design principles, including color theory, typography, and layout.</li>
                                            <li>Ability to work both independently and as part of a team, with strong communication and time management skills.</li>
                                            <li>Experience with digital and print design, including knowledge of print production processes.</li>
                                            <li>Familiarity with web design principles and experience in creating designs for web and mobile platforms is a plus.</li>
                                            <li>Creativity, attention to detail, and a passion for design are essential.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-12">
                                    <h4>Requirment:-</h4>
                                    <div class="offset-1">
                                        <ul>
                                            <li>Corel Draw</li>
                                            <li>Adobe Photoshop</li>
                                            <li>Adobe Indesign</li>
                                            <li>Adobe Illustrator</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3 rightcandi offset-md-1">
                            <div class="row">
                                <div class="col-sm-12">
                                    <h6><i class="fa fa-map-marker me-2" aria-hidden="true"></i> Job Location</h6>
                                    <div class="border-bottom w-75"></div>
                                    <p><i class="fa fa-building me-2" aria-hidden="true"></i> Graphicmania.Pvt.Ltd</p>
                                    <p><i class="fa fa-envelope me-2" aria-hidden="true"></i> Gramania@gmail.com</p>
                                    <p><i class="fa fa-globe me-3" aria-hidden="true"></i>www.grmania.com</p>
                                    <p><i class="fa fa-phone me-3" aria-hidden="true"></i><span class="f_rubik">+612535589323</span></p>
                                    <p>
                                        <i class="fa-solid fa-money-bill me-3"></i>$<span class="f_rubik">200-$500</span> Month</p>
                                </div>
                            </div>
                            <div class="row pt-5">
                                <div class="col-sm-12">
                                    <h6><i class="fa fa-share-alt me-2"></i> Share Job</h6>
                                    <div class="border-bottom w-75"></div>
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <a href="javascript:void(0);"><i class="fa fa-facebook fs-6" aria-hidden="true"></i></a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="javascript:void(0);"><i class="fa fa-instagram fs-6" aria-hidden="true"></i></a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="javascript:void(0);">
                                                <i class="fa-brands fa-linkedin-in fs-6"></i></a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="javascript:void(0);"><i class="fa fa-twitter fs-6" aria-hidden="true"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row pt-5">
                                <div class="col-sm-12">
                                    <h6>
                                        <i class="fa-regular fa-clock me-2 fa-lg fs-5"></i>
                                        Openiang Hours</h6>
                                    <div class="border-bottom w-75"></div>
                                    <table class="table w-100">
                                        <tbody>
                                            <tr class="border-white">
                                                <td>Monday</td>
                                                <td class="text-end">9AM to 6:30PM</td>
                                            </tr>
                                            <tr class="border-white">
                                                <td>Tuesday</td>
                                                <td class="text-end">9AM to 6:30PM</td>
                                            </tr>
                                            <tr class="border-white">
                                                <td>Wednesday</td>
                                                <td class="text-end">9AM to 6:30PM</td>
                                            </tr>
                                            <tr class="border-white">
                                                <td>Thursday</td>
                                                <td class="text-end">9AM to 6:30PM</td>
                                            </tr>
                                            <tr class="border-white">
                                                <td>Friday</td>
                                                <td class="text-end">9AM to 6:30PM</td>
                                            </tr>
                                            <tr class="border-white">
                                                <td>Saturday</td>
                                                <td class="text-end">10AM to 5:30PM</td>
                                            </tr>
                                            <tr class="border-white">
                                                <td>Sunday</td>
                                                <td class="text-end">Close</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="d-grid">
                                        <a href="job-listing.html" class="btn btn-danger btn-block my-5">
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
    )
}

export default GraphicDesigner;
