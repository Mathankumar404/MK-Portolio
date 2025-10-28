import React from 'react'
import "./Projects.css"
import { motion } from 'framer-motion'
const Projects = () => {

  const projects=["E-commerce Development","Smart parking and payment system",
    "Movie Search App -  IMDB Explorer","Login/Signup Website with Authentication","Blog website","FlipKart Clone"
  ]
  const projectImages=["Dreamik","smartparking","imdb","login","blog","flipkart"]

  return (
    <div id='portfolio'>
      <div className='portfolioheadings'>
        <span className='portfolioTitle'>MY PORTOLIO</span>
        <span className='visitmyportfolio'>Visit My Portfolio</span>
      </div>

      <motion.div className='Myprojects'
      initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}>
        {projects.map((item,index)=>(
        <div className='Project' key={index}>
          <img src={`/images/Projects/${projectImages[index]}.png`} alt={item}  className='projectimage'/>
             <span className='projectname'>{item}</span>
        </div>
))}
      </motion.div>
    </div>
  )
}

export default Projects
