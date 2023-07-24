// import React from 'react'
import '../css/Navbar.css';
import { Button } from 'react-bootstrap';

const Header = () => {
  return (
    <div className="nav-container">
      <div className="nav-brand">
        <img src="/assets/Code.png" alt="" />
        <h3>PattarapolW</h3>
      </div>
      <div className="nav-menu">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">References</a>
          </li>
        </ul>
      </div>
      <div className="call2action">
        <Button className="nav-btn">Contact</Button>
      </div>
    </div>
  );
};

export default Header;
