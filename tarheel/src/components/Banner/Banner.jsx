import React from 'react'
import './Banner.css'
import arrow from '../../assets/dark-arrow.png'
import img from '../../assets/img.png'
import img2 from '../../assets/img-2.png'
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
const Banner = () => {
  return (
    <div class="hero ">
       
        <div class="hero-text">
          <div className="animated-heading">
            <span>Y</span>
            <span>o</span>
            <span>u</span>
            <span>r</span>
            &nbsp;
            &nbsp;
            &nbsp;
            
            <span class="color">H</span>
            <span class="color">E</span>
            <span class="color">A</span>
            <span class="color">L</span>
            <span class="color">T</span>
            <span class="color">H</span>
            <span class="color">,</span>
            <br />
 
            <span>O</span>
            <span>u</span>
            <span>r</span>

            &nbsp;
            &nbsp;
            &nbsp;
            <span class="color">P</span>
            <span class="color">R</span>
            <span class="color">I</span>
            <span class="color">O</span>
            <span class="color">R</span>
            <span class="color">I</span>
            <span class="color">T</span>
            <span class="color">Y</span>
            <span class="color">.</span>
          </div>
            <p>Dedicated to your well-being with expert advice and reliable pharmacy <br/>services. Visit us for all your health needs. </p>
            <button class="btnnav">Explore More <img src={arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Banner