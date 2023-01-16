import React from 'react'
import './portfolio.css'

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src="https://cdn.dribbble.com/users/1392449/screenshots/17306221/media/b1d96635dc5cdca5141d5d4d0b7a1c8e.png?compress=1&resize=1000x750&vertical=top" alt="" />
          </div>
          <h3>Time Tracking Software (MEAN Stack)</h3>
          <div className='portfolio__item-cta'>
            <a href="" className='btn btn-primary' target='_blank'>Confidential</a>
            {/* <a href="javascript:void(0)" className='btn btn-primary' target='_blank' >Live Demo</a> */}
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src="https://cdn.dribbble.com/users/8865159/screenshots/17850194/media/3db88ca77b785236f13b075d11861e1e.png?compress=1&resize=400x300&vertical=top" alt="" />
          </div>
          <h3>Project Management App (React and Firebase)</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/jamesoku/OnionTask_project_management_app-React.js" className='btn' target='_blank'>Github</a>
            <a href="https://oniontask-project-management-app-react-js.pages.dev/" className='btn btn-primary' target='_blank' >Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src="https://cdn.dribbble.com/userupload/3907626/file/original-c86d3f9ce256553734fd9ae36bda7ba5.jpg?compress=1&resize=1200x900" alt="" />
          </div>
          <h3>Monster Killer (HTML, CSS and Javascript)</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/jamesoku/Monster-killer" className='btn' target='_blank'>Github</a>
            <a href="https://monster-killer.pages.dev/" className='btn btn-primary' target='_blank' >Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src="https://cdn.dribbble.com/users/434324/screenshots/16703759/media/262567cd857de138946da270cf1a804a.png?compress=1&resize=1000x750&vertical=top" alt="" />
          </div>
          <h3>James University (HTML and CSS)</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/jamesoku/James-University" className='btn' target='_blank'>Github</a>
            {/* <a href="javascript:void(0)" className='btn btn-primary' target='_blank' >Live Demo</a> */}
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src="https://cdn.dribbble.com/users/5170831/screenshots/17035515/media/2d554e4b4030d294dbfc3b31be2ff7fb.png?compress=1&resize=1000x750&vertical=top" alt="" />
          </div>
          <h3>Portfolio Website (React)</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/jamesoku/personal_website" className='btn' target='_blank'>Github</a>
            {/* <a href="javascript:void(0)" className='btn btn-primary' target='_blank' >Live Demo</a> */}
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src="https://cdn.dribbble.com/userupload/2795361/file/original-982f61a08ac7e011c95add9fea6a8ad2.png?compress=1&resize=1200x900" alt="" />
          </div>
          <h3>Shopping Website (HTML,CSS, Javascript)</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/jamesoku/Team-activity-1" className='btn' target='_blank'>Github</a>
            {/* <a href="javascript:void(0);" className='btn btn-primary' target='_blank' >Live Demo</a> */}
          </div>
        </article>
      
        
      </div>
    </section>
  )
}

export default portfolio