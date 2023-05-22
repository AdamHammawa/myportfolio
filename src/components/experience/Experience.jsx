import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Technologies</h3>
          <div className="experience_content">
            <article className='experinece_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>4+ years</small>
              </div>
            </article>

            <article className='experinece_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>CSS</h4>
              <small className='text-light'>4+ years</small>
              </div>
            </article>

            <article className='experinece_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>3+ years</small>
              </div>
            </article>

            <article className='experinece_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>4+ years</small>
              </div>
            </article>

            <article className='experinece_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>ReactJS</h4>
              <small className='text-light'>2+ years</small>
              </div>
            </article>
          </div>
        </div>

        {/* END FRONTEND */}

        <div className="experience_backend">
        <h3>Backend Technologies</h3>
          <div className="experience_content">
            <article className='experinece_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>PHP</h4>
              <small className='text-light'>4+ years</small>
              </div>
            </article>

            <article className='experinece_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>PYTHON</h4>
              <small className='text-light'>2+ years</small>
              </div>
            </article>

            <article className='experinece_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>MYSQL</h4>
              <small className='text-light'>4+ years</small>
              </div>
            </article>

            <article className='experinece_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>1+ years</small>
              </div>
            </article>

            <article className='experinece_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>NodeJS</h4>
              <small className='text-light'>1+ years</small>
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience
