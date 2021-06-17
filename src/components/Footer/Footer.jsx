import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return(
        <footer className="pt-3 mt-3 bg-light">
            <div className="container-fluid container-min-max-width d-flex justify-content-center text-center">
                <div className="footer-group d-flex flex-column">
                    <h3 className="h5">Links:</h3>
                    <Link to='/about'>About</Link>
                    <Link to='/terms-and-conditions'>Terms and conditions</Link>
                </div>
            </div>

        </footer>
    );
}

export default Footer;