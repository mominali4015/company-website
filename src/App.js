import React from "react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './components/Landing';
import WebDevelopment from './components/WebDevelopment';
import MobileApp from './components/MobileApp';
import SEO from './components/Seo';
import GraphicDesigning from './components/GraphicDesigning';
import AboutUs from './components/AboutUs';
import Careers from './components/Careers';
import DigitalMarketing from './components/DigitalMarketing';
import Networking from './components/Networking';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Privacy from './components/Privacy';
import { BrowserRouter as Router, Switch, Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path='/' Component={Landing} />

        <Route path='/WebDevelopment' Component={WebDevelopment} />

        <Route path='/MobileApps' Component={MobileApp} />

        <Route path='/SEO' Component={SEO} />

        <Route path='/GraphicDesigning' Component={GraphicDesigning} />

        <Route path='/DigitalMarketing' Component={DigitalMarketing} />

        <Route path='/NetworkServices' Component={Networking} />

        <Route path='/AboutUs' Component={AboutUs} />

        <Route path='/Careers' Component={Careers} />

        <Route path='/Blogs' Component={Blogs} />

        <Route path='/Contact' Component={Contact } />

        <Route path='/PrivacyPolicy' Component={Privacy } />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
