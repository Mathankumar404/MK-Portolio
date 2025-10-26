import React from 'react'
import "./Projects.css"
const Projects = () => {

  const projects=["E-commerce Development","Smart parking and payment system",
    "Movie Search App -  IMDB Explorer","Login/Signup Website with Authentication","Blog website","FlipKart Clone"
  ]
  return (
    <div className='portfolio'>
      <div className='portfolioheadings'>
        <span className='portfolioTitle'>MY PORTOLIO</span>
        <span className='visitmyportfolio'>Visit My Portfolio</span>
      </div>

      <div className='Myprojects'>
        {projects.map((item)=>(
        <div className='Project'>
             <span className='projectname'>{item}</span>
        </div>
))}
      </div>
    </div>
  )
}

export default Projects
