// Projects will be conditionally rendered through Header as a child. 
// Projects will hold the links to a project I ahve and will be used multiple times on the project page 
import React from "react";
import "./style.css";

function Projects ({project}) {
    return(
        <div className="col s4 layer pads">
       
        <a  href={project.url} >
        {project.photo}
        </a>
         <h4 className= "center">{project.appName}</h4>
       
        {/* <img src={project.photo} alt={project.appName} id="project2"
            class="col s6   responsive-img hoverable pads bradius layer btnbtn"></img> */}
    </div>
    )

  }
  export default Projects