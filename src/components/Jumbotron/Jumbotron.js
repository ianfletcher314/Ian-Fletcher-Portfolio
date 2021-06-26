import React from "react";
import "./style.css";
import image from "../../images/ian2.jpg"

function Jumbotron() {
    return (
        <div>
      <div class="container center">
        <img src={image} alt="Ian's Photo" class="container circle responsive-img hide-on-med-and-down"></img>
    </div>
      </div>
      );
}

export default Jumbotron;