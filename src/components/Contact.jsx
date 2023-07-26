import '../css/Contact.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ScrollAnimation from 'react-animate-on-scroll';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_j99c90b',
        'template_yzwd5cu',
        form.current,
        'VbqFz-vl8CvdHgn7q'
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Email sent!', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        },
        (error) => {
          console.log(error.text);
          toast.error(`${error.text}`, {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        }
      );
    document.getElementById('contact-form').reset();
  };
  return (
    <ScrollAnimation delay={100} animateIn="animate__fadeIn">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
          <form ref={form} onSubmit={sendEmail} id="contact-form">
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
              name="email"
              id="email"
              className="input"
              placeholder="Email"
            />
            <h6>Your message</h6>
            <textarea
              rows="10"
              cols="50"
              className="message"
              placeholder="Message"
              name="message"
            ></textarea>
            <br></br>
            <button className="sub-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default Contact;
