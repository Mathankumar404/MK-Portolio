import React from 'react'
import "./Hero.css"
const Hero = () => {
  return (
    <div id='hero'>
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
            <a href="mailto:mathankvm123@gmail.com?subject=Hiring%20Inquiry&body=Hi%20Mathankumar,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you." target='_blank'>
            <button className='Hireme'>
             Hire Me
            </button>
            </a>
            <a  href="/assets/Mathankumar_cv.pdf" download={"Mathankumar_CV.pdf"} >
            <button className='DownloadCV' >
              Download CV
            </button>
            </a>
          </div>
      </div>

      <div className='heroimagediv'>
        <img src="/images/mathan.jpg" alt="heroimage" />
      </div>
    </div>
  )
}

export default Hero
