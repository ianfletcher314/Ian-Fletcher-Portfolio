import React from "react"
import Projects from "../Projects/Projects"
// import Test from "../Test/test"
import kiskisphoto from "../../images/Project2.png"
import horoscope from "../../images/Project33.PNG"
import budget from "../../images/basicbudget.png"
import directory from "../../images/directory.png"
import calendar from "../../images/happyhealth.png"
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
    // This is where the scroll animation is handled!
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
        var link = document.getElementById('kislink');
        link.classList.add("smaller")
        link.classList.add("center")
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
        var link = document.getElementById('horlink');
        link.classList.add("smaller")
        link.classList.add("center")
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
        var link = document.getElementById('budlink');
        link.classList.add("smaller")
        link.classList.add("center")
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
        var link = document.getElementById('haplink');
        link.classList.add("smaller")
        link.classList.add("center")
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

    const handleMouseLeaveKis = () => {
        console.log("KisKis");
        var elem = document.getElementById('kiskispara');
        var p1 = document.getElementById('project1');
        var p2 = document.getElementById('project2');
        var p3 = document.getElementById('project3');
        var p4 = document.getElementById('project4');
        var name = document.getElementById('KisKissName');
        var link = document.getElementById('kislink');
        link.classList.remove("smaller")
        link.classList.remove("center")
        name.classList.remove("hidden")
        p1.classList.add("col")
        p1.classList.add("s6")
        p1.classList.add("layer")
        p1.classList.remove("center")
        p2.classList.remove("hidden")
        p3.classList.remove("hidden")
        p4.classList.remove("hidden")
        elem.classList.add("hidden")
        var projects = document.getElementById('projects');
        projects.classList.remove("hidden")
    }
    const handleMouseLeaveHor = (event) => {
        console.log("Horoscope");
        var elem = document.getElementById('horoscopepara');
        elem.classList.add("hidden")
        var p1 = document.getElementById('project2');
        var p2 = document.getElementById('project1');
        var p3 = document.getElementById('project3');
        var p4 = document.getElementById('project4');
        var name = document.getElementById('HoroscopeName');
        var link = document.getElementById('horlink');
        link.classList.remove("smaller")
        link.classList.remove("center")
        name.classList.remove("hidden")
        p1.classList.add("col")
        p1.classList.add("s6")
        p1.classList.add("layer")
        p1.classList.remove("center")
        p2.classList.remove("hidden")
        p3.classList.remove("hidden")
        p4.classList.remove("hidden")
        var projects = document.getElementById('projects');
        projects.classList.remove("hidden")
    };
    const handleMouseLeaveBud = (event) => {
        console.log("Budget");
        var elem = document.getElementById('budgetpara');
        elem.classList.add("hidden")
        var p1 = document.getElementById('project3');
        var p2 = document.getElementById('project2');
        var p3 = document.getElementById('project1');
        var p4 = document.getElementById('project4');
        var name = document.getElementById('BudgetName');
        var link = document.getElementById('budlink');
        link.classList.remove("smaller")
        link.classList.remove("center")
        name.classList.remove("hidden")
        p1.classList.add("col")
        p1.classList.add("s6")
        p1.classList.add("layer")
        p1.classList.remove("center")
        p2.classList.remove("hidden")
        p3.classList.remove("hidden")
        p4.classList.remove("hidden")
        var projects = document.getElementById('projects');
        projects.classList.remove("hidden")
    };
    const handleMouseLeaveCal = (event) => {
        console.log("Calendar");
        var elem = document.getElementById('calendarpara');
        elem.classList.add("hidden")
        var p1 = document.getElementById('project4');
        var p2 = document.getElementById('project2');
        var p3 = document.getElementById('project3');
        var p4 = document.getElementById('project1');
        var name = document.getElementById('CalName');
        var link = document.getElementById('haplink');
        link.classList.remove("smaller")
        link.classList.remove("center")
        name.classList.remove("hidden")
        p1.classList.add("col")
        p1.classList.add("s6")
        p1.classList.add("layer")
        p1.classList.remove("center")
        p2.classList.remove("hidden")
        p3.classList.remove("hidden")
        p4.classList.remove("hidden")
        var projects = document.getElementById('projects');
        projects.classList.remove("hidden")
    };


    return (
        <div className="container">
            <h3 className="center pink-text text-accent-1 Header" id="projects">PROJECTS</h3>

            <div className="caveat-bold projectsContainer center row" >
                {/* this is where the projects go */}
                <div className="col s6 layer" id="project1"
                    onMouseEnter={handleMouseOverKis} onMouseLeave={handleMouseLeaveKis}>
                    <a href="https://lit-escarpment-01189.herokuapp.com/">
                        <img src={kiskisphoto} alt="photo"
                            className="responsive-img hoverable bradius btnbtn " id="kislink"></img>
                    </a>

                    <div className="hidden" id="kiskispara">
                        <h4>KisKis</h4>
                        <p>Stores any personal information securely in your own personal encrypted password and information hub.</p>
                        <h6>Node Js / Express-Handlebars / MySqul / Cryptr / Materialize / CSS</h6>
                    </div>
                    <h5 className="center flow-text" id="KisKissName">KisKis</h5>
                </div>

                <div className="col s6 layer" id="project2"
                    onMouseEnter={handleMouseOverHor} onMouseLeave={handleMouseLeaveHor}>

                    <a href="https://samuel6roth.github.io/HoroscopeFinder/">
                        <img src={horoscope} alt="photo"
                            className="responsive-img hoverable bradius btnbtn " id="horlink"></img>
                    </a>

                    <div className="hidden" id="horoscopepara">
                        <h4>Horoscope Finder</h4>
                        <p>Displays the user’s daily horoscope and an inspirational quote depending zodiac sign.</p>
                        <h6> HTML / CSS / JS / Moment.js / Materialize / Aztro API / Daily Quotes API</h6>
                    </div>
                    <h5 className="center flow-text" id="HoroscopeName">Horoscope Finder</h5>
                </div>

                <div className="col s6 layer" id="project3"
                    onMouseEnter={handleMouseOverBud} onMouseLeave={handleMouseLeaveBud}>
                    <a href="https://basicbudget.herokuapp.com/">
                        <img src={budget} alt="photo"
                            className="responsive-img hoverable bradius btnbtn " id="budlink"></img>
                    </a>

                    <div className="hidden" id="budgetpara">
                        <h4>Budget Tracker</h4>
                        <p>Tracks a user’s income and spending in an easy to read chart with online and offline data storage.</p>
                        <h6>HTML / CSS / Node JS / Mongo DB / Indexed DB</h6>
                    </div>
                    <h5 className="center flow-text" id="BudgetName">Basic Budget</h5>
                </div>
                <div className="col s6 layer" id="project4"
                    onMouseEnter={handleMouseOverCal} onMouseLeave={handleMouseLeaveCal}>
                    <a href="https://happyhealth404.herokuapp.com/">
                        <img src={calendar} alt="photo"
                            className="responsive-img hoverable bradius btnbtn " id="haplink"></img>
                    </a>

                    <div className="hidden" id="calendarpara">
                        <h4>HappyHealth</h4>
                        <p>Provides multiple healthy meal options based upon the number of calories the user wants to consume.</p>
                        <h6>Mongo DB / Express / React / Node Js / Bcrypt / Material UI / connect-mongo</h6>
                    </div>
                    <h5 className="center flow-text" id="CalName">Daily Calendar</h5>
                </div>



            </div>
        </div>
    )
}
export default ProjectContainer