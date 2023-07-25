import '../css/Projects.css';
import Card from 'react-bootstrap/Card';
import ScrollAnimation from 'react-animate-on-scroll';

const Projects = () => {
  return (
    <div className="container-projects">
      <ScrollAnimation delay={100} animateIn="animate__slideInDown">
        <h1 style={{ textAlign: 'center' }}>
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
            <Card.Img variant="top" src="/assets/web_sample.png" />
            <Card.Body>
              <Card.Title>
                Card Title{' '}
                <a
                  href="https://github.com/pattarapolwnr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/assets/GitHub.png" alt="" />
                </a>
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content.
              </Card.Text>
            </Card.Body>
          </Card>
        </ScrollAnimation>
        <ScrollAnimation delay={200} animateIn="animate__zoomIn">
          <Card style={{ width: '22rem' }} className="grid-items">
            <Card.Img variant="top" src="/assets/web_sample.png" />
            <Card.Body>
              <Card.Title>
                Card Title{' '}
                <a
                  href="https://github.com/pattarapolwnr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/assets/GitHub.png" alt="" />
                </a>
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content.
              </Card.Text>
            </Card.Body>
          </Card>
        </ScrollAnimation>
        <ScrollAnimation delay={100} animateIn="animate__zoomIn">
          <Card style={{ width: '22rem' }} className="grid-items">
            <Card.Img variant="top" src="/assets/web_sample.png" />
            <Card.Body>
              <Card.Title>
                Card Title{' '}
                <a
                  href="https://github.com/pattarapolwnr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/assets/GitHub.png" alt="" />
                </a>
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content.
              </Card.Text>
            </Card.Body>
          </Card>
        </ScrollAnimation>
        <ScrollAnimation delay={200} animateIn="animate__zoomIn">
          <Card style={{ width: '22rem' }} className="grid-items">
            <Card.Img variant="top" src="/assets/web_sample.png" />
            <Card.Body>
              <Card.Title>
                Card Title{' '}
                <a href="https://github.com/pattarapolwnr">
                  <img
                    src="/assets/GitHub.png"
                    alt=""
                    target="_blank"
                    rel="noreferrer"
                  />
                </a>
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content.
              </Card.Text>
            </Card.Body>
          </Card>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Projects;
