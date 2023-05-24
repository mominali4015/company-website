import React from 'react';
import { Link } from 'react-router-dom';
import background from '../assets/services backgrounds/MAbackground.webp';
import native from '../assets/MAcards/react-native.webp';
import ionic from '../assets/MAcards/ionic.webp';
import swift from '../assets/MAcards/Swift.webp';
import flutter from '../assets/MAcards/flutter.webp';
import iOS from '../assets/MAcards/ios.webp';
import android from '../assets/MAcards/android.webp';

function MobileApp() {
    return (
        <div >
           
            <div className='container-fluid' style={{ background: `url(${background})` }}>
                <div className='py-2'>
                    <h1 class="text-center text-white pt-4">Custom Mobile App Solutions</h1>
                </div>
                <div className='container'>
                    <div className='container'>
                        <p class=" text-white p-4" style={{ textAlign: 'justify' }}>Mobile app development services encompass a wide range of offerings designed to cater to the diverse needs of businesses and individuals. These services typically involve the creation, design, and deployment of mobile applications for various platforms such as iOS and Android. Skilled app developers leverage their expertise in coding, user interface design, and backend integration to deliver seamless and intuitive mobile experiences. Services often include requirement analysis, prototyping, UI/UX design, development, testing, and post-launch support. App development agencies or freelancers collaborate closely with clients to understand their goals and objectives, ensuring the final product aligns with their vision while adhering to industry best practices and standards.</p>

                    </div>
                </div>
            </div>

            <h1 class="text-center py-4"> WE OFFER SERVICES RELATED TO APPS DEVELOPEMENT</h1>


            <div class="container pb-4">
                <div class="row row-cols-1 row-cols-md-2 g-5">
                    <div class="col">
                        <div class="card h-100">

                            <img src={android} class="card-img-top" alt="Mobile Apps" />

                            <div class="card-body shadow">
                                <h3 class="card-title text-center">Android Apps</h3>
                                <p className='' style={{ textAlign: 'justify' }}>Android app development involves creating applications for the Android operating system, utilizing Java or Kotlin programming languages for coding.Developing Android apps involves designing, coding, and testing applications for smartphones, tablets, and other devices running on the Android platform.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 shadow">

                            <img src={iOS} class="card-img-top" alt="Mobile Apps" />

                            <div class="card-body">
                                <h3 class="card-title text-center">IOS App</h3>
                                <p className='' style={{ textAlign: 'justify' }}>iOS app development focuses on creating applications specifically for Apple's iOS platform, utilizing programming languages like Swift or Objective-C. It involves designing, coding, and testing apps to provide a seamless user experience on iPhones, iPads, and other iOS devices.</p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <h1 class="text-center py-4"> OUR BENIFITS</h1>

            <div class="container pb-4">
                <div class="row row-cols-1 row-cols-md-4 g-5">
                    <div class="col">
                        <div class="card h-100 shadow">
                            <i class="bi bi-globe-asia-australia text-center" style={{ fontSize: '3rem', color: 'black' }}></i>
                            <div class="card-body">
                                <h3 class="card-title text-center">BRANDING</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 shadow">
                            <i class="bi bi-bag-check-fill text-center" style={{ fontSize: '3rem', color: 'black' }}></i>
                            <div class="card-body">
                                <h3 class="card-title text-center">QUALITY</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 shadow">
                            <i class="bi bi-palette-fill text-center" style={{ fontSize: '3rem', color: 'black' }}></i>
                            <div class="card-body">
                                <h3 class="card-title text-center">DESIGN</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 shadow">
                            <i class="bi bi-lightbulb-fill text-center" style={{ fontSize: '3rem', color: 'black' }}></i>
                            <div class="card-body">
                                <h3 class="card-title text-center">CREATIVITY</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h1 class="text-center py-4"> OUR EXPERTIES</h1>


            <div class="container pb-4">
                <div class="row row-cols-1 row-cols-md-4 g-5">
                    <div class="col">
                        <div class="card h-100 shadow">
                            
                                <img src={native} class="card-img-top  " alt="Web Development" />
                        
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 shadow">
                            
                                <img src={flutter} class="card-img-top  " alt="Web Development" />
                            

                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 shadow">
                            
                                <img src={swift} class="card-img-top" alt="Web Development" />
                            
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 shadow">
                            
                                <img src={ionic} class="card-img-top   " alt="Web Development" />
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default MobileApp;