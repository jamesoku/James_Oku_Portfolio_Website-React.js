import React from 'react'
import'./about.css'
import ME from '../../assets/Me.jpg'
import {BsAwardFill} from 'react-icons/bs'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className='about__cards'>
            <article className='about__card'>
              <BsAwardFill className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ years Coding</small>
            </article>
          </div>

          <div className='about__cards'>
            <article className='about__card'>
              <BsAwardFill className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ years Coding</small>
            </article>
          </div>

          <div className='about__cards'>
            <article className='about__card'>
              <BsAwardFill className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ years Coding</small>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}

export default about