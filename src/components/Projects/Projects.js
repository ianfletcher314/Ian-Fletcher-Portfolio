// Projects will be conditionally rendered through Header as a child. 
// Projects will hold the links to a project I ahve and will be used multiple times on the project page 
import React from "react";
import "./style.css";

function Projects({ project }) {
    return (
        <div className="col s4 layer pads">


            <a href={project.url} >
                {project.photo}
            </a>
            <p className="hidden">
                {project.para}
            </p>
            <h4 className="center">{project.appName}</h4>
        </div>
    )

}
export default Projects