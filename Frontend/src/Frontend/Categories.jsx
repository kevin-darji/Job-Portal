import React from 'react';
import { useNavigate } from 'react-router-dom';

function Categories() {
    const navigate = useNavigate();
    const handleHomeClick = () => {
        navigate('/home'); // Navigates to the Home page
    };

    const handleCategoriesClick = () => {
        navigate('/categories'); // Navigates to the Contact page
    };

    return (
        <>
            {/* <!-- header start here --> */}
            <div id="header"></div>
            {/* <!-- header end here --> */}

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
                                    <img class="w-100" src="images/categories/banner.png" alt="Banner" />
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
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="#" onClick={handleHomeClick} aria-label="Home" role="button">
                                        Home
                                    </a>
                                </li>
                                <li className="breadcrumb-item">
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="#" onClick={handleCategoriesClick} aria-label="Categories" role="button">
                                        Categories
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>


            <section section class="explore" >
                <div class="container-fluid">
                    <h3 class="text-center">Explore <span class="text-red"> By Categories</span></h3>
                    <div class="row pb-5">
                        <div class="col-sm-3 mb-4">
                            <div class="exoInner">
                                <i class="fa fa-bar-chart" aria-hidden="true"></i>
                                <h4>Web & Software</h4>
                                <p>122 Jobs</p>
                            </div>

                        </div>
                        <div class="col-sm-3 mb-4">
                            <div class="exoInner">
                                <i class="fa-regular fa-file-lines"></i>
                                <h4>Data Science & Analist</h4>
                                <p>62 Jobs</p>
                            </div>

                        </div>
                        <div class="col-sm-3 mb-4">
                            <div class="exoInner">
                                <i class="fa fa-briefcase" aria-hidden="true"></i>
                                <h4>Business Development</h4>
                                <p>122 Jobs</p>
                            </div>

                        </div>
                        <div class="col-sm-3 mb-4">
                            <div class="exoInner">
                                <i class="fa fa-globe" aria-hidden="true"></i>
                                <h4>Digital Marketing</h4>
                                <p>25 Jobs</p>
                            </div>

                        </div >
                    </div >
                    <div class="row pb-4">
                        <div class="col-sm-3 mb-4">
                            <div class="exoInner">
                                <i class="fa fa-cutlery" aria-hidden="true"></i>
                                <h4>Restaurant</h4>
                                <p>63 Jobs</p>
                            </div>

                        </div>
                        <div class="col-sm-3 mb-4">
                            <div class="exoInner">
                                <i class="fa fa-linode" aria-hidden="true"></i>
                                <h4>Graphic Designing</h4>
                                <p>62 Jobs</p>
                            </div>

                        </div >
                        <div class="col-sm-3 mb-4">
                            <div class="exoInner">
                                <i class="fa fa-car" aria-hidden="true"></i>
                                <h4>Car Driving</h4>
                                <p>122 Jobs</p>
                            </div>
                        </div >
                        <div class="col-sm-3 mb-4">
                            <div class="exoInner">
                                <i class="fa fa-cogs" aria-hidden="true"></i>
                                <h4>Mechanic Engineering</h4>
                                <p>45 Jobs</p>
                            </div>
                        </div >
                    </div >
                </div >
            </section >

            <div div id="footer"></div>

        </>
    )
}

export default Categories;
