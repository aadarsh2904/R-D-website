import React from 'react';
import './Footer.css';
import {FaTwitter, FaInstagram, FaFacebook, FaPhone,FaMail} from 'react-icons/fa';
import {IoMailSharp} from 'react-icons/io5'
export default function Footer() {
  return (
    <div className='Footer'>
        <div className='my__footer padding'>
            <h1>Office of Research and Development</h1>
            <hr></hr>
            <div className='my__footer-links'>
                <div className='my__footer-links_div1'>
                    <h3>CONTACT</h3>
                    <p2>Indian Institute Of Technology, Indore</p2>
                    <p2>Simrol,Khandwa Road</p2> 
                    <p2>Indore-453552</p2>
                    
                    
                    <h4>Email:</h4>

                    <div className='contact'>
                        <IoMailSharp className='contact-icon'/>
                        <div className='contact-link'>
                            <a href="/mail"><p2>arrnd@iiti.ac.in</p2></a>
                            <a href="/hii"><p2>rndsection@iiti.ac.in</p2></a>
                        </div>
                        
                    </div>

                    <h4>Phone:</h4>

                    <div className='contact'>
                        <FaPhone className='contact-icon'/>
                        <div className='contact-link'>
                            <p2>6664677746466</p2>
                            <p2>6664677746466</p2>
                        </div>
                        
                    </div>
                   
                    
                    
                    
                    
                    

                    
                </div>
                <div className='my__footer-links_div'>
                    <h4>Useful Links</h4>
                    <a href = 'first'>
                        <p>R&D Forms</p>
                    </a>
                    <a href = 'first'>
                        <p>R&D Policies</p>
                    </a>
                    <a href = 'first'>
                        <p>Constitutional Policies</p>
                    </a>
                    <a href = 'first'>
                        <p>Labor Safety</p>
                    </a>
                    <a href = 'first'>
                        <p>Funding Agencies</p>
                    </a>
                    
                </div>
                <div className='my__footer-links_div'>
                    <h4>Navigation</h4>
                    <a href = 'first'>
                        <p>IIT Indore</p>
                    </a>
                    <a href = 'first'>
                        <p>Webmail</p>
                    </a>
                    <a href = 'first'>
                        <p>Faculty Login</p>
                    </a>
                    <a href = 'first'>
                        <p>Copyright Registration</p>
                    </a>
                </div>
                
                
            </div>

            <hr></hr>
            <div className='my__footer-below'>
                <div className='my__footer-below-links'>
                    <FaTwitter className='tw'/>
                    <FaFacebook className='fb'/>
                    <FaInstagram className='ig'/>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
