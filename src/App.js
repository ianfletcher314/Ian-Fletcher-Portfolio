import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Jumbotron from "./components/Jumbotron/Jumbotron"

function App() {
  return (
    <div className="App">
      <Header/>
      <Jumbotron/>
      <About/>
      <Contact/>
   
    </div>
  );
}

export default App;
