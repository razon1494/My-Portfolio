import React from 'react';
import {Link} from 'react-router-dom';

import './Footer.css'
const Footer = () => {
    return (
        <div>
<footer class="footer-distributed">

    <div class="footer-left">

        <h3>Arifur <span>Rahman</span></h3>

        <p class="footer-links">
            <Link to="/home" className='me-3'> Home  </Link>

        </p>

        <p class="footer-company-name">Arifur Rahman &copy; 2021</p>
    </div>

    <div class="footer-center">

        <div>
            <i class="fa fa-map-marker"></i>
            <p><span>Sector 4, Road 11,
Uttara,</span>  Dhaka, Bangladesh</p>
        </div>

        <div>
            <i class="fa fa-phone"></i>
            <p>+88-01744-941494</p>
        </div>

        <div>
            <i class="fa fa-envelope"></i>
            <p><a href="mailto:support@company.com">arifur.rahman.cse1@gmail.com</a></p>
        </div>

    </div>

    <div class="footer-right">

        <p class="footer-company-about">
            <span>Know More About Me</span>
            MERN stack web developer || HTML5 || CSS3 || Javascript || React || Mongo DB || Node JS || Express JS
        </p>

        <div class="footer-icons">

            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-github"></i></a>

        </div>

    </div>
                <div className="copyright mt-3 text-center text-light">
                <small>&copy; 2021 By Arifur Rahman Razon</small>
            </div>

</footer>

        </div>
    );
};

export default Footer;