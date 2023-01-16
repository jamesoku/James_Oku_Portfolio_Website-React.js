import React from 'react'
import './testimonials.css'
const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <div className='container testimonials__container'>
        <article className='testimonial'>
          <div className='client__avatar'>
            <img src="https://media.licdn.com/dms/image/C5603AQFGppgIWkAdCg/profile-displayphoto-shrink_800_800/0/1649370200092?e=1678320000&v=beta&t=zsB8m4dqJboGORjot7d5arRY9ySmvLoqoUWlKryoxkY" alt="" />
          </div>
          <h5>Christopher Liechty</h5>
            <small className='client__review'>
                James did an internship with Clarify on our data analytics team. During the time he was 
                there we were managing exponential growth in COVID-19 testing. 
                James was very proactive in coming up with code to automate and simplify contact 
                management and sample tracking. I like the way he solves problems. I recommend James 
                for any data management or software development team. 
            </small>
        </article>
      </div>
    </section>
  )
}

export default testimonials