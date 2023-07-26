// import React from 'react'
import '../css/Navbar.css';
import { Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
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
      <div className="nav-menu">
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
      <div className="call2action">
        <HashLink smooth to="/#contact">
          <Button className="nav-btn">Contact</Button>
        </HashLink>
      </div>
    </div>
  );
};

export default Header;
