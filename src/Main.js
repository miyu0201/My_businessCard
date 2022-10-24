import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, fabLinkedin,faUser} from '@fortawesome/free-solid-svg-icons';

export default function Main(){
 
return(
        <div className="main">
         <h3 className="name">Minghui Yu</h3>
         <p className="title">Frontend Developer</p>
         <p className="web">https://github.com/miyu0201</p>
         <div className="button">
          <button className="email" onClick={() => window.location = 'mailto:y.minghui@yahoo.com'}>  <FontAwesomeIcon icon={faEnvelope}/> Email</button>
         <a href="http://www.linkedin.com/in/minghuiyu88" style={{ textDecoration: "none"}}> <button className="linkedin">  <FontAwesomeIcon icon={faUser}/> Linkedin</button></a>
         </div>
         <div className="content">
         <h4 >About</h4>
           <p>
           Dedicated and motivated web developer focusing on front-end development in JavaScript, ReactJS, HTML, and CSS. Currently, working in a company providing software solutions for the effective use of power transformers. I helped the company develop the first proof of concept and accessible prototype to showcase to the clients/investors. Keen to utilize my skills in front-end development, UI Design, user-flow design, and prototyping to create a useful web with a heavy emphasis on excellent user experience. Seeking junior or mid-level opportunities to expand skills while facilitating company growth.
           </p>
           <h4 >Skills</h4>
           
           <ul>
          <li> Front-End Skills: ReactJS, HTML, CSS, JavaScript libraries (Redux, BootStrap, Chart.JS, JSON, DOM, etc. )</li>
 <li>User Flow Design and Prototyping: Figma, Sketch, visual-paradigm </li>
 <li>Version Control Systems: Git, Github</li>
 <li>Responsive Web Design: Web Components Development and Functionality Implementation, UX and UI Design</li>
 <li>Unit Testing/Debugging: React Testing Library and Jest </li>
 <li>Human-computer Interactive Design: Design for Immersive Technology AR and VR (2 year education): Unity, C#,  ARCore, ARCore, NodeRed</li>
           </ul>
         </div>
        </div>
    )
}