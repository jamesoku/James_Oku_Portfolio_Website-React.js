import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'



const footer = () => {
  return (
    <footer >
      <a className='footer__logo'>James Oku</a>

      <ul className='permalinks'>
        <li><a href="#"> Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience"> Experience</a></li>
        <li><a href="#portfolio"> Portfolio</a></li>
        <li><a href="#testimonials"> Testimonals</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>
      <div className='footer_socials'>
        <a href="https://facebook.com"><AiFillFacebook/></a>
        <a href="https://Insatgram.com"><BsInstagram/></a>
        <a href="https://twitter.com"><AiOutlineTwitter/></a>
      </div>

      <div className='footer_copyright'>
        <p>&copy;James Oku. All rights reserved.</p>
      </div>

    </footer>
  )
}

export default footer