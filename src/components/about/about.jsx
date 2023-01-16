import React from 'react'
import'./about.css'
import ME from '../../assets/Me3.JPG'
import {BsAwardFill} from 'react-icons/bs'
import {BsFolderCheck} from 'react-icons/bs'


const about = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className='about__me'>
          <div className="about__me-image">
            <img className='about_img' src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className='about__cards'>
            <article className='about__card'>
              <BsAwardFill className='about__icon'/>
              <h5>Experience</h5>
              <small>4+ years Coding</small>
            </article>
          
            <article className='about__card'>
              <BsFolderCheck className='about__icon'/>
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>
          </div>

          <p>Hi there, My name is James Oku, and I am a full stack developer from Lagos, Nigeria.
             I received my education at Brigham Young University Idaho (BYUI) and have developed 
             a well-rounded skill set in front-end and back-end development. I love web development
              and enjoy creating dynamic and interactive websites.</p>
          <p>In my free time, I enjoy a variety of hobbies like soccer, forex trading, video creation
             and editing, hiking, and spending time with my family. James is a well-rounded individual
              with a wide range of interests and talents.</p>

          <a href = "#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about