// about will be a component that has the paragraph about me and potentially a headshot in 2 collumns 
// this componenet will be a child of the Header component and will conditionally render it when 
// the about button is clicked
import React from "react";
import "./style.css";
import ian from "../../images/Ian5.jpg"
import M from 'materialize-css'

function About() {
    const handleMouseOverContactBtn =(event) =>{
        console.log("scrolled over green button")
    } 
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.fixed-action-btn');
        var instances = M.FloatingActionButton.init(elems, {
          direction: 'left'
        });
        console.log('content loaded')
      });
    return (

        <div className="row ">
            <h3 className="Header center purple-text text-lighten-3 col s12 " id="about">ABOUT ME</h3>
            <img className="col s4 push-s1 responsive-image pic z hide-on-med-and-down" src={ian}></img>
            <section className="container flow-text caveat-bold aboutContainer col s6 push-s1 hide-on-med-and-down ">

                <p className="aboutMeText caveat grey-text text-darken-3 ">
                    I am a full stack developer located in the St. Louis area specializing in Web Design and Sales. With the goal of making a professional looking websites for my
                    own musical ventures, I quickly grew a passion for building applications and learning new skills.
                    I like to get to know my clients a little bit before designing for them so please feel free to contact me
                    bellow so we can discuss your ideas!
                </p>

            </section>
            <section className="container center flow-text caveat-bold aboutContainer col s8 push-s2 hide-on-large-only show-on-medium-and-down ">

                <p className="aboutMeText caveat grey-text text-darken-3 ">
                    I am a full stack developer located in the St. Louis area specializing in Web Design and Sales. With the goal of making a professional looking websites for my
                    own musical ventures, I quickly grew a passion for building applications and learning new skills.
                    I like to get to know my clients a little bit before designing for them so please feel free to contact me
                    bellow so we can discuss your ideas!
                </p>

            </section>
            {/* <div class="fixed-action-btn" onMouseEnter={handleMouseOverContactBtn}>
                <a class="btn-floating btn-large green accent-2 " >
                    <i class="large material-icons">mode_edit</i>
                </a>
                <ul>
                    <li><a class="btn-floating red"><i class="material-icons">insert_chart</i></a></li>
                    <li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
                    <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
                    <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
                </ul>
            </div> */}
            
            

        </div>
        
    );
}

export default About;