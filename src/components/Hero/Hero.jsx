import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Fade } from "react-awesome-reveal";

import { customAnimation } from "../../Animations/Animation";

export const Hero = () => {
  return (
    <section id="hero" className="hero">
      <Fade triggerOnce={true} delay={500} keyframes={customAnimation}>
        <h1 className="hero__h1">
          Hi, I'm <span className="hero__colorH1">Johnny.</span>
          <br />
          I'm a Front End Developer.
        </h1>
      </Fade>
      <Fade triggerOnce={true} delay={1000} keyframes={customAnimation}>
        <p className="hero__cta">
          <a
            href="https://github.com/ooospooky"
            target="_blank"
            rel="noreferrer"
          >
            <span className="cta-btn cta-btn--hero">
              GitHub &thinsp;
              <FontAwesomeIcon icon={faGithub} />
            </span>
          </a>
          <a
            href="https://drive.google.com/file/d/1n_iu6ktPa7hCw80UvbZ09AzogynCQhee/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <span className="cta-btn cta-btn--hero">
              Resume &thinsp;
              <FontAwesomeIcon icon={faFile} />
            </span>
          </a>
        </p>
      </Fade>
    </section>
  );
};
