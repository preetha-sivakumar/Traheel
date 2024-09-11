import React from 'react'
import './Banner.css'
import arrow from '../../assets/dark-arrow.png'
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
const Banner = () => {
  return (
    <div class="hero containernav">
        <div class="hero-text">
            <h1>Providing High Quality Workmanship</h1>
            <p>Based in Singapore, M-Stars Engineering & Construction is your reliable source for construction solutions. You can expect highly trained professionals who are skilled in Mechanical & Electrical works, Plumbing, Sanitary, Gas and Fire Protection Services. </p>
            <button class="btnnav">Explore More <img src={arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Banner