import React from 'react';
import background from '../assets/Background/DMBackground.webp';

function DigitalMarketing(){
    return(
        <div >
        <div className='container-fluid' style={{ background: `url(${background})` }}>
            <div className='py-4'>
                <h1 class="text-center text-white pt-4"> DIGITAL MARKETING </h1>
            </div>
            <div className='container' >
                <div className='container'>
                    <p class=" text-white p-4" style={{ textAlign: 'justify' }}>Digital marketing services encompass a wide range of strategies and techniques aimed at promoting businesses, products, or services through digital channels. These services typically include search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, content marketing, email marketing, and conversion rate optimization (CRO). Digital marketing services help businesses increase their online visibility, reach their target audience, drive traffic to their websites, generate leads, and ultimately boost sales and revenue. They involve leveraging various platforms, such as search engines, social media networks, email platforms, and content distribution channels, to create engaging and persuasive marketing campaigns tailored to the digital landscape. Effective digital marketing services can enhance brand awareness, customer engagement, and overall business growth in the online realm.</p>

                </div>
            </div>
        </div>
        <div class="container bg-light pb-4">
            <h1 class="text-center pt-3">SERVICES WE OFFER</h1>
            <div class="row  row-cols-1 row-cols-md-2 g-5 p-5">
                <div class="col">
                    <div class="card h-100 shadow">

                        {/* <img src={logoDesign} class="card-img-top" alt="Mobile Apps" /> */}

                        <div class="card-body">
                            <h3 class="card-title text-center">Search Engine Optimization</h3>
                            <p className='' style={{ textAlign: 'justify' }}>Social media marketing services complement SEO efforts by leveraging popular social media platforms to enhance brand visibility, engage with audiences, and drive traffic to websites. Strategies include content creation, community management, advertising, and analytics to maximize social media's impact on SEO and overall digital marketing goals.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 shadow">

                        {/* <img src={branding} class="card-img-top" alt="Mobile Apps" /> */}

                        <div class="card-body">
                            <h3 class="card-title text-center">Branding and Identity Design</h3>
                            <p className='' style={{ textAlign: 'justify' }}>On-page SEO services focus on optimizing various elements within a website to improve its search engine rankings. This includes keyword research, meta tag optimization, content optimization, URL structure, internal linking, and other factors that contribute to the website's visibility and relevance in search results.</p>

                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 shadow">

                        {/* <img src={printDesign} class="card-img-top" alt="Mobile Apps" /> */}

                        <div class="card-body">
                            <h3 class="card-title text-center">Print Design</h3>
                            <p className='' style={{ textAlign: 'justify' }}>App Store Optimization (ASO) services in SEO are aimed at improving the visibility and discoverability of mobile apps in app stores. This involves optimizing app titles, descriptions, keywords, screenshots, and reviews to increase app rankings, attract more downloads, and enhance overall app performance in the app store ecosystem.</p>

                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 shadow">

                        {/* <img src={webDesign} class="card-img-top" alt="Mobile Apps" /> */}

                        <div class="card-body">
                            <h3 class="card-title text-center">Web Design</h3>
                            <p className='' style={{ textAlign: 'justify' }}>Google Shopping services in SEO involve optimizing product listings and data feeds to appear prominently in Google's Shopping search results. This includes optimizing product titles, descriptions, images, and prices to improve visibility, increase clicks, and drive conversions for e-commerce businesses leveraging Google's shopping platform.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>



        <h1 class="text-center py-4"> Related To Our Graphic Designing services</h1>

        <div class="container pb-4">
            <div class="row">
                <div class="col-12 col-lg-6">
                    {/* <img src={SEOservices} class="card-img-top" alt="Mobile Apps" /> */}
                </div>
                <div class="col-12 col-lg-6">


                    <p className='' style={{ textAlign: 'justify' }}>SEO services, or Search Engine Optimization services, are an integral part of any online business strategy. In today's digital age, where search engines play a pivotal role in driving website traffic, SEO services are crucial for improving visibility, increasing organic rankings, and attracting targeted visitors.

                        SEO services encompass a wide range of techniques and strategies aimed at optimizing websites to rank higher in search engine results pages (SERPs). These services typically include keyword research, on-page optimization, technical SEO, link building, and content creation.

                        Keyword research is the foundation of effective SEO services. It involves identifying the most relevant and valuable keywords that potential customers are using to search for products or services. By incorporating these keywords strategically throughout a website's content, meta tags, and URLs, SEO services help improve organic rankings.

                    </p>
                </div>
            </div>
        </div>





        <h1 class="text-center py-4"> OUR EXPERTIES</h1>


        <div class="container pb-4">
            <div class="row row-cols-1 row-cols-md-4 g-5">
                <div class="col">
                    <div class="card h-100 shadow">

                        {/* <img src={canva} class="card-img-top " alt="Web Development" /> */}
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 shadow">
                        {/* <img src={AI} class="card-img-top " alt="Web Development" /> */}
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 shadow">

                        {/* <img src={PS} class="card-img-top " alt="Web Development" /> */}
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 shadow">
                        {/* <img src={Figma} class="card-img-top  " alt="Web Development" /> */}
                    </div>
                </div>
            </div>
        </div>

    </div>
    );
}

export default DigitalMarketing;