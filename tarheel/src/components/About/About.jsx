import React from 'react'
import './About.css'
import bg1 from '../../assets/bg1.png'
import exp from '../../assets/experience.png'
const About = () => {
  return (
    <div className="about-container">
        <div className="about-title">
          <h2 class="about-h2">About Us</h2>
        </div>
        <div className="acontainer">
            <div className="row-aligns-item-center">
                <div className="col-lg">
                    <div className="about-img">
                         <img src={exp} alt="" />

                    </div>
                </div>
                <div className="col-lg">
                <img src={bg1} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About