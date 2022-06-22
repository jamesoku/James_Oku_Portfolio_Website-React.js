import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'



const footer = () => {
  return (
    <footer >
      <a href="#" className='footer__logo'>James Oku</a>

      <ul className='permalinks'>
        <li><a href="#"> Home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#Experience"> Experience</a></li>
        <li><a href="#Portolio"> Portolio</a></li>
        <li><a href="#Testimonals"> Testimonals</a></li>
        <li><a href="#Contact">Contact</a></li>

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