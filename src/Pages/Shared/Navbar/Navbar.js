import React from 'react';
import icon from '../../../images/logo.png'
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
      <div className="navbar ">
  <div className="navbar-start">
   
    <img src={icon} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/course">Course</Link></li>
      <li><Link to="/contactus">Contact</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
  <button className="navbtn mr-4"><Link to="/login">Login</Link></button>
  <button className="navbtn"><Link to="/signup">signUp</Link></button>
  </div>
</div>
    );
  };
  

export default Navbar;