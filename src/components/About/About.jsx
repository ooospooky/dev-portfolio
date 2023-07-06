import React, { useState, useEffect } from 'react'
import { Fade } from "react-awesome-reveal";

import { fadeupAnimation, aboutContentAnimation } from '../../Animations/Animation'

export const About = () => {
  const [isDesktop, setIsDesktop] = useState(true)
  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true)
    } else {
      setIsDesktop(false)
    }
  },[])
  return (
    <section id="about" className='about'>
      <Fade triggerOnce={true} delay={400} keyframes={isDesktop ? fadeupAnimation : aboutContentAnimation} >
        <div className='about__img' > </div>
      </Fade>
      <div className='about__content'>
        <Fade triggerOnce={true} delay={400} keyframes={aboutContentAnimation} >

          <h2 className='about__h2'>About Me</h2>
          <h3>A dedicated Front-end Developer</h3>
          <p>As a Junior Front-End Developer, I excel in designing and maintaining responsive websites that offer a smooth user experience. I have a deep understanding of HTML, CSS, and JavaScript and can create visually appealing web elements and effects using these technologies. I also familiar with the React framework and can develop highly interactive and scalable single-page applications. Additionally, I am proficient in CSS preprocessors like SCSS, which help me organize and manage code more efficiently, speeding up the development process.</p>
        </Fade>

      </div>
    </section>
  )
}
