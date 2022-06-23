import React from 'react'
import'./about.css'
import ME from '../../assets/Me2.jpg'
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
          
            <article className='about__card'>
              <BsFolderCheck className='about__icon'/>
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>
          </div>

          <p>Hi there, My name is James Oku, and I am from Lagos, Nigeria. I am attending Brigham young
             university-Idaho while studying software engineering with an emphasis on web 
             development. I am passionate about Web development and coding because it makes me
              show my creative skills, and I'm just happy doing something I love.</p>
          <p>My other hobbies are soccer, forex trading, video creation/editing, hiking, 
            and spending time with family. If you wish to know more about me, contact me below.</p>

          <a href = "#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about