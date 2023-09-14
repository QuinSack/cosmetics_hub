import React from 'react'
import '../styles/home.css'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import home2 from '../assets/images/home/home2.png'
import home3 from '../assets/images/home/home3.png'
import home4 from '../assets/images/home/home4.png'

const Home = () => {
  return (
    <div className='homecontainer'>
      <section className='section1'>
        <div className='section1text'>
          <h5>RESULTS YOU CAN FEEL</h5>
          <h1>Wake up your skin</h1>
          <div>
            <p>
              Concentrated in each drop of our award-winning range, our product 
            </p>
            <p>
              teaches skin to slow down signs of aging and find its healthy
            </p>
            <p>
            looking state for good.
            </p>
          </div>
          <button>Explore The Collection <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
        </div>
      </section>
      <section className='section2'>
        <div className='section2text'>
          <div className='section2text1'>
            <h5>SHOP OUR BEST-SELLERS</h5>
            <h1>Clinically proven advanced</h1>
            <h1>botanical formulas</h1>
          </div>
          <div className='section2text2'>
            <button>See All Best Sellers <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
          </div>
        </div>
        <div className='section2carousel'>
          <div>
            <img src={home2} style={{width: '100%', height: '65%', objectFit: 'fill'}} />
            <div style={{display: 'flex', height: '5%', width: '100%', justifyContent: 'space-between'}}>
              <h3>Nora Cloud Serum</h3>
              <h3>$65</h3>
            </div>
            <p>Vitalising Anti-Ageing Serum</p>
            <button>Add to Cart <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
          </div>
          <div>
            <img src={home3} style={{width: '100%', height: '65%', objectFit: 'fill'}} />
            <div style={{display: 'flex', height: '5%', width: '100%', justifyContent: 'space-between'}}>
              <h3>Nora Cloud Serum</h3>
              <h3>$65</h3>
            </div>
            <p>Vitalising Anti-Ageing Serum</p>
            <button>Add to Cart <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
          </div>
          <div>
            <img src={home4} style={{width: '100%', height: '65%', objectFit: 'fill'}} />
            <div style={{display: 'flex', height: '5%', width: '100%', justifyContent: 'space-between'}}>
              <h3>Nora Cloud Serum</h3>
              <h3>$65</h3>
            </div>
            <p>Vitalising Anti-Ageing Serum</p>
            <button>Add to Cart <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
          </div>
        </div>
      </section>
      <section className='section3'>
        <div className='section3text'>
          <h5>OUTSTANDING ACTIVE INGREDIENTS</h5>
          <h1>Curology Ultra Plumping Moisturizer</h1>
          <div style={{marginTop: '20px', display: 'flex',flexDirection:'column', gap: '10px', marginBottom: '30px'}}>
            <p>One of our pursued cutting-edgetechnologies in natural cosmetics is</p>
            <p>Plant Stem Cells. Extracted from plants, these stem cells are</p>
            <p>believed to exert anti-aging effects and offer skin protection</p>
            <p>against environmental stressors.</p>
          </div>
          <button>See All Best Sellers <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
        </div>
        <div className='section3image'>
        </div>
      </section>
    </div>
  )
}

export default Home