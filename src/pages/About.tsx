import React from 'react'
import '../styles/about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import about2 from '../assets/images/about/about2.png'

const About = () => {
  return (
    <div className='aboutcontainer'>
      <section className='sec1'>
        <div className='sec1text'>
          <h5>OUR STORY</h5>
          <h1>We're here to help your</h1>
          <h1>skin look great!</h1>
          <div style={{marginTop: '20px', display: 'flex',flexDirection:'column', gap: '10px', marginBottom: '30px'}}>
            <p>Welcome to our renowned skincare brand, where beauty meets</p>
            <p>advanced science! We take pride in harnessing cutting-edge</p>
            <p>technologies to create beneficial active ingredients sourced from</p>
            <p>botanicals. Our brand is committed to providing you with</p>
            <p>exceptional skincare solutions that are both effective and gentle on</p>
            <p>your skin</p>
          </div>
        </div>
        <div className='sec1image'>
        </div>
      </section>
      <section className='sec2'>
        <div className='sec2text'>
          <h5>OUR MISSION</h5>
          <h1>Elevate your skincare routine with our</h1>
          <h1>amazing technology</h1>
          <p>These botanical extracts form the cornerstone of our products, delivering a sensory journey that</p>
          <p>revitalizes your skin and indulges your senses. Whether it's the soothing properties of chamomile, the</p>
          <p>rejuvenating effects of ginseng, or the antioxidant-rich benefits of green tea, each extract is chosen</p>
          <p>for its unique qualities and contributions to overall skin health.</p>
        </div>
        <div className='sec2image'>
          <img src={about2} alt='' style={{width: '100%', objectFit: 'fill'}} />
        </div>
      </section>
      <section className='sec3'>
        <h5>THE SCIENCE BEHIND OUR FORMULAS</h5>
        <h1>BY CHOOSING QUINSACK COSMETICS, YOU'RE</h1>
        <h1>EMBRACING A SKINCARE JOURNEY THAT</h1>
        <h1>PRIORITIZES BOTH THE HEALTH & BEAUTY</h1>
        <h1>OF YOUR SKIN</h1>
        <div className='sec3image'>
          <h5>Discover</h5>
          <h5>More</h5>
        </div>
      </section>
    </div>
  )
}

export default About