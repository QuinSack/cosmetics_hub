import React from 'react'
import '../styles/blogs.css'
import blog1 from '../assets/images/blogs/blog1.png'
import blog2 from '../assets/images/blogs/blog2.png'
import blog3 from '../assets/images/blogs/blog3.png'
import blog4 from '../assets/images/blogs/blog4.png'
import blog5 from '../assets/images/blogs/blog5.png'
import blog6 from '../assets/images/blogs/blog6.png'
import blog7 from '../assets/images/blogs/blog7.png'
import blog8 from '../assets/images/blogs/blog8.png'
import blog9 from '../assets/images/blogs/blog9.png'
import blog10 from '../assets/images/blogs/blog10.png'
import blog11 from '../assets/images/blogs/blog11.png'
import blog12 from '../assets/images/blogs/blog12.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Blogs = () => {
  return (
    <div className='blogscontainer'>
        <section className='blogs1'>
            <h1>Keep updated with our latest articles</h1>
        </section>
        <section className='blogs2'>
            <h4>All</h4>
            <h4>Featured</h4>
            <h4>Products</h4>
            <h4>Routines</h4>
            <h4>Self-Care</h4>
        </section>
        <section className='blogs3'>
            <div>
                <img src={blog1} alt='' style={{width: '100%', height: '70%', objectFit: 'fill'}} />
                <p>INGREDIENTS</p>
                <h3>Even skin tone thanks to the new</h3>
                <h3>generation Vitamin C Essence.</h3>
                <p>Read More <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></p>
            </div>
            <div>
                <img src={blog2} alt='' style={{width: '100%', height: '70%', objectFit: 'fill'}} />
                <p>INGREDIENTS</p>
                <h3>Non-comedogenic skin care tips</h3>
                <h3>with vegan products.</h3>
                <p>Read More <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></p>
            </div>
            <div>
                <img src={blog3} alt='' style={{width: '100%', height: '70%', objectFit: 'fill'}} />
                <p>INGREDIENTS</p>
                <h3>Benefits of fast-absorbing</h3>
                <h3>mineral sunscreen.</h3>
                <p>Read More <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></p>
            </div>
            <div>
                <img src={blog4} alt='' style={{width: '100%', height: '70%', objectFit: 'fill'}} />
                <p>INGREDIENTS</p>
                <h3>Deep Dive: Vitamin C +</h3>
                <h3>Retinol in Skincare.</h3>
                <p>Read More <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></p>
            </div>
        </section>
        <section className='blogs3'>
            <div>
                <img src={blog5} alt='' style={{width: '100%', height: '70%', objectFit: 'fill'}} />
                <p>INGREDIENTS</p>
                <h3>Benefits of Mineral</h3>
                <h3>Sunscreen.</h3>
                <p>Read More <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></p>
            </div>
            <div>
                <img src={blog6} alt='' style={{width: '100%', height: '70%', objectFit: 'fill'}} />
                <p>INGREDIENTS</p>
                <h3>Change your habits to have</h3>
                <h3>beautiful healthy skin.</h3>
                <p>Read More <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></p>
            </div>
            <div>
                <img src={blog7} alt='' style={{width: '100%', height: '70%', objectFit: 'fill'}} />
                <p>INGREDIENTS</p>
                <h3>Introducing Midnight Ritual</h3>
                <h3>Retinol Renewal Seru.</h3>
                <p>Read More <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></p>
            </div>
            <div>
                <img src={blog8} alt='' style={{width: '100%', height: '70%', objectFit: 'fill'}} />
                <p>INGREDIENTS</p>
                <h3>How To Keep Your Skin</h3>
                <h3>Hydrated + Moisturized.</h3>
                <p>Read More <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></p>
            </div>
        </section>
        <section className='blogs3'>
            <div>
                <img src={blog9} alt='' style={{width: '100%', height: '70%', objectFit: 'fill'}} />
                <p>INGREDIENTS</p>
                <h3>Chemical Exfoliants In Your</h3>
                <h3>Nighttime Skincare Routine.</h3>
                <p>Read More <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></p>
            </div>
            <div>
                <img src={blog10} alt='' style={{width: '100%', height: '70%', objectFit: 'fill'}} />
                <p>INGREDIENTS</p>
                <h3>What Are Anti-Oxidants + Free</h3>
                <h3>Radicals in Skincare.</h3>
                <p>Read More <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></p>
            </div>
            <div>
                <img src={blog11} alt='' style={{width: '100%', height: '70%', objectFit: 'fill'}} />
                <p>INGREDIENTS</p>
                <h3>Travel Self Care Kit to keep</h3>
                <h3>your skin healthy.</h3>
                <p>Read More <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></p>
            </div>
            <div>
                <img src={blog12} alt='' style={{width: '100%', height: '70%', objectFit: 'fill'}} />
                <p>INGREDIENTS</p>
                <h3>Nourishing Winter Skincare</h3>
                <h3>Routine.</h3>
                <p>Read More <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></p>
            </div>
        </section>
    </div>
  )
}

export default Blogs