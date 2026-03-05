import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

import {
  fadeupAnimation,
  aboutContentAnimation,
} from "../../Animations/Animation";

export const About = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, []);
  return (
    <section id="about" className="about">
      <Fade
        triggerOnce={true}
        delay={400}
        keyframes={isDesktop ? fadeupAnimation : aboutContentAnimation}
      >
        <div className="about__img"> </div>
      </Fade>
      <div className="about__content">
        <Fade triggerOnce={true} delay={400} keyframes={aboutContentAnimation}>
          <h2 className="about__h2">About Me</h2>
          <h3>A dedicated Front-end Engineer</h3>
          <p>
            As a Frontend Engineer with 2+ years of professional experience, I
            focus on building web applications that are both user-friendly and
            technically sound. I enjoy solving complex problems—whether it's
            architecting systems, diagnosing tricky browser bugs that affect
            production, or turning slow, frustrating experiences into smooth
            workflows.
          </p>
          <p>
            Beyond writing code, I care about improving team efficiency through
            better tooling and standards.
          </p>
          <p>
            I believe great software comes from understanding the problem
            deeply, writing code that scales, and ensuring the solution actually
            solves real needs.
          </p>
        </Fade>
      </div>
    </section>
  );
};
