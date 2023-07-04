import React from 'react'
import { Link } from 'react-scroll'
export const Navbar = () => {
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
    </div>
  )
}
