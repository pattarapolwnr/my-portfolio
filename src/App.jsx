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

function App() {
  return (
    <div className="page-container">
      <div className="container-home">
        <Header />
        <Home />
      </div>
      <div className="container-about">
        <About />
      </div>
      <div className="container-skills">
        <Skills />
      </div>
      <div className="container-projects">
        <Projects />
      </div>
      <div className="container-references">
        <References />
      </div>
      <div className="container-contact">
        <Contact />
      </div>
      <div className="container-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
