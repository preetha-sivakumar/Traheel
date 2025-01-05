import React,{useEffect} from 'react'
import './Reviews.css'

import plus1 from '../../assets/plus.png'
{/* <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script> 
<div class="elfsight-app-4f69e44d-9838-4918-bd77-261db4682f3d" data-elfsight-app-lazy></div>*/}
const Reviews = () => {

    useEffect(() =>{
        const script= document.createElement('script');

        script.src="https://static.elfsight.com/platform/platform.js";
        script.defer= true;

        document.body.appendChild(script);
    })
  return (
    <>
    <div style={{ position: "relative", width: "100%", height: "auto" }}>
      {/* Image */}
      <img
        src={plus1}
        alt="Overlapping Image"
        style={{
          position: "absolute",
          top: "-10px", // Adjust the positioning as needed
          right: "10%",
          zIndex: 2, // Ensure it appears above the SVG
          width: "170px", // Adjust size as needed
        }}
      />
    <svg class="
                border-shape
                BorderShape_shape__X_e1g
                BorderShape_rotate___SSSS
                
            " style= {{position: "relative",
              backgroundColor: "transparent",
              zIndex: 1, // Ensure it appears below the image
               }}
                width="1366" height="153" preserveAspectRatio="none" viewBox="0 0 1366 153" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H1366C967 67 505.041 152.5 255.5 152.5C58.5 152.5 0 68 0 0Z" fill="#001f3f"></path></svg>
    </div>
    <div class="reviews" id="reviews">
        <div className="elfsight-app-4f69e44d-9838-4918-bd77-261db4682f3d"></div>
    </div>
    </>
  )
}

export default Reviews