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
        <li><a href="../../Prod">Products</a></li>
        <li>
        <div className="dropdown">
    
        
        <a href="../../Service">Services</a>
        <div className="dropdown-content">
          <a href="../../Service">Plumbing& Gas</a>
          <a href="../../Service/Fire">Fire Protection</a>
          
        </div>
        </div>
        </li>
        
        
        <li><a href="../../About">Meet the Team</a></li>
       
        
    </ul>
   </nav>
  )
}

export default Navbar