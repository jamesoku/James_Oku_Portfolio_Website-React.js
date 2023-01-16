import React from 'react'
import './testimonials.css'

import { Pagination,Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'



import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      pagination={true} modules={[Pagination, Navigation]} spaceBetween={40}
      >
        <SwiperSlide className='testimonial'>
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
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src="https://media.licdn.com/dms/image/C5603AQGBRnKuKHXShg/profile-displayphoto-shrink_800_800/0/1539210817127?e=1679529600&v=beta&t=iYStcb_NN-HkcfKmDA79qg5m3rjrK5FLu9Of23puFcE" alt="" />
          </div>
          <h5>Cody Hatch </h5>
            <small className='client__review'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi 
                soluta dolorem eos a tenetur sapiente hic reiciendis odit sed ullam laborum necessitatibus
                 quam, aliquam, totam aut dignissimos qui. Delectus, veritatis? 
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default testimonials