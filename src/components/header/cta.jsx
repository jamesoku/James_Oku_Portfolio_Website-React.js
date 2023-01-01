import React from 'react'
import CV from '../../assets/cv2.pdf'

const cta = () => {
  return (
    <div className='cta'>
        <a className="btn down" href={CV}download>Download CV</a>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
    </div>
  )
}

export default cta