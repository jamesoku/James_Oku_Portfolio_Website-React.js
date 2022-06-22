import React from 'react'
import'./contact.css'
import emailjs from 'emailjs-com'
import {useRef} from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {AiOutlineWhatsApp} from 'react-icons/ai'
const contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ffvg24d', 'service_ffvg24d', form.current, 'eLL_2xIQ4cFI2Yfgv')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>okujames7@gmail.com</h5>
            <a href="mailto:okujames7@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>James Oku</h5>
            <a href="https://m.me/james.oku" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a href="https://api.whatsapp.com/send?phone+2082067743" target='_blank'>Send a message</a>
          </article>
          
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required />
          <input type= 'email' name = 'email' placeholder='Email' required/>
          <textarea name="message" id="7"  rows="7" placeholder='Message' required>
          </textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default contact