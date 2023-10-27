import React from 'react';
import './Navbar.css'; // Import your CSS file for styling if needed
import { Link } from "react-router-dom";
import ServicesVal from './ServicesVal';

const Navbar = () => {
  return (
    <div className="navbar" id='navbar'>
      <div className="logo">
        <img src="src/images/tujuane_logo-removebg-preview.png" alt="Logo" />
      </div>
      <div className='nav'>
      <nav>
      <ul className="nav-links">
        <li className="nav-item "><Link className='link' to="" href='#servicesOffered'>Home</Link></li>
        <li className="nav-item">{/*<Link to="/"></Link>*/}Destinations</li>
        <li className="nav-item">{/*<Link to="/"></Link>*/}Trip Types</li>
        <li className="nav-item">{/*<LInk to="/"></LInk>*/}Shop</li>
        <li className="nav-item">{/*<Link to="/"></Link>*/}Blog</li>
        <li className="nav-item">{/*<Link to="/"></Link>*/}Contact Us</li>
      </ul>
      </nav>
      </div>
    </div>
    

  );
};

export default Navbar;
