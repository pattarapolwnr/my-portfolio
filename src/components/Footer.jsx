import '../css/Footer.css';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="menu">
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
      <div className="footer-social">
        <a
          href="https://github.com/pattarapolwnr"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/assets/GitHub.png" alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/pattarapol-wangnirun-778540248/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/assets/LinkedIn Circled.png" alt="" />
        </a>
      </div>
      <div className="copyright">
        <h6>
          Copyright ©2023 www.pattarapolw.netlify.com all rights reserved.
        </h6>
      </div>
    </div>
  );
};

export default Footer;
