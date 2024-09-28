import React, { useEffect, useState } from 'react';
import './Banner1.css';
import img from '../../assets/pic-front.png'
import ani from '../../assets/shipping-line-animation.svg'
const Banner1 = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
        setScrollPos(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Define the maximum zoom factor
  const maxZoomFactor = 1.5; // 50% zoom
  // Define the scroll distance after which zoom stops increasing
  const zoomLimit = 500; // Adjust this value as needed

  // Calculate zoom scale
  const zoomScale = Math.min(1 + scrollPos / zoomLimit, maxZoomFactor);

  return (
    <div>
      <div className="hero-back">
        {/* Apply the zoom effect to the image */}
        <img
          src={img}
          alt=""
          style={{
            transform: `scale(${zoomScale})`, // Zoom effect on scroll
            transformOrigin: 'center top',
            transition: 'transform 0.2s ease-out', // Smooth transition for the zoom
            width: '100%', // Keep the width responsive
            height: 'auto', // Adjust height automatically
          }}
        />
         
      </div>

      <div className="content">
        <h1>Content goes here</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
          cupiditate fuga natus voluptatem dolorum ab illo, quos adipisci
          voluptatum explicabo cumque sint neque quo sit consequatur molestiae
          expedita saepe harum, nobis labore, praesentium. Dicta nobis
          consectetur, culpa consequatur. Nisi velit aspernatur veritatis, vero
          iste culpa voluptates eos provident officiis placeat quis voluptas
          magnam animi neque rem nam sint tempore, amet aut libero? Dignissimos
          quisquam autem eos. Fuga, incidunt temporibus id sit. Iusto labore
          animi a deleniti magni sequi incidunt at maiores harum sed quo
          accusantium aperiam, officiis architecto ducimus consequuntur
          distinctio doloremque numquam esse consectetur velit beatae. Sequi
          perspiciatis, inventore.
        </p>
        {/* Rest of the content */}
      </div>
    </div>
  );
};

export default Banner1;
