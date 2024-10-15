import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJsSquare, faCss3Alt, faBootstrap, faJava, faNodeJs } from '@fortawesome/free-brands-svg-icons';


const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>About Me</h2>
        <img src="manoel-logo.jpeg" alt="Avatar" class="avatar"></img>
        <p>
          Hello! I'm Manoel Franco, a software engineer passionate about creating dynamic web applications.
          With expertise in JavaScript, React, and various backend technologies, I love turning ideas into reality
          through code.
        </p>
        <p>
          My journey in tech started with a fascination for how software can solve real-world problems. 
          I enjoy collaborating with teams and continuously learning new technologies to enhance my skills.
        </p>
        
        {/* Ícones das tecnologias */}
        <div className="tech-icons">
          <FontAwesomeIcon icon={faReact} size="3x" title="React" />
          <FontAwesomeIcon icon={faJsSquare} size="3x" title="JavaScript" />
          <FontAwesomeIcon icon={faCss3Alt} size="3x" title="SASS" />
          <FontAwesomeIcon icon={faBootstrap} size="3x" title="Bootstrap" />
          <FontAwesomeIcon icon={faJava} size="3x" title="Java" />
          <FontAwesomeIcon icon={faNodeJs} size="3x" title="Node.js" />
        </div>
      </div>
    </section>
  );
};

export default About;

