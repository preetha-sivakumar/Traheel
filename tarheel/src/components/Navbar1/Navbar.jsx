import React, { useEffect, useState } from 'react'
import './Navbar1.css'
import logo from '../../assets/logo1.png'
import logo1 from '../../assets/Logo-1.png'
const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  useEffect (()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 300 ? setSticky(true) : setSticky(false);
    })
  }, [])
   const [mobilemenu, setmobileMenu] = useState(false);
   const togglemenu = ()=> {
    mobilemenu? setmobileMenu(false ) : setmobileMenu(true);
   }

  return (
   <nav  className={`containernav1 ${sticky? 'dark-nav' : ''}`}>
    <img src={logo1} alt=""  class="logo"/>
    <ul className={mobilemenu?'' : 'hide-mobile-menu'}>
        <li><a href="./">Home</a></li>
        <li><a href="../../Immunizations">Immunizations</a></li>
        <li><a href="./#hero-1">Spotlight</a></li>
        <li> <a href="./#about-container">About Us</a>       </li>
        <li><a href="/services" className="href">Services</a></li>
         
        <li><a href="../../meet_the_team">Contact Us</a></li>
       
       
        
    </ul>
    <svg onClick={togglemenu} className ='menu-icon' viewBox="0 0 100 80" width="25" fill="#fff" height="27">
  <rect y="2" width="50" height="7"></rect>
  <rect y="32" width="100" height="7"></rect>
  <rect y="62" width="100" height="7"></rect>
</svg>
   </nav>
  )
}

export default Navbar