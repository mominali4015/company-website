import React from 'react';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-light  shadow-lg p-3 mb-5 bg-body rounded">
    <div class="container-fluid">
        <a class="navbar-brand fw-bold" href="#">
            <img src="./logo.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top"/>
            Company</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Our Services
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="webservices.html">Web Services</a></li>
                      <li><a class="dropdown-item" href="mobileapp.html">Mobile App</a></li>
                      <li><a class="dropdown-item" href="seo.html">SEO</a></li>
                      <li><a class="dropdown-item" href="graphic.html">Graphic Desiging</a></li>
                    </ul>
                  </li>
                <li class="nav-item">
                    <a class="nav-link" href="./about.html">About Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="careers.html">Careers</a>
                </li>
                
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </div>
</nav>
  );
}

export default Navbar;
