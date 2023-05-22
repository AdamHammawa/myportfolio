import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
          <li>
              <BiCheck className='service_list-icon' />
              <p>Simple or Complex Websites.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>High Quality Websites</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Great User Interface and Experience.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Websites optimized for speed and security.</p>
            </li>
            
          </ul>
        </article>
        {/* END ONE SERVICE */}

        <article className='service'>
          <div className="service_head">
            <h3>Software/Web Apps</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Web Apps or Softwares that Provide Solutions.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Generate Income.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Used by a wide range of users.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Administrative Web Apps.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Commercial Web Apps.</p>
            </li>
          </ul>
        </article>
        {/* END ONE SERVICE */}

        <article className='service'>
          <div className="service_head">
            <h3>IT/Software Consultations</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Help you manage your current Software.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Make decisions on getting new Softwares.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Performance Optimization.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>IT Systems or Software Security.</p>
            </li>
          </ul>
        </article>
        {/* END ONE SERVICE */}
      </div>
    </section>
  )
}

export default Services
