import React from 'react';
import { Link } from 'react-router-dom';
import background from '../assets/services backgrounds/MAbackground.webp';
import native from '../assets/MAcards/native.png';
import ionic from '../assets/MAcards/ionic.png';
import swift from '../assets/MAcards/swift.png';
import flutter from '../assets/MAcards/flutter.png';
function MobileApp(){
    return(
        <div style={{ background: `url(${background})` }}>
            <div className='py-4'>
            <h1 class="text-center text-white pt-4">Custom Mobile  </h1>
            <h1 class="text-center text-white">App Solutions </h1>
            </div>
            <p class="text-center text-white">Creating custom mobile apps for iOS and Android platforms to meet specific business requirements.</p>
            <p class="text-center text-white">Designing intuitive and interactive interfaces that ensure smooth navigation and seamless interactions for app users.</p>

            <h1 class="text-center text-white py-4"> OUR BENIFITS</h1>

            <div class="container pb-4">
                <div class="row row-cols-1 row-cols-md-4 g-5">
                    <div class="col">
                        <div class="card h-100">
                            <i class="bi bi-globe-asia-australia text-center" style={{ fontSize: '3rem', color: 'black' }}></i>
                            <div class="card-body">
                                <h3 class="card-title text-center">BRANDING</h3>
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
                                <img src={native} class="card-img-top mt-4" alt="Web Development" />
                        </Link>
                            <div class="card-body">
                                <h3 class="card-title text-center"></h3>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <Link to="/WebDevelopment">
                                <img src={flutter} class="card-img-top mt-4" alt="Web Development" />
                        </Link>
                            <div class="card-body">
                                <h3 class="card-title text-center"></h3>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <Link to="/WebDevelopment">
                                <img src={swift} class="card-img-top pt-4"  alt="Web Development" />
                        </Link>
                            <div class="card-body">
                                <h3 class="card-title text-center"></h3>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <Link to="/WebDevelopment">
                                <img src={ionic} class="card-img-top mt-4 "  alt="Web Development" />
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

export default MobileApp;