import React from 'react';
import footer from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <div style={{ backgroundImage: `url(${footer})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <footer className='footer p-10  text-black" ' >
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover" href="/">Branding</a>
                    <a className="link link-hover" href="/">Design</a>
                    <a className="link link-hover" href="/">Marketing</a>
                    <a className="link link-hover" href="/">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover" href="/">About us</a>
                    <a className="link link-hover" href="/">Contact</a>
                    <a className="link link-hover" href="/">Jobs</a>
                    <a className="link link-hover" href="/">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover" href="/">Terms of use</a>
                    <a className="link link-hover" href="/">Privacy policy</a>
                    <a className="link link-hover" href="/">Cookie policy</a>
                </div>

            </footer>
            <div className='text-center p-10'>
                <p>Copyright 2022 All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;