import React, { useState } from 'react'
import "./Contact.css"
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
const Contact = () => {

const handleContactDetails=(e)=>{
   e.preventDefault();
 emailjs.sendForm(
    'service_h3qy6zk',
    'template_3fiosqk',
    e.target,
    'daa0laPHj4ulYLBIg'
  ).then(() => {
    alert("Message sent successfully ✅");
    e.target[0].value="";
    e.target[1].value="";
    e.target[2].value="";
    e.target[3].value="";

  }).catch((err) => {
    console.error(err);
    alert("Failed to send ❌");
  });
}
  return (
    <div id='contact'>
      <div className='contactheadings'>
           <span className='contacttitle'>CONTACT</span>
           <span className='contactSubtitle'>Contact With Me</span>
      </div>
      <div className='contactContainer'>
        <motion.div className='letstalkContanier' 
          initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }} >
              <span className='letstalk'>Let's Talk</span>
              <img src="/images/Let's_talk.png" alt="letstalk"className='letstalkimage' />
              <ul className='contactdetails'>
                <li ><img src="/images/mail.png" alt="mail" />  mathankvm123@gmail.com</li>
                <li ><img src="/images/phone.png" alt="mail" />+91 9363376589</li>
                <li ><img src="/images/location.png" alt="mail" />8/85 ,chekkadi street ,kuruvikulam-627754.</li>
              </ul>
        </motion.div>
        <motion.form  className='contactform' onSubmit={(e)=>handleContactDetails(e)}
          
          initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}>
          <input type="text" placeholder='Full Name' name='Name'required/>
          <input type="text" placeholder='Email' name='Email'required/>
          <input type="text" placeholder='Subject' name="Subject" required/>
          <textarea name="Message" id="yourmessage"  placeholder='Your Message' required></textarea>
          <button className='sendmessagebtn' type='submit'>Send Message</button>
       </motion.form>
      </div>
    </div>
  )
}

export default Contact
