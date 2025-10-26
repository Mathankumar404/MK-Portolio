import React from 'react'
import "./About.css"
const About = () => {
  return (
    <div className='AboutMe'>
      <div className='myimage'>
        <img src="/images/mathan2.jpg" alt="mathan" />
      </div>
      <div className='About'>
        <span className='abouttitle'>ABOUT ME</span>
      <br />
      <h2 className='subtitle'>Frontend Developer</h2>
      <p className='AboutContent'>Front-End Developer skilled in React.js, Next.js, HTML, CSS, JavaScript, Tailwind CSS. Experienced in building
responsive, user-friendly, and robust web applications with clean, efficient code. Passionate about creating
seamless user experiences and implementing modern front-end best practices</p>
<p className='AboutContent'>I constantly explore new trends in front-end development
   to stay ahead of the curve and bring creative, efficient solutions to 
   real-world problems.</p>

      </div>
      
    </div>
  )
}

export default About
