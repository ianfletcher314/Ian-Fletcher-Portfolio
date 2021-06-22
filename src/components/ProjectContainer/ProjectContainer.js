import React from "react"
import Projects from "../Projects/Projects"
import kiskisphoto from  "../../images/Project2.png"


function ProjectContainer(){
    const info = [{
        appName : "kiskis",
        url : "https://lit-escarpment-01189.herokuapp.com/",
        photo: <img src={kiskisphoto}></img>

    }
    ]

    return(
        <div>
            {info.map(project=>(
                <Projects project={project}/>
            ))}

        </div>
    )
}
export default ProjectContainer