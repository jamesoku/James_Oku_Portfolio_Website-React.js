import React from 'react'
import './header.css'
import CTA from './cta'
import ME from '../../assets/Me.jpg'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>James Oku</h1>
        <h5 className ='text-light'>Software Engineer</h5>
        <CTA/>
        <HeaderSocials/>
        
        <div className='me'>
          <img src={ME} alt="me" />

        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>



      </div>
      
    </header>
  )
}

export default header