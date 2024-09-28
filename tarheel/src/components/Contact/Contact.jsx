import React, {useEffect, useRef} from 'react'
import {motion, useInView} from 'framer-motion'
import './Contact.css'

import phoneicon from '../../assets/phone-icon.png'
import emailicon from '../../assets/mail-icon.png'
import locicon from '../../assets/loc-icon.png'
import time from '../../assets/time1.png'
import close from '../../assets/closed.png'
const fadeInUpVariants = {
  hidden: { opacity: 0, y: '100%' },
  visible: {
    opacity: 1,
    y: '0%',
    transition: { duration: 0.5, ease: 'easeOut'},
  },
};

const Contact = () => {
  
  const contactref = useRef(null);
  const iscontactView = useInView(contactref, { once: true }); // Only trigger once when in view

  useEffect(() => {
    console.log('is contact view ->', iscontactView);
    
  }, [iscontactView ]);
  return (
    <div className="cc" id="contact-container">
       
       <div class="form-main">
       
    <div class="main-wrapper">
        <div className="form-column">
      <h2 class="form-head">Get in Touch</h2>
      <form class="form-wrapper">
        <div class="form-card">
          <input class="form-input" type="text" name="full_name" required="required"   />
          <label class="form-label" for="full_name">Full Name</label>
        </div>

        <div class="form-card">
          <input class="form-input" type="email" name="email"  required="required"/>
          <label class="form-label" for="email">Email</label>
        </div>

        <div class="form-card">
          <input   class="form-input"   type="number" name="phone_number" required="required" />
          <label class="form-label" for="phone_number">Phone number</label>
        </div>

        <div class="form-card">
          <textarea
            class="form-textarea"
            maxlength="420"
            rows="3"
            name="phone_number"
            required="required"
          ></textarea>
          <label class="form-textarea-label" for="phone_number"
            >Message</label
          >
        </div>
        <div class="btn-wrap">
          <button> Submit </button>
        </div>
      </form>
      </div>
    {/* <div className="info">
        {/* Right Side - Google Maps and Contact Information 
        <motion.h6 ref = {contactref} className="form-head" initial="hidden" animate={iscontactView ? 'visible' : 'hidden'} variants={fadeInUpVariants}>Business hours</motion.h6>

        <div className="contact-info">
          
          <div className="contact-details">
          
           <p> Weekdays: 8:30 AM - 6:00 PM</p>
           <p>Saturday: 9:00 AM - 1:00 PM</p>
           <p>Sunday: Closed</p>
            
          </div>
        </div>
        </div> */}
        <div className="vertical-div" />
        <div className="info">
        {/* Right Side - Google Maps and Contact Information */}
        <motion.h6 ref = {contactref} className="form-head" initial="hidden" animate={iscontactView ? 'visible' : 'hidden'} variants={fadeInUpVariants}>Meet Us</motion.h6>

        <div className="contact-info">
          {/* <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d103407.44768229968!2d-79.14984879321912!3d35.910682251997486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x89acc31e8ae93a11%3A0x5d233819da7118cc!2s370%20E%20Main%20St%20%23160%2C%20Carrboro%2C%20NC%2027510%2C%20United%20States!3m2!1d35.9107104!2d-79.0674477!5e0!3m2!1sen!2sca!4v1726412747122!5m2!1sen!2sca"
              width="100%"
              height="400"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
             
            ></iframe>
          </div> */}
          <div className="contact-details">
          
          
            
            <motion.ul class="meetus">
              <motion.li ref = {contactref} initial="hidden" animate={iscontactView ? 'visible' : 'hidden'} variants={fadeInUpVariants} class="label"><img class="iimg" src={phoneicon}/>+1 919-240-7827</motion.li>
              
              <motion.li ref = {contactref} initial="hidden" animate={iscontactView ? 'visible' : 'hidden'} variants={fadeInUpVariants} class="label"><img class="iimg" src={emailicon}/>ttpharmacy17@gmail.com</motion.li>
              
              <motion.li ref = {contactref} initial="hidden" animate={iscontactView ? 'visible' : 'hidden'} variants={fadeInUpVariants} class="label"><img class="iimg" src={locicon}/>370 E Main Street, Suite 160, Carrboro, NC 27510</motion.li>
              
            </motion.ul>
            <motion.h6 ref = {contactref} className="form-head" initial="hidden" animate={iscontactView ? 'visible' : 'hidden'} variants={fadeInUpVariants}>Business hours</motion.h6>
            <motion.ul class="meetus">
              <motion.li ref = {contactref} initial="hidden" animate={iscontactView ? 'visible' : 'hidden'} variants={fadeInUpVariants} class="label"><img class="iimg"src={time}/>Weekdays: 8:30 AM - 6:00 PM</motion.li>
              
              <motion.li ref = {contactref} initial="hidden" animate={iscontactView ? 'visible' : 'hidden'} variants={fadeInUpVariants} class="label"><img  class="iimg" src={time}/>Saturday: 9:00 AM - 1:00 PM</motion.li>
              
              <motion.li ref = {contactref} initial="hidden" animate={iscontactView ? 'visible' : 'hidden'} variants={fadeInUpVariants} class="label"><img class="close"src={close}/>Sunday: Closed</motion.li>
              
            </motion.ul>
           
            
          </div>
        </div>
        </div>

    </div>
  </div>
    
    
    </div>
  )
}

export default Contact