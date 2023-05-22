/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>ADAM SANI</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com"> <FaFacebook /> </a>
        <a href="https://twitter.com"> <FaTwitter /> </a>
        <a href='https://www.linkedin.com/in/adam-sani/' target="_blank" rel="noreferrer"> <BsLinkedin /></a>
        <a href='https://github.com/AdamHammawa/' target="_blank" rel="noreferrer"><FaGithub /></a>
      </div>

      <div className="copyright">
        <small>&copy; ADAM SANI HAMMAWA All rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer
