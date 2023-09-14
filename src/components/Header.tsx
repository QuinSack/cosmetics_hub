import React from 'react'
import '../styles/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='headercontainer'>
      <article className='headertop'>
        <h4><strong>Free Shipping On All US Orders And Orders Above $100</strong></h4>
      </article>
      <article className='headerbottom'>
        <section className='secone'>
          <Link to="/" className='sectwolink'><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>QuinSack Cosmetics</strong></h3></Link>
        </section>
        <section className='sectwo'>
          <Link to="/about" className='sectwolink'><h4>About Us</h4></Link>
          <h4>Products</h4>
          <h4>Blog</h4>
          <h4>Contact</h4>
        </section>
        <section className='secthree'>
          <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </section>
      </article>
    </div>
  )
}

export default Header