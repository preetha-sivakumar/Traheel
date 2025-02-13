import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Immunizations from './Pages/Immunizations'
import Services_page from './Pages/Services_page'
import Admin from './Pages/Admin'
import Adminhome from './Pages/Admin_home'
import Comm from './Pages/Comm'

const App = () => {
  
  return (
    
    <Routes>
     
      <Route path ="/" element ={<Home />} />
      <Route path ="/immunizations" element ={<Immunizations />} />
      <Route path ="/services" element ={<Services_page />} />
      <Route path ="/admin_login" element={<Admin />} />
      <Route path ="/admin_home" element={<Adminhome />} />
      <Route path ="/meet_the_team" element={<Comm />} />
     
      
   
   
    </Routes>
    
  )
}

export default App