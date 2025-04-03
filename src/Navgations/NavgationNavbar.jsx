import React from 'react'
import "./NavgationNavbar.css"
import { Link } from 'react-router-dom'

export default function NavgationNavbar() {
  return (
    <div>
      <header>
        <div>
          <h1>Logo</h1>
        </div>
        <nav>
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/NavgationForm">Form</Link></li>
            <li><Link to="/NavgationData">Show Data</Link></li>
          </ul>
        </nav>
       </header>
    </div>
  )
}
