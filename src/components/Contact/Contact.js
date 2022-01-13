// Contact will be a child of header and will be conditionally rendered when Contact is clickedin the Nav Section
import React from "react";
import "./style.css";
import git from "../../images/gitgitgit.png";
import doc from "../../images/doc.png";
import link from "../../images/lili.png";
import mail from "../../images/email.png";
// import resume from "../../images/IanFletcherDevelopmentResume.pdf";
import resume2 from "../../images/IanFletcherResume2022.pdf";

function Contact() {
  return (
    <div>
      <h3 className="Contactheader center cyan-text text-accent-3 Header">
        CONTACT ME
      </h3>

      <section id="contact" className="container caveat-bold center space roof">
        <a
          className="center grey-text text-accent-3 contact"
          href="https://github.com/ianfletcher314"
          target="_blank"
        >
          GITHUB<img src={git} className="responsive-img icon"></img>
        </a>

        <a
          className="center grey-text text-accent-3 contact"
          href={resume2}
          target="_blank"
          download
        >
          RESUME<img src={doc} className="responsive-img icon"></img>
        </a>

        <a
          className="center grey-text text-accent-3 contact"
          href="mailto:ianfletcher314@gmail.comcom"
        >
          EMAIL<img src={mail} className="responsive-img iconicon"></img>
        </a>

        <a
          className="center grey-text text-accent-3 contact"
          href="https://www.linkedin.com/in/ian-fletcher-a51420124/"
          target="_blank"
        >
          LINKEDIN<img src={link} className="responsive-img icon"></img>
        </a>
      </section>
    </div>
  );
}

export default Contact;
