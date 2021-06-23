import React from "react"
import Projects from "../Projects/Projects"
import kiskisphoto from  "../../images/Project2.png"
import horoscope from  "../../images/Project3.PNG"
import budget from  "../../images/basicbudget.png"
import directory from  "../../images/directory.png"
import calendar from  "../../images/calendar.png"
import fitness from  "../../images/fitness.png"

function ProjectContainer(){
    const info = [{
        appName : "kiskis",
        url : "https://lit-escarpment-01189.herokuapp.com/",
        photo: <img src={kiskisphoto}></img>

    },
    {
        appName : "Basic Budget",
        url : "https://basicbudget.herokuapp.com/",
        photo: <img src={budget}></img>

    },
    {
        appName : "Horoscope Finder",
        url : "https://samuel6roth.github.io/HoroscopeFinder/",
        photo: <img src={horoscope}></img>

    },
    {
        appName : "Company Directory",
        url : "https://ianfletcher314.github.io/company-directory/",
        photo: <img src={directory}></img>

    },
    {
        appName : "Daily Calendar",
        url : "https://ianfletcher314.github.io/DailyCalendar/",
        photo: <img src={calendar}></img>

    },
    {
        appName : "Fitness Tracker",
        url : "https://fitnesstrackerianfletcher.herokuapp.com/",
        photo: <img src={fitness}></img>

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