import React from 'react'
import'./experience.css'
import {GoVerified} from 'react-icons/go'

const experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__content'>
          <h3>Languages</h3>
          <div className='experience__content2'>
          <article className='experience__details'>
          <GoVerified className='experience__details-icon'/>
          <div>
          <h4>HTML</h4>
          <small>Experienced</small>
          </div>
          </article>

          <article className='experience__details'>
          <GoVerified className='experience__details-icon'/>
          <div>
          <h4>CSS</h4>
          <small>Intermediate</small>
          </div>
          </article>

          <article className='experience__details'>
          <GoVerified className='experience__details-icon'/>
          <div>
          <h4>Javascript</h4>
          <small>Intermediate</small>
          </div>
          </article>

          <article className='experience__details'>
          <GoVerified className='experience__details-icon'/>
          <div>
          <h4>Python</h4>
          <small>Intermidiate</small>
          </div>
          </article>

          <article className='experience__details'>
          <GoVerified className='experience__details-icon'/>
          <div>
          <h4>C++</h4>
          <small>Intermediate</small>
          </div>
          </article>

          <article className='experience__details'>
          <GoVerified className='experience__details-icon'/>
          <div>
          <h4>Kotlin</h4>
          <small>Basic</small>
          </div>
          </article>

          <article className='experience__details'>
          <GoVerified className='experience__details-icon'/>
          <div>
          <h4>PHP</h4>
          <small>Basic</small>
          </div>
          </article>

          <article className='experience__details'>
          <GoVerified className='experience__details-icon'/>
          <div>
          <h4>Typescript</h4>
          <small>Basic</small>
          </div>
          </article>
        </div>
        </div>

        <div className='experience__content'>
          <h3>Technologies</h3>
          <div className='experience__content2'>
          <article className='experience__details'>
          <GoVerified className='experience__details-icon'/>
          <div>
          <h4>Node.js</h4>
          <small>Basic</small>
          </div>
          </article>

          <article className='experience__details'>
          <GoVerified className='experience__details-icon'/>
          <div>
          <h4>React.js</h4>
          <small>Intermediate</small>
          </div>
          </article>

          <article className='experience__details'>
          <GoVerified className='experience__details-icon'/>
          <div>
          <h4>Git</h4>
          <small>Intermediate</small>
          </div>
          </article>

          <article className='experience__details'>
          <GoVerified className='experience__details-icon'/>
          <div>
          <h4>Jquery</h4>
          <small>Basic</small>
          </div>
          </article>

          <article className='experience__details'>
          <GoVerified className='experience__details-icon'/>
          <div>
          <h4>Github</h4>
          <small>Intermediate</small>
          </div>
          </article>
          </div>


        </div>
      </div>

    </section>
  )
}

export default experience