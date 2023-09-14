import React from 'react'
import '../styles/home.css'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

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
        <h5>Hi</h5>
      </section>
    </div>
  )
}

export default Home