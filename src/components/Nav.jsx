// import React from 'react'
import '../css/Navbar.css';
import { Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="nav-container">
      <div className="nav-brand">
        <a href="https://pattarapolw.netlify.app/">
          <img src="/assets/Code.png" alt="" />
        </a>
        <a
          href="https://pattarapolw.netlify.app/"
          style={{ textDecoration: 'none' }}
        >
          <h3>PattarapolW</h3>
        </a>
      </div>
      <div className={showMenu ? 'nav-menu active' : 'nav-menu'}>
        <ul>
          <li>
            <HashLink smooth to="/#home">
              Home
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#about">
              About
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#skills">
              Skills
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#projects">
              Projects
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#references">
              References
            </HashLink>
          </li>
        </ul>
      </div>
      <div className="hamburger">
        {' '}
        <FaBars
          style={
            showMenu
              ? { display: 'none' }
              : { color: 'white', fontSize: '2rem' }
          }
          onClick={handleClick}
        />
        <AiOutlineClose
          style={
            showMenu
              ? { color: 'white', fontSize: '3rem' }
              : { display: 'none' }
          }
          onClick={handleClick}
        />
      </div>

      <div className="call2action">
        <HashLink smooth to="/#contact">
          <Button className="nav-btn">Contact</Button>
        </HashLink>
      </div>
    </div>
  );
};

export default Header;
