import React from "react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './components/Landing';
import WebService from './components/WebServices';
import MobileApp from './components/MobileApp';
import SEO from './components/Seo';
import GraphicDesigning from './components/GraphicDesigning';
import AboutUs from './components/AboutUs';
import Careers from './components/Careers';
import DigitalMarketing from './components/DigitalMarketing';
import Networking from './components/Networking';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path='/' Component={Landing} />

        <Route path='/WebServices' Component={WebService} />

        <Route path='/MobileApps' Component={MobileApp} />

        <Route path='/SEO' Component={SEO} />

        <Route path='/GraphicDesigning' Component={GraphicDesigning} />

        <Route path='/DigitalMarketing' Component={DigitalMarketing} />

        <Route path='/NetworkServices' Component={Networking} />

        <Route path='/AboutUs' Component={AboutUs} />

        <Route path='/Careers' Component={Careers} />

        <Route path='/Blogs' Component={Blogs} />

        <Route path='/Contact' Component={Contact } />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
