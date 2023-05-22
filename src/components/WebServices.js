import React from 'react';
import { Link } from 'react-router-dom';
import background from '../assets/services backgrounds/WSbackground.webp';
import laravelimg from '../assets/WScards/laravel.png';
import nodeimg from '../assets/WScards/node.png';
import reactimg from '../assets/WScards/react.png';
import djangoimg from '../assets/WScards/django.png';
function WebService() {
    return (

        <div style={{ background: `url(${background})` }}>
            <div className='py-4'>
            <h1 class="text-center text-white pt-4">Professional Web </h1>
            <h1 class="text-center text-white">Development Services </h1>
            </div>
            <p class="text-center text-white">Expertise in front-end and back-end development to deliver seamless and interactive web experiences.</p>
            <p class="text-center text-white">Professional web development services for creating impactful and user-friendly websites.</p>

            <h1 class="text-center text-white py-4"> OUR BENIFITS</h1>

            <div class="container pb-4">
                <div class="row row-cols-1 row-cols-md-4 g-5">
                    <div class="col">
                        <div class="card h-100">
                            <i class="bi bi-globe-asia-australia text-center" style={{ fontSize: '3rem', color: 'black' }}></i>
                            <div class="card-body">
                                <h3 class="card-title text-center">BRANDING</h3>
                                <p className='text-center p-2'>Branding establishes a unique identity, evokes emotions, builds trust, and differentiates businesses from competitors, fostering recognition and customer loyalty</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <i class="bi bi-bag-check-fill text-center" style={{ fontSize: '3rem', color: 'black' }}></i>
                            <div class="card-body">
                                <h3 class="card-title text-center">QUALITY</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <i class="bi bi-palette-fill text-center" style={{ fontSize: '3rem', color: 'black' }}></i>
                            <div class="card-body">
                                <h3 class="card-title text-center">DESIGN</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <i class="bi bi-lightbulb-fill text-center" style={{ fontSize: '3rem', color: 'black' }}></i>
                            <div class="card-body">
                                <h3 class="card-title text-center">CREATIVITY</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h1 class="text-center text-white py-4"> OUR EXPERTIES</h1>


            <div class="container pb-4">
                <div class="row row-cols-1 row-cols-md-4 g-5">
                    <div class="col">
                        <div class="card h-100">
                        <Link to="/WebDevelopment">
                                <img src={laravelimg} class="card-img-top mt-4" alt="Web Development" />
                        </Link>
                            <div class="card-body">
                                <h3 class="card-title text-center"></h3>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <Link to="/WebDevelopment">
                                <img src={nodeimg} class="card-img-top mt-4" alt="Web Development" />
                        </Link>
                            <div class="card-body">
                                <h3 class="card-title text-center"></h3>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <Link to="/WebDevelopment">
                                <img src={djangoimg} class="card-img-top pt-4"  alt="Web Development" />
                        </Link>
                            <div class="card-body">
                                <h3 class="card-title text-center"></h3>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <Link to="/WebDevelopment">
                                <img src={reactimg} class="card-img-top mt-4 "  alt="Web Development" />
                        </Link>
                            <div class="card-body">
                                <h3 class="card-title text-center"></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
}

export default WebService;