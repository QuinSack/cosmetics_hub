import React, { FormEvent, useState } from 'react'
import '../styles/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { db } from '../configs/firebase'
import {collection, addDoc} from 'firebase/firestore'

const Footer = () => {

  const [email, setEmail] = useState<string>("");

  const handleEmailSubmit = async(e: FormEvent) => {
    e.preventDefault();

    if (!email.trim()){
      alert ("Please enter a valid email address");
      return;
    }
    
    const subscriberRef = collection(db, "subscribers");
    try{
      const submitEmail = await addDoc(subscriberRef, {email});
      setEmail("");
      console.log(submitEmail);
    }catch(err){
      console.error(err);
    }
  }
  return (
    <div className='footercontainer'>
      <div className='footertop'>
        <section className='ftleft'>
          <h3>Subscribe now to get 10% off</h3>
          <p>Be the first to know about our new arrivals and exclusive offers.</p>
        </section>
        <section className='ftright'>
          <input type='email' placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} />
          <button onClick={(e) => handleEmailSubmit(e)}>Subscribe <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
        </section>
      </div>
      <hr />
      <div className='footerbottom'>
        <section>
          <h4>COMPANY</h4>
          <h5>About Us</h5>
          <h5>Products</h5>
          <h5>Blog</h5>
          <h5>Contact</h5>
        </section>
        <section>
          <h4>INFORMATION</h4>
          <h5>Track order</h5>
          <h5>Delivery and Returns</h5>
          <h5>Size guide</h5>
          <h5>Warranty</h5>
        </section>
        <section>
          <h4>EXPLORE MORE</h4>
          <h5>The Story</h5>
          <h5>Work with Us</h5>
          <h5>Corporate New</h5>
          <h5>Investors</h5>
        </section>
        <section>
          <h4>YOU MAY NEED</h4>
          <h5>Secure Payment</h5>
          <h5>Privacy Policy</h5>
          <h5>Terms of Use</h5>
          <h5>Archived Products</h5>
        </section>
        <section>
          <h4>SOCIAL</h4>
          <h5>Instagram</h5>
          <h5>YouTube</h5>
          <h5>Twitter</h5>
          <h5>Facebook</h5>
        </section>
      </div>
    </div>
  )
}

export default Footer