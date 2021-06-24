// Contact will be a child of header and will be conditionally rendered when Contact is clickedin the Nav Section
// Contact will also be conditionally renderd if the contact button is pressed in the footer section as well.
import React from "react";
import "./style.css";

function Contact() {
    return (
        <div>
        <h2 className="Contactheader center cyan-text text-accent-3">CONTACT</h2>

<section id="contact" className="container caveat-bold center space pads">
    <a className="center grey-text text-accent-3 contact" href="mailto:ianfletcher314@gmail.comcom">EMAIL</a>
    <a className="center grey-text text-accent-3 contact" href="images/IanFletcher-Resume.pdf" target="_blank"
        download>RESUME</a>

    <a className="center grey-text text-accent-3 contact" href="https://www.linkedin.com/in/ian-fletcher-a51420124/"
        target="_blank">LINKEDIN</a>
    <a className="center grey-text text-accent-3 contact" href="https://github.com/ianfletcher314" target="_blank"
        class="center grey-text text-accent-3">GITHUB</a>
</section>
      </div>
      );
}

export default Contact;