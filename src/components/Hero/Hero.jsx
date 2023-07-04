import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const Hero = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);
  return (
    <div id="hero" className='hero'>
      <h1 className="hero__h1">
        Hi, I'm <span className="hero__colorH1">Johnny.</span>
        <br />
        I'm a Front End Developer.
      </h1>
      <p className="hero__cta">
        <a href="https://github.com/ooospooky" target="_blank" >
          <span className="cta-btn cta-btn--hero">
            GitHub	&thinsp;
            <FontAwesomeIcon icon={faGithub} />
          </span>
        </a>
        <a href="https://drive.google.com/file/d/1HmA8RRqg6JEZbMwOmPxNQeatVsbQ7XvO/view?usp=sharing" target="_blank" >
          <span className="cta-btn cta-btn--hero">
            Resume  &thinsp;
            <FontAwesomeIcon icon={faFile} />
          </span>
        </a>
      </p>


    </div>
  )
}
