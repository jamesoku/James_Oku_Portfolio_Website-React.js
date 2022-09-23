import React from 'react'
import'./experience.css'
import {GoVerified} from 'react-icons/go'
import {ImHtmlFive} from 'react-icons/im'
import {SiCss3} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {SiPython} from 'react-icons/si'
import {SiCplusplus} from 'react-icons/si'
import {SiKotlin} from 'react-icons/si'
import {TbBrandPhp} from 'react-icons/tb'
import {SiTypescript} from 'react-icons/si'
import {SiAngular} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {SiGit} from 'react-icons/si'
import {SiGithub} from 'react-icons/si'
import {SiNodedotjs} from 'react-icons/si'
import {SiDocker} from 'react-icons/si'
import {SiJquery} from 'react-icons/si'









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
          <ImHtmlFive className='experience__details-icon'/>
          <div>
          <h4>HTML</h4>
          <small>Experienced</small>
          </div>
          </article>

          <article className='experience__details'>
          <SiCss3 className='experience__details-icon'/>
          <div>
          <h4>CSS</h4>
          <small>Intermediate</small>
          </div>
          </article>

          <article className='experience__details'>
          <SiJavascript className='experience__details-icon'/>
          <div>
          <h4>Javascript</h4>
          <small>Intermediate</small>
          </div>
          </article>

          <article className='experience__details'>
          <SiPython className='experience__details-icon'/>
          <div>
          <h4>Python</h4>
          <small>Intermidiate</small>
          </div>
          </article>

          <article className='experience__details'>
          <SiCplusplus className='experience__details-icon'/>
          <div>
          <h4>C++</h4>
          <small>Intermediate</small>
          </div>
          </article>

          <article className='experience__details'>
          <SiTypescript className='experience__details-icon'/>
          <div>
          <h4>Typescript</h4>
          <small>Intermediate</small>
          </div>
          </article>

          <article className='experience__details'>
          <SiKotlin className='experience__details-icon'/>
          <div>
          <h4>Kotlin</h4>
          <small>Basic</small>
          </div>
          </article>

          <article className='experience__details'>
          <TbBrandPhp className='experience__details-icon'/>
          <div>
          <h4>PHP</h4>
          <small>Basic</small>
          </div>
          </article>

          
        </div>
        </div>

        <div className='experience__content'>
          <h3>Technologies</h3>
          
          <div className='experience__content2'>
          
          <article className='experience__details'>
          <SiAngular className='experience__details-icon'/>
          <div>
          <h4>Angular.js</h4>
          <small>Intermediate</small>
          </div>
          </article>

          <article className='experience__details'>
          <SiReact className='experience__details-icon'/>
          <div>
          <h4>React.js</h4>
          <small>Intermediate</small>
          </div>
          </article>

          <article className='experience__details'>
          <SiGit className='experience__details-icon'/>
          <div>
          <h4>Git</h4>
          <small>Intermediate</small>
          </div>
          </article>

          <article className='experience__details'>
          <SiGithub className='experience__details-icon'/>
          <div>
          <h4>Github</h4>
          <small>Intermediate</small>
          </div>
          </article>

          <article className='experience__details'>
          <SiNodedotjs className='experience__details-icon'/>
          <div>
          <h4>Node.js</h4>
          <small>Basic</small>
          </div>
          </article>

          <article className='experience__details'>
          <SiDocker className='experience__details-icon'/>
          <div>
          <h4>Docker</h4>
          <small>Basic</small>
          </div>
          </article>


          <article className='experience__details'>
          <SiJquery className='experience__details-icon'/>
          <div>
          <h4>Jquery</h4>
          <small>Basic</small>
          </div>
          </article>

          </div>


        </div>
      </div>

    </section>
  )
}

export default experience