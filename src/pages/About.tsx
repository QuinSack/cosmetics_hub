import React from 'react'
import '../styles/about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import about2 from '../assets/images/about/about2.png'
import about4 from '../assets/images/about/about4.png'
import about5 from '../assets/images/about/about5.png'
import about6 from '../assets/images/about/about6.png'
import about7 from '../assets/images/about/about7.png'

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
      <section className='sec4'>
        <div className='sec4image'>
        </div>
        <div className='sec4text'>
          <h5>OUR VALUES</h5>
          <h1>Proven results for</h1>
          <h1>your skin</h1>
          <div style={{marginTop: '20px', display: 'flex',flexDirection:'column', gap: '10px', marginBottom: '30px'}}>
            <p>We embrace a philosophy that marries the power of nature</p>
            <p>with the precision of modern science. Our team of experts is</p>
            <p>dedicated to researching and developing groundbreaking</p>
            <p>technologies that extract the goodness of plants, transforming</p>
            <p>them into potent and skin-loving compounds.</p>
            <p>These compounds, derived from carefully selected botanical</p>
            <p>sources, ensure that your skin receives the best possible care.</p>
          </div>
        </div>
      </section>
      <section className='sec5'>
        <div className='sec5text'>
          <h5>SHOP THE COLLECTION</h5>
          <h1>Recommended for Autumn and Winter</h1>
        </div>
        <div className='sec5carousel'>
          <div>
            <img src={about4} style={{width: '100%', height: '65%', objectFit: 'fill'}} />
            <div style={{display: 'flex', height: '5%', width: '100%', justifyContent: 'space-between'}}>
              <h3>Curology Cream</h3>
              <h3>$65</h3>
            </div>
            <p>Vitalising Anti-Aging Serum</p>
            <button>Add to Cart <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
          </div>
          <div>
            <img src={about5} style={{width: '100%', height: '65%', objectFit: 'fill'}} />
            <div style={{display: 'flex', height: '5%', width: '100%', justifyContent: 'space-between'}}>
              <h3>Premium CBD Oil</h3>
              <h3>$48</h3>
            </div>
            <p>Vitalising Anti-Ageing Serum</p>
            <button>Add to Cart <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
          </div>
          <div>
            <img src={about6} style={{width: '100%', height: '65%', objectFit: 'fill'}} />
            <div style={{display: 'flex', height: '5%', width: '100%', justifyContent: 'space-between'}}>
              <h3>Delata Active Cream</h3>
              <h3>$28</h3>
            </div>
            <p>Vitalising Anti-Ageing Serum</p>
            <button>Add to Cart <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
          </div>
          <div>
            <img src={about7} style={{width: '100%', height: '65%', objectFit: 'fill'}} />
            <div style={{display: 'flex', height: '5%', width: '100%', justifyContent: 'space-between'}}>
              <h3>Hyaluron Ampoule</h3>
              <h3>$38</h3>
            </div>
            <p>Vitalising Anti-Ageing Serum</p>
            <button>Add to Cart <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
          </div>
        </div>
      </section>
      <section className='sec6'>
        <div className='sec6text'>
          <h5>OUTSTANDING ACTIVE INGREDIENTS</h5>
          <h1>Your skin is healthier than</h1>
          <h1>you think</h1>
          <div style={{marginTop: '20px', display: 'flex',flexDirection:'column', gap: '10px', marginBottom: '30px'}}>
            <p>One of our pursued cutting-edgetechnologies in natural cosmetics is</p>
            <p>Plant Stem Cells. Extracted from plants, these stem cells are</p>
            <p>believed to exert anti-aging effects and offer skin protection</p>
            <p>against environmental stressors.</p>
          </div>
          <button>See All Products <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
        </div>
        <div className='sec6image'>
        </div>
      </section>
    </div>
  )
}

export default About