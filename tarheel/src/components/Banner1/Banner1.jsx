import React, { useState, useEffect} from 'react'

import './Banner1.css'
import heroguy from '../../assets/hero-guy1.png'
import plus1 from '../../assets/plus.png'
import plus2 from '../../assets/plus2.png'
const Banner1 = () => {

  

  const [holidayHours, setHolidayHours] = useState([]);
  const [spotlightContent, setSpotlightContent] = useState([]);
  
  // Fetch holiday hours from localStorage on mount
  useEffect(() => {
    const storedHolidays = JSON.parse(localStorage.getItem('holidayHours')) || [];
    setHolidayHours(storedHolidays);

    const storedSpotlight = JSON.parse(localStorage.getItem('spotlightContent')) || [];
    setSpotlightContent(storedSpotlight);

  }, []);

  return (
    <div className ='hero-section'>
       <p className="tagline-top">
       Local. Independent. LGBTQ+ Inclusive.<br /> Proudly serving the TarHeel Towns since 2017
    </p>
      <div className="special-hrs">
       
        <div className="content">
          {/* <div className="content-hrs">

          
            <h3>Holiday Hours:</h3>
            <br />
            <div className="holiday-grid">
            {holidayHours.length > 0 ? (
          holidayHours.map((holiday, index) => (
            <div className="holiday-item" key={index}>
            <strong>{holiday.day}:</strong> {holiday.description}
          </div>
          ))
        ) : (
          <p>No holiday hours set.</p>
        )}
        </div>
        </div> */}
       
      <div className="news">
     
         <h3 className='newsh3'>Announcements:</h3>
            <br />
            <div className="holiday-grid1">
            {spotlightContent.length > 0 ? (
              spotlightContent.map((Spotlight, index) => (
                <div className="holiday-item1" key={index}>
                  <strong>{Spotlight.title}:</strong> {Spotlight.desc}
                </div>
              ))
            ) : (
              <p>No announcements yet.</p>
            )}

{/* <h3>Holiday Hours:</h3>
            <br />
            <div className="holiday-grid">
            {holidayHours.length > 0 ? (
          holidayHours.map((holiday, index) => (
            <div className="holiday-item" key={index}>
            <strong>{holiday.day}:</strong> {holiday.description}
          </div>
          ))
        ) : (
          <p>No holiday hours set.</p>
        )} */}
          </div>
        </div>
        </div>
      </div> 
     
      
      <div className="hero1">
      
     
       <div class="hero-text">
       
        <div className="hero-title">
       

      
         <h1>
          <span className="background">Your Effortless, </span>
          <br         /><span className='background'>And Inclusive<br /> </span>
          <span className ='background'>Pharmacy</span></h1>
         </div>
          <div className ="Hero_textBlock">
          <p><span className='background'>Visit us or experience swift delivery <br />for all your health essentials.<br />The Pharmacy Experience You Deserve.</span></p>
          <span className='background'> <button to="/services" className='btn-b' >Get Started!</button> </span>
          </div>
       </div>
        <div class="hero-image">
          <img src={heroguy} alt="Smiling person " />
        
          </div>
          
          <p className="tagline">
          {/* A Pharmacy That Cares for <br />Every Identity, Every Family, Every Story */}
          Serving with Pride, Compassion, and Inclusivity
    </p>
         </div>
        
        
         {/* <section>
         <svg class=" BorderShape_shape__X_e1g BorderShape_rotate___SSSS" style="background-color:transparent" width="1366" height="153" preserveAspectRatio="none" viewBox="0 0 1366 153" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0H1366C967 67 505.041 152.5 255.5 152.5C58.5 152.5 0 68 0 0Z" fill="#00263E"></path></svg>

         </section> */}
        {/* <div>
  <svg
    className="BorderShape_shape__X_e1g BorderShape_rotate___SSSS"
    style={{
      backgroundColor: 'transparent',
      width: '1366px',
      height: '153px',
    }}
    preserveAspectRatio="none"
    viewBox="0 0 1366 153"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 0H1366C967 67 505.041 152.5 255.5 152.5C58.5 152.5 0 68 0 0Z"
      fill="#00263E"
    ></path>
  </svg>
</div> */}


{/* <svg
  className="border-shape BorderShape_shape__X_e1g"
  style={{ backgroundColor: 'transparent' }}
  width="1366"
  height="153"
  preserveAspectRatio="none"
  viewBox="0 0 1366 153"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>

  <path
    d="M0 0H1366C967 67 505.041 152.5 255.5 152.5C58.5 152.5 0 68 0 0Z"
    fill="#001f3f"
  ></path>
  
</svg> */}

<div style={{ position: "relative", width: "100%", height: "auto" }}>
  {/* Image */}
  <img
    src={plus2}
    alt="Overlapping Image"
    style={{
      position: "absolute",
      top: "-15px", // Adjust the positioning as needed
      left: "50px",
      zIndex: 2, // Ensure it appears above the SVG
      width: "160px", // Adjust size as needed
    }}
  />

  {/* SVG */}
  <svg
    className="border-shape BorderShape_shape__X_e1g"
    style={{
      position: "relative",
      backgroundColor: "transparent",
      zIndex: 1, // Ensure it appears below the image
    }}
    width="1366"
    height="153"
    preserveAspectRatio="none"
    viewBox="0 0 1366 153"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 0H1366C967 67 505.041 152.5 255.5 152.5C58.5 152.5 0 68 0 0Z"
      fill="#001f3f"
    ></path>
  </svg>
</div>


</div>
        
        
    
  )
}

export default Banner1