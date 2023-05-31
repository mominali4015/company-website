import React from 'react';
import background from '../assets/Web_Development/WSbackground.webp';
import laravelimg from '../assets/Web_Development/laravel.png';
import nodeimg from '../assets/Web_Development/node.png';
import reactimg from '../assets/Web_Development/react.png';
import djangoimg from '../assets/Web_Development/django.png';
import onlinestore from '../assets/Web_Development/onlinestore.webp';
import corporateweb from '../assets/Web_Development/corporateWebsite.webp';
import landing from '../assets/Web_Development/landing.webp';
import responsive from '../assets/Web_Development/responsive.webp';

function WebService() {
    return (

        <div>

            <div className='' style={{ background: `url(${background})` }}>
                <div className='py-2'>
                    <h1 className="text-center text-white pt-2">Professional Web Development Services </h1>
                </div>
                <div className='container'>
                    <div className='container'>
                        <p className=" text-white p-4" style={{ textAlign: 'justify' }}>As a leading web development company, we are dedicated to delivering exceptional web solutions tailored to meet the unique needs and goals of our clients. Our team of skilled developers excels in crafting dynamic, responsive, and user-friendly websites that provide a seamless browsing experience across devices. With expertise in various technologies and frameworks, we specialize in developing custom web applications, e-commerce platforms, content management systems, and interactive websites. We prioritize clean code, optimized performance, and robust security to ensure the highest quality standards. From conceptualization to deployment, our streamlined development process guarantees timely delivery and ongoing support, fostering long-term partnerships with our valued clients.Our web development services encompass front-end and back-end development, database integration, API integration, UI/UX design, testing, and maintenance. We prioritize collaboration, transparency, and client satisfaction, providing scalable and future-proof solutions that drive business growth and maximize online presence.</p>

                    </div>
                </div>
            </div>
            <h1 className="text-center  py-4"> WE OFFER SERVICES RELATED TO WESITES</h1>

            <div className="container pb-4">
                <div className="row row-cols-1 row-cols-md-2 g-5">
                    <div className="col">
                        <div className="card h-100">
                           
                                <img src={onlinestore} className="card-img-top" alt="Mobile Apps" />
                            
                            <div className="card-body shadow">
                                <h3 className="card-title text-center">Online Store</h3>
                                <p className='' style={{ textAlign: 'justify' }}>Our online store website development services offer customized solutions, seamless shopping experiences, secure payment gateways, inventory management, and personalized customer interactions, driving e-commerce success.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow">
                            
                                <img src={corporateweb} className="card-img-top" alt="Mobile Apps" />
                         
                            <div className="card-body">
                                <h3 className="card-title text-center">Corporate Website</h3>
                                <p className='' style={{ textAlign: 'justify' }}>Our corporate website development services provide professional designs, robust functionality, intuitive navigation, content management systems, and responsive layouts, enhancing brand visibility and user engagement</p>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow">
                            
                                <img src={landing} className="card-img-top" alt="Mobile Apps" />
                            
                            <div className="card-body">
                                <h3 className="card-title text-center">Landing Page</h3>
                                <p className='' style={{ textAlign: 'justify' }}>Our landing website development services create captivating designs, compelling content, clear call-to-actions, optimized performance, and conversion-focused elements, maximizing lead generation and user engagement.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow">
                            
                                <img src={responsive} className="card-img-top" alt="Mobile Apps" />
                           
                            <div className="card-body">
                                <h3 className="card-title text-center">Responsive Website</h3>
                                <p className='' style={{ textAlign: 'justify' }}>Our responsive website development services ensure seamless user experiences across devices, optimized layouts, fluid navigation, and flexible designs, catering to diverse screen sizes.</p>

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
                                <p className='' style={{ textAlign: 'justify' }}>Branding establishes a unique identity, evokes emotions, builds trust, and differentiates businesses from competitors, fostering recognition and customer loyalty</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow">
                            <i className="bi bi-bag-check-fill text-center" style={{ fontSize: '3rem', color: 'black' }}></i>
                            <div className="card-body">
                                <h3 className="card-title text-center">QUALITY</h3>
                                <p className='' style={{ textAlign: 'justify' }}>Quality web services provide seamless functionality, intuitive user experience, robust security, scalability, and timely support, ensuring customer satisfaction and business success.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow">
                            <i className="bi bi-palette-fill text-center" style={{ fontSize: '3rem', color: 'black' }}></i>
                            <div className="card-body">
                                <h3 className="card-title text-center">DESIGN</h3>
                                <p className='' style={{ textAlign: 'justify' }}>Design-focused web services deliver visually appealing interfaces, intuitive navigation, responsive layouts, and consistent branding, enhancing user engagement and overall user experience.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow">
                            <i className="bi bi-lightbulb-fill text-center" style={{ fontSize: '3rem', color: 'black' }}></i>
                            <div className="card-body">
                                <h3 className="card-title text-center">CREATIVITY</h3>
                                <p className='' style={{ textAlign: 'justify' }}>Creative web services offer innovative and unique solutions, engaging visual elements, interactive features, and captivating content, inspiring user curiosity and driving memorable experiences.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <h1 className="text-center text-white py-4"> OUR EXPERTIES</h1>


            <div className="container pb-4">
                <div className="row row-cols-1 row-cols-md-4 g-5">
                    <div className="col">
                        <div className="card h-100 shadow">
                                <img src={laravelimg} className="card-img-top mt-4" alt="Web Development" />
                            <div className="card-body">
                            
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow">
                                <img src={nodeimg} className="card-img-top mt-4" alt="Web Development" />
                            <div className="card-body">
                            
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow">
                                <img src={djangoimg} className="card-img-top pt-4" alt="Web Development" />
                            <div className="card-body">
                            
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow">
                                <img src={reactimg} className="card-img-top mt-4 " alt="Web Development" />
                            <div className="card-body">
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
}

export default WebService;