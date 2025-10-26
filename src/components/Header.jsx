import React, { useEffect, useRef, useState } from 'react'
import "./Header.css"
const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    function myFunction() {
     setIsOpen((prev)=>!prev)
     console.log(isOpen)
     
}


  return (
    <div id='header'>
      <div id='title'>
      <img src="images/logo.png" alt="logo" id='logo'/>
      <h1 id='portfolio'>Portfolio</h1>
      </div>
      
      <div id='desktopMenu'>
        <ul className='navbar'>
            <li> Home </li>
            <li>About me</li>
            <li>Services</li>
            <li>Testimonials</li>
            <li> Portfolio</li>
            <li>Contact</li>
            <li><button id='Hireme'>Hire Me</button></li>
        </ul>
      </div>

<div className={`container ${isOpen ? "change" : ""}`}
        onClick={myFunction}
 >
  <div className="bar1"></div>
  <div className="bar2"></div>
  <div className="bar3"></div>
</div>

<div className={`dropdownmenuContainer ${isOpen?'show':""}`}  
//  style={{ display: isOpen ? "inline-block" : "none" }}

 >
    <ul className='dropdown' >
  <li><i className="fas fa-home icon"></i> Home</li>
  <li><i className="fas fa-user icon"></i> About me</li>
  <li><i className="fas fa-briefcase icon"></i> Services</li>
  <li><i className="fas fa-comment-dots icon"></i> Testimonials</li>
  <li><i className="fas fa-image icon"></i> Portfolio</li>
  <li><i className="fas fa-envelope icon"></i> Contact</li>

    </ul>
</div>
    </div>
  )
}

export default Header
