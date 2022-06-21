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
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/jamesoku" className='btn'>Github</a>
            <a href="" className='btn btn-primary' target='_blank' >Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src="https://cdn.dribbble.com/users/297873/screenshots/6532744/tic-tac-toe_in_webassembly_for_go_web_4x.png?compress=1&resize=1000x750&vertical=top" alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/jamesoku" className='btn'>Github</a>
            <a href="" className='btn btn-primary' target='_blank' >Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src="https://cdn.dribbble.com/users/297873/screenshots/6532744/tic-tac-toe_in_webassembly_for_go_web_4x.png?compress=1&resize=1000x750&vertical=top" alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/jamesoku" className='btn'>Github</a>
            <a href="" className='btn btn-primary' target='_blank' >Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src="https://cdn.dribbble.com/users/297873/screenshots/6532744/tic-tac-toe_in_webassembly_for_go_web_4x.png?compress=1&resize=1000x750&vertical=top" alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/jamesoku" className='btn'>Github</a>
            <a href="" className='btn btn-primary' target='_blank' >Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src="https://cdn.dribbble.com/users/297873/screenshots/6532744/tic-tac-toe_in_webassembly_for_go_web_4x.png?compress=1&resize=1000x750&vertical=top" alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/jamesoku" className='btn'>Github</a>
            <a href="" className='btn btn-primary' target='_blank' >Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src="https://cdn.dribbble.com/users/297873/screenshots/6532744/tic-tac-toe_in_webassembly_for_go_web_4x.png?compress=1&resize=1000x750&vertical=top" alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/jamesoku" className='btn'>Github</a>
            <a href="" className='btn btn-primary' target='_blank' >Live Demo</a>
          </div>
        </article>
      
        
      </div>
    </section>
  )
}

export default portfolio