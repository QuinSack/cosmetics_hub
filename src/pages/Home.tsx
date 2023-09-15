import React from 'react'
import '../styles/home.css'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import home2 from '../assets/images/home/home2.png'
import home3 from '../assets/images/home/home3.png'
import home4 from '../assets/images/home/home4.png'
import home6 from '../assets/images/home/home6.png'
import home7 from '../assets/images/home/home7.png'
import home8 from '../assets/images/home/home8.png'
import home9 from '../assets/images/home/home9.png'
import home13 from '../assets/images/home/home13.png'
import home14 from '../assets/images/home/home14.png'
import home15 from '../assets/images/home/home15.png'

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
      <section className='section2'>
        <div className='section2text'>
          <div className='section2text1'>
            <h5>SHOP BY CATEGORY</h5>
            <h1>Beauty by Nature. Backed by</h1>
            <h1>Science. Driven by Purpose.</h1>
          </div>
          <div className='section2text2'>
            <button>See All Products <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
          </div>
        </div>
        <div className='section2carousel'>
          <div>
            <img src={home6} style={{width: '100%', height: '65%', objectFit: 'fill'}} />
            <div style={{display: 'flex', height: '5%', width: '100%', justifyContent: 'space-between'}}>
              <h3>Functional Foods</h3>
            </div>
            <p>HEALTHCARE PRODUCTS</p>
          </div>
          <div>
            <img src={home7} style={{width: '100%', height: '65%', objectFit: 'fill'}} />
            <div style={{display: 'flex', height: '5%', width: '100%', justifyContent: 'space-between'}}>
              <h3>Skincare Routine</h3>
            </div>
            <p>CLEANSER AND MIST</p>
          </div>
          <div>
            <img src={home8} style={{width: '100%', height: '65%', objectFit: 'fill'}} />
            <div style={{display: 'flex', height: '5%', width: '100%', justifyContent: 'space-between'}}>
              <h3>Treatment Routine</h3>
            </div>
            <p>CLEANSER AND MIST</p>
          </div>
          <div>
            <img src={home9} style={{width: '100%', height: '65%', objectFit: 'fill'}} />
            <div style={{display: 'flex', height: '5%', width: '100%', justifyContent: 'space-between'}}>
              <h3>Intensive Restoration</h3>
            </div>
            <p>CLEANSER AND MIST</p>
          </div>
        </div>
      </section>
      <section className='section4'>
        <div className='section4image'>
        </div>
        <div className='section4text'>
          <h5>THE SCIENCE BEHIND OUR FORMULAS</h5>
          <h1>Repower your skin</h1>
          <div style={{marginTop: '20px', display: 'flex',flexDirection:'column', gap: '10px', marginBottom: '30px'}}>
            <p>One of our pursued cutting-edgetechnologies in natural cosmetics is</p>
            <p>Plant Stem Cells. Extracted from plants, these stem cells are</p>
            <p>believed to exert anti-aging effects and offer skin protection</p>
            <p>against environmental stressors.</p>
          </div>
          <button>Read The Article <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
        </div>
      </section>
      <section className='section5'>
        <div className='section5text'>
          <h5>TESTIMONIALS</h5>
          <h1>Great! My skin has improved</h1>
          <div style={{marginTop: '20px', display: 'flex',flexDirection:'column', gap: '10px', marginBottom: '30px'}}>
            <p>I'm thrilled with the remarkable improvement in my skin's</p>
            <p>texture and overall health after using QuinSack Cosmetics Ha Serum.</p>
            <p>product. This product has truly been a game-changer for me. My</p>
            <p>complexion now boasts an even tone and a healthy radiance that</p>
            <p>I never thought possible.</p>
            <p>I eagerly anticipate continuing this transformative journey and</p>
            <p>preserving the healthy, vibrant skin I now enjoy.</p>
          </div>
        </div>
        <div className='section5image'>
        </div>
      </section>
      <section className='section6'>
        <div className='section6text'>
          <h5>INSTAGRAM</h5>
          <h1>Share your Every Moment with US!</h1>
          <button>@QcosHub <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
        </div>
        <div className='section6carousel'>
          <div>
            <img src={home13} style={{width: '100%', height: '80%', objectFit: 'fill'}} />
          </div>
          <div>
            <img src={home14} style={{width: '100%', height: '80%', objectFit: 'fill'}} />
          </div>
          <div>
            <img src={home15} style={{width: '100%', height: '80%', objectFit: 'fill'}} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home