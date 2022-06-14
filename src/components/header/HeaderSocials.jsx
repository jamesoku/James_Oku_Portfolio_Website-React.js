import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
     <div className='header__socials'>
        <span className='first'> <a href="https://www.linkedin.com/in/james-nnanna-oku/" target="_blank" ><BsLinkedin/></a></span>
        <div><a href="https://github.com/jamesoku" target="_blank"><AiFillGithub/></a></div>
     </div>
  )
}

export default HeaderSocials