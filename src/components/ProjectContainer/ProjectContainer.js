import React from "react";
import kiskisphoto from "../../images/Project2.png";
import horoscope from "../../images/Project33.PNG";
import budget from "../../images/basicbudget.png";
import calendar from "../../images/happyhealth.png";
import brasil from "../../images/brasilia.png";
import "./style.css";

function ProjectContainer() {
  // scroll animation for KisKis
  const handleMouseOverKis = (event) => {
    console.log("KisKis");
    var elem = document.getElementById("kiskispara");
    var p1 = document.getElementById("project1");
    var p2 = document.getElementById("project2");
    var p3 = document.getElementById("project3");
    var p4 = document.getElementById("project4");
    var name = document.getElementById("KisKissName");
    name.classList.add("hidden");
    p1.classList.remove("col");
    p1.classList.remove("s6");
    p1.classList.remove("layer");
    p1.classList.add("center");
    var link = document.getElementById("kislink");
    link.classList.add("center");
    p2.classList.add("hidden");
    p3.classList.add("hidden");
    p4.classList.add("hidden");
    elem.classList.remove("hidden");
    var projects = document.getElementById("projects");
    projects.classList.add("hidden");
  };
  const handleMouseLeaveKis = () => {
    console.log("KisKis");
    var elem = document.getElementById("kiskispara");
    var p1 = document.getElementById("project1");
    var p2 = document.getElementById("project2");
    var p3 = document.getElementById("project3");
    var p4 = document.getElementById("project4");
    var name = document.getElementById("KisKissName");
    var link = document.getElementById("kislink");
    link.classList.remove("center");
    name.classList.remove("hidden");
    p1.classList.add("col");
    p1.classList.add("s6");
    p1.classList.add("layer");
    p1.classList.remove("center");
    p2.classList.remove("hidden");
    p3.classList.remove("hidden");
    p4.classList.remove("hidden");
    elem.classList.add("hidden");
    var projects = document.getElementById("projects");
    projects.classList.remove("hidden");
  };
  // scroll animation for Horoscope Finder
  const handleMouseOverHor = (event) => {
    console.log("Horoscope");
    var elem = document.getElementById("horoscopepara");
    elem.classList.remove("hidden");
    var p1 = document.getElementById("project2");
    var p2 = document.getElementById("project1");
    var p3 = document.getElementById("project3");
    var p4 = document.getElementById("project4");
    var name = document.getElementById("HoroscopeName");
    var link = document.getElementById("horlink");
    link.classList.add("center");
    name.classList.add("hidden");
    p1.classList.remove("col");
    p1.classList.remove("s6");
    p1.classList.remove("layer");
    p1.classList.add("center");
    p2.classList.add("hidden");
    p3.classList.add("hidden");
    p4.classList.add("hidden");
    var projects = document.getElementById("projects");
    projects.classList.add("hidden");
  };
  const handleMouseLeaveHor = (event) => {
    console.log("Horoscope");
    var elem = document.getElementById("horoscopepara");
    elem.classList.add("hidden");
    var p1 = document.getElementById("project2");
    var p2 = document.getElementById("project1");
    var p3 = document.getElementById("project3");
    var p4 = document.getElementById("project4");
    var name = document.getElementById("HoroscopeName");
    var link = document.getElementById("horlink");
    link.classList.remove("center");
    name.classList.remove("hidden");
    p1.classList.add("col");
    p1.classList.add("s6");
    p1.classList.add("layer");
    p1.classList.remove("center");
    p2.classList.remove("hidden");
    p3.classList.remove("hidden");
    p4.classList.remove("hidden");
    var projects = document.getElementById("projects");
    projects.classList.remove("hidden");
  };
  // scroll animation for Basic Budget
  const handleMouseOverBud = (event) => {
    console.log("Budget");
    var elem = document.getElementById("budgetpara");
    elem.classList.remove("hidden");
    var p1 = document.getElementById("project3");
    var p2 = document.getElementById("project2");
    var p3 = document.getElementById("project1");
    var p4 = document.getElementById("project4");
    var name = document.getElementById("BudgetName");
    var link = document.getElementById("budlink");
    link.classList.add("center");
    name.classList.add("hidden");
    p1.classList.remove("col");
    p1.classList.remove("s6");
    p1.classList.remove("layer");
    p1.classList.add("center");
    p2.classList.add("hidden");
    p3.classList.add("hidden");
    p4.classList.add("hidden");
    var projects = document.getElementById("projects");
    projects.classList.add("hidden");
  };
  const handleMouseLeaveBud = (event) => {
    console.log("Budget");
    var elem = document.getElementById("budgetpara");
    elem.classList.add("hidden");
    var p1 = document.getElementById("project3");
    var p2 = document.getElementById("project2");
    var p3 = document.getElementById("project1");
    var p4 = document.getElementById("project4");
    var name = document.getElementById("BudgetName");
    var link = document.getElementById("budlink");
    link.classList.remove("center");
    name.classList.remove("hidden");
    p1.classList.add("col");
    p1.classList.add("s6");
    p1.classList.add("layer");
    p1.classList.remove("center");
    p2.classList.remove("hidden");
    p3.classList.remove("hidden");
    p4.classList.remove("hidden");
    var projects = document.getElementById("projects");
    projects.classList.remove("hidden");
  };
  // scroll animation for HappyHealth
  const handleMouseOverCal = (event) => {
    console.log("Calendar");
    var elem = document.getElementById("calendarpara");
    elem.classList.remove("hidden");
    var p1 = document.getElementById("project4");
    var p2 = document.getElementById("project2");
    var p3 = document.getElementById("project3");
    var p4 = document.getElementById("project1");
    var name = document.getElementById("CalName");
    var link = document.getElementById("haplink");
    link.classList.add("center");
    name.classList.add("hidden");
    p1.classList.remove("col");
    p1.classList.remove("s6");
    p1.classList.remove("layer");
    p1.classList.add("center");
    p2.classList.add("hidden");
    p3.classList.add("hidden");
    p4.classList.add("hidden");
    var projects = document.getElementById("projects");
    projects.classList.add("hidden");
  };
  const handleMouseLeaveCal = (event) => {
    console.log("Calendar");
    var elem = document.getElementById("calendarpara");
    elem.classList.add("hidden");
    var p1 = document.getElementById("project4");
    var p2 = document.getElementById("project2");
    var p3 = document.getElementById("project3");
    var p4 = document.getElementById("project1");
    var name = document.getElementById("CalName");
    var link = document.getElementById("haplink");
    link.classList.remove("center");
    name.classList.remove("hidden");
    p1.classList.add("col");
    p1.classList.add("s6");
    p1.classList.add("layer");
    p1.classList.remove("center");
    p2.classList.remove("hidden");
    p3.classList.remove("hidden");
    p4.classList.remove("hidden");
    var projects = document.getElementById("projects");
    projects.classList.remove("hidden");
  };

  // This is where the HTML for the component goes to be rendered
  return (
    // HEADER
    <div className="container">
      <h3 className="center pink-text text-accent-1 Header " id="projects">
        PROJECTS
      </h3>
      <div className="caveat-bold projectsContainer center row">
        {/* Happy Health --------------------*/}
        <div
          className="col s6 layer"
          id="project4"
          onMouseEnter={handleMouseOverCal}
          onMouseLeave={handleMouseLeaveCal}
        >
          <a href="https://happyhealth404.herokuapp.com/">
            <img
              src={calendar}
              alt="Happy Health Application"
              className="responsive-img hoverable bradius btnbtn smallest"
              id="haplink"
            ></img>
          </a>
          <div className="hidden" id="calendarpara">
            <h4 className="arvo">HappyHealth</h4>
            <p>
              Provides multiple healthy meal options based upon the number of
              calories the user wants to consume.
            </p>
            <h6>
              Mongo DB / Express / React / Node Js / Bcrypt / Material UI /
              Connect-Mongo
            </h6>
            <a
              className="nonlink "
              href="https://github.com/ianfletcher314/happyhealth"
            >
              GITHUB
            </a>
            <p className="noheight"></p>
            <a
              className="nonlink "
              href="https://happyhealth404.herokuapp.com/"
            >
              {" "}
              DEPLOYED SITE
            </a>
          </div>
          <h5 className="center flow-text arvo" id="CalName">
            HappyHealth
          </h5>
        </div>
        {/* Brasilia --------------------*/}
        <div
          className="col s6 layer"
          id="project3"
          onMouseEnter={handleMouseOverBud}
          onMouseLeave={handleMouseLeaveBud}
        >
          <a href="https://ianfletcher314.github.io/brazilianrestaurant/">
            <img
              src={brasil}
              alt="Brasilia Application"
              className="responsive-img hoverable bradius btnbtn smallest"
              id="budlink"
            ></img>
          </a>

          <div className="hidden" id="budgetpara">
            <h4 className="smooch">Brasilia</h4>
            <p>
              Restaurant application for mid to small sized Brasilian restaurant
              in St. Louis, Missouri.
            </p>
            <h6>HTML / CSS / JSX / React / Bootstrap / ∆rtgrid </h6>
            <a
              className="nonlink "
              href="https://github.com/ianfletcher314/brazilianrestaurant"
            >
              GITHUB
            </a>
            <p className="noheight"></p>
            <a
              className="nonlink "
              href="https://ianfletcher314.github.io/brazilianrestaurant/"
            >
              {" "}
              DEPLOYED SITE
            </a>
          </div>
          <h5 className="center flow-text smooch" id="BudgetName">
            Brasilia
          </h5>
        </div>
        {/* KisKis ----------------------*/}
        <div
          className="col s6 layer"
          id="project1"
          onMouseEnter={handleMouseOverKis}
          onMouseLeave={handleMouseLeaveKis}
        >
          <a href="https://lit-escarpment-01189.herokuapp.com/">
            <img
              src={kiskisphoto}
              alt="KisKis Application"
              className="responsive-img hoverable bradius btnbtn smallest"
              id="kislink"
            ></img>
          </a>

          <div className="hidden" id="kiskispara">
            <h4 className="caveat">KisKis</h4>
            <p>
              Stores any personal information securely in your own personal
              encrypted password and information hub.
            </p>
            <h6>
              Node Js / Express-Handlebars / MySQL / Cryptr / Materialize / CSS
            </h6>
            <a
              className="nonlink "
              href="https://github.com/ianfletcher314/kiskis"
            >
              GITHUB
            </a>
            <p className="noheight"></p>
            <a
              className="nonlink "
              href="https://lit-escarpment-01189.herokuapp.com/"
            >
              {" "}
              DEPLOYED SITE
            </a>
          </div>
          <h5 className="center flow-text caveat" id="KisKissName">
            KisKis
          </h5>
        </div>
        {/* Horoscope Finder --------------------*/}
        <div
          className="col s6 layer"
          id="project2"
          onMouseEnter={handleMouseOverHor}
          onMouseLeave={handleMouseLeaveHor}
        >
          <a href="https://samuel6roth.github.io/HoroscopeFinder/">
            <img
              src={horoscope}
              alt="Horoscope Finder Application"
              className="responsive-img hoverable bradius btnbtn smallest "
              id="horlink"
            ></img>
          </a>
          <div className="hidden" id="horoscopepara">
            <h4 className="dancing">Horoscope Finder</h4>
            <p>
              Displays the user’s daily horoscope and an inspirational quote
              depending on their zodiac sign.
            </p>
            <h6>
              {" "}
              HTML / CSS / JS / Moment.js / Materialize / Aztro API / Daily
              Quotes API
            </h6>
            <a
              className="nonlink "
              href="https://github.com/ianfletcher314/HoroscopeFinder"
            >
              GITHUB
            </a>
            <p className="noheight"></p>
            <a
              className="nonlink "
              href="https://samuel6roth.github.io/HoroscopeFinder/"
            >
              {" "}
              DEPLOYED SITE
            </a>
          </div>
          <h5 className="center flow-text dancing" id="HoroscopeName">
            Horoscope Finder
          </h5>
        </div>
      </div>
    </div>
  );
}
export default ProjectContainer;
