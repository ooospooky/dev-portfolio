import React, { useState } from 'react'
import { Link } from 'react-scroll'
export const Navbar = () => {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const toggleChange = () => {
    console.log('toggleChange')
    setCheckboxChecked(!checkboxChecked)
  }
  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <h3 className='navbar__h3'>Johnny.dev</h3>
      </div>
      <div className='navbar__menu'>
        <ul className='navbar__ul'>
          <li><Link to="hero" smooth duration={300}>Home</Link></li>
          <li> <Link to="skills" smooth duration={300}>Skills</Link></li>
          <li> <Link to="project" smooth duration={300}>Projects</Link></li>
          <li><Link to="about" smooth duration={300}>About</Link></li>
          <li><Link to="contact" smooth duration={300}>Contact</Link></li>
        </ul>
      </div>

      {/* RWD */}
      <div className="mobileNavbar">
        <input type="checkbox" className="navigation__checkbox" id="navi-toggle" checked={checkboxChecked} onChange={toggleChange} ></input>
        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item" >
              <Link to="hero" smooth duration={300} onClick={toggleChange} className="navigation__link">
                Home
              </Link>
            </li>
            <li className="navigation__item">
              <Link to="skills" smooth duration={300} onClick={toggleChange} className="navigation__link">
                Skills
              </Link>
            </li>
            <li className="navigation__item">
              <Link to="project" smooth duration={300} onClick={toggleChange} className="navigation__link">
                Projects
              </Link>
            </li>
            <li className="navigation__item">
              <Link to="about" smooth duration={300} onClick={toggleChange} className="navigation__link">
                About
              </Link>
            </li>
            <li className="navigation__item">
              <Link to="contact" smooth duration={300} onClick={toggleChange} className="navigation__link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

    </div>
  )
}
