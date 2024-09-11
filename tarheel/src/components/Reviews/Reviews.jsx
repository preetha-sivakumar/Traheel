import React,{useEffect} from 'react'
import './Reviews.css'
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
    <div>
        <div className="elfsight-app-4f69e44d-9838-4918-bd77-261db4682f3d"></div>
    </div>
  )
}

export default Reviews