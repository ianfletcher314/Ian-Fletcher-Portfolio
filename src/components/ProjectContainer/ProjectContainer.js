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
    const handleMouseOverKis = (event) => {
        console.log("KisKis");
        var elem = document.getElementById('kiskispara');
        var p1 = document.getElementById('project1');
        var p2 = document.getElementById('project2');
        var p3 = document.getElementById('project3');
        var p4 = document.getElementById('project4');
        var name = document.getElementById('KisKissName');
        name.classList.add("hidden")
        p1.classList.remove("col")
        p1.classList.remove("s6")
        p1.classList.remove("layer")
        p1.classList.add("center")
        p2.classList.add("hidden")
        p3.classList.add("hidden")
        p4.classList.add("hidden")
        elem.classList.remove("hidden")
        var projects = document.getElementById('projects');
        projects.classList.add("hidden")
    };
    const handleMouseOverHor = (event) => {
        console.log("Horoscope");
        var elem = document.getElementById('horoscopepara');
        elem.classList.remove("hidden")
        var p1 = document.getElementById('project2');
        var p2 = document.getElementById('project1');
        var p3 = document.getElementById('project3');
        var p4 = document.getElementById('project4');
        var name = document.getElementById('HoroscopeName');
        name.classList.add("hidden")
        p1.classList.remove("col")
        p1.classList.remove("s6")
        p1.classList.remove("layer")
        p1.classList.add("center")
        p2.classList.add("hidden")
        p3.classList.add("hidden")
        p4.classList.add("hidden")
        var projects = document.getElementById('projects');
        projects.classList.add("hidden")
    };
    const handleMouseOverBud = (event) => {
        console.log("Budget");
        var elem = document.getElementById('budgetpara');
        elem.classList.remove("hidden")
        var p1 = document.getElementById('project3');
        var p2 = document.getElementById('project2');
        var p3 = document.getElementById('project1');
        var p4 = document.getElementById('project4');
        var name = document.getElementById('BudgetName');
        name.classList.add("hidden")
        p1.classList.remove("col")
        p1.classList.remove("s6")
        p1.classList.remove("layer")
        p1.classList.add("center")
        p2.classList.add("hidden")
        p3.classList.add("hidden")
        p4.classList.add("hidden")
        var projects = document.getElementById('projects');
        projects.classList.add("hidden")
    };
    const handleMouseOverCal = (event) => {
        console.log("Calendar");
        var elem = document.getElementById('calendarpara');
        elem.classList.remove("hidden")
        var p1 = document.getElementById('project4');
        var p2 = document.getElementById('project2');
        var p3 = document.getElementById('project3');
        var p4 = document.getElementById('project1');
        var name = document.getElementById('CalName');
        name.classList.add("hidden")
        p1.classList.remove("col")
        p1.classList.remove("s6")
        p1.classList.remove("layer")
        p1.classList.add("center")
        p2.classList.add("hidden")
        p3.classList.add("hidden")
        p4.classList.add("hidden")
        var projects = document.getElementById('projects');
        projects.classList.add("hidden")
    };


    return (
        <div className="container">
            <h3 className="center pink-text text-accent-1 Header" id="projects">PROJECTS</h3>

            <div className="caveat-bold projectsContainer center row" >
                {/* this is where the projects go */}
                <div className="col s6 layer" id="project1" onMouseEnter={handleMouseOverKis}>
                    <a href="https://lit-escarpment-01189.herokuapp.com/">
                        <img src={kiskisphoto} alt="photo" 
                            className="responsive-img hoverable bradius btnbtn "></img>
                    </a>

                    <p className="hidden" id="kiskispara">
                        "An Application designed to store your data securely!"

                    </p>
                    <h5 className="center flow-text" id="KisKissName">KisKis</h5>
                </div>

                <div className="col s6 layer" id="project2" onMouseEnter={handleMouseOverHor}>

                    <a href="https://samuel6roth.github.io/HoroscopeFinder/">
                        <img src={horoscope} alt="photo" 
                            className="responsive-img hoverable bradius btnbtn "></img>
                    </a>

                    <p className="hidden" id="horoscopepara">
                        "An Application designed to give your your daily horoscope!"

                    </p>
                    <h5 className="center flow-text" id="HoroscopeName">Horoscope Finder</h5>
                </div>

                <div className="col s6 layer" id="project3" onMouseEnter={handleMouseOverBud}>
                    <a href="https://basicbudget.herokuapp.com/">
                        <img src={budget} alt="photo" 
                            className="responsive-img hoverable bradius btnbtn "></img>
                    </a>

                    <p className="hidden" id="budgetpara">
                        "An Application designed to help you budget your money"

                    </p>
                    <h5 className="center flow-text" id="BudgetName">Basic Budget</h5>
                </div>
                <div className="col s6 layer" id="project4" onMouseEnter={handleMouseOverCal}>
                    <a href="https://ianfletcher314.github.io/DailyCalendar/">
                        <img src={calendar} alt="photo" 
                            className="responsive-img hoverable bradius btnbtn "></img>
                    </a>

                    <p className="hidden" id="calendarpara">
                        "An Application designed to help you keep track of tasks"

                    </p>
                    <h5 className="center flow-text" id="CalName">Daily Calendar</h5>
                </div>



            </div>
        </div>
    )
}
export default ProjectContainer