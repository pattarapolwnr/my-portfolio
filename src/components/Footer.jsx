import '../css/Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="menu">
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
