import "./Faq.css"

import React, { useState } from 'react'
import { motion } from "framer-motion"
const Faq = () => {
     const questions=["What does a Frontend developer do?","Which technologies do you use?",
        "Can You Develop or Design Mobile Apps?","Do You Optimize websites for speed and SEO?",
        "Can you Customize designs or work with templates?"
    ]
    const [plus,setplus]=useState([true, ...Array(questions.length - 1).fill(false)]
)
   
  
const qaData = {
  "What does a Frontend developer do?":
    "A Frontend Developer focuses on building the visual and interactive parts of a website or web app that users directly interact with. This includes creating responsive layouts, improving user experience, and ensuring smooth functionality using HTML, CSS, JavaScript, and frameworks like React or Next.js.",

  "Which technologies do you use?":
    "I primarily use React.js and Next.js for frontend development, along with HTML, CSS, JavaScript, and Tailwind CSS for styling. I’m also comfortable working with APIs, Node.js for backend integration, and Git/GitHub for version control.",

 "Can You Develop or Design Mobile Apps?":
  "No, I currently focus on web development and front-end technologies like React.js and Next.js. However, I can design responsive web applications that perform well on mobile browsers and provide a seamless mobile-friendly experience.",

  "Do You Optimize websites for speed and SEO?":
    "Absolutely! I implement techniques like image optimization, lazy loading, code splitting, and caching to boost performance. For SEO, I focus on semantic HTML, meta tags, structured data, and fast page load times to improve visibility on search engines.",

  "Can you Customize designs or work with templates?":
    "Yes, I can customize pre-made templates to match your brand identity or design a layout from scratch. I ensure that every customization maintains a consistent style, responsiveness, and a professional look that aligns with your project goals."
};

const handleplusminus=(i)=>{
   setplus((prev)=>prev.map((val,index)=>(i===index?!val:false)))
}
  return (
    <div id="FaqSection">
      <div className="faqheadings"
      >
        <span className="faqtitle">FAQ? </span>
        <span className="faqsubtitle">Frequently Asked Questions</span>
      </div>
      <div className="Faqboxes">
       
      <motion.div className="questionsBox"
      
        initial={{ opacity: 0, y: -200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}>
        <ul className="questionslist">
          {questions.map((item,index)=>(
           <div key={index}>
       <li key={index} className="question" onClick={(e)=>handleplusminus(index,e)}>
      <span className={`plus ${plus[index]===true?"minus":''}`}   >{plus[index]===true?"-":"+"} </span> {item}
       </li>
      
       {plus[index]===true &&
       <p  className="answers">
           {qaData[item]}
       </p>
}
        </div>
))}
</ul>
      </motion.div>

      <motion.div className="faqMessagebox" 
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}>
         <div className="messagediv">
           <img src="images/message.png" alt="messsageicon" className="messageicon"/>
           <span className="messagesubtitle">Do you have more questions? </span>
           <span className="messagepara">Didn’t find the answer you were looking for?
Feel free to reach out,I’m here to help!</span>
<a href="#contact">
<button className="sendMessage"> Send a message</button>
</a>
         </div>
      </motion.div>
      </div>
    </div>
  )
}

export default Faq
