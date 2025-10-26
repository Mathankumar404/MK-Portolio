import React from 'react'
import "./Contact.css"
const Contact = () => {
  return (
    <div className='contact'>
      <div className='contactheadings'>
           <span className='contacttitle'>CONTACT</span>
           <span className='contactSubtitle'>Contact With Me</span>
      </div>
      <div className='contactContainer'>
        <div className='letstalkContanier'>
              <span className='letstalk'>Let's Talk</span>
              <img src="/images/Let's_talk.png" alt="letstalk"className='letstalkimage' />
              <ul className='contactdetails'>
                <li ><img src="/images/mail.png" alt="mail" />  mathankvm123@gmail.com</li>
                <li ><img src="/images/phone.png" alt="mail" />+91 9363376589</li>
                <li ><img src="/images/location.png" alt="mail" />8/85 ,chekkadi street ,kuruvikulam-627754.</li>
              </ul>
        </div>
        <div className='contactform'>
          <input type="text" placeholder='Full Name' />
          <input type="text" placeholder='Email'/>
          <input type="text" placeholder='Subject'/>
          <textarea name="Yourmessage" id="yourmessage" placeholder='Your Message'></textarea>
          <button className='sendmessagebtn'>Send Message</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
