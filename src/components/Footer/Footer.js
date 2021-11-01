import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer class="bg-dark text-white text-center text-lg-start mt-5">

                <div class="container p-4">

                    <div class="row">

                        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <h5 class="text-uppercase text-danger fw-bold">Tour Buddy</h5>

                            <p id='contact'>
                                Govt. Approved Travel Agent,<br />
                                106-109 Rose View Complex (Ground Floor), <br />Shahjalal Upashahar Main Rd, Sylhet 3100
                                <br />Email : tourbuddy@gmail.com
                                <br />Phone : 01742824576
                            </p>
                        </div>

                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase text-danger">Links</h5>

                            <ul class="list-unstyled mb-0">
                                <li>
                                    <Link to="/underconstruction" class="text-white text-decoration-none">About Us</Link>
                                </li>
                                <li>
                                    <Link to="/underconstruction" class="text-white text-decoration-none">Community Blog</Link>
                                </li>
                                <li>
                                    <Link to="/underconstruction" class="text-white text-decoration-none">Rewards</Link>
                                </li>
                                <li>
                                    <Link to="/underconstruction" class="text-white text-decoration-none">Meet the Team</Link>
                                </li>

                            </ul>
                        </div>

                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase mb-0 text-danger">Links</h5>

                            <ul class="list-unstyled">
                                <li>
                                    <Link to="/underconstruction" class="text-white text-decoration-none">Our Blogs</Link>
                                </li>
                                <li>
                                    <Link to="/underconstruction" class="text-white text-decoration-none">Terms</Link>
                                </li>
                                <li>
                                    <Link to="/underconstruction" class="text-white text-decoration-none">FAq</Link>
                                </li>
                                <li>
                                    <Link to="/underconstruction" class="text-white text-decoration-none">Gallery</Link>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
                <div class="text-center p-3" >
                    © 2021 Copyright:Tour Buddy
                </div>
            </footer>
        </div>
    );
};

export default Footer;