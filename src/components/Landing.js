
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo/logo.png'
// Banners For Carousel / Slider
import Banner from '../assets/Landing_Page/Banners/Untitled.jpg';

import Priorities from '../assets/Landing_Page/Priorities.webp';

// Images For Why Choose Us Section
import Customized from '../assets/Landing_Page/WhyChooseUs/CustomizedSolution.webp';
import Client from '../assets/Landing_Page/WhyChooseUs/ClientApproach.webp';
import Customer from '../assets/Landing_Page/WhyChooseUs/CustomerService.webp';
import Expertise from '../assets/Landing_Page/WhyChooseUs/Expertise.webp';
import Innovation from '../assets/Landing_Page/WhyChooseUs/Innovation.webp';
import Success from '../assets/Landing_Page/WhyChooseUs/TrackSuccess.webp';

// Images For Our Services Section
import Services from '../assets/Landing_Page/OurServices/Background.webp';
import Web from '../assets/Landing_Page/OurServices/WebCard.webp';
import App from '../assets/Landing_Page/OurServices/AppCard.webp';
import Seo from '../assets/Landing_Page/OurServices/SeoCard.webp';
import Graphic from '../assets/Landing_Page/OurServices/GraphicCard.webp';
import Digital from '../assets/Landing_Page/OurServices/DigitalCard.webp';
import Network from '../assets/Landing_Page/OurServices/NetworkCard.webp';

// Images For Let's Transform Together Section
import Transform from '../assets/Landing_Page/Transform.webp';

function Landing() {
    return (
        <div>
            {/* Slider / Carousel */}
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" style={{ background: `url(${Banner})`, height: '480px' }} >
                       
                        <h1>
                            Welcome to Swift Solutions
                        </h1>
                        <h4>Unlocking Possibilities, Delivering Solutions</h4>
                    </div>
                    <div class="carousel-item" style={{ background: `url(${Banner})`, height: '400px' }} >
                        
                        <h1>
                            Welcome to Swift Solutions
                        </h1>
                        <h4>Delivering Solutions</h4>
                    </div>
                    <div class="carousel-item" style={{ background: `url(${Banner})`, height: '400px' }} >
                       
                        <h1>
                            Welcome to Swift Solutions
                        </h1>
                        <h4>Unlocking Possibilities, </h4>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            {/* Information About Company: */}
            <div className='container-fluid py-2 py-lg-5'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-5 col-md-2  p-lg-4'>
                        <img src={Logo} alt="Logo" className="rounded-circle w-100" />
                    </div>
                    <div className='col-12 col-md-9 col-lg-8'>
                        <div> <span className='fs-4'>Welcome to Swift Solutions - </span> <span className='fs-5'>Unlocking Possibilities, Delivering Solutions</span></div>
                        <p style={{ textAlign: 'justify' }}>
                            Swift Solutions is a leading IT Software Company, the premier destination for cutting-edge technology solutions and development services. With a relentless pursuit of innovation and a steadfast commitment to excellence, we empower businesses across diverse industries to achieve their goals. Our comprehensive range of services includes website development, mobile app development, graphic designing, digital marketing, and networking services. At Swift Solutions, we drive meaningful digital transformation, fuel growth, and position our clients at the forefront of their respective markets. Experience the power of unique solutions and transformative innovation with Swift Solutions.
                        </p>
                    </div>
                </div>
            </div>

            {/* Our Priorities Section */}
            <div className='container-fluid bg-dark text-white'>
                <div className='row'>
                    <div className='col-12 col-lg-6'>
                        <div className='row gx-5 gy-2 px-2'>
                            <h2 className='text-white text-center pt-2'>Our Priorities</h2>
                            <div className='col-12 col-md-6'>
                                <h5> <i className='bi bi-clock me-2 fs-4'></i> Timely Project Delivery</h5>
                                <p style={{ textAlign: 'justify' }}> Our efficient processes and skilled team ensure on-time project delivery, meeting deadlines while maintaining exceptional quality standards.</p>
                            </div>
                            <div className='col-12 col-md-6'>
                                <h5> <i className='bi bi-cash-coin me-2 fs-4'></i> Cost-Effective Solutions</h5>
                                <p style={{ textAlign: 'justify' }}> We offer budget-friendly solutions that maximize value without compromising quality, helping you achieve your goals within your financial constraints.</p>
                            </div>
                            <div className='col-12 col-md-6'>
                                <h5> <i className='bi bi-shield-check me-2 fs-4'></i> Advanced Security Measures</h5>
                                <p style={{ textAlign: 'justify' }}> We prioritize your data's security with rigorous protocols, ensuring comprehensive protection against potential threats and breaches.</p>
                            </div>
                            <div className='col-12 col-md-6'>
                                <h5> <i className='bi bi-person-check me-2 fs-4'></i> User-Friendly Designs</h5>
                                <p style={{ textAlign: 'justify' }}> Our designs prioritize intuitive user experiences, ensuring seamless navigation and interaction that delight and engage your target audience.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6'>
                        <img src={Priorities} className='w-100 h-100' alt='Benfits' />
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className='container my-5 py-5 bg-light '>
                <h1 className='text-center pb-3'>Why Choose Us?</h1>
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className='row d-flex justify-content-center'>
                                <div className='col-12 col-md-9'>
                                    <div className='card shadow'>
                                        <div className='row'>
                                            <div className='col-12 col-lg-6 pt-3 px-4'>
                                                <h2 className='text-center'>Customized Solutions</h2>
                                                <p style={{ textAlign: 'justify' }}>We understand that every business is unique, which is why we create customized solutions aligned with your specific goals and requirements. Our team of experts collaborates closely with you to develop strategies that drive success.</p>
                                            </div>
                                            <div className=' col-12 col-lg-6'>
                                                <img src={Customized} className='w-100' alt='Customized Solutions'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className='row d-flex justify-content-center'>
                                <div className='col-12 col-md-9'>
                                    <div className='card shadow'>
                                        <div className='row'>
                                            <div className='col-12 col-lg-6 pt-3 px-4'>
                                                <h2 className='text-center'>Proven Expertise</h2>
                                                <p style={{ textAlign: 'justify' }}>With years of experience and a diverse portfolio of successful projects, we bring a wealth of expertise to the table. Our talented professionals possess a deep understanding of technology and development, ensuring top-notch quality in every project.</p>
                                            </div>
                                            <div className=' col-12 col-lg-6'>
                                                <img src={Expertise} className='w-100' alt='Proven Experstise'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className='row d-flex justify-content-center'>
                                <div className='col-12 col-md-9'>
                                    <div className='card shadow'>
                                        <div className='row'>
                                            <div className='col-12 col-lg-6 pt-3 px-4'>
                                                <h2 className='text-center'>Exceptional Customer Service</h2>
                                                <p style={{ textAlign: 'justify' }}>We are committed to providing exceptional customer service throughout your journey with us. Our friendly and knowledgeable team is always ready to assist you, ensuring a smooth and enjoyable experience.</p>
                                            </div>
                                            <div className=' col-12 col-lg-6'>
                                                <img src={Customer} className='w-100' alt='Customer Service'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className='row d-flex justify-content-center'>
                                <div className='col-12 col-md-9'>
                                    <div className='card shadow'>
                                        <div className='row'>
                                            <div className='col-12 col-lg-6 pt-3 px-4'>
                                                <h2 className='text-center'>Client-Centric Approach</h2>
                                                <p style={{ textAlign: 'justify' }}>Our focus is on you, the client. We prioritize your needs and goals, tailoring our solutions to meet your specific requirements. Your satisfaction is our utmost priority.</p>
                                            </div>
                                            <div className=' col-12 col-lg-6'>
                                                <img src={Client} className='w-100' alt='Client-Centric Approach'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className='row d-flex justify-content-center'>
                                <div className='col-12 col-md-9'>
                                    <div className='card shadow'>
                                        <div className='row'>
                                            <div className='col-12 col-lg-6 pt-3 px-4'>
                                                <h2 className='text-center'>Continous Innovation</h2>
                                                <p style={{ textAlign: 'justify' }}>Innovation is in our DNA. We are constantly exploring new technologies, staying up-to-date with industry trends, and seeking innovative solutions to drive your business forward.</p>
                                            </div>
                                            <div className=' col-12 col-lg-6'>
                                                <img src={Innovation} className='w-100' alt='Continous Innovation'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className='row d-flex justify-content-center'>
                                <div className='col-12 col-md-9'>
                                    <div className='card shadow'>
                                        <div className='row'>
                                            <div className='col-12 col-lg-6 pt-3 px-4'>
                                                <h2 className='text-center'>Success Record</h2>
                                                <p style={{ textAlign: 'justify' }}>Our track record speaks for itself. We have a proven history of delivering successful projects and achieving tangible results for our clients. Join the ranks of our satisfied clients who have experienced our excellence firsthand.</p>
                                            </div>
                                            <div className=' col-12 col-lg-6'>
                                                <img src={Success} className='w-100' alt='Success Record'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <i class="bi bi-arrow-left fs-1 text-black" aria-hidden="true"></i>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <i class="bi bi-arrow-right fs-1 text-black" aria-hidden="true"></i>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            {/* Our Services Section */}
            <div className='container-fluid py-4 text-white mb-3' style={{ background: `url(${Services})` }}><h1 className='fw-bold text-center'>Our Services</h1>
            </div>
            <div class="container">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                    <div class="col">
                        <div class="card h-100">
                            <Link to="/WebDevelopment">
                                <img src={Web} class="card-img-top" alt="Web Development" />
                            </Link>
                            <div class="card-body">
                                <h5 class="card-title text-center">Website Development</h5>
                                <p class="card-text" style={{ textAlign: 'justify' }}>We offer comprehensive website development services, creating custom solutions that cater to your specific needs and enhance your online presence.</p>
                                <div className='text-center'>
                                <Link to={'/WebDevelopment'}><button className='btn btn-dark px-4'>Read More!</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <Link to="/MobileApps">
                                <img src={App} class="card-img-top" alt="Mobile Apps" />
                            </Link>
                            <div class="card-body">
                                <h5 class="card-title text-center">Mobile Apps Development</h5>
                                <p class="card-text" style={{ textAlign: 'justify' }}>We specialize in Android and iOS app development, delivering high-quality mobile applications tailored to your requirements and user preferences.</p>
                                <div className='text-center'>
                                <Link to={'/MobileApps'}><button className='btn btn-dark px-4'>Read More!</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <Link to="/SEO">
                                <img src={Seo} class="card-img-top" alt="Seo Services" />
                            </Link>
                            <div class="card-body">
                                <h5 class="card-title text-center">Search Engine Optimization</h5>
                                <p class="card-text" style={{ textAlign: 'justify' }}>Our SEO services optimize your website for search engines, improving visibility and driving organic traffic to enhance your online presence and rankings.</p>
                                <div className='text-center'>
                                <Link to={'/SEO'}><button className='btn btn-dark px-4'>Read More!</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <Link to="/GraphicDesigning">
                                <img src={Graphic} class="card-img-top" alt="Graphic Designing" />
                            </Link>
                            <div class="card-body">
                                <h5 class="card-title text-center">Graphics Designing</h5>
                                <p class="card-text" style={{ textAlign: 'justify' }}>Our graphic design services provide creative and visually stunning designs that effectively communicate your brand message and captivate your audience.</p>
                                <div className='text-center'>
                                <Link to={'/GraphicDesigning'}><button className='btn btn-dark px-4'>Read More!</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <Link to="/DigitalMarketing">
                                <img src={Digital} class="card-img-top" alt="Digital Marketing" />
                            </Link>
                            <div class="card-body">
                                <h5 class="card-title text-center">Digital Marketing</h5>
                                <p class="card-text" style={{ textAlign: 'justify' }}>Our digital marketing services drive targeted traffic, increase brand awareness, and boost conversions through strategic online campaigns and effective marketing strategies.</p>
                                <div className='text-center'>
                                <Link to={'/DigitalMarketing'}><button className='btn btn-dark px-4'>Read More!</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <Link to="/NetworkServices">
                                <img src={Network} class="card-img-top" alt="Network Services" />
                            </Link>
                            <div class="card-body">
                                <h5 class="card-title text-center">Networking Services</h5>
                                <p class="card-text" style={{ textAlign: 'justify' }}>Our networking services ensure seamless connectivity, efficient data transfer, and reliable performance for enhanced communication and optimized network infrastructure.</p>
                                <div className='text-center'>
                                <Link to={'/NetworkServices'}><button className='btn btn-dark px-4'>Read More!</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Transform Together */}
            <div className='container-fluid bg-light mt-5'>
                <div className='row'>
                    <div className='col-12 col-lg-7 p-4'>
                        <h2 className='text-center'>Let's Transform Together</h2>
                        <p className='' style={{ textAlign: 'justify' }} >Discover the transformative power of [Your Company Name]. Elevate your business to new heights with our innovative technology solutions and unwavering dedication. Experience the difference we can make for your success. Contact us today to discuss your project or schedule a consultation, and let's embark on a journey of transformation together.</p>
                        <p className='' style={{ textAlign: 'justify' }} >Contact us today to discuss your project, request a quote, or schedule a consultation. Our team is excited to collaborate with you and help you achieve your business goals.</p>
                        <div className='text-center'>
                        <Link to={'/Contact'}><button className='btn btn-dark px-5 py-2'>Contact Us Now</button></Link>
                        </div>
                    </div>
                    <div className='col-12 col-lg-5 p-0 p-md-4 p-lg-0'>
                        <img src={Transform} className='w-100' alt='Transform Together'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
