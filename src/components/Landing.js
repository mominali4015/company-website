
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/Untitled-3.jpg';
import developmentRight from '../assets/developmentRight.jpg';
import Services from '../assets/OurServices.webp';
import Web from '../assets/Cards/WebCard.webp';
import App from '../assets/Cards/AppCard.webp';
import Seo from '../assets/Cards/SeoCard.webp';
import Graphic from '../assets/Cards/GraphicCard.webp';
import Digital from '../assets/Cards/DigitalCard.webp';
import Network from '../assets/Cards/NetworkCard.webp';


function Landing() {
    return (
        <div>
            <div class="container-fluid p-0">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={img} class="d-block w-100" alt="1" />
                        </div>
                        {/* <div class="carousel-item">
                            <img  style={{ height: '600px', width: '612px' }} src={img} class="d-block w-100" alt="2" />
                        </div>
                        <div class="carousel-item">
                            <img  style={{ height: '600px', width: '612px' }} src={img} class="d-block w-100" alt="3" />
                        </div> */}
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
