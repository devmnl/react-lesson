import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJsSquare,
  faCss3Alt,
  faBootstrap,
  faJava,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>About Me</h2>
        <img src="manoel-logo.jpeg" alt="Avatar" className="avatar" />
        <p>
          Hello! I'm Manoel Franco, a software engineering student with a deep
          passion for everything related to technology, especially software
          development. Despite still being in school, I have hands-on experience
          in the field, specializing in JavaScript, React, and various backend
          technologies. I thrive on turning ideas into reality through code.
        </p>

        {/* Ícones das Tecnologias com Animação de Slide */}
        <div className="tech-icons-container">
          <div className="tech-icons">
            <FontAwesomeIcon icon={faReact} size="3x" title="React" className="tech-icon" />
            <FontAwesomeIcon icon={faJsSquare} size="3x" title="JavaScript" className="tech-icon" />
            <FontAwesomeIcon icon={faCss3Alt} size="3x" title="SASS" className="tech-icon" />
            <FontAwesomeIcon icon={faBootstrap} size="3x" title="Bootstrap" className="tech-icon" />
            <FontAwesomeIcon icon={faJava} size="3x" title="Java" className="tech-icon" />
            <FontAwesomeIcon icon={faNodeJs} size="3x" title="Node.js" className="tech-icon" />
            {/* Repete os ícones para um efeito contínuo */}
            <FontAwesomeIcon icon={faReact} size="3x" title="React" className="tech-icon" />
            <FontAwesomeIcon icon={faJsSquare} size="3x" title="JavaScript" className="tech-icon" />
            <FontAwesomeIcon icon={faCss3Alt} size="3x" title="SASS" className="tech-icon" />
            <FontAwesomeIcon icon={faBootstrap} size="3x" title="Bootstrap" className="tech-icon" />
            <FontAwesomeIcon icon={faJava} size="3x" title="Java" className="tech-icon" />
            <FontAwesomeIcon icon={faNodeJs} size="3x" title="Node.js" className="tech-icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

