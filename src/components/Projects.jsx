import '../css/Projects.css';
import Card from 'react-bootstrap/Card';
import ScrollAnimation from 'react-animate-on-scroll';

const Projects = () => {
  return (
    <div className="container-projects">
      <ScrollAnimation delay={100} animateIn="animate__slideInDown">
        <h1 style={{ textAlign: 'center' }} id="projects-head">
          <span
            style={{
              color: 'var(--text-primary)',
              fontSize: '64px',
              fontWeight: 'var(--font-bold)',
            }}
          >
            My
          </span>
          <span
            style={{
              color: 'var(--color-primary)',
              fontSize: '64px',
              fontWeight: 'var(--font-bold)',
            }}
          >
            {' '}
            projects
          </span>
        </h1>
      </ScrollAnimation>
      <div className="projects-grid">
        <ScrollAnimation delay={50} animateIn="animate__zoomIn">
          <Card style={{ width: '22rem' }} className="grid-items">
            <a
              href="https://oooburger-8e087.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Card.Img
                variant="top"
                src="/assets/oooburgerdemo.png"
                className="oooburger"
              />
            </a>

            <Card.Body>
              <Card.Title>
                OOO Burger Website{' '}
                <a
                  href="https://github.com/pattarapolwnr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/assets/GitHub.png" alt="" />
                </a>
              </Card.Title>
              <Card.Text>
                Famous burger shop website
                <br />
                <span style={{ fontSize: '12px', color: 'gray' }}>
                  HTML, CSS, Javascript and JQuery
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </ScrollAnimation>
        <ScrollAnimation delay={200} animateIn="animate__zoomIn">
          <Card style={{ width: '22rem' }} className="grid-items">
            <Card.Img variant="top" src="/assets/pbponlinestore.png" />
            <Card.Body>
              <Card.Title>
                PBP Online Store{' '}
                <a
                  href="https://github.com/pattarapolwnr/pbp-online-store"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/assets/GitHub.png" alt="" />
                </a>
              </Card.Title>
              <Card.Text>
                E-Commerce Website
                <br />
                <span style={{ fontSize: '12px', color: 'gray' }}>
                  MongoDB, Express.js, React and Node.js
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </ScrollAnimation>
        <ScrollAnimation delay={100} animateIn="animate__zoomIn">
          <Card style={{ width: '22rem' }} className="grid-items">
            <a
              href="https://paopao-reactjs-cart.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Card.Img variant="top" src="/assets/reactcartdemo.png" />
            </a>

            <Card.Body>
              <Card.Title>
                Cart items{' '}
                <a
                  href="https://github.com/pattarapolwnr/reactjs-useReducer-useContext"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/assets/GitHub.png" alt="" />
                </a>
              </Card.Title>
              <Card.Text>
                React with useContext, useReducer
                <br />
                <span style={{ fontSize: '12px', color: 'gray' }}>
                  (Learnt from John Smilga&apos;s Udemy Course)
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </ScrollAnimation>
        <ScrollAnimation delay={200} animateIn="animate__zoomIn">
          <Card style={{ width: '22rem' }} className="grid-items">
            <a
              href="https://paopao-reactjs-backroads.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Card.Img variant="top" src="/assets/backroadsdemo.png" />
            </a>

            <Card.Body>
              <Card.Title>
                Backroads Website{' '}
                <a href="https://github.com/pattarapolwnr/reactjs-backroads">
                  <img
                    src="/assets/GitHub.png"
                    alt=""
                    target="_blank"
                    rel="noreferrer"
                  />
                </a>
              </Card.Title>
              <Card.Text>
                React and CSS <br />
                <span style={{ fontSize: '12px', color: 'gray' }}>
                  (Learnt from John Smilga&apos;s Udemy Course)
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Projects;
