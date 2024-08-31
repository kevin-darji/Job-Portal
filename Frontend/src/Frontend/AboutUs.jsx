import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AboutUs() {
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
        navigate('/home'); // Navigates to the Home page
    };

    const handleAboutClick = () => {
        navigate('/aboutus'); // Navigate to About page
    };
    return (
        <>
            {/* <!-- header start here --> */}
            <div id="header"></div>
            {/* <!-- header end here --> */}

            <section class="aboutGoal">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-6 my-auto">
                            <h1>Find Your Job And</h1>
                            <h2 class="text-red">Make Sure Goal</h2>
                        </div>
                        <div class="col-sm-6 d-none d-md-block">
                            <img class="w-100" src="images/about-us/Firs-banner.png" alt="Banner" />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /.aboutGoal end here --> */}

            <nav class="topbreadcrumb">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12">
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item">
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a onClick={handleHomeClick}>Home</a>
                                </li>
                                <li class="breadcrumb-item">
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a onClick={handleAboutClick}>About Us</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>

            {/* <!-- /. topbreadcrumb --> */}
            <section class="overview">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-5 me-3 m-auto">
                            <div class="overImg">
                                <div class="img-card"><img class="w-100" src="images/about-us/Second-banner.png" alt="Banner" /></div>
                            </div>
                        </div>
                        <div class="col-sm-6 pt-md-5 mx-auto pt-sm-0">
                            <h1>Company <span class="text-red">Overview</span></h1>
                            <p class="pt-3">Welcome to our company, where innovation meets excellence. With a commitment to delivering top-notch solutions, we have established ourselves as a leader in our industry. Our journey began with a vision to revolutionize the market, and today, we are proud to offer a range of services and products that drive success for our clients. From our humble beginnings, we have grown into a dynamic organization known for our expertise, customer-centric approach, and cutting-edge technology.</p>
                            <div class="readmores">
                                Our company is dedicated to fostering a culture of growth and innovation. We believe in empowering our team to achieve their best and are constantly seeking new ways to enhance our offerings. Whether it's through our state-of-the-art facilities, strategic partnerships, or commitment to sustainability, we are dedicated to making a positive impact on the world. Explore our story and learn more about our mission to create value and drive progress in our industry.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /.overview --> */}

            <section class="interJob">
                <div class="container-fluid">
                    <h1 class="pb-5">Why Choose <span class="text-red">Us ?</span></h1>
                    <div class="row">
                        <div class="col-sm-3 mb-4">
                            <div class="interinner">
                                <div class="daimond-bg"><i class="fa fa-pie-chart" aria-hidden="true"></i></div>
                                <h2 class="text-red">Trusted Quality</h2>
                                <h4>We prioritize delivering high-quality services that meet and exceed industry standards. Our commitment to quality assurance ensures that every project is handled with meticulous care and attention to detail, providing you with reliable and consistent results.</h4>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div class="col-sm-3 mb-4">
                            <div class="interinner">
                                <div class="daimond-bg"><i class="fa fa-building" aria-hidden="true"></i></div>
                                <h2 class="text-red">Top Companies</h2>
                                <h4>We partner with leading companies across various industries, offering you access to top-tier job opportunities and career growth. Our extensive network ensures that you are connected with reputable employers who value your skills and experience.</h4>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div class="col-sm-3 mb-4">
                            <div class="interinner">
                                <div class="daimond-bg">
                                    <i class="fa-sharp fa-solid fa-money-bill-1"></i>
                                </div>
                                <h2 class="text-red">No Extra Charges</h2>
                                <h4>We believe in transparency and fairness, which is why we do not impose any hidden fees or extra charges. Our straightforward pricing ensures that you only pay for the services you receive, without any unexpected costs.</h4>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div class="col-sm-3 mb-4">
                            <div class="interinner">
                                <div class="daimond-bg"><i class="fa fa-user" aria-hidden="true"></i></div>
                                <h2 class="text-red">International Jobs</h2>
                                <h4>Explore global career opportunities with our extensive database of international job openings. Whether you’re looking to work abroad or find remote positions with international companies, we offer a wide range of options to suit your career aspirations.</h4>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- /.interJob --> */}

            <section class="valPart">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-3">
                            <div class="valinner">
                                <i class="fa fa-user" aria-hidden="true"></i>
                                <h1 class="text-red">19K +</h1>
                                <h4>Job Available</h4>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="valinner">
                                <i class="fa-sharp fa-solid fa-pen-to-square"></i>
                                <h1 class="text-red">15K +</h1>
                                <h4>CV Submited</h4>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="valinner">
                                <i class="fa fa-building" aria-hidden="true"></i>
                                <h1 class="text-red">11K +</h1>
                                <h4>Companies</h4>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="valinner">
                                <i class="fa fa-user" aria-hidden="true"></i>
                                <h1 class="text-red">35 +</h1>
                                <h4>Appointed To Job</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bgnumber"></div>
            </section>
            {/* <!-- /. valPart --> */}

            {/* <!-- footer area start --> */}
            <div id="footer"></div>
            {/* <!-- footer area end --> */}
        </>
    )
}

export default AboutUs;