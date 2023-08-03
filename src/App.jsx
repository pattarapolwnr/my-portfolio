import './App.css';
import Header from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import References from './components/References';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'animate.css';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <div className="page-container">
        <ScrollToTop />
        <div className="container-home" id="home">
          <Header />
          <Home />
        </div>
        <div className="container-about" id="about">
          <About />
        </div>
        <div className="container-skills" id="skills">
          <Skills />
        </div>
        <div className="container-projects" id="projects">
          <Projects />
        </div>
        <div className="container-references" id="references">
          <References />
        </div>
        <div className="container-contact" id="contact">
          <Contact />
        </div>
        <div className="container-footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
