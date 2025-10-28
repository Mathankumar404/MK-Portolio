import React, { useEffect, useRef, useState } from 'react'
import "./Header.css"
const Header = () => {
const dropdownRef = useRef(null);
const menuRef=useRef(null);
    useEffect(() => {
    // close dropdown when clicking outside
    function handleClickOutside(event) {
      if(dropdownRef.current && !dropdownRef.current.contains(event.target) && 
      !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

    const [isOpen, setIsOpen] = useState(false);
    const handleToggle=()=> {
     setIsOpen((prev)=>!prev)
     console.log(isOpen)
}
  // const handleClose = () => setIsOpen(false);

  return (
    <div id='header'>
      <div id='title'>
      <img src="images/logo.png" alt="logo" id='logo'/>
      <h1 id='PortfolioTitle'>Portfolio</h1>
      </div>
      
      <div id='desktopMenu'>
        <ul className='navbar'>
           <a href="#hero"> <li className='navli'> Home </li></a>
            <a href="#AboutMe"> <li className='navli'>About me</li></a>
            <a href="#Myservices"> <li className='navli'>Services</li></a>
           {/* <a href="#hero"> <li>Testimonials</li></a> */}
           <a href="#portfolio"> <li className='navli'> Portfolio</li></a>
            <a href="#contact"> <li className='navli'>Contact</li></a>
            <li style={{textDecoration:"none"}} id='hiremebtn'
            className='navli hiremebutton no-underline'>
            <a href="mailto:mathankvm123@gmail.com?subject=Hiring%20Inquiry&body=Hi%20Mathankumar,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you." target='_blank'>
            <button id='Hireme'>Hire Me</button>
            </a>
            </li>
  
        </ul>
      </div>

<div className={`container ${isOpen ? "change" : ""}`}
        onClick={handleToggle}
        ref={menuRef}
 >
  <div className="bar1"></div>
  <div className="bar2"></div>
  <div className="bar3"></div>
</div>

<div className={`dropdownmenuContainer ${isOpen?'show':""}`}
  
//  style={{ display: isOpen ? "inline-block" : "none" }}
ref={dropdownRef}
 >
    <ul className='dropdown' >
  <a href="#hero">  <li><i className="fas fa-home icon"></i> Home</li></a>
    <a href="#AboutMe"><li><i className="fas fa-user icon"></i> About me</li></a>
 <a href="#Myservices">  <li><i className="fas fa-briefcase icon"></i> Services</li></a>
   <a href="#FaqSection"> <li><i className="fas fa-comment-dots icon"></i> FAQ</li></a>
   <a href="#portfolio"> <li><i className="fas fa-image icon"></i> Portfolio</li></a>
   <a href="#contact"> <li><i className="fas fa-envelope icon"></i> Contact</li></a>

    </ul>
</div>
    </div>
  )
}

export default Header
