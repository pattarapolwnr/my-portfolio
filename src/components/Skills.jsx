import '../css/Skills.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import languages from '../data/languages';
import frameworks from '../data/frameworks';
import tools from '../data/tools';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import CarouselMulti from './CarouselMulti';
import ScrollAnimation from 'react-animate-on-scroll';
// import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import Carousels from './Carousels';

const Skills = () => {
  const [data, setData] = useState(languages);
  const [languagesClick, setLanguagesClick] = useState(true);
  const [frameworksClick, setFrameworksClick] = useState(false);
  const [toolsClick, setToolsClick] = useState(false);
  const languagesClickHandler = () => {
    setLanguagesClick(!languagesClick);
    setData(languages);
    if (frameworksClick) {
      setFrameworksClick(!frameworksClick);
    } else if (toolsClick) {
      setToolsClick(!toolsClick);
    }
  };
  const frameworksClickHandler = () => {
    setFrameworksClick(!frameworksClick);
    setData(frameworks);
    if (languagesClick) {
      setLanguagesClick(!languagesClick);
    } else if (toolsClick) {
      setToolsClick(!toolsClick);
    }
  };
  const toolsClickHandler = () => {
    setToolsClick(!toolsClick);
    setData(tools);
    if (languagesClick) {
      setLanguagesClick(!languagesClick);
    } else if (frameworksClick) {
      setFrameworksClick(!frameworksClick);
    }
  };
  return (
    <div className="skills-container">
      <ScrollAnimation delay={100} animateIn="animate__fadeInLeft">
        <div className="myskills">
          <h2>
            <span
              style={{
                color: 'var(--text-primary)',
                fontSize: '32px',
                fontWeight: 'var(--font-bold)',
              }}
            >
              My
            </span>
            <span
              style={{
                color: 'var(--color-primary)',
                fontSize: '32px',
                fontWeight: 'var(--font-bold)',
              }}
            >
              {' '}
              skills
            </span>
          </h2>
          <h1>What can I do?</h1>
          <div className="selector">
            <Button
              className={languagesClick ? 'btn clicked' : 'btn'}
              onClick={languagesClickHandler}
            >
              Languages
            </Button>
            <Button
              className={frameworksClick ? 'btn clicked' : 'btn'}
              onClick={frameworksClickHandler}
            >
              Frameworks
            </Button>
            <Button
              className={toolsClick ? 'btn clicked' : 'btn'}
              onClick={toolsClickHandler}
            >
              Tools
            </Button>
          </div>
        </div>
      </ScrollAnimation>

      <div className="carousel">
        <ScrollAnimation delay={600} animateIn="animate__fadeInLeft">
          <Carousels data={data} />
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Skills;
