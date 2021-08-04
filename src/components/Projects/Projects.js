// Projects will be conditionally rendered through Header as a child. 
// Projects will hold the links to a project I ahve and will be used multiple times on the project page 
import React from "react";
import "./style.css";

function Projects ({project}) {
    return(
        <div className="hoverable bradius btnbtn col s1 layer">
        {/* <h1 className= "center">{project.appName}</h1> */}
        <a  href={project.url} >
        {project.photo}
        </a>
       
        {/* <img src={project.photo} alt={project.appName} id="project2"
            class="col s6   responsive-img hoverable pads bradius layer btnbtn"></img> */}
    </div>
    )

  }
  export default Projects