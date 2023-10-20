
import React, { Component } from 'react';
// import React from 'react'
// import './App.css'
import Base from './pages/Base';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
// import Contact from './Contact.jsx';
// import  Services from './Components/Services.jsx';
// import ServicesCard from './Components/ServicesCard.jsx';
// import ServicesOffered from './Components/ServicesOffered.jsx';
// import Special from './Components/Special.jsx';
// import Specials from './Components/Specials.jsx';
// import Testimonial from './Components/Testimonial.jsx';
// import TestimonialShow from './Components/TestimonialShow.jsx';

class App extends Component {
  render(){
  return (
    <>
      <Router>
        <div className='App'>
            {/* <Link to="/"></Link>
            <Link to="/signup"></Link>
            <Link to="/"></Link> */}
        <Routes>
            {/* <Route exact path='/' element={<Header />}></Route> */}
            <Route exact path='/' element={<Base />}></Route>
                {/* <Route path="/Contact" component={<Contact/>} />
                <Route path="/Services" component={<Services/>} />
                <Route path="/Services-Card" component={<ServicesCard/>} />
                <Route path="/ServicesOffered" component={<ServicesOffered/>} />
                <Route path="/Special" component={<Special/>} />
                <Route path="/Specials" component={<Specials/>} />
                <Route path="/Testimonial" component={<Testimonial/>} />
                <Route path="/TestimonialShow" component={<TestimonialShow/>} /> */}
        </Routes> 
        </div>
      </Router>
    
    </>
    
  );
}
}

export default App;


