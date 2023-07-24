import '../css/References.css';
import { BiSolidQuoteLeft, BiSolidQuoteRight } from 'react-icons/bi';
const References = () => {
  return (
    <div className="references-container">
      <h3
        style={{
          textAlign: 'left',
        }}
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
      <div className="references-grid">
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
              Nesciunt dicta facilis cupiditate exercitationem, delectus, magni
              eum ducimus culpa, corrupti accusantium labore! Aliquam obcaecati
              fuga accusantium ullam aliquid ex beatae illo?
            </p>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <BiSolidQuoteRight color="white" size="32px" />
          </div>
        </div>
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
              Nesciunt dicta facilis cupiditate exercitationem, delectus, magni
              eum ducimus culpa, corrupti accusantium labore! Aliquam obcaecati
              fuga accusantium ullam aliquid ex beatae illo?
            </p>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <BiSolidQuoteRight color="white" size="32px" />
          </div>
        </div>
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
              Nesciunt dicta facilis cupiditate exercitationem, delectus, magni
              eum ducimus culpa, corrupti accusantium labore! Aliquam obcaecati
              fuga accusantium ullam aliquid ex beatae illo?
            </p>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <BiSolidQuoteRight color="white" size="32px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default References;
