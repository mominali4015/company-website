import React from 'react';
import { Link } from 'react-router-dom';
import Background from '../assets/About_Us/AUBackground.webp';
import Ali from '../assets/About_Us/Ali-Team.jpg';
import Zaheer from '../assets/About_Us/Zaheer-Team.jpg';
import Ahmed from '../assets/About_Us/Ahmed-Team.jpg';
import Uqba from '../assets/About_Us/Uqba-Team.jpg';
import Moeed from '../assets/About_Us/Moeed-Team.jpg';
import Ubaid from '../assets/About_Us/Ubaid-Team.jpg';
function AboutUs() {
    return (
        <>
            <div className='container-fluid py-5 px-0 text-white text-center ' style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover' }}>
                <h1>ABOUT SWIFT SOLUTIONS</h1>
                <h6>Complete Source for Customized and Comprehensive Tech Solutions At One Stop</h6>
            </div>
            <div className='container-fluid bg-light'>
                <div className='container bg-white p-3'>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-md-9'>
                            <div className="card h-100 shadow p-3">
                                <div className="card-body text-center">
                                    <h3 className="card-title text-center">Who We Are</h3>
                                    <p className="card-text" style={{ textAlign: 'justify' }}>We are a dynamic software company at the forefront of technological innovation. With a passionate team of experts, we offer a diverse range of cutting-edge services tailored to meet your tech needs. We are dedicated to delivering exceptional quality and empowering businesses to thrive in the digital era.</p>
                                    <h3 className='card-title text-center'>What Makes Us Different</h3>
                                    <p className="card-text" style={{ textAlign: 'justify' }}>What sets us apart from the rest is our unwavering commitment to excellence and customer satisfaction. We go above and beyond to understand your unique requirements and provide personalized solutions that drive results. Our team's deep expertise, agile approach, and seamless collaboration ensure that we deliver projects on time and within budget. Trust us to transform your vision into reality and exceed your expectations every step of the way. </p>
                                    <Link to="/Contact">
                                        <button className='btn btn-dark px-5 mt-4'>Get in Touch With Us!</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container mt-5 p-3 p-lg-5 bg-white rounded'>
                    <h3 className='text-center mb-3'>Our Valuable Team</h3>
                    <div class="row g-2 g-lg-5">
                        <div class="col-sm-4 p-3 p-lg-5">
                            <div class="card shadow" >
                                <div className='pt-3 ps-3 pe-3 ps-lg-5 pt-lg-5 pe-lg-5'>
                                    <img src={Ali} className="card-img-top rounded-circle" alt="Ali" />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title text-center">Mr. Mohammad Ali</h5>
                                    <p class="card-text text-center">Backend Developer</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 p-3 p-lg-5">
                            <div class="card shadow" >
                                <div className='pt-3 ps-3 pe-3 ps-lg-5 pt-lg-5 pe-lg-5'>
                                    <img src={Zaheer} class="card-img-top rounded-circle" alt="Zaheer" />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title text-center">Mr. Zaheer Ali</h5>
                                    <p class="card-text text-center"> Frontend Developer </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 p-3 p-lg-5">
                            <div class="card shadow" >
                                <div className='pt-3 ps-3 pe-3 ps-lg-5 pt-lg-5 pe-lg-5'>
                                    <img src={Ubaid} class="card-img-top rounded-circle" alt="Ubaid" />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title text-center">Mr. Ubaid </h5>
                                    <p class="card-text text-center">Graphics Designer </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 p-3 p-lg-5">
                            <div class="card shadow" >
                                <div className='pt-3 ps-3 pe-3 ps-lg-5 pt-lg-5 pe-lg-5'>
                                    <img src={Ahmed} class="card-img-top rounded-circle" alt="Ahmed" />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title text-center">Mr. Ahmed</h5>
                                    <p class="card-text text-center"> Network Specialist </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 p-3 p-lg-5">
                            <div class="card shadow" >
                                <div className='pt-3 ps-3 pe-3 ps-lg-5 pt-lg-5 pe-lg-5'>
                                    <img src={Uqba} class="card-img-top rounded-circle" alt="Uqba" />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title text-center">Mr. Uqba</h5>
                                    <p class="card-text text-center"> Web Developer </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 p-3 p-lg-5">
                            <div class="card shadow" >
                                <div className='pt-3 ps-3 pe-3 ps-lg-5 pt-lg-5 pe-lg-5'>
                                    <img src={Moeed} class="card-img-top rounded-circle" alt="Moeed" />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title text-center">Mr. Abdul Moeed</h5>
                                    <p class="card-text text-center"> SEO Officer </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUs;