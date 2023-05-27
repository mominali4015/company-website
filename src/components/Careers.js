import React from 'react';
import Background from '../assets/Background/CRBackground.webp'
import Aside from '../assets/Careers.webp';
function Careers() {
    return (
        <>
            <div className='container-fluid text-white text-center py-3' style={{ background: `url(${Background})`, backgroundSize: 'cover', opacity: '100%' }}>
                <h1>Join Our Team</h1>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-12 col-md-8' style={{ textAlign: 'justify' }}>
                        <p className='text-white fs-5 p-2'>At Swift Solutions, we believe that our success is driven by the talent and dedication of our team members. We're always on the lookout for exceptional individuals who are passionate about technology and development to join our team. While we currently don't have any job openings or vacancies available, we encourage you to check back periodically for future opportunities.</p>
                    </div>
                    <div className='col-md-2'></div>
                </div>
            </div>

            <div className='container text-center pt-3'>
                <h2 className='my-3'>Our Work Environment</h2>
                <div className='row'>
                    <div className='col-12 col-lg-6'>
                        <img src={Aside} class="w-100" alt='aside' />
                    </div>
                    <div className='col-12 col-lg-6'>
                        <div style={{ textAlign: 'justify' }}>
                            <p>
                                At Swift Solutions, our work environment is characterized by a vibrant and inclusive culture that inspires collaboration, creativity, and growth. We foster a sense of belonging where every team member's unique perspectives and ideas are valued and respected.
                            </p>
                            <p>
                                Our teams thrive on collaboration, working together seamlessly to achieve exceptional results. We encourage open communication, knowledge sharing, and mutual support, creating an environment that nurtures teamwork and camaraderie.
                            </p>
                            <p>
                                Innovation and creativity are at the core of our work. We empower our employees to think outside the box, challenge the status quo, and explore groundbreaking solutions. We provide the necessary resources, training, and opportunities for continuous learning, enabling our team members to stay ahead of the curve and embrace new challenges.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container text-center p-3 p-lg-5'>
                <h2 className='my-3'>Why Work With Us</h2>
                <div class="row g-5" style={{ textAlign: 'justify' }}>
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="card shadow">
                            <div class="card-body p-3">
                                <h5 class=" card-title text-center">Cutting-Edge Technology</h5>
                                <p class="card-text">Join our team and experience the excitement of working with cutting-edge technology, staying ahead of industry advancements, and embracing the latest innovations.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="card shadow">
                            <div class="card-body p-3">
                                <h5 class=" card-title text-center">Challenging Projects</h5>
                                <p class="card-text">Embark on thrilling projects that stretch your limits, push boundaries, and offer abundant prospects for personal and professional growth, propelling your career to new heights.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="card shadow">
                            <div class="card-body p-3">
                                <h5 class=" card-title text-center">Collaborative Culture</h5>
                                <p class="card-text ">Join our team and experience a collaborative and supportive culture where open communication, knowledge sharing, fostering a sense of belonging and collective success.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="card shadow">
                            <div class="card-body p-3">
                                <h5 class=" card-title text-center">Continuous Learning</h5>
                                <p class="card-text"> Fuel your growth with our unwavering commitment to continuous learning. Benefit from training, workshops, and conferences that keep you informed about the latest industry trends.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="card shadow">
                            <div class="card-body p-3">
                                <h5 class=" card-title text-center">Work-Life Balance</h5>
                                <p class="card-text">We value the significance of work-life balance, and our flexible work environment ensures that you can maintain a healthy equilibrium between your professional and personal life.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="card shadow">
                            <div class="card-body p-3">
                                <h5 class=" card-title text-center">Enhanced Management</h5>
                                <p class="card-text">Experience our enhanced management approach that optimizes processes, facilitates effective decision-making, ensures streamlined operations and unlocking your full potential.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container text-center'>
                <h1>How to Connect</h1>
                <div className='row'  style={{ textAlign: 'justify' }}>
                    <div className='col-md-2'></div>
                    <div className='col-md-8'>
                <p>While we currently don't have any job openings, we still encourage talented individuals to get in touch with us and express their interest in joining our team. You can connect with us by sending an email to [careers@swiftsolutions.pk] or by filling out the contact form below. We will keep your information on file and reach out to you when suitable opportunities arise.</p>
                <p>Thank you for considering Swift Solutions  as a potential employer. We appreciate your interest in our company and look forward to connecting with you in the future.</p>
                    </div>
                    <div className='col-md-2'></div>
                </div>

            </div>
        </>
    );
}

export default Careers;