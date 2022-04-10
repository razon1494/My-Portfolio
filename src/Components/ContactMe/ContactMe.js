import React from 'react';
import ContactForm from './ContactForm';

const ContactMe = () => {
    return (
        <div id='hire' className='my-5 d-flex justify-content-center py-4 container border contact-container'>
            <div className="row">
                <div className="col-md-6 col-sm-11">
                    <h2 className='fw-bold touch-text'>Let's Get In Touch</h2>
                    <p className='text-start mx-5 fs-4 reply-text'>If you have any custom message or need any qoutation, just write in the form and send me. I will replay you within 4 hours. </p>
                    <div className="address-info">
                        <h3 className='fw-bold my-3 all-contact'>Or You can contact with me </h3>
                        <div className="address text-start fs-4 mx-5 my-2">
                            <i class="fas fa-map-marked-alt"></i> <p className='d-inline ms-2'>Uttara, Dhaka, Bangladesh</p>
                        </div>
                        <div className="address text-start fs-4 mx-5 my-2">
                            <i class="fas fa-envelope"></i> <p className='d-inline ms-2'>arifur.rahman.cse1@gmail.com</p>
                        </div>
                        <div className="address text-start fs-4 mx-5 my-2">
                            <i class="fas fa-phone-alt"></i>
                            <p className='d-inline ms-2'>01744941494</p>
                        </div>
                        <div className="social-media-icon">
                            <h2 className='social-title1 my-4'>Social Media</h2>

                        </div>
                        <div className="wrapper">
                            <div className="button">

                                <div className="icon"><a className='fs-3' href="https://www.facebook.com/arifurrahman.razon.7/" target="blank"><i class="fab fa-facebook-f"></i> </a></div>
                           <a className='fs-3' href="https://www.facebook.com/arifurrahman.razon.7/" target="blank">    <span>Facebook</span> </a> </div>

                            <div className="button">    <div className="icon"><a className='fs-3' href="www.linkedin.com/in/arifur-rahman123" target="blank"><i class="fab fa-linkedin"></i> </a></div>
                               <a className='fs-3' href="www.linkedin.com/in/arifur-rahman123" target="blank"> <span>LinkedIn</span></a></div>

                           <div className="button">       <div className="icon"><a className='fs-3' href="https://twitter.com/ArifurR63953853" target="blank"><i class="fab fa-twitter"></i></a></div>
                                <a className='fs-3' href="https://twitter.com/ArifurR63953853" target="blank"><span>Twitter</span></a></div>

                         <div className="button">         <div className="icon"><a className='fs-3' href="https://www.instagram.com/razon_nothing/" target="blank"><i class="fab fa-instagram"></i></a></div>
                               <a className='fs-3' href="https://www.instagram.com/razon_nothing/" target="blank"> <span>Instagram</span></a>
                            </div>
                            <div className="button">     <div className="icon"><a className='fs-3' href="https://github.com/razon1494" target="blank"><i class="fab fa-github"></i></a></div>
                                <a className='fs-3' href="https://github.com/razon1494" target="blank"><span>Github</span></a></div>

                        <div className="button">        <div className="icon"><a className='fs-3' href="https://www.youtube.com/channel/UC8PZucfGndAr4QSZbGDBKfw/videos" target="blank"><i class="fab fa-youtube"></i></a></div>
                                <a className='fs-3' href="https://www.youtube.com/channel/UC8PZucfGndAr4QSZbGDBKfw/videos" target="blank"><span>Youtube</span></a>
                            </div></div>


                    </div>
                </div>
                <div className="col-md-6 col-sm-11">
                    <ContactForm></ContactForm>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;