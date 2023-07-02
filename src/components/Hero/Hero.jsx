import React, { useState, useEffect } from 'react'

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
        <span >Hi, I'm <span className="hero__colorH1">Johnny</span>.</span>
        <br />
        <span>I'm a Front End Developer.</span>
      </h1>
      <span className="cta-btn cta-btn--hero">123</span>
      <FontAwesomeIcon icon="fa-solid fa-file" />
    </div>
  )
}
