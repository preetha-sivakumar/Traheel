import React, { useEffect, useRef } from 'react'
import {motion, useInView} from 'framer-motion'
import './About.css'
import icon from '../../assets/icon.png'
import exp from '../../assets/exp2.png'
import pic2 from '../../assets/pic2.png'
import pills from '../../assets/pills.png'

const containerVariants = {
  hidden:{opacity :0},
  visible : { opacity: 1, 
    transition:{ straggerChildren : 0.2, delayChildren : 0.5,},
  },
};

const childVariants ={
  hidden: { opacity: 0, y: '100%' },
  visible: {
  opacity: 1,
  y: '0%',
  transition: { duration: 1 },
},
};

const About = () => {
  
  const ref= useRef(null);
  const isInView = useInView(ref);
  
  const text = "ABOUT US";
 
  
  useEffect(() => {
    console.log("is in view ->", isInView);
  }, [isInView]);
  
  return (
    <>
    <div className="about-container" id="about-container"  >
        {/* <motion.div 
        style={{height:'50vh', background:"black"}}
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration: 2}}
        ></motion.div>
        <div ref={ref}
        style={{height:'50vh', background:isInView ? "blue" : "red", transition: "1s background"}}></div> */}
        <motion.div  ref= {ref} className="about-title" initial="hidden" animate ="visible" variants={containerVariants}>
          <motion.h2 class="about-h2">
          {text.split('').map((char, index) => (
          <motion.span key={index} variants={childVariants}>
            {char}
          </motion.span>
        ))}
          
            
          </motion.h2>
        </motion.div>
        <div className="acontainer">
            <div className="row-aligns-item-center">
                <div className="col-lg">
                   <div className="aheading">
                    <h3 class="ah3">Feel<span class="diff">Better,</span>Live<span class="diff">Better.</span></h3>
                    <h3 class="ah3">We're Here for You.</h3>
                    <p className="descrip" >Our goal at Tarheel Pharmacy is to deliver friendly, compassionate care while providing the highest quality of pharmaceutical services.
                        <br />
                        <br />
                         From prescription medications to specialized health solutions, we are dedicated to supporting your well-being. Conveniently located to serve our community, we’re committed to making healthcare accessible and personalized for every patient.</p>
                    <ul class="features">
                        <li><img src={icon} alt="" class="icon-img" /><span class="des">Customer-Centric Approach</span></li>
                        <li><img src={icon} alt="" class="icon-img" /><span class="des">Experienced Team</span></li>
                        <li><img src={icon} alt="" class="icon-img"/><span class="des"> Comphrensive Services</span></li>
                        <li><img src={icon} alt="" class="icon-img"/><span class="des"> Veterinary Compounding</span></li>
                    </ul>
                   </div>

                </div>
                <div className="col-lg">
                <div className="about-img">
                    <img class="image-left" data-src="" src={pic2} alt="Image Left" title="Image Left"  />
                    <img class="image-right" data-src="" src={pills} alt="Image Right" title="Image Left" />
                   
                     <img class="about-experience" src={exp} alt=""  /> 
                     <div class="testing"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="parallax-fire"></div>
    </>
  )
}

export default About