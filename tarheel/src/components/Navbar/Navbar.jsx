import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
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
        <li><a href="#spotlight">Spotlight</a></li>
        <li> <a href="#about">About Us</a>       </li>
        <li><a href="#services" className="href">Service</a></li>
         
        <li><a href="../../About">Meet the Team</a></li>
       
        
    </ul>
   </nav>
  )
}

export default Navbar