import './Header.css';
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon as MenuIcon } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon as CloseMenu } from '@fortawesome/react-fontawesome';

import { useState } from "react";

import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Header = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="App">
      {/* <nav className="navbar mainnav" role="navigation" aria-label="main navigation"> */}
          <div className="header">
              <div className="navbar-brand">
                <a href="/cristen">
                Cristen Hewett
                </a> 
              </div>
              <ul className={click ? "nav-options active" : "nav-options" } >
              <li className="option" onClick={closeMobileMenu}>
              <Link to={`${process.env.PUBLIC_URL}/`}   >
                  Home
                </Link>
                </li>
                <li className="option" onClick={closeMobileMenu}>
                <Link to={`${process.env.PUBLIC_URL}/about`} >
                  About
                </Link>
                </li>
                <li className="option" onClick={closeMobileMenu}>
                <Link to={`${process.env.PUBLIC_URL}/resume`}  >
                  Resume
                </Link>
                </li>
                <li className="option" onClick={closeMobileMenu}>
                <Link to={`${process.env.PUBLIC_URL}/contact`}  >
                  Contact
                </Link>
                </li>
          </ul>
        <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" icon={ faTimes } />
        ) : (
          <MenuIcon className="menu-icon" icon={ faBars } />
          // <i><FontAwesomeIcon icon={ faBars } /></i>
        )}
      </div>
          </div>
      {/* </nav> */}

    </div>
  );
}

export default Header;
