import React from 'react'
import "./Hero.css"
const Hero = () => {
  return (
    <div className='hero'>
        <div className='introduction'>
      <span className='welcome'>Welcome To My World</span>
      <h2>HI I'M <span className='name'>MATHANKUMAR</span> A DEVELOPER</h2>
      <p className='explanation'>Front-End Developer skilled in React.js, Next.js, HTML, CSS,
         JavaScript, Tailwind CSS. Experienced in building responsive, 
         user-friendly, and robust web applications with clean, efficient code.
          Passionate about creating seamless user experiences and implementing modern 
          front-end best practices.</p>
      </div>

      <div className='heroimagediv'>
        <img src="/images/Hero_image.png" alt="heroimage" />
      </div>
    </div>
  )
}

export default Hero
