import React from 'react'
import './About.css'
import icon from '../../assets/icon.png'
import exp from '../../assets/experience.png'
import pic2 from '../../assets/pic2.png'
import pills from '../../assets/pills.png'
const About = () => {
  return (
    <>
    <div className="about-container">
        <div className="about-title">
          <h2 class="about-h2">About Us</h2>
        </div>
        <div className="acontainer">
            <div className="row-aligns-item-center">
                <div className="col-lg">
                   <div className="aheading">
                    <h3 class="ah3">Feel<span class="diff">Better,</span>Live<span class="diff">Better.</span></h3>
                    <h3 class="ah3">We're Here for You.</h3>
                    <p className="descrip">Our goal at Tarheel Pharmacy is to deliver friendly, compassionate care while providing the highest quality of pharmaceutical services.
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