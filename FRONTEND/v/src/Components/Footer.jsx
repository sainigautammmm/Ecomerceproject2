
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-4 mt-auto">
            <div className="container">
                <div className="row">
                    
                    <div className="col-md-4 mb-3">
                        <h5 className="text-uppercase">E-Shop</h5>
                        <p>Your go-to destination for all your shopping needs. High-quality products, amazing discounts, and excellent service await you!</p>
                    </div>

                    
                    <div className="col-md-4 mb-3">
                        <h5 className="text-uppercase">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
                            <li><a href="/contact" className="text-white text-decoration-none">Contact Us 6283127796</a></li>
                            <li><a href="/faq" className="text-white text-decoration-none">FAQs</a></li>
                            <li><a href="/terms" className="text-white text-decoration-none">Terms & Conditions</a></li>
                        </ul>
                    </div>

                    
                    <div className="col-md-4 mb-3">
                        <h5 className="text-uppercase">Follow Us</h5>
                        <div>
                            <a href="https://facebook.com" className="text-white me-3">
                                <FaFacebookF size={24} />
                            </a>
                            <a href="https://twitter.com" className="text-white me-3">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://instagram.com" className="text-white me-3">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://linkedin.com" className="text-white">
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                
                <div className="text-center py-3 border-top mt-3">
                    <p className="mb-0">&copy; {new Date().getFullYear()} E-Shop. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const App = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            
            <Footer />
        </div>
    );
};

export default App;
