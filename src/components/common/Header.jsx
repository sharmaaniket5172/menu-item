import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
    <div className="header-top-menu">
        <div className="container">
          <div className="row">
            <div className="col-12 header-top-left">
              <ul className="social-link">
                <li>
                  <a href="/">
                    <FiFacebook /> facebook
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FiTwitter /> twitter
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FiInstagram /> Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>    
      <div className="header-logo">
        <Link to="/" id="logo" className="logo-url"><img src={"/logo.png"} alt="Logo" /></Link>
      </div>
      <div className="header-navigation">
        <div className="container">
          <nav className="navigation">
            <ul className="menu">
              <li>
                <NavLink  to="/">Home</NavLink >
              </li>
              <li>
                <NavLink  to="/menu-category">Menu</NavLink >
              </li>
              <li>
                 <NavLink  to="/about-us-page">About Us</NavLink >
              </li>
              <li>
                <NavLink  to="/contact-us-page">Contact Us</NavLink >
              </li>
            </ul>
          </nav>
        </div>
      </div>       
    </header>
  )
}
