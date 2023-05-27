
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo/logo.png'
import img from '../assets/Untitled-3.jpg';
import developmentRight from '../assets/developmentRight.jpg';
import Web from '../assets/Cards/WebCard.webp';
import App from '../assets/Cards/AppCard.webp';
import Seo from '../assets/Cards/SeoCard.webp';
import Graphic from '../assets/Cards/GraphicCard.webp';
import Digital from '../assets/Cards/DigitalCard.webp';
import Network from '../assets/Cards/NetworkCard.webp';


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
                    <div class="carousel-item active" style={{ background: `url(${img})`, height: '400px' }} >
                        {/* <img src={img} class="d-block w-100" alt="1" /> */}
                        <h1>
                            Welcome to Swift Solutions
                        </h1>
                        <h4>Unlocking Possibilities, Delivering Solutions</h4>
                    </div>
                    <div class="carousel-item" style={{ background: `url(${img})`, height: '400px' }} >
                        {/* <img src={img} class="d-block w-100" alt="1" /> */}
                        <h1>
                            Welcome to Swift Solutions
                        </h1>
                        <h4>Delivering Solutions</h4>
                    </div>
                    <div class="carousel-item" style={{ background: `url(${img})`, height: '400px' }} >
                        {/* <img src={img} class="d-block w-100" alt="1" /> */}
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

            {/* Our Benefits Section */}
            <div className='container-fluid bg-dark p-3 text-white'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='row gx-5 gy-3'>
                            <div className='col-6'>
                                <h6> <i className='bi bi-clock me-2'></i> Timely Project Delivery</h6>
                                <p style={{ textAlign: 'justify' }}> Meeting deadlines and delivering high quality results within agreed-upon timeframes.</p>
                            </div>
                            <div className='col-6'>
                                <h6> <i className='bi bi-cash-coin me-2'></i> Cost-Effective Solutions</h6>
                                <p style={{ textAlign: 'justify' }}> Delivering cost-effective tech services without compromising on quality.</p>
                            </div>
                            <div className='col-6'>
                                <h6> <i className='bi bi-shield-check me-2'></i> Advanced Security Measures</h6>
                                <p style={{ textAlign: 'justify' }}> Implementing robust security protocols to safeguard your valuable data.</p>
                            </div>
                            <div className='col-6'>
                                <h6> <i className='bi bi-person-check me-2'></i> User-Friendly Designs</h6>
                                <p style={{ textAlign: 'justify' }}> Crafting intuitive and user-friendly interfaces for exceptional customer experiences.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <img src={developmentRight} className='w-100' />
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row ">
                    <div class="col-6 my-5">
                        <p>
                            At [ Company ], we specialize in providing top-notch IT services to our clients. Our services are
                            designed to meet the unique needs and requirements of businesses of all sizes, from startups to
                            established enterprises.
                        </p>
                        <p>
                            Our team of experienced IT professionals is equipped with the latest tools and technologies to
                            provide a
                            wide range of services, including IT consulting, software development, network setup and
                            maintenance,
                            cloud computing, cybersecurity, and much more. We are committed to delivering innovative and
                            effective
                            solutions that help our clients improve their operations, enhance their productivity, and stay ahead
                            ofthe competition.
                        </p>
                        <p>
                            Our approach is focused on understanding our clients' specific needs and goals and tailoring our
                            services to meet those needs. We work closely with our clients to ensure that our solutions are
                            efficient, cost-effective, and scalable. We believe in building strong, long-lasting relationships
                            with our clients, based on trust, transparency, and mutual respect.
                        </p>
                        <p>
                            If you are looking for reliable and professional IT services, look no further than [Company Name].
                            Contact us today to learn more about how we can help your business grow and thrive in the digital
                            age.
                        </p>
                    </div>
                    <div class="col-6 my-5">
                        <img src={developmentRight} class="rounded w-100" alt="aside" />
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row ">
                    <div class="col-6 my-5">
                        <img src="./start.webp" class="rounded w-100" alt="aside" />
                    </div>
                    <div class="col-6 my-5">
                        <p>
                            At [ Company ], we specialize in providing top-notch IT services to our clients. Our services are
                            designed to meet the unique needs and requirements of businesses of all sizes, from startups to
                            established enterprises.
                        </p>
                        <p>
                            Our team of experienced IT professionals is equipped with the latest tools and technologies to
                            provide a
                            wide range of services, including IT consulting, software development, network setup and
                            maintenance,
                            cloud computing, cybersecurity, and much more. We are committed to delivering innovative and
                            effective
                            solutions that help our clients improve their operations, enhance their productivity, and stay ahead
                            ofthe competition.
                        </p>
                        <p>
                            Our approach is focused on understanding our clients' specific needs and goals and tailoring our
                            services to meet those needs. We work closely with our clients to ensure that our solutions are
                            efficient, cost-effective, and scalable. We believe in building strong, long-lasting relationships
                            with our clients, based on trust, transparency, and mutual respect.
                        </p>
                        <p>
                            If you are looking for reliable and professional IT services, look no further than [Company Name].
                            Contact us today to learn more about how we can help your business grow and thrive in the digital
                            age.
                        </p>
                    </div>
                </div>
            </div>
            <div className='container-fluid'><h1 className='fw-bold text-center'>Our Services</h1>
            </div>
            <div class="container">
                <div class="row row-cols-1 row-cols-md-3 g-5">
                    <div class="col">
                        <div class="card h-100">
                            <Link to="/WebDevelopment">
                                <img src={Web} class="card-img-top" alt="Web Development" />
                            </Link>
                            <div class="card-body">
                                <h5 class="card-title text-center">Website Development</h5>
                                <p class="card-text" style={{ textAlign: 'justify' }}>We offer comprehensive website development services, creating custom solutions that cater to your specific needs and enhance your online presence.</p>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
