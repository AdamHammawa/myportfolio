import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wetnh8m', 'template_50ylurg', form.current, 'v11pBj9dLhIWzHWOs')

    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Let's Talk</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-item' />
            <h4>Email</h4>
            <h5>me@adamsani.tech</h5>
            <a href="mailto:me@adamsani.tech">Send an Email</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-item'/>
            <h4>WhatsApp</h4>
            <h5>+2348149161666</h5>
            <a href="https://api.whatsapp.com/send/?phone=2348149161666" target='_blank' rel="noreferrer">Talk on Whatsapp</a>
            {/* https://wa.me/15551234567 */}
          </article>
          <article className="contact_option">
            <RiMessengerLine className='contact_option-item' />
            <h4>Messenger</h4>
            <h5>AdamSani</h5>
            <a href="https://m.me/adam.sani.391" target='_blank' rel="noreferrer">Send a Message</a>
          </article>
        </div>
    
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
