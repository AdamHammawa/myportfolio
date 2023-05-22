import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'
import AVT3 from '../../assets/avatar3.jpg'
import AVT4 from'../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    Avatar: AVT1,
    name: "Mary John",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, voluptatum!",
  },

  {
    Avatar: AVT2,
    name: "Musa Jamilu",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, voluptatum!",
  },

  {
    Avatar: AVT3,
    name: "Habibu Sani",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, voluptatum!",
  },

  {
    Avatar: AVT4,
    name: "Maryam Abdullahi",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, voluptatum!",
  },

  
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>What my Clients Say</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({Avatar, name, review}, index) => {
            return (
        <SwiperSlide key={index} className="testimonial">
          <div className="client_image">
            <img src={Avatar} alt="Client Avatar" />
          </div>
            <h5 className='client_name'> {name} </h5>
            <small className='client_review'>
              {review}
            </small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
