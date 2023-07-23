import '../css/About.css';
const About = () => {
  return (
    <div className="about-container">
      <div className="profile-img">
        <img src="/src/assets/personal-image.png" alt="" />
      </div>
      <div className="aboutme">
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
        <p>
          I am a skilled web developer and software engineer proficient in
          Reactjs, HTML, CSS, Javascript, PHP, GO, SQL, and NoSQL. I have
          successfully built e-commerce web applications using the MERN stack
          and delivered CRUD web applications using PHP and MySQL. Proficient in
          API development, I has created powerful back-end systems using Golang.
          Their dedication to staying up-to-date with the latest technologies
          drives me to continuously explore new tools and frameworks.
        </p>
      </div>
    </div>
  );
};

export default About;
