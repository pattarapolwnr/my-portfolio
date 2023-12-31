import '../css/About.css';
import ScrollAnimation from 'react-animate-on-scroll';
const About = () => {
  return (
    <div className="about-container">
      <div className="profile-img">
        <ScrollAnimation
          delay={300}
          animateIn="animate__slideInDown"
          animateOut="animate__fadeOut"
        >
          <img src="/assets/personal-image.png" alt="" />
        </ScrollAnimation>
      </div>

      <div className="aboutme">
        <ScrollAnimation delay={400} animateIn="animate__fadeIn">
          <h1>
            <span
              style={{
                color: 'var(--text-primary)',
                fontSize: '64px',
                fontWeight: 'var(--font-bold)',
              }}
            >
              About
            </span>
            <span
              style={{
                color: 'var(--color-primary)',
                fontSize: '64px',
                fontWeight: 'var(--font-bold)',
              }}
            >
              {' '}
              me
            </span>
          </h1>
        </ScrollAnimation>
        <ScrollAnimation delay={400} animateIn="animate__fadeIn">
          <p>
            I am a skilled web developer and software engineer proficient in
            Reactjs, HTML, CSS, Javascript, PHP, GO, SQL, and NoSQL. I have
            successfully built e-commerce web applications using the MERN stack
            and delivered CRUD web applications using PHP and MySQL. Proficient
            in API development, I has created powerful back-end systems using
            Golang. Their dedication to staying up-to-date with the latest
            technologies drives me to continuously explore new tools and
            frameworks.
          </p>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default About;
