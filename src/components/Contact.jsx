import '../css/Contact.css';

import ScrollAnimation from 'react-animate-on-scroll';
const Contact = () => {
  return (
    <ScrollAnimation delay={100} animateIn="animate__fadeIn">
      <div className="contact-container">
        <div className="interest">
          <h1
            style={{
              color: 'var(--text-primary)',
              fontSize: '64px',
              fontWeight: 'var(--font-bold)',
            }}
          >
            Interested in
          </h1>
          <h1
            style={{
              color: 'var(--color-primary)',
              fontSize: '64px',
              fontWeight: 'var(--font-bold)',
            }}
          >
            hiring?
          </h1>
          <img src="/assets/hiring.png" alt="" />
        </div>
        <div className="contact-form">
          <form>
            <h6>Your name</h6>
            <input
              type="text"
              name="name"
              id="name"
              className="input"
              placeholder="Name"
            />
            <h6>Your email</h6>
            <input
              type="email"
              name="name"
              id="name"
              className="input"
              placeholder="Email"
            />
            <h6>Your message</h6>
            <textarea
              rows="10"
              cols="50"
              className="message"
              placeholder="Message"
            ></textarea>
            <br></br>
            <button className="sub-btn">Submit</button>
          </form>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default Contact;
