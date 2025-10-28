import React from 'react'
import "./About.css"
import { motion } from 'framer-motion'
const About = () => {
  return (
    <div id='AboutMe'>
      <motion.div className='myimage'

        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}>
        <img src="/images/mathan2.jpg" alt="mathan" />
      </motion.div>
      <motion.div className='About'
      
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}>
        <span className='abouttitle'>ABOUT ME</span>
      <br />
      <h2 className='subtitle'>Frontend Developer</h2>
      <p className='AboutContent'>Front-End Developer skilled in React.js, Next.js, HTML, CSS, JavaScript, Tailwind CSS. Experienced in building
responsive, user-friendly, and robust web applications with clean, efficient code. Passionate about creating
seamless user experiences and implementing modern front-end best practices</p>
<p className='AboutContent'>I constantly explore new trends in front-end development
   to stay ahead of the curve and bring creative, efficient solutions to 
   real-world problems.</p>

      </motion.div>
      
    </div>
  )
}

export default About
