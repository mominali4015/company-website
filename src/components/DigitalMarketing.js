import React from 'react';
import background from '../assets/Digital_Marketing/DMBackground.webp';
import CD from '../assets/Digital_Marketing/CD.webp';
import DFDM from '../assets/Digital_Marketing/DFDM.webp';
import DM from '../assets/Digital_Marketing/DM.webp';
import SEO from '../assets/Digital_Marketing/SEO.webp';
import Aside from '../assets/Digital_Marketing/DMAside.webp';


function DigitalMarketing(){
    return(
        <div >
        <div className='container-fluid' style={{ background: `url(${background})` }}>
            <div className='py-4'>
                <h1 className="text-center text-white pt-4"> DIGITAL MARKETING </h1>
            </div>
            <div className='container' >
                <div className='container'>
                    <p className=" text-white p-4" style={{ textAlign: 'justify' }}>By engaging digital marketing professional services, businesses can benefit from the expertise and guidance of professionals who are well-versed in the ever-evolving digital landscape. These services help businesses navigate the complexities of digital marketing, save time and resources, and achieve tangible results. With the assistance of digital marketing professionals, businesses can effectively leverage digital channels to enhance their online presence, engage with their target audience, and drive business growth.Digital marketing professionals also have expertise in utilizing analytics and data-driven insights. They analyze key performance indicators (KPIs) to measure the effectiveness of campaigns, identify areas for improvement, and make data-backed recommendations. They continuously monitor and optimize campaigns to ensure maximum ROI and stay ahead of industry trends and best practices.</p>

                </div>
            </div>
        </div>
        <div className="container bg-light pb-4">
            <h1 className="text-center pt-3">SERVICES WE OFFER</h1>
            <div className="row  row-cols-1 row-cols-md-2 g-5 p-5">
                <div className="col">
                    <div className="card h-100 shadow">

                        <img src={SEO} className="card-img-top" alt="Mobile Apps" />

                        <div className="card-body">
                            <h3 className="card-title text-center">Search Engine Optimization</h3>
                            <p className='' style={{ textAlign: 'justify' }}>SEO professionals work closely with businesses to understand their target audience, industry landscape, and specific goals. They conduct thorough keyword research to identify high-value keywords that are relevant to the business and have the potential to drive qualified traffic. By strategically incorporating these keywords into website content, meta tags, headings, and URLs, they improve the website's visibility to search engines.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 shadow">

                        <img src={DM} className="card-img-top" alt="Mobile Apps" />

                        <div className="card-body">
                            <h3 className="card-title text-center">Digital Marketing Services</h3>
                            <p className='' style={{ textAlign: 'justify' }}>Digital marketing services encompass a wide range of strategies and tactics aimed at promoting businesses, products, and services through digital channels. In today's digitally connected world, these services are essential for businesses to effectively reach and engage their target audience, build brand awareness, and drive business growth.</p>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 shadow">

                        <img src={CD} className="card-img-top" alt="Mobile Apps" />

                        <div className="card-body">
                            <h3 className="card-title text-center">CONTENT DRAFTING</h3>
                            <p className='' style={{ textAlign: 'justify' }}>By utilizing content drafting services, businesses can save time and resources while benefiting from professionally crafted content that engages their audience and enhances their brand image. High-quality content helps businesses establish thought leadership, build credibility, improve search engine rankings, and foster customer loyalty.</p>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 shadow">

                        <img src={DFDM} className="card-img-top" alt="Mobile Apps" />

                        <div className="card-body">
                            <h3 className="card-title text-center">data for digital marketing</h3>
                            <p className='' style={{ textAlign: 'justify' }}>Data also helps in measuring and tracking the performance of digital marketing campaigns. Key metrics such as website traffic, click-through rates, conversion rates, and engagement metrics provide valuable feedback on the success of marketing efforts. Marketers can use this data to optimize their campaigns, identify areas for improvement, and allocate resources effectively.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>



        <h1 className="text-center py-4"> Related To Our Digital Marketing services</h1>

        <div className="container pb-4">
            <div className="row">
                <div className="col-12 col-lg-6">
                <p className='' style={{ textAlign: 'justify' }}>Content marketing plays a crucial role in our digital marketing services. We create compelling and valuable content that resonates with our clients' target audience, establishing them as thought leaders in their industry and attracting organic traffic to their websites. Our team of content creators, copywriters, and graphic designers work together to deliver impactful content that drives results.

We understand the importance of data-driven decision making, which is why we provide detailed analytics and reports to our clients. Our experts track key performance indicators, such as website traffic, conversion rates, and customer engagement, to measure the effectiveness of our digital marketing efforts. This allows us to make informed adjustments and continuously optimize our strategies for maximum impact.

</p>
                </div>
                <div className="col-12 col-lg-6">
                <img src={Aside} className="card-img-top" alt="Mobile Apps" />
                </div>
            </div>
        </div>





        <h1 className="text-center py-4"> OUR EXPERTIES</h1>


        <div className="container pb-4">
            <div className="row row-cols-1 row-cols-md-4 g-5">
                <div className="col">
                    <div className="card h-100 shadow">

                        {/* <img src={canva} className="card-img-top " alt="Web Development" /> */}
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 shadow">
                        {/* <img src={AI} className="card-img-top " alt="Web Development" /> */}
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 shadow">

                        {/* <img src={PS} className="card-img-top " alt="Web Development" /> */}
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 shadow">
                        {/* <img src={Figma} className="card-img-top  " alt="Web Development" /> */}
                    </div>
                </div>
            </div>
        </div>

    </div>
    );
}

export default DigitalMarketing;