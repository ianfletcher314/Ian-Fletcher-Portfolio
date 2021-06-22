// header section will have my name in upper left and nav section upper right. nav sectin will render 
// About, Clients, and Projects, and Contact Componenets 
import React from "react";
import "./style.css";


function Header({componentCluster,setPageState}) {
  return (
    <div >
     <nav className="z-depth-0 ">
        <div className="nav-wrapper white">
            <a href="index.html" className="brand-logo left caveat-bold hide-on-med-and-down grey-text text-darken-2"> Ian Fletcher</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down caveat-bold grey-text text-darken-2">
                <li><a className="btn-flat caveat-bold purple-text text-lighten-4 navbtn btnbtn" 
                        id="aboutbtn" onClick={() => setPageState(componentCluster[1])} >ABOUT</a></li>
                {/* <li><a className="btn-flat caveat-bold teal-text text-accent-2 navbtn btnbtn" href="#clients"
                        id="clientsbtn">CLIENTS</a></li> */}
                <li><a className="btn-flat caveat-bold pink-text text-accent-1 navbtn btnbtn" 
                        id="projectsbtn " onClick={() => setPageState(componentCluster[2])}>PROJECTS</a></li>
                <li><a className="btn-flat caveat-bold cyan-text text-accent-3 navbtn btnbtn" 
                        id="contactbtn" onClick={() => setPageState(componentCluster[3])}>CONTACT</a></li>
            </ul>
        </div>

    </nav>

    <div class="center container">
        <img src="images/ian2.jpg" alt="Ian's Photo"
            className="container mobileimage circle responsive-img hide-on-large-only show-on-medium-and-down"></img>
    </div>

    <div className="container center">
        <ul className="brand-logo center hide-on-large-only show-on-medium-and-down caveat left-align">
            <li><a className="btn-flat caveat-bold purple-text text-lighten-3 navbtn" href="#about" id="aboutbtn">ABOUT</a>
            </li>
            <li><a className="btn-flat caveat-bold teal-text text-accent-2 navbtn" href="#clients"
                    id="clientsbtn">CLIENTS</a></li>
            <li><a className="btn-flat caveat-bold pink-text text-accent-1 navbtn" href="#projects"
                    id="projectsbtn">PROJECTS</a></li>
            <li><a className="btn-flat caveat-bold cyan-text text-accent-3 navbtn" href="#contact"
                    id="contactbtn">CONTACT</a></li>
        </ul>
    </div>
  </div>
  );
}

export default Header;
