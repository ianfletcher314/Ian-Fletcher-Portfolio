// Projects will be conditionally rendered through Header as a child. 
// Projects will hold the links to a project I ahve and will be used multiple times on the project page 
import React from "react";

function Projects ({project}) {
    return(
        <div>
        <h1>{project.appName}</h1>
        <a href={project.url}>
        {project.photo}
        </a>
    </div>
    )

  }
  export default Projects