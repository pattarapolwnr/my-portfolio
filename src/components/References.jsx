import '../css/References.css';
import ScrollAnimation from 'react-animate-on-scroll';
import { BiSolidQuoteLeft, BiSolidQuoteRight } from 'react-icons/bi';
const References = () => {
  return (
    <div className="references-container">
      <ScrollAnimation delay={100} animateIn="animate__fadeIn">
        <h3
          style={{
            textAlign: 'left',
          }}
          id="references-head"
        >
          <span
            style={{
              color: 'var(--text-primary)',
              fontSize: '48px',
              fontWeight: 'var(--font-bold)',
            }}
          >
            Refer
          </span>
          <span
            style={{
              color: 'var(--color-primary)',
              fontSize: '48px',
              fontWeight: 'var(--font-bold)',
            }}
          >
            ences
          </span>
        </h3>
      </ScrollAnimation>

      <div className="references-grid">
        <ScrollAnimation delay={200} animateIn="animate__slideInUp">
          <div className="ref-card">
            <div className="upper">
              <img
                src="/assets/user.png"
                alt="Avatar"
                style={{ width: '100%' }}
              />
              <div className="ref-description">
                <h1>Kornkanok Kaohom</h1>
                <h5>Senior Software Eng.</h5>
                <p>IT, SCB Thailand</p>
              </div>
            </div>
            <div className="lower">
              <BiSolidQuoteLeft color="white" size="32px" />
              <p>
                &emsp;Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt dicta facilis cupiditate exercitationem, delectus,
                magni eum ducimus culpa, corrupti accusantium labore! Aliquam
                obcaecati fuga accusantium ullam aliquid ex beatae illo?
              </p>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <BiSolidQuoteRight color="white" size="32px" />
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={300} animateIn="animate__slideInUp">
          <div className="ref-card">
            <div className="upper">
              <img
                src="/assets/user.png"
                alt="Avatar"
                style={{ width: '100%' }}
              />
              <div className="ref-description">
                <h1 style={{ fontSize: '20px' }}>Priyarat Wichiencharoen</h1>
                <h5>Head of deposit</h5>
                <p>IT, SCB Thailand</p>
              </div>
            </div>
            <div className="lower">
              <BiSolidQuoteLeft color="white" size="32px" />
              <p>
                &emsp;Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt dicta facilis cupiditate exercitationem, delectus,
                magni eum ducimus culpa, corrupti accusantium labore! Aliquam
                obcaecati fuga accusantium ullam aliquid ex beatae illo?
              </p>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <BiSolidQuoteRight color="white" size="32px" />
            </div>
          </div>
        </ScrollAnimation>

        {/* <ScrollAnimation delay={400} animateIn="animate__slideInUp">
          <div className="ref-card">
            <div className="upper">
              <img
                src="/assets/user.png"
                alt="Avatar"
                style={{ width: '100%' }}
              />
              <div className="ref-description">
                <h1>John Doe</h1>
                <h5>IT Manager</h5>
                <p>ABC Company</p>
              </div>
            </div>
            <div className="lower">
              <BiSolidQuoteLeft color="white" size="32px" />
              <p>
                &emsp;Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt dicta facilis cupiditate exercitationem, delectus,
                magni eum ducimus culpa, corrupti accusantium labore! Aliquam
                obcaecati fuga accusantium ullam aliquid ex beatae illo?
              </p>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <BiSolidQuoteRight color="white" size="32px" />
            </div>
          </div>
        </ScrollAnimation> */}
      </div>
    </div>
  );
};

export default References;
