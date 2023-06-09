import React from 'react';
import background from '../assets/Graphic_Designing/GDBackground.webp';
import logoDesign from '../assets/Graphic_Designing/logoDesign.webp';
import branding from '../assets/Graphic_Designing/branding.webp';
import webDesign from '../assets/Graphic_Designing/webDesign.webp';
import printDesign from '../assets/Graphic_Designing/printDesign.webp';
import pakagignDesign from '../assets/Graphic_Designing/pakagignDesign.webp';
import socialMedia from '../assets/Graphic_Designing/socialMedia.webp';
import SEOservices from '../assets/Graphic_Designing/SEOservices.webp';
import Figma from '../assets/Graphic_Designing/Figma.webp';
import AI from '../assets/Graphic_Designing/AI.webp';
import PS from '../assets/Graphic_Designing/PS.webp';
import canva from '../assets/Graphic_Designing/canva.webp';


function GraphicDesign(){
    return(
        <div >
            <div className='container-fluid' style={{ background: `url(${background})` }}>
                <div className='py-4'>
                    <h1 className="text-center text-white pt-4">OUR GRAPHIC SERVICES  </h1>
                </div>
                <div className='container' >
                    <div className='container'>
                        <p className=" text-white p-4" style={{ textAlign: 'justify' }}>Looking for professional graphic designing services that elevate your brand's visual identity? Look no further! Our expert team of graphic designers is dedicated to delivering stunning and impactful designs tailored to your specific needs. From logo design and branding to marketing collateral and web graphics, we offer a comprehensive range of services. With a keen eye for aesthetics and a deep understanding of design principles, we ensure that every project reflects your unique style and effectively communicates your message. Whether you're a startup or an established business, our professional graphic designing services will help you stand out from the competition and leave a lasting impression on your audience. Contact us today to discuss your design requirements and let us bring your vision to life.</p>

                    </div>
                </div>
            </div>
            <div className="container bg-light pb-4">
                <h1 className="text-center pt-3">SERVICES WE OFFER</h1>
                <div className="row  row-cols-1 row-cols-md-2 g-5 p-5">
                    <div className="col">
                        <div className="card h-100 shadow">

                            <img src={logoDesign} className="card-img-top" alt="Mobile Apps" />

                            <div className="card-body">
                                <h3 className="card-title text-center">Logo Design</h3>
                                <p className='' style={{ textAlign: 'justify' }}>Our logo design process begins with a comprehensive understanding of our clients' businesses, target markets, and industry landscape. Through collaborative discussions, we extract key insights that shape the design direction. Our designers then leverage their expertise in design principles, color psychology, typography, and visual aesthetics to create logos that encapsulate the essence of the brand.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow">

                            <img src={branding} className="card-img-top" alt="Mobile Apps" />

                            <div className="card-body">
                                <h3 className="card-title text-center">Branding and Identity Design</h3>
                                <p className='' style={{ textAlign: 'justify' }}>We then move on to the design phase, where our talented designers bring the brand strategy to life. We create visually captivating and cohesive brand elements, including logos, color palettes, typography, imagery styles, and brand guidelines. These elements work harmoniously to communicate the brand's values and create a consistent brand experience across various touchpoints.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow">

                            <img src={printDesign} className="card-img-top" alt="Mobile Apps" />

                            <div className="card-body">
                                <h3 className="card-title text-center">Print Design</h3>
                                <p className='' style={{ textAlign: 'justify' }}>Our Print Design services encompass the entire design process, from concept development to final production-ready files. We work closely with trusted print vendors to ensure that the design translates seamlessly onto physical materials. Our attention to detail extends to paper selection, finishes, and printing techniques, ensuring that the final printed pieces exceed expectations.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow">

                            <img src={webDesign} className="card-img-top" alt="Mobile Apps" />

                            <div className="card-body">
                                <h3 className="card-title text-center">Web Design</h3>
                                <p className='' style={{ textAlign: 'justify' }}>Our Web Design services are tailored to assist businesses in creating visually appealing, user-friendly, and highly functional websites that leave a lasting impression on visitors. In today's digital era, a well-designed website is crucial for establishing an online presence and engaging with customers effectively.</p>

                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100 shadow">

                            <img src={socialMedia} className="card-img-top" alt="Mobile Apps" />

                            <div className="card-body">
                                <h3 className="card-title text-center">Social Media Graphics</h3>
                                <p className='' style={{ textAlign: 'justify' }}>Our team of talented graphic designers specializes in creating social media graphics that align with our clients' brand identity and resonate with their target audience. We understand the unique requirements and constraints of different social media platforms, and we tailor our designs accordingly to maximize impact.</p>

                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100 shadow">

                            <img src={pakagignDesign} className="card-img-top" alt="Mobile Apps" />

                            <div className="card-body">
                                <h3 className="card-title text-center">Packaging Design</h3>
                                <p className='' style={{ textAlign: 'justify' }}>Our team of experienced designers understands the importance of creating packaging that not only stands out on shelves but also aligns with the brand's identity and values. We collaborate closely with clients to gain a deep understanding of their target market, product positioning, and packaging objectives.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <h1 className="text-center py-4"> Related To Our Graphic Designing services</h1>

            <div className="container pb-4">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <img src={SEOservices} className="card-img-top" alt="Mobile Apps" />
                    </div>
                    <div className="col-12 col-lg-6">


                        <p className='' style={{ textAlign: 'justify' }}>Professional graphic design services follow a collaborative process, engaging clients throughout the design journey. They gather client requirements, conduct market research, and deliver design concepts for feedback and revisions. This iterative approach ensures that the final design reflects the client's vision while adhering to design best practices.

By leveraging professional graphic design services, businesses can elevate their brand image, stand out in a crowded marketplace, and effectively communicate their value proposition. Professionally designed graphics enhance brand recognition, build credibility, and leave a lasting impression on customers. They contribute to a cohesive and visually appealing brand presence across all marketing channels, reinforcing brand identity and driving business success.
                        </p>
                    </div>
                </div>
            </div>





            <h1 className="text-center py-4"> OUR EXPERTIES</h1>


            <div className="container pb-4">
                <div className="row row-cols-1 row-cols-md-4 g-5">
                    <div className="col">
                        <div className="card h-100 shadow">

                            <img src={canva} className="card-img-top " alt="Web Development" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow">
                            <img src={AI} className="card-img-top " alt="Web Development" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow">

                            <img src={PS} className="card-img-top " alt="Web Development" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow">
                            <img src={Figma} className="card-img-top  " alt="Web Development" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default GraphicDesign;