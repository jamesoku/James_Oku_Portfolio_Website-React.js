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
            <img src="https://cdn.dribbble.com/users/297873/screenshots/6532744/tic-tac-toe_in_webassembly_for_go_web_4x.png?compress=1&resize=1000x750&vertical=top" alt="" />
          </div>
          <h3>Tic-Tac-Toe Game With Python</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/jamesoku/Tick_tac_toe" className='btn btn-primary' target='_blank'>Github</a>
            {/* <a href="javascript:void(0)" className='btn btn-primary' target='_blank' >Live Demo</a> */}
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src="https://cdn.dribbble.com/users/788099/screenshots/5404517/media/2604d91cd1d7167d60a3e215c0c66448.png?compress=1&resize=800x600&vertical=top" alt="" />
          </div>
          <h3>Fortune Telling Game Made With Kotlin</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/jamesoku/Fortune_telling_games" className='btn btn-primary' target='_blank'>Github</a>
            {/* <a href="javascript:void(0)" className='btn btn-primary' target='_blank' >Live Demo</a> */}
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src="https://cdn.dribbble.com/users/375867/screenshots/9198154/media/5b17c81352a23808a9ab8ae65ad90dcf.jpg?compress=1&resize=800x600&vertical=top" alt="" />
          </div>
          <h3>Flappy Ball Game Made With Javascript</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/jamesoku/Flappy-ball" className='btn btn-primary' target='_blank'>Github</a>
            {/* <a href="javascript:void(0)" className='btn btn-primary' target='_blank' >Live Demo</a> */}
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src="https://cdn.dribbble.com/users/434324/screenshots/16703759/media/262567cd857de138946da270cf1a804a.png?compress=1&resize=1000x750&vertical=top" alt="" />
          </div>
          <h3>James University Made With HTML and CSS</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/jamesoku/James-University" className='btn btn-primary' target='_blank'>Github</a>
            {/* <a href="javascript:void(0)" className='btn btn-primary' target='_blank' >Live Demo</a> */}
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src="https://cdn.dribbble.com/users/5170831/screenshots/17035515/media/2d554e4b4030d294dbfc3b31be2ff7fb.png?compress=1&resize=1000x750&vertical=top" alt="" />
          </div>
          <h3>Portfolio Website Made With React.js</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/jamesoku/personal_website" className='btn btn-primary' target='_blank'>Github</a>
            {/* <a href="javascript:void(0)" className='btn btn-primary' target='_blank' >Live Demo</a> */}
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src="https://cdn.dribbble.com/userupload/2795361/file/original-982f61a08ac7e011c95add9fea6a8ad2.png?compress=1&resize=1200x900" alt="" />
          </div>
          <h3>Shopping Website Made With Node.js</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/jamesoku/Team-activity-1" className='btn btn-primary' target='_blank'>Github</a>
            {/* <a href="javascript:void(0);" className='btn btn-primary' target='_blank' >Live Demo</a> */}
          </div>
        </article>
      
        
      </div>
    </section>
  )
}

export default portfolio