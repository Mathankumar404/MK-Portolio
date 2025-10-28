import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-images'>
        <a href=""><img src="/images/facebook.png" alt="facebook" /></a>
       <a href="https://github.com/Mathankumar404" target='_blank'> <img src="/images/github.png" alt="github" /></a>
       <a href="https://www.linkedin.com/in/mathankumar-p-000439290" target='_blank'> <img src="/images/linkedin.png" alt="linkedin" /></a>
       <a href=""><img src="/images/twitter.png" alt="X" /></a> 
      </div>

<p className='copyrights'> 
 <span className='copyrightsymbol'>©</span>All Rights reserved 2025 | <span className='name'>Mathankumar</span>
</p>
    </div>
  )
}

export default Footer
