import React from 'react';
import logo from '../assets/Logo/logo.png';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-dark text-light mt-5">
            <div className="container p-3 p-lg-5">
                <div className="row">
                    <div className="col-12 col-md-4" style={{ textAlign: 'justify' }}>
                        <Link to="/" className='text-decoration-none text-white h3'>
                            <img src={logo} alt='Logo' width="50" height="50" className="rounded-circle me-2" />
                            Swift solutions
                        </Link>
                        <div className='my-3'>
                            <Link to="/" className="mx-2"><i className="bi bi-facebook text-white fs-4"></i></Link>
                            <Link to="/" className="mx-2"><i className="bi bi-google text-white fs-4"></i></Link>
                            <Link to="/" className="mx-2"><i className="bi bi-twitter text-white fs-4"></i></Link>
                            <Link to="/" className="mx-2"><i className="bi bi-whatsapp text-white fs-4"></i></Link>
                            <Link to="/" className="mx-2"><i className="bi bi-linkedin text-white fs-4"></i></Link>
                        </div>
                        <div>Copyright &copy; 2023, Swift Solutions</div>
                        <div><Link to="/PrivacyPolicy">Privacy Policy</Link> | <Link to="/">Site Map</Link></div>
                    </div>
                    <div className="col-12 col-md-2 mt-2">
                        <h4>Company</h4>
                        <ul className="list-unstyled">
                            <li className='mb-2'><Link to="/Blogs" className='text-decoration-none text-white'>Blogs</Link></li>
                            <li className='mb-2'><Link to="/Careers" className='text-decoration-none text-white'>Careers</Link></li>
                            <li className='mb-2'><Link to="/AboutUs" className='text-decoration-none text-white'>Overview</Link></li>
                            <li className='mb-2'><Link to="/AboutUs" className='text-decoration-none text-white'>Our Team</Link></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-2 mt-2 ">
                        <h4>Support</h4>
                        <ul className="list-unstyled">
                            <li className='mb-2'><Link to="/" className='text-decoration-none text-white'>FAQ</Link></li>
                            <li className='mb-2'><Link to="/Contact" className='text-decoration-none text-white'>Contact Us</Link></li>
                            <li className='mb-2'><Link to="/" className='text-decoration-none text-white'>Downloads</Link></li>
                            <li className='mb-2'><Link to="/WebDevelopment" className='text-decoration-none text-white'>Our Services</Link></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4 mt-2">
                        <h4>Contact</h4>
                        <ul className='list-unstyled'>
                            <li className='mb-2 text-white'> <i className='bi bi-envelope me-2'> </i> info@swiftsolution</li>
                            <li className='mb-2 text-white'> <i className='bi bi-telephone me-2'> </i> +92 301 4405739</li>
                            <li className='mb-2 text-white'> <i className='bi bi-phone me-2'> </i> +92 305 4735990</li>
                            <li className='mb-2 text-white'> <i className='bi bi-geo-alt me-2'> </i> Fateh Garh Lahore, Pakistan</li>
                            <li className='mb-2 text-white'> <i className='bi bi-clock me-2'> </i> 09:00 AM - 06:00 PM  Mon to Fri</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;