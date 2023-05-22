import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import { FaAward } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to know me</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src= {ME} alt='About Img'/>
            </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
            <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ Years</small>
             
            </article>
            
            <article className='about_card'>
            <FiUser className='about_icon'/>
              <h5>Clients</h5>
              <small>7+</small>
              
            </article>

            <article className='about_card'>
            <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>10+</small>
            </article>
          </div>
          <p>I am a First Class graduate of Information Technology, a Software engineer and a Web developer. I recently got a Software Engineering Certification from the prestigous ALX Africa. I am Dedicated and Resilient and always open to learning. I respect my colleagues and I'm very good in working with teams and individuals of different backgrounds.</p>

          <a href="#contact" className='btn btn-primary'>Lets Connect</a>
        </div>
      </div>
    </section>
  )
}

export default About
