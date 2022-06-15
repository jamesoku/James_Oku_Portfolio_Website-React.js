import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BiBookBookmark} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'
import {useState} from 'react'

const nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <div id='nav'>
      <a href="#"  onClick={() => setActiveNav('#')}  className={activeNav === '#' ? 'active': ''  }><AiFillHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className ={activeNav === '#about' ? 'active': ''}><BiUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className ={activeNav === '#experience' ? 'active': ''}><BiBookBookmark/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className ={activeNav === '#services' ? 'active': ''}><RiServiceLine/></a>
      <a href="#contact"onClick={() => setActiveNav('#contact')} className ={activeNav === '#contact' ? 'active': ''}><AiOutlineMessage/></a>
    </div>
    
  )
}

export default nav