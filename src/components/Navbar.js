import React from 'react';
import logo from '../assets/logo/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparen">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex fw-bold align-items-center mx-3" to="/">
          <img src={logo} alt="Logo" width="50" height="50" className="d-inline-block align-text-top rounded-circle me-2" />
          SwiftSolutions </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Our Services
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/WebServices">Web Services</Link></li>
                <li><Link className="dropdown-item" to="/MobileApps">Mobile App</Link></li>
                <li><Link className="dropdown-item" to="/SEO">SEO</Link></li>
                <li><Link className="dropdown-item" to="/GraphicDesigning">Graphic Desiging</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/AboutUs">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Careers">Careers</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
