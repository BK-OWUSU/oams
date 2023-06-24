import React from 'react';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Information from './components/Information/Information';
import Mission from './components/Mission/Mission';
/* import Gallery from './components/Gallery/Gallery'; */
import About from './components/About/About';
import Departments from './components/Departments/Departments';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
    <Nav/>
    <Header/>
    <Information/>
    <Mission/>
    <Departments/>
    {/* <Gallery/> */}
    <About/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App