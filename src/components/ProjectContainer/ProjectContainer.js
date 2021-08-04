import React from "react"
import Projects from "../Projects/Projects"
import kiskisphoto from "../../images/Project2.png"
import horoscope from "../../images/Project33.PNG"
import budget from "../../images/basicbudget.png"
import directory from "../../images/directory.png"
import calendar from "../../images/calendar.png"
import fitness from "../../images/fitness.png"
import "./style.css";

function ProjectContainer() {
    const info = [{
        appName: "kiskis",
        url: "https://lit-escarpment-01189.herokuapp.com/",
        photo: <img src={kiskisphoto} alt="photo" id="project2"
        className="responsive-img hoverable bradius btnbtn "></img>

    },
    {
        appName: "Basic Budget",
        url: "https://basicbudget.herokuapp.com/",
        photo: <img src={budget} alt="photo" id="project2"
        className="responsive-img hoverable bradius btnbtn "></img>

    },
    {
        appName: "Horoscope Finder",
        url: "https://samuel6roth.github.io/HoroscopeFinder/",
        photo: <img src={horoscope} alt="photo" id="project2"
        className="responsive-img hoverable bradius btnbtn "></img>

    },
    {
        appName: "Company Directory",
        url: "https://ianfletcher314.github.io/company-directory/",
        photo: <img src={directory} alt="photo" id="project2"
        className="responsive-img hoverable bradius btnbtn "></img>

    },
    {
        appName: "Daily Calendar",
        url: "https://ianfletcher314.github.io/DailyCalendar/",
        photo: <img src={calendar} alt="photo" id="project2"
        className="responsive-img hoverable bradius btnbtn "></img>

    },
    {
        appName: "Fitness Tracker",
        url: "https://fitnesstrackerianfletcher.herokuapp.com/",
        photo: <img src={fitness} alt="photo" id="project2"
        className="responsive-img hoverable bradius btnbtn "></img>

    }
    ]

    return (
        <div >
            <h2 className="center pink-text text-accent-1" id="projects">PROJECTS</h2>
            <div className="center">
                <div className="caveat-bold projectsContainer center row">
                    {info.map(project => (
                            <Projects project={project} />
                    ))}
                </div>
            </div>

        </div>
    )
}
export default ProjectContainer