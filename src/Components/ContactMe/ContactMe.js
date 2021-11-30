import React from 'react';
import ContactForm from './ContactForm';

const ContactMe = () => {
    return (
        <div className='my-5 d-flex justify-content-center py-4 container border contact-container'>
            <div className="row">
                <div className="col-md-6 col-sm-11">
                    <h2 className='fw-bold'>Let's Get In Touch</h2>
                    <p className='text-start'>If you have any custom message or need any qoutation, just write in the form and send me. I will replay you within 4 hours. </p>
                    <div className="address-info">
                        <h3 className='fw-bold'>My other contact informations</h3>
                        <div className="address text-start .fs-6">
                            <i class="fas fa-map-marked-alt"></i> <p className='d-inline'>Uttara, Dhaka, Bangladesh</p>
                        </div>
                        <div className="address text-start .fs-6">
                            <i class="fas fa-envelope"></i> <p className='d-inline'>arifur.rahman.cse1@gmail.com</p>
                        </div>
                        <div className="address text-start .fs-6">
                            <i class="fas fa-phone-alt"></i>
                            <p className='d-inline'>01744941494</p>
                        </div>
                        <div className="social-media-icon">
                            <h3>Social Media</h3>
                            <a className='fs-3' href="https://www.facebook.com/arifurrahman.razon.7/" target="blank"><i class="fab fa-facebook-square"></i></a>

                            <a className='fs-3' href="https://twitter.com/ArifurR63953853" target="blank"><i class="fab fa-twitter-square"></i></a>

                            <a className='fs-3' href="www.linkedin.com/in/arifur-rahman123" target="blank"><i class="fab fa-linkedin"></i></a>

                            <a className='fs-3' href="https://github.com/razon1494" target="blank"><i class="fab fa-github-square"></i></a>
                        </div>

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