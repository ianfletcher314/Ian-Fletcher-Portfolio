// header section will have my name in upper left and nav section upper right. nav sectin will render 
// About, Clients, and Projects, and Contact Componenets 
import React from "react";


function Header() {
  return (
    <div>
    <nav class="z-depth-0 red lighten-4">
        <div class="nav-wrapper white">
            <a href="index.html" class="brand-logo caveat-bold grey-text text-darken-2 ">  Ian Fletcher</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down caveat-bold grey-text text-darken-2">
                <li><a class="btn-flat caveat-bold purple-text text-lighten-4 navbtn btnbtn" href="#about"
                        id="aboutbtn">ABOUT</a></li>
                <li><a class="btn-flat caveat-bold teal-text text-accent-2 navbtn btnbtn" href="#clients"
                        id="clientsbtn">CLIENTS</a></li>
                <li><a class="btn-flat caveat-bold pink-text text-accent-1 navbtn btnbtn" href="#projects"
                        id="projectsbtn">PROJECTS</a></li>
                <li><a className="btn-flat caveat-bold cyan-text text-accent-3 navbtn btnbtn" href="#contact"
                        id="contactbtn">CONTACT</a></li>
            </ul>
        </div>

    </nav>

  </div>
  );
}

export default Header;
