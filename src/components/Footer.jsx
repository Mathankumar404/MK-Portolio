import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-images'>
        <img src="/images/facebook.png" alt="facebook" />
        <img src="/images/github.png" alt="github" />
        <img src="/images/linkedin.png" alt="linkedin" />
        <img src="/images/twitter.png" alt="X" />
      </div>

<p className='copyrights'> 
 <span className='copyrightsymbol'>©</span>All Rights reserved 2025 | <span className='name'>Mathankumar</span>
</p>
    </div>
  )
}

export default Footer
