import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
