import React, { useEffect, useRef } from 'react';
import { delay, motion, useInView } from 'framer-motion';
import './About.css';
import icon from '../../assets/icon1.png';
import exp from '../../assets/exp2.png';
import pic2 from '@assets/tarheelimg3.jpg'
import pic3 from '@assets/tarheelimg5.jpg'
import pills from '@assets/tarheelimg.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.2,  
      delayChildren: 0
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

const fadeInUpVariants = {
  hidden: { opacity: 0, y: '100%' },
  visible: {
    opacity: 1,
    y: '0%',
    transition: { duration: 0.5, ease: 'easeOut', delay: 0.2 },
  },
};

const About = ({ children }) => {
  const ref = useRef(null);
  const isTitleView = useInView(ref, { once: true }); // Only trigger once when in view

   const ref1 = useRef(null);
   const isFeaturesView = useInView(ref1, {once: true});

   const ref2 = useRef(null);
   const isheadingView = useInView(ref2, {once: true});
   
   const ref3 = useRef(null);
   const isheading1View = useInView(ref3, {once: true});
  
   const ref4 = useRef(null);
   const isdescView = useInView(ref4, {once: true});

  const text =" ABOUT US";
  useEffect(() => {
    console.log('is title view ->', isTitleView);
    console.log('is features view ->', isFeaturesView);
    console.log('is heading view ->', isheadingView);
    console.log('is heading -1 view ->', isheading1View);
    console.log('is description in view ->', isdescView);
  }, [isTitleView, isFeaturesView, isheadingView, isheading1View, isdescView  ]);

  return (
    <>
      <div className="about-container" id="about-container">
        <motion.div
          ref={ref}
          className="about-title"
          initial="hidden"
          animate={isTitleView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.h2 className="about-h2">
            {text.split('').map((char, index) => (
              <motion.span key={index} variants={childVariants}>
                {char}
              </motion.span>
            ))}
          </motion.h2>
        </motion.div>


        <div className="acontainer" >
          <div className="row-aligns-item-center">
            <div className="col-lg">
              <div className="aheading">
                <motion.h3 ref = {ref2}className="ah3" initial="hidden" animate={isheadingView ? 'visible' : 'hidden'} variants={fadeInUpVariants}>
                  Feel<span className="diff">Better,</span>Live<span className="diff">Better.</span>
                </motion.h3>
                <motion.h3  ref = {ref3}className="ah3" initial="hidden" animate={isheading1View ? 'visible' : 'hidden'} variants={fadeInUpVariants}>We're Here for You.</motion.h3>
                <motion.p ref = {ref4}className="descrip" initial="hidden" animate={isdescView  ? 'visible' : 'hidden'} variants={fadeInUpVariants}>
                  Our goal at Tarheel Pharmacy is to deliver friendly, compassionate care while
                  providing the highest quality of pharmaceutical services.
                  <br />
                  <br />
                  From prescription medications to specialized health solutions, we are dedicated to
                  supporting your well-being. Conveniently located to serve our community, we’re
                  committed to making healthcare accessible and personalized for every patient.
                </motion.p>
                <motion.ul ref={ref1} className="features" initial="hidden" animate={isFeaturesView ? 'visible' : 'hidden'} variants={fadeInUpVariants}>
                  {children}
                  <motion.li variants={childVariants}>
    <img src={icon} alt="" className="icon-img" />
    <span className="des">Customer-Centric Approach</span>
  </motion.li>
  <motion.li variants={childVariants}>
    <img src={icon} alt="" className="icon-img" />
    <span className="des">Experienced Team</span>
  </motion.li>
  <motion.li variants={childVariants}>
    <img src={icon} alt="" className="icon-img" />
    <span className="des">Comprehensive Services</span>
  </motion.li>
  <motion.li variants={childVariants}>
    <img src={icon} alt="" className="icon-img" />
    <span className="des">Veterinary Compounding</span>
  </motion.li>
                </motion.ul>
              </div>
            </div>
            <div className="col-lg">
              <div className="about-img">
                <img className="image-left" src={pic2} alt="Image Left" title="Image Left" />
                <img className="image-right" src={pills} alt="Image Right" title="Image Left" />
                <img className="image-left1" src={pic3} alt="Image Left second" title="Image Left" />

                {/* <img className="about-experience" src={exp} alt="" />
                <div className="testing"></div> */}
              </div>
            </div>
          </div>
        </div>
        </div>
      
      {/* <div className="parallax-fire"></div> */}
      </>
  );
};

export default About;
