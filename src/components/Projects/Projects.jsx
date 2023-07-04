import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowAltUpRight } from '@fortawesome/free-regular-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import whatShouldIWear from '../../images/whatShouldIWear.png';
export const Projects = () => {
  return (
    <section id="project" className='project'>
      <div className='container'>
        <h2 className='project__h2'> PROJECTS </h2>
        <div className='project-wrapper'>
          <div className='projectImg'>
          <a href="https://github.com/ooospooky/What-Should-I-Wear" target="_blank" >
            {/* <img className='img' src="https://i.ibb.co/5s6PrR8/2023-06-07-3-04-16.png" /> */}
            <img className='img' src={whatShouldIWear} />
            </a>
          </div>
          <div className='projectContent'>
            <h3 className='projectContent__h3'>What Should I Wear</h3>
            <p className='projectContent__p'> Make your life easier and more comfortable when it comes to deciding what to wear. By leveraging weather data, our service offers dress recommendations based on the current and forecasted weather conditions. </p>
            <div className='projectContent__stack'>
              <p>React</p>
              <p>Scss</p>
            </div>
            <div className='projectContent__btn'>
              <p className="project__cta">
                <a href="https://github.com/ooospooky/What-Should-I-Wear" target="_blank" >
                  <span className="cta-btn cta-btn--hero">
                    Code	&thinsp;
                    <FontAwesomeIcon icon={faGithub} />
                  </span>
                </a>
              </p>
              <p className="project__cta">
                <a href="https://what-should-i-wear-bd38a.web.app/" target="_blank" >
                  <span className="cta-btn cta-btn--hero">
                    Live Demo	&thinsp;
                    {/* <FontAwesomeIcon icon={faArrowAltUpRight} /> */}
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>


        <div className='project-wrapper'>

          <div className='projectContent'>
            <h3 className='projectContent__h3'>Cool Camp</h3>
            <p className='projectContent__p'>
              Let users to choose a camping site that suits their needs and preferences. Users can browse through various camping sites and make decisions based on ratings and reviews from other users. Additionally, users can provide their own ratings and leave feedback, sharing their thoughts and suggestions. </p>
            <div className='projectContent__stack'>
              <p>React</p>
              <p>Bootstarp</p>
            </div>
            <div className='projectContent__btn'>
              <p className="project__cta">
                <a href="https://github.com/ooospooky/CoolCamp" target="_blank" >
                  <span className="cta-btn cta-btn--hero">
                    Code	&thinsp;
                    <FontAwesomeIcon icon={faGithub} />
                  </span>
                </a>
              </p>
              <p className="project__cta">
                <a href="https://coolcamp-f0b6e.web.app/" target="_blank" >
                  <span className="cta-btn cta-btn--hero">
                    Live Demo	&thinsp;
                    {/* <FontAwesomeIcon icon={faArrowAltUpRight} /> */}
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </span>
                </a>
              </p>
            </div>
          </div>
          <div className='projectImg'>
          <a href="https://coolcamp-f0b6e.web.app/" target="_blank" >
            <img className='img' src="https://i.ibb.co/RYVhTDC/2023-07-03-2-59-57.png" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
