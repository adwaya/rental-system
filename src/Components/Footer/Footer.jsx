import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div id='footer'>
            <div className="footertop">
                <div className="box">
                    <span id='contact1'>Contact Us </span>
                    <span>+91 90000001425</span>
                    <span>abc12345@gmail.com</span>
                    <span>Address , City , India</span>
                </div>
                <div className="box">
                    <span id='services'>Our Services</span>
                    <span>Home</span>
                    <span>Add</span>
                    <span>Rent</span>
                </div>
                <div className="box">
                    <span id='Quick'>Quick Link</span>
                        <span>Knowledge Base</span>
                        <span>FAQ</span>
                        <span>Contact</span>
                </div>
                <div className="box">
                    <span id='logo'>
                        Smart Rent System
                    </span>
                    <Link to={"/Contact"}>
                        <button>Contact Us</button>
                    </Link>
                </div>
            </div>
            <div className="footerbottom">
                <span>Privacy Policy  ||</span>
                <span>Use of Terms</span>
            </div>
    </div>
  )
}

export default Footer