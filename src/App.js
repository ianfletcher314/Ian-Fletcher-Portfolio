import React,{useState} from 'react';
import './App.css';
import Header from "./components/Header/Header"
import About from "./components/About/About"
import ProjectContainer from "./components/ProjectContainer/ProjectContainer"
import Contact from "./components/Contact/Contact"
import Jumbotron from "./components/Jumbotron/Jumbotron"

function App() {
  // create a state here and pas setState through to header. when nav buttons are pushed state is changed and other 
  // components are rendered conditionally depending on the state.
  const componentCluster = [
    <Jumbotron />,
    <About />,
    <ProjectContainer />,
    <Contact />
    
  ]
  const [pageState, setPageState] = useState(componentCluster[0]) 

  return (
    <div className="App">
      <Header componentCluster={componentCluster} setPageState={setPageState}/>
      {pageState}
   
    </div>
  );
}

export default App;
