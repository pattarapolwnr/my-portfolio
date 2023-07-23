import './App.css';
import Header from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
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
    </div>
  );
}

export default App;
