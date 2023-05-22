import React from 'react';
import Background from '../assets/Background/CUBackground.webp';
import { Link } from 'react-router-dom';
function Contact() {

    const handleCall = () => {
        window.location.href = 'tel:+923054735990';
    };
    
    const handleCallClick = () => {
        window.location.href = 'tel:+923014405739';
    };

    const emailAddress = "info@swiftsolutions.pk";
    const handleEmailClick = () => {
        window.location.href = `mailto:${emailAddress}`;
    };


    return (
        <>
            <div className='container-fluid py-2 px-0' style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover' }}>
                <h1 className='text-center text-white'>CONTACT US FOR <br /> <b>ALL SERVICES</b></h1>
                <p className='text-center text-white fs-5'>Discover exceptional service and solutions Contact us now for<br /> personalized assistance and experience the difference firsthand <br /> Here are a few ways to reach out to our customer support representative</p>
            </div>
            <div className='container-fluid'>
                <div className='container bg-light p-1 p-md-5 mt-5'>
                    <div className='row'>
                        <div className='col-12 col-md-5'>
                            <div class="row g-5">
                                <div class="col-12">
                                    <div class="card shadow">
                                        <div class="card-body p-5 d-flex align-items-center">
                                            <i className='bi bi-telephone-outbound text-warning fs-1 me-3'></i>
                                            <div className='fs-5'>Call us directly at: <br />
                                                <div className=' fs-3 fw-bold my-2'>+92 305 4735990</div>
                                                <button onClick={handleCall} className="btn btn-dark px-4">
                                                    Call Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="card shadow">
                                        <div class="card-body p-5 d-flex align-items-center">
                                            <i className='bi bi-phone text-warning fs-1 me-3'></i>
                                            <div className='fs-5'>Call us directly at: <br />
                                                <div className=' fs-3 fw-bold my-2'>+92 301 4405739</div>
                                                <button onClick={handleCallClick} className="btn btn-dark px-4">
                                                    Call Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="card shadow">
                                        <div class="card-body p-5 d-flex align-items-center">
                                            <i className='bi bi-envelope text-warning fs-1 me-3'></i>
                                            <div className='fs-5'>Get Enquiry at: <br />
                                                <div className=' fs-3 fw-bold my-2'>info@swiftsolution</div>
                                                <button onClick={handleEmailClick} className="btn btn-dark px-4">
                                                    Mail Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-1'></div>
                        <div className='col-12 col-md-6 bg-white px-5 pt-5 pb-2 shadow rounded'>
                            <h3 className='text-center'>Book a Meeting</h3>
                            <p className='text-center'>To schedule a meeting with one of our representatives, <br /> Please fill the form below and then click Submit.</p>
                            <form>
                                <div className='row'>
                                    <div className='col-12 col-md-6'>
                                        <div class="mb-3">
                                            <label class="form-label">First Name:</label>
                                            <input type="text" class="form-control" />
                                        </div>
                                        <div class="mb-3">
                                            <label  class="form-label">Email address:</label>
                                            <input type="email" class="form-control" />
                                        </div>
                                        <div class="mb-3">
                                            <label  class="form-label">City/Country:</label>
                                            <input type="text" class="form-control" />
                                        </div>
                                    </div>
                                    <div className=' col-12 col-md-6'>
                                    <div class="mb-3">
                                            <label  class="form-label">Last Name:</label>
                                            <input type="text" class="form-control" />
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Phone Number:</label>
                                            <input type="text" class="form-control" />
                                        </div>
                                        <div class="mb-3">
                                            <label  class="form-label">Company Name:</label>
                                            <input type="text" class="form-control" placeholder='(Optional)'/>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-dark px-4">Submit</button>
                            </form>
                            <hr/>
                            <h4>Get to Know Our Location:</h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.2408218452356!2d74.40181727457514!3d31.572443294569325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905556f40f311%3A0xc3bc6369c81a44e3!2sFateh%20Garh%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1684693125820!5m2!1sen!2s"
                             width="100%" height="235rem"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;