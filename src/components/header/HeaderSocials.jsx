import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/adam-sani/' target="_blank" rel="noreferrer"> <BsLinkedin /></a>
        <a href='https://github.com/AdamHammawa/' target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href='https://twitter.com/adermsani' target="_blank" rel="noreferrer"><FaTwitter /></a>
      
    </div>
  )
}

export default HeaderSocials
