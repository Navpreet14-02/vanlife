import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <p className="name"><Link to={'/'}>#VANLIFE</Link></p>
      <ul className="nav-items">
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/about'}>Vans</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar