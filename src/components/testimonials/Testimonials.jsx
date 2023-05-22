import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/GM.png'
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
    name: "Mrs. Adunyi Eneojo",
    post: "GM MetrosourceLTD",
    review: "Adam is an excellent computer scientist, He was able to give us an appealing website with Great User Experience.",
  },

  {
    Avatar: AVT2,
    name: "Jesse Benedict",
    post: "CEO Tradapay",
    review: "Adam is very Professional and Exiciting to work with. He gave me all the options and helped me select the best for my Apps landing Page!",
  },

  {
    Avatar: AVT3,
    name: "Hendrixx Lenge",
    post: "Software Engineer",
    review: "I worked with the Image compression website Adam Made and I find it straight forward and easy to use. It is an amazing Web App ",
  },

  {
    Avatar: AVT4,
    name: "Aliyu Muhammad",
    post: "Keda IT Officer",
    review: "It was a Great Pleasure having Adam develop a website for our Organization as it was easy to navigate and appealing to our users",
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
          data.map(({Avatar, name, post, review}, index) => {
            return (
        <SwiperSlide key={index} className="testimonial">
          <div className="client_image">
            <img src={Avatar} alt="Client Avatar" />
          </div>
            <h5 className='client_name'> {name} <br /> <small>{post}</small> </h5>
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
