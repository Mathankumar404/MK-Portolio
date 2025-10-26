import React from 'react'
import "./Hero.css"
const Hero = () => {
  return (
    <div className='hero'>
        <div className='introduction'>
      <span className='welcome'>Welcome To My World</span>
      <h2 className="Iammathan">HI I'M <span className='name'>MATHANKUMAR</span> A DEVELOPER</h2>
      <p className='explanation'>I am a Front-End Developer with strong expertise in 
        React.js, Next.js, HTML, CSS, JavaScript, and Tailwind CSS. I specialize in developing
         responsive, user-friendly, and high-performance web applications that deliver seamless
          experiences across all devices.
          </p>
      <p className='explanation'>With a passion for modern web technologies and clean, 
        maintainable code, I focus on translating design concepts into functional, 
        visually appealing interfaces. I enjoy working with dynamic teams to implement 
        best practices in UI/UX, optimize performance, and ensure scalability.
</p>


          <div className='Herobuttons'>
            <button className='Hireme'>
             Hire Me
            </button>
            <button className='DownloadCV'>
              Download CV
            </button>
          </div>
      </div>

      <div className='heroimagediv'>
        <img src="/images/mathan.jpg" alt="heroimage" />
      </div>
    </div>
  )
}

export default Hero
