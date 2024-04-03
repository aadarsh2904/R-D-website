import React from 'react';
import './Footer.css';
import {FaTwitter, FaInstagram, FaFacebook, FaPhone,FaHome,FaLinkedin } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {IoMailSharp} from 'react-icons/io5'
export default function Footer() {
  return (
    <footer className='relative bottom-0'>
    <div className='Footer'>
        <div className='my__footer padding'>
            <div className='footer-heading'>Office of Research and Development</div>
            <hr></hr>
            <div className='my__footer-links'>
                <div className='my__footer-links_div1'>
                <div className="headings">CONTACT</div>

                    <div className='contact'>
                        <FaHome  className='contact-icon' style={{height:'25px',width:'25px'}}/>
                        <div className='contact-link'>
                            <p2>IIT Indore</p2>
                            <p2>Indore-453552</p2>
                            <p2>Simrol,Khandwa Road</p2> 
                        </div>
                    </div>

                    <div className='contact'>
                        <IoMailSharp className='contact-icon'/>
                        <div className='contact-link'>
                            <p2>arrnd@iiti.ac.in</p2>
                            <p2>rndsection@iiti.ac.in</p2>
                        </div>
                    </div>

                    <div className='contact'>
                        <FaPhone className='contact-icon'/>
                        <div className='contact-link'>
                            <p2>+91-731-660333 (Ext. 3123)</p2>
                            <p2>+91-731-660333 (Ext. 3578)</p2>
                        </div>
                        
                    </div>
                </div>
                <div className='my__footer-links_div'>
                    <div className="headings" >USEFUL LINKS</div>
                    <a href = 'https://rnd.iiti.ac.in/main/rnd_forms'>
                        <p2>R&D Forms</p2>
                    </a>
                    <a href = 'first'>
                        <p2>R&D Policies</p2>
                    </a>
                    <a href = 'first'>
                        <p2>Consultancy Policies</p2>
                    </a>
                    <a href = 'first'>
                        <p2>Laboratory Safety</p2>
                    </a>
                    <a href = 'first'>
                        <p2>Funding Agencies</p2>
                    </a>
                    
                </div>
                <div className='my__footer-links_div'>
                <div className="headings">NAVIGATION</div>
                    <a href = 'https://www.iiti.ac.in'>
                        <p2>IIT Indore</p2>
                    </a>
                    <a href = 'https://mail.google.com/mail/u/0/#inbox'>
                        <p2>Webmail</p2>
                    </a>
                    <a href = 'first'>
                        <p2>Faculty Login</p2>
                    </a>
                    <a href = 'https://docs.google.com/forms/d/e/1FAIpQLSdwBfCNW_hqlxmRKpH57yYePOXjrrWlv35mSv100WUwsag1Nw/viewform'>
                        <p2>Copyright Registration</p2>
                    </a>
                </div>

                <div className='my__footer-links_div'>
                <div className="headings">REACH US</div>
                <iframe className='border-2 rounded-xl w-[18rem] h-[12rem] ml-[-1rem]' id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=IIT%20Indore%20Simrol+(IIT%20Indore)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                        

                </div>
            </div>
            {/* <iframe className='border-2 rounded-xl w-[18rem] h-[12rem] ml-0' id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=IIT%20Indore%20Simrol+(IIT%20Indore)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> */}
            <div className='my__footer-below'>
                <div className='my__footer-below-links'>

                <a href="https://www.linkedin.com/in/research-and-development-iit-indore-a37bb3299/">
                    <FaLinkedin className='in'/>
                </a>
                <a href ="" className='tw'><FontAwesomeIcon icon={faXTwitter} size="lg" /></a>
                <a href =""><FaInstagram className='ig'/></a>
                <a href=""><FaFacebook className='fb'/></a>
                
                
                

                </div>
            </div>
            <h2 style={{color:'rgb(7, 2, 109)'}}>© Copyright All rights reserved | R&D Section,<a href='https://www.iiti.ac.in'>IIT INDORE</a></h2>
        </div>
    </div>
    </footer>
  )
}