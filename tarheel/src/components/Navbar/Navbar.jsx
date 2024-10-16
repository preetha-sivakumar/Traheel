import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo1.png'
const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  useEffect (()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 300 ? setSticky(true) : setSticky(false);
    })
  }, [])



  return (
   <nav  class={`containernav ${sticky? 'dark-nav' : ''}`}>
    <img src={logo} alt=""  class="logo"/>
    <ul>
        <li><a href="./">Home</a></li>
        <li><a href="#hero-1">Spotlight</a></li>
        <li> <a href="#about-container">About Us</a>       </li>
        <li><a href="#service-container" className="href">Services</a></li>
         
        <li><a href="../../#contact-container">Contact Us</a></li>
        <li><a href="../../Immunizations">Immunizations</a></li>
       
        
    </ul>
   </nav>
  )
}

export default Navbar