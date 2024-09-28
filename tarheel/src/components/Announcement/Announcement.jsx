import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion';

import './Announcement.scss'
import dev from '../../assets/delivery.png'
import vac from '../../assets/vaccine.png'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.2,  
      delayChildren: 3
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: '100%' },
  visible: {
    opacity: 1,
    y: '0%',
    transition: { duration: 1 },
  },
};


const Announcement = () => {
  const spotlightref = useRef(null);
  const isspotlightView = useInView(spotlightref, { once: true }); // Only trigger once when in view

  const text1 =" SPOTLIGHT";
  useEffect(() => {
    console.log('is title spotlight view ->', isspotlightView);
    
  }, [isspotlightView ]);

  return (
    <div class="hero-1" id="hero-1">
  <div class="diagonal-hero-bg">
     <div class="stars">
        <div class="small"></div>
        <div class="medium"></div>
        <div class="big"></div>
      </div>
   </div>
   <div class="diagonal-hero-bg-1">
     <div class="stars">
        <div class="small"></div>
        <div class="medium"></div>
        <div class="big"></div>
      </div>
   </div>
   <motion.div className="title" 
         ref={spotlightref}
         
          initial="hidden"
          animate={isspotlightView  ? 'visible' : 'hidden'}
          variants={containerVariants}>
    <motion.h2 class="sh2">
            {/* <span>S</span>
            <span>p</span>
            <span>o</span>
            <span>t</span>
            <span>l</span>
            <span>i</span>
            <span>g</span>
            <span>h</span>
            <span>t</span> */}
            {text1.split('').map((char, index) => (
              <motion.span key={index} variants={childVariants}>
                {char}
              </motion.span>
            ))}
    </motion.h2>
    <motion.h3 class="sh3" variants= {childVariants}>What's new?</motion.h3>
   </motion.div>
   <div className="cards">
    <div className="cards-wrapper">
    <div className="card">
    <div className="card-title">
        <br />
          <h2>Flu Shots and RSV Vaccinations  Available</h2>
          <h3>Recommended for Customers 60 and +</h3>
        </div>
        <div className="card-img">
          <img src={vac} alt=""  class="images"/>
        </div>
        
        
    </div>
    <div className="card">
    <div className="card-title">
          <h2><bold>FREE</bold> Prescription Delivery</h2>
          <h3>Call us at 111-111-1111</h3>
        </div>
        <div className="card-img">
          <img src={dev} alt=""  class="images"/>
        </div>
        
        
    </div>
    <div className="card">
      <div className="card-title">
          <h2>Prescription Delivery at Carrboro and Chapel Hill Now</h2>
        </div>
        <div className="card-img">
          <img src={dev} alt=""  class="images"/>
        </div>
        
    </div>
   </div>
   </div>
</div>
  )
}

export default Announcement