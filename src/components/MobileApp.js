import React from 'react';
import background from '../assets/App_Development/MAbackground.webp';
import native from '../assets/App_Development/react-native.webp';
import ionic from '../assets/App_Development/ionic.webp';
import swift from '../assets/App_Development/Swift.webp';
import flutter from '../assets/App_Development/flutter.webp';
import iOS from '../assets/App_Development/ios.webp';
import android from '../assets/App_Development/android.webp';

function MobileApp() {
    return (
        <div >
           
            <div className='container-fluid' style={{ background: `url(${background})` }}>
                <div className='py-2'>
                    <h1 className="text-center text-white pt-4">Custom Mobile App Solutions</h1>
                </div>
                <div className='container'>
                    <div className='container'>
                        <p className=" text-white p-4" style={{ textAlign: 'justify' }}>Mobile app development services encompass a wide range of offerings designed to cater to the diverse needs of businesses and individuals. These services typically involve the creation, design, and deployment of mobile applications for various platforms such as iOS and Android. Skilled app developers leverage their expertise in coding, user interface design, and backend integration to deliver seamless and intuitive mobile experiences. Services often include requirement analysis, prototyping, UI/UX design, development, testing, and post-launch support. App development agencies or freelancers collaborate closely with clients to understand their goals and objectives, ensuring the final product aligns with their vision while adhering to industry best practices and standards.</p>

                    </div>
                </div>
            </div>

            <h1 className="text-center py-4"> WE OFFER SERVICES RELATED TO APPS DEVELOPEMENT</h1>


            <div className="container pb-4">
                <div className="row row-cols-1 row-cols-md-2 g-5">
                    <div className="col">
                        <div className="card h-100">

                            <img src={android} className="card-img-top" alt="Mobile Apps" />

                            <div className="card-body shadow">
                                <h3 className="card-title text-center">Android Apps</h3>
                                <p className='' style={{ textAlign: 'justify' }}>Android app development involves creating applications for the Android operating system, utilizing Java or Kotlin programming languages for coding.Developing Android apps involves designing, coding, and testing applications for smartphones, tablets, and other devices running on the Android platform.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow">

                            <img src={iOS} className="card-img-top" alt="Mobile Apps" />

                            <div className="card-body">
                                <h3 className="card-title text-center">IOS App</h3>
                                <p className='' style={{ textAlign: 'justify' }}>iOS app development focuses on creating applications specifically for Apple's iOS platform, utilizing programming languages like Swift or Objective-C. It involves designing, coding, and testing apps to provide a seamless user experience on iPhones, iPads, and other iOS devices.</p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <h1 className="text-center py-4"> OUR BENIFITS</h1>

            <div className="container pb-4">
                <div className="row row-cols-1 row-cols-md-4 g-5">
                    <div className="col">
                        <div className="card h-100 shadow">
                            <i className="bi bi-globe-asia-australia text-center" style={{ fontSize: '3rem', color: 'black' }}></i>
                            <div className="card-body">
                                <h3 className="card-title text-center">BRANDING</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow">
                            <i className="bi bi-bag-check-fill text-center" style={{ fontSize: '3rem', color: 'black' }}></i>
                            <div className="card-body">
                                <h3 className="card-title text-center">QUALITY</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow">
                            <i className="bi bi-palette-fill text-center" style={{ fontSize: '3rem', color: 'black' }}></i>
                            <div className="card-body">
                                <h3 className="card-title text-center">DESIGN</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow">
                            <i className="bi bi-lightbulb-fill text-center" style={{ fontSize: '3rem', color: 'black' }}></i>
                            <div className="card-body">
                                <h3 className="card-title text-center">CREATIVITY</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="text-center py-4"> OUR EXPERTIES</h1>


            <div className="container pb-4">
                <div className="row row-cols-1 row-cols-md-4 g-5">
                    <div className="col">
                        <div className="card h-100 shadow">
                            
                                <img src={native} className="card-img-top  " alt="Web Development" />
                        
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow">
                            
                                <img src={flutter} className="card-img-top  " alt="Web Development" />
                            

                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow">
                            
                                <img src={swift} className="card-img-top" alt="Web Development" />
                            
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow">
                            
                                <img src={ionic} className="card-img-top   " alt="Web Development" />
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default MobileApp;