import React from 'react';
import './Footer.css';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faTwitter, faInstagram, faLinkedim, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return(
        <footer className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <h3>About Us</h3>
                        <p>We are a company that specializes in creating a High Quality Training And Placements.</p>
                    </div>
                    <div className='col-md-4'>
                        <h3>Connect With Us </h3>
                        <ul className='social-media'>
                            <li><a href='https://www.facebook.com'><FontAwesomeIcon icon={faFacebookF} /></a></li>
                            <li><a href='https://www.twitter.com'><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a href='https://www.instagram.com'><FontAwesomeIcon icon={faInstagram} /></a></li>
                            <li><a href='https://www.linkedin.com'><FontAwesomeIcon icon={faLinkedin} /></a></li>

                            
                        </ul>

                    </div>
                    <div className='col-md-4'>
                        <h3>Contact Us </h3>
                        <p>Plot No.765, 8th cross road, M.R.C.R Extension, Govindraja Nagar, Banglore-560040
                             (Near Hosahalli metro station) <br/> Phone:+91 9901066669 <br/>Email: info@pentagonspace.in  </p>

                    </div>

                </div>
            </div>
        </footer>
    );
}
export default Footer;
