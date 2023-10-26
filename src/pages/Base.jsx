import React from 'react';
// import background from "./images/mountains.jpg"
import Navbar from '../Components/NavBar';
import "./Base.css";
// import Contact from './src/Contact.jsx';
// import  Services from '../Components/Services.jsx';
// import ServicesCard from '../Components/ServicesCard.jsx';
// import ServicesOffered from '../Components/ServicesOffered.jsx';
// import Special from '../Components/Special.jsx';
// import Specials from '../Components/Specials.jsx';
// import Testimonial from '../Components/Testimonial.jsx';
// import TestimonialShow from '../Components/TestimonialShow.jsx';

const Base = () =>{
  return(
    <>
    <div className="showcase">
      <div className="navbar">
      <Navbar/>

      </div>
      <div className='text-box'>
        {/* <h1>Services</h1>
        <p>Home Services</p> */}
        <h1><span className='text-6xl'>  TUJUANE EVENTS & ADVENTURES LTD </span><br /> 
        <span className='text-3xl  flex w-full '>TRANSFORMING COMMUNITIES.</span> 
          <span className='text-lg'>Tujuaane Events and Adventures transforms communities through a holistic approach, involving clean-ups, tree planting, tourism events, charity initiatives, and educational support for students.</span> </h1>
      </div>
    </div>
  
    {/* <Contact/>
    <Services/>
    <ServicesCard/>
    <ServicesOffered/>
    <Special/>
    <Specials/>
    <Testimonial/>
    <TestimonialShow/> */}
    </>
  )
}

export default Base;