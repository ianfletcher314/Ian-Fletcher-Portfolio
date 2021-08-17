import React from "react"
import Projects from "../Projects/Projects"
// import Test from "../Test/test"
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
            className="responsive-img hoverable bradius btnbtn "></img>,
        para: "An Application designed to store your data securely!"

    },
    {
        appName: "Basic Budget",
        url: "https://basicbudget.herokuapp.com/",
        photo: <img src={budget} alt="photo" id="project2"
            className="responsive-img hoverable bradius btnbtn "></img>,
        para: "An Application designed to help budget yoru money!"

    },
    {
        appName: "Horoscope Finder",
        url: "https://samuel6roth.github.io/HoroscopeFinder/",
        photo: <img src={horoscope} alt="photo" id="project2"
            className="responsive-img hoverable bradius btnbtn "></img>,
        para: "An Application designed to give you your daily horoscope!"

    },
    {
        appName: "Directory",
        url: "https://ianfletcher314.github.io/company-directory/",
        photo: <img src={directory} alt="photo" id="project2"
            className="responsive-img hoverable bradius btnbtn "></img>,
        para: "An Application designed to display a company directory generated randomly!"

    },
    {
        appName: "Daily Calendar",
        url: "https://ianfletcher314.github.io/DailyCalendar/",
        photo: <img src={calendar} alt="photo" id="project2"
            className="responsive-img hoverable bradius btnbtn "></img>,
        para: "An Application designed to give you a daily meeting calendar!"

    },
    {
        appName: "Fitness Tracker",
        url: "https://fitnesstrackerianfletcher.herokuapp.com/",
        photo: <img src={fitness} alt="photo" id="project2"
            className="responsive-img hoverable bradius btnbtn "></img>,
        para: "An Application designed to track your Fitness"

    }
    ]
    const handleMouseOver = (event) => {
        console.log("mouseover worked");
    };


    return (
        <div className="container">
            <h2 className="center pink-text text-accent-1 Header" id="projects">PROJECTS</h2>

            <div className="caveat-bold projectsContainer center row" >
                {/* this is where the projects go */}
                <div className="col s6 layer pads" onMouseEnter={handleMouseOver}>
                    <a href="https://lit-escarpment-01189.herokuapp.com/">
                    <img src={kiskisphoto} alt="photo" id="project2"
                        className="responsive-img hoverable bradius btnbtn "></img>
                        </a>

                    <p className="hidden" id="kiskispara">
                        "An Application designed to store your data securely!"

                    </p>
                    <h4 className="center">KisKis</h4>
                </div>

                <div className="col s6 layer pads" onMouseEnter={handleMouseOver}>

                <a href="https://samuel6roth.github.io/HoroscopeFinder/">
                    <img src={horoscope} alt="photo" id="project2"
                        className="responsive-img hoverable bradius btnbtn "></img>
                        </a>

                    <p className="hidden" id="horoscopepara">
                        "An Application designed to give your your daily horoscope!"

                    </p>
                    <h4 className="center">Horoscope Finder</h4>
                </div>

                <div className="col s6 layer pads" onMouseEnter={handleMouseOver}>
                <a href="https://basicbudget.herokuapp.com/">
                    <img src={budget} alt="photo" id="project2"
                        className="responsive-img hoverable bradius btnbtn "></img>
                        </a>

                    <p className="hidden" id="budgetpara">
                        "An Application designed to help you budget your money"

                    </p>
                    <h4 className="center">Basic Budget</h4>
                </div>
                <div className="col s6 layer pads" onMouseEnter={handleMouseOver}>
                <a href="https://ianfletcher314.github.io/DailyCalendar/">
                <img src={calendar} alt="photo" id="project2"
            className="responsive-img hoverable bradius btnbtn "></img>
            </a>

                    <p className="hidden" id="calendarpara">
                        "An Application designed to help you keep track of tasks"

                    </p>
                    <h4 className="center">Daily Calendar</h4>
                </div>



            </div>
        </div>
    )
}
export default ProjectContainer