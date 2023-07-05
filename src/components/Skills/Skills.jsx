import React from 'react'
import { Fade } from "react-awesome-reveal";
import { left200Animation } from '../../Animations/Animation'

import javascript from '../../images/skills/javascript.png'
import typescript from '../../images/skills/typescript.png'
import python from '../../images/skills/python.png'
import html5 from '../../images/skills/html5.png'
import css from '../../images/skills/css.png'
import sass from '../../images/skills/sass.png'
import reactlogo from '../../images/skills/react.png'
import redux from '../../images/skills/redux.png'
import firebase from '../../images/skills/firebase.png'
import linux from '../../images/skills/linux3.png'
import git from '../../images/skills/git.png'
export const Skills = () => {

  return (
    <section id="skills" className='skills'>
      <h3>Skills</h3>
      {/* Languages */}
      <Fade triggerOnce={true} delay={300} keyframes={left200Animation} >
        <div className='skills__warper'>
          <h4>Languages</h4>
          <div className='skills__content'>
            <div>
              <img src={javascript} />
              <p>Javascript</p>
            </div>
            <div>
              <img src={typescript} />
              <p>Typescript</p>
            </div>
            <div>
              <img src={python} />
              <p>Python</p>
            </div>
          </div>
        </div>
      </Fade>
      {/* Front End */}
      <Fade triggerOnce={true} delay={500} keyframes={left200Animation} >
        <div className='skills__warper'>
          <h4>Front End</h4>
          <div className='skills__content'>
            <div>
              <img src={reactlogo} />
              <p>React</p>
            </div>
            <div>
              <img src={sass} />
              <p>Scss</p>
            </div>
            <div>
              <img src={redux} />
              <p>Redux</p>
            </div>
            <div>
              <img src={html5} />
              <p>HTML5</p>
            </div>
            <div>
              <img src={css} />
              <p>Css</p>
            </div>
          </div>
        </div>
      </Fade>
      <Fade triggerOnce={true} delay={700} keyframes={left200Animation} >
        {/* Other */}
        <div className='skills__warper'>
          <h4>Others</h4>
          <div className='skills__content'>
            <div>
              <img src={git} />
              <p>Git</p>
            </div>
            <div>
              <img src={linux} />
              <p>Linux</p>
            </div>
            <div>
              <img src={firebase} />
              <p>Firebase</p>
            </div>
          </div>
        </div>
      </Fade>
    </section >
  )
}
