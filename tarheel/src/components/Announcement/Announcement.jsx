import React from 'react'
import './Announcement.scss'
import dev from '../../assets/delivery.png'
import vac from '../../assets/vaccine.png'
const Announcement = () => {
  return (
    <div class="hero-1">
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
   <div className="title">
    <h2 class="sh2">Spotlight</h2>
    <h3 class="sh3">What's new?</h3>
   </div>
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