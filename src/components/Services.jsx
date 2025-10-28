import "./Services.css";
import React from 'react'
import { motion } from "framer-motion";

const Services = () => {

  const images=["Web_development","Api_integration","Responsive_design","Problem_solving",
    "Security_maintainance","Database_management"]
  const explanation={
    "Web_development":"Building fast, modern, and scalable websites with clean code",
    "Api_integration":"Integrating APIs to make your apps communicate effortlessly",
    "Responsive_design":"Crafting interfaces that look stunning — everywhere, every time",
    "Problem_solving" :"Every problem has a logic — I just code the right answer",
    "Security_maintainance":"Protecting your web assets with robust, secure coding practices.",
    "Database_management":"Designing and maintaining databases for reliability and performance."
  }

  return (
    <div id="Myservices">
      <div className="servicesheading">
        <span className="servicetitle"> MY SERVICES</span>
       
        <span className="whatido">What I Do</span>
      </div>
      <br />
       {/* <div className="Services"> */}
          <div
        className="Services"
        
      >
        {images.map((item,index)=>(
           <motion.div className="service1" key={index}
           initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}>
                 <img src={`/images/${item}.png`} alt="service1" className="serviceimages"/>
               
                 <span className="serviceName">{item.replace("_"," ")}</span>
                 <p className="servicedetail">{explanation[item]}</p>
           </motion.div>
           ))
}
      </div>
    </div>
  )
}

export default Services
