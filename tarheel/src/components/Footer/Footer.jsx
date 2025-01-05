import React, {useRef, useEffect} from 'react'
import {  motion, useInView } from 'framer-motion';

import logo1 from '../../assets/Logo-1.png'
import './Footer.css'



const fadeInUpVariants = {
  hidden: { opacity: 0, y: '100%' },
  visible: {
    opacity: 1,
    y: '0%',
    transition: { duration: 1, ease: 'easeOut', delay: 0.2 },
  },
};
const Footer = () => {

  const footerref = useRef(null);
  const isfooterView = useInView(footerref, { once: true }); // Only trigger once when in view

  useEffect(() => {
    console.log('is footer view ->', isfooterView);
    
  }, [isfooterView  ]);

  return (
    
    <div class="site-footer">
      <div class="container">
        <div class="row">
          <motion.div class="section">
            <motion.h6 ref = {footerref} initial="hidden" animate={isfooterView ? 'visible' : 'hidden'} variants={fadeInUpVariants}>Tarheel Town Pharmacy</motion.h6>
            <motion.p class="footer-text" ref = {footerref} initial="hidden" animate={isfooterView ? 'visible' : 'hidden'} variants={fadeInUpVariants}>Our goal at Tarheel Pharmacy is to deliver friendly, compassionate care while providing the highest quality of pharmaceutical services. From prescription medications to specialized health solutions, we are dedicated to supporting your well-being. Conveniently located to serve our community, we’re committed to making healthcare accessible and personalized for every patient.</motion.p>
            </motion.div>
           
            <img src={logo1} className='footer-logo' alt="" />
          <motion.div class="section">
            <motion.h6 ref = {footerref} initial="hidden" animate={isfooterView ? 'visible' : 'hidden'} variants={fadeInUpVariants}>Quick Links</motion.h6>
            <motion.ul class="footer-links">
              <motion.li ref = {footerref} initial="hidden" animate={isfooterView ? 'visible' : 'hidden'} variants={fadeInUpVariants}><a href="#hero-1">Spotlight</a></motion.li>
              <motion.li ref = {footerref} initial="hidden" animate={isfooterView ? 'visible' : 'hidden'} variants={fadeInUpVariants}><a href="#about-container">About Us</a></motion.li>
              <motion.li ref = {footerref} initial="hidden" animate={isfooterView ? 'visible' : 'hidden'} variants={fadeInUpVariants}> <a href="./services">Services</a></motion.li>
              <motion.li ref = {footerref} initial="hidden" animate={isfooterView ? 'visible' : 'hidden'} variants={fadeInUpVariants}><a href="#reviews">Google Reviews</a></motion.li>
              <motion.li ref = {footerref} initial="hidden" animate={isfooterView ? 'visible' : 'hidden'} variants={fadeInUpVariants}><a href="./meet_the_team">Contact Us</a></motion.li>
              <motion.li ref = {footerref} initial="hidden" animate={isfooterView ? 'visible' : 'hidden'} variants={fadeInUpVariants}><a href="./admin_login">Admin</a></motion.li>

            </motion.ul>
          </motion.div>

         
        </div>
        <br />
        <hr class="div"/>
      </div>
     
               
            <p class="copyright-text">Copyright &copy; 2024 All Rights Reserved </p> 
      
    
</div>
  )
}

export default Footer