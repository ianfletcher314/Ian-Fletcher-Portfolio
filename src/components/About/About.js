// about will be a component that has the paragraph about me and potentially a headshot in 2 collumns 
// this componenet will be a child of the Header component and will conditionally render it when 
// the about button is clicked
import React from "react";

function About() {
    return (
        <div>
         <h2 class="AboutMeHeader center purple-text text-lighten-3" id="about">About Me</h2>
    <section class="container caveat-bold aboutContainer">

        <p class="aboutMeText caveat flow-text grey-text text-darken-3">
            I am a full stack developer located in the St. Louis area specializing in Web Design and maintenance. After
            years of working in the music industry both on and off stage I realized it was time to make a change so I
            enrolled in a coding bootcamp in early 2021. With the goal of making a professional looking websites for my
            own musical ventures, I quickly grew a passion for creating portfolio pages for the artists I know and love.
            I like to get to know my clients a little bit before designing for them so please feel free to contact me
            bellow so we can discuss your ideas!
        </p>
    </section>
      </div>
      );
}

export default About;