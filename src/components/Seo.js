import React from 'react';
import background from '../assets/SEO/SEOBackground.webp';
import socialMedia from '../assets/SEO/SocialMedia.webp';
import OnPageSeo from '../assets/SEO/OnPageSeo.webp';
import GoogleShopping from '../assets/SEO/GoogleShopping.webp';
import AppStore from '../assets/SEO/AppStore.webp';
import seopic from '../assets/SEO/seopic.webp';
import GoogleAnalytic from '../assets/SEO/GoogleAnalytic.webp';
import SEMRUSH from '../assets/SEO/SEMRUSH.webp';
import MOZ from '../assets/SEO/MOZ.webp';
import GoogleSearchConsole from '../assets/SEO/GoogleSearchConsole.webp';


function Seo() {
    return (
        <div >
            <div className='container-fluid' style={{ background: `url(${background})` }}>
                <div className='py-4'>
                    <h1 className="text-center text-white pt-4">Search Engine  </h1>
                    <h1 className="text-center text-white">Optimization Services </h1>
                </div>
                <div className='container' >
                    <div className='container'>
                        <p className=" text-white p-4" style={{ textAlign: 'justify' }}>SEO services are essential for businesses seeking to improve their online presence and drive organic traffic to their websites. These services encompass a range of strategies and techniques aimed at optimizing websites to rank higher in search engine results. SEO experts conduct thorough keyword research, analyze website structure, and optimize on-page elements like meta tags, headings, and content. They also employ off-page tactics such as link building and social media engagement to enhance website authority and visibility. Regular monitoring, reporting, and analysis ensure the effectiveness of SEO campaigns. By implementing SEO services, businesses can increase their online visibility, attract targeted traffic, and ultimately achieve higher conversions and business growth.</p>

                    </div>
                </div>
            </div>
            <div className="container bg-light pb-4">
                <h1 className="text-center pt-3">SERVICES WE OFFER RELATED TO SEO</h1>
                <div className="row  row-cols-1 row-cols-md-2 g-5 p-5">
                    <div className="col">
                        <div className="card h-100 shadow">

                            <img src={socialMedia} className="card-img-top" alt="Mobile Apps" />

                            <div className="card-body">
                                <h3 className="card-title text-center">Social Media Marketing</h3>
                                <p className='' style={{ textAlign: 'justify' }}>Social media marketing services complement SEO efforts by leveraging popular social media platforms to enhance brand visibility, engage with audiences, and drive traffic to websites. Strategies include content creation, community management, advertising, and analytics to maximize social media's impact on SEO and overall digital marketing goals.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow">

                            <img src={OnPageSeo} className="card-img-top" alt="Mobile Apps" />

                            <div className="card-body">
                                <h3 className="card-title text-center">SEO On-Page</h3>
                                <p className='' style={{ textAlign: 'justify' }}>On-page SEO services focus on optimizing various elements within a website to improve its search engine rankings. This includes keyword research, meta tag optimization, content optimization, URL structure, internal linking, and other factors that contribute to the website's visibility and relevance in search results.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow">

                            <img src={AppStore} className="card-img-top" alt="Mobile Apps" />

                            <div className="card-body">
                                <h3 className="card-title text-center">App Store Optimization</h3>
                                <p className='' style={{ textAlign: 'justify' }}>App Store Optimization (ASO) services in SEO are aimed at improving the visibility and discoverability of mobile apps in app stores. This involves optimizing app titles, descriptions, keywords, screenshots, and reviews to increase app rankings, attract more downloads, and enhance overall app performance in the app store ecosystem.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow">

                            <img src={GoogleShopping} className="card-img-top" alt="Mobile Apps" />

                            <div className="card-body">
                                <h3 className="card-title text-center">Google Shopping</h3>
                                <p className='' style={{ textAlign: 'justify' }}>Google Shopping services in SEO involve optimizing product listings and data feeds to appear prominently in Google's Shopping search results. This includes optimizing product titles, descriptions, images, and prices to improve visibility, increase clicks, and drive conversions for e-commerce businesses leveraging Google's shopping platform.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <h1 className="text-center py-4"> Related To Our SEO services</h1>

            <div className="container pb-4">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <img src={seopic} className="card-img-top" alt="Mobile Apps" />
                    </div>
                    <div className="col-12 col-lg-6">


                        <p className='' style={{ textAlign: 'justify' }}>SEO services, or Search Engine Optimization services, are an integral part of any online business strategy. In today's digital age, where search engines play a pivotal role in driving website traffic, SEO services are crucial for improving visibility, increasing organic rankings, and attracting targeted visitors.

                            SEO services encompass a wide range of techniques and strategies aimed at optimizing websites to rank higher in search engine results pages (SERPs). These services typically include keyword research, on-page optimization, technical SEO, link building, and content creation.

                            Keyword research is the foundation of effective SEO services. It involves identifying the most relevant and valuable keywords that potential customers are using to search for products or services. By incorporating these keywords strategically throughout a website's content, meta tags, and URLs, SEO services help improve organic rankings.

                        </p>
                    </div>
                </div>
            </div>





            <h1 className="text-center py-4"> OUR EXPERTIES</h1>


            <div className="container pb-4">
                <div className="row row-cols-1 row-cols-md-4 g-5">
                    <div className="col">
                        <div className="card h-100 shadow">

                            <img src={GoogleAnalytic} className="card-img-top " alt="Web Development" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow">
                            <img src={MOZ} className="card-img-top " alt="Web Development" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow">

                            <img src={SEMRUSH} className="card-img-top " alt="Web Development" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow">
                            <img src={GoogleSearchConsole} className="card-img-top  " alt="Web Development" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Seo;