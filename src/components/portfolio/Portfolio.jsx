import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.PNG'
import IMG2 from '../../assets/portfolio2.PNG'
import IMG3 from '../../assets/portfolio3.PNG'
import IMG4 from '../../assets/portfolio4.PNG'
import IMG5 from '../../assets/portfolio5.PNG'
import IMG6 from '../../assets/portfolio6.PNG'


const data = [
  {
    id: 1,
    Image: IMG1,
    title: "A Construction Company Website:",
    subtitle: "HTML,CSS,Bootstrap,Javascript",
    github: "https://github.com/AdamHammawa/metrosource_site",
    demo: "https://metrosourceltd.com"
  },

  {
    id: 2,
    Image: IMG2,
    title: "Image Compression Web App:",
    subtitle: "ReactJS,HTML,CSS,Javascript",
    github: "https://github.com/AdamHammawa/Image_Compressor-ReactJS",
    demo: "https://myimgcompressor.netlify.app/"
  },

  {
    id: 3,
    Image: IMG3,
    title: "A Fintech Company Landing Page:",
    subtitle: "HTML,CSS,Javascript",
    github: "https://github.com/AdamHammawa/tradaPay",
    demo: "https://tradapay.netlify.app"
  },

  {
    id: 4,
    Image: IMG4,
    title: "Hostel Management System:",
    subtitle: "PHP,MySQL,Bootstrap,Javascript",
    github: "https://github.com/AdamHammawa/hostelmgt",
    demo: "https://hostelsystem.adamsani.tech/"
  },

  {
    id: 5,
    Image: IMG5,
    title: "A Government Organization:",
    subtitle: "Bootstrap,HTML/CSS, Javascript",
    github: "https://github.com/AdamHammawa/kedakogi",
    demo: "https://kedakogi.netlify.app/"
  },

  {
    id: 6,
    Image: IMG6,
    title: "This is a portfolio Website:",
    subtitle: "ReactJS, HTML/CSS, Javascript",
    github: "https://github.com/AdamHammawa/myportfolio",
    demo: "https://adamsani.tech"
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, Image, title, subtitle, github, demo}) => {
            return (
        <article key={id} className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={Image} alt={title} />
          </div>
          <h3>{title} <small> {subtitle} </small></h3>
          <div className="portfolio_item-cta">
          <a href={github} className='btn' target='_blank' rel="noreferrer">GitHub</a>
          <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
            )
          })
        }

       
      </div>
    </section>
  )
}

export default Portfolio
