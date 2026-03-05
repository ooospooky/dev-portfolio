import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Fade } from "react-awesome-reveal";

import { fadeupAnimation } from "../../Animations/Animation";
import chart from "../../images/chart.png";
import whatShouldIWear from "../../images/whatShouldIWear.png";
import foodOrder from "../../images/foodOrder.png";
import appleAccessoriesImg from "../../images/appleAccessories.png";

export const Projects = () => {
  return (
    <section id="project" className="project">
      <div className="container">
        <h2 className="project__h2"> PROJECTS </h2>
        {/* Food Order System */}
        <Fade triggerOnce={true} delay={300} keyframes={fadeupAnimation}>
          <div className="project-wrapper project-wrapper__even">
            <div className="projectContent">
              <h3 className="projectContent__h3">Apple Accessories</h3>
              <p className="projectContent__p">
                Apple accessories e-commerce clone built with Next.js,
                TypeScript, and Tailwind CSS. Features XState for cart state
                management and Stripe integration for secure checkout.
              </p>
              <div className="projectContent__stack">
                <p>Next.js</p>
                <p>Typescript</p>
                <p>XState</p>
              </div>
              <div className="projectContent__btn">
                <p className="project__cta">
                  <a
                    href="https://github.com/ooospooky/apple-accessories"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="cta-btn cta-btn--hero">
                      Code &thinsp;
                      <FontAwesomeIcon icon={faGithub} />
                    </span>
                  </a>
                </p>
                <p className="project__cta">
                  <a
                    href="https://apple-accessories.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="cta-btn cta-btn--hero">
                      Live Demo &thinsp;
                      {/* <FontAwesomeIcon icon={faArrowAltUpRight} /> */}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </span>
                  </a>
                </p>
              </div>
            </div>
            <div className="projectImg">
              <a
                href="https://apple-accessories.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="img"
                  src={appleAccessoriesImg}
                  alt="apple accessories"
                />
              </a>
            </div>
          </div>
        </Fade>

        <Fade triggerOnce={true} delay={300} keyframes={fadeupAnimation}>
          <div className="project-wrapper project-wrapper__odd">
            <div className="projectImg">
              <a
                href="https://github.com/ooospooky/What-Should-I-Wear"
                target="_blank"
                rel="noreferrer"
              >
                {/* <img className='img' src="https://i.ibb.co/5s6PrR8/2023-06-07-3-04-16.png" /> */}

                <img className="img" src={whatShouldIWear} alt="img" />
              </a>
            </div>
            <div className="projectContent">
              <h3 className="projectContent__h3">What Should I Wear</h3>
              <p className="projectContent__p">
                AI-powered clothing recommendation app using React and Gemini
                AI. Provides dress suggestions based on current and forecasted
                weather conditions.
              </p>
              <div className="projectContent__stack">
                <p>React</p>
                <p>Gemini AI</p>
                <p>Scss</p>
              </div>
              <div className="projectContent__btn">
                <p className="project__cta">
                  <a
                    href="https://github.com/ooospooky/What-Should-I-Wear"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="cta-btn cta-btn--hero">
                      Code &thinsp;
                      <FontAwesomeIcon icon={faGithub} />
                    </span>
                  </a>
                </p>
                <p className="project__cta">
                  <a
                    href="https://what-should-i-wear-bd38a.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="cta-btn cta-btn--hero">
                      Live Demo &thinsp;
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};
