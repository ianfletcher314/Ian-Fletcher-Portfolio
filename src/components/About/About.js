// about will be a component that has the paragraph about me and potentially a headshot in 2 collumns 
// this componenet will be a child of the Header component and will conditionally render it when 
// the about button is clicked
import React from "react";
import "./style.css";
import ian from "../../images/ian2.jpg"

function About() {
    return (
        
        <div className="row ">
            <h3 className="Header center purple-text text-lighten-3 col s12 " id="about">ABOUT ME</h3>
            <img className="col s4 push-s1 responsive-image pic z" src={ian}></img>
            <section className="container flow-text caveat-bold aboutContainer col s6 push-s1 ">

                <p className="aboutMeText caveat grey-text text-darken-3 ">
                    I am a full stack developer located in the St. Louis area specializing in Web Design and Sales. With the goal of making a professional looking websites for my
                    own musical ventures, I quickly grew a passion for building applications and learning new skills. 
                    I like to get to know my clients a little bit before designing for them so please feel free to contact me
                    bellow so we can discuss your ideas!
                </p>

            </section>
            {/* <div className="aboutMeText caveat grey-text text-darken-3 col s5 pull-s1 aboutContainer2 up">
                  <a href="mailto: ianfletcher314@gmail.com"> ianfletcher314@gmail.com</a>
                  <a href="tel:3146100329" onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"><p class="call-button">314-610-0329</p></a>
                  <a href="https://www.linkedin.com/in/ian-fletcher-a51420124/">https://www.linkedin.com/in/ian-fletcher-a51420124/</a>

                </div> */}
           
        </div>
    );
}

export default About;