import { Button } from 'react-bootstrap';
import '../css/Home.css';
const Home = () => {
  return (
    <div className="home-container">
      <div className="description">
        <h3>
          <span
            style={{
              color: 'var(--text-primary)',
              fontSize: '32px',
              fontWeight: 'var(--font-medium)',
            }}
          >
            Hello,
          </span>
          <span
            style={{
              color: 'var(--color-primary)',
              fontSize: '32px',
              fontWeight: 'var(--font-medium)',
            }}
          >
            {' '}
            I&apos;m
          </span>
        </h3>
        <h1>Pattarapol Wangnirun</h1>
        <h3 style={{ marginTop: '2rem' }}>Full Stack Developer</h3>
        <h5>
          I’m a fourth year student at SIIT, Thammasat university who is
          interested in web development both front-end and back-end.
        </h5>
        <a
          href="/files/Updated-Resume-Mr.Pattarapol-Wangnirun.pdf"
          target="_blank"
        >
          <Button className="download-btn">Download resume</Button>
        </a>
        <div className="social">
          <h3>Visit my</h3>
          <a href="https://github.com/pattarapolwnr">
            <img src="/assets/GitHub.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/pattarapol-wangnirun-778540248/">
            <img src="/assets/LinkedIn Circled.png" alt="" />
          </a>
        </div>
      </div>
      <div className="self-image">
        <img src="/assets/about-img.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
