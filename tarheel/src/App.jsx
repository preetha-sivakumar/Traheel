import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Immunizations from './Pages/Immunizations'
const App = () => {
  return (
    
    <Routes>
     
      <Route path ="/" element ={<Home />} />
      <Route path ="/immunizations" element ={<Immunizations />} />
     
      
   
   
    </Routes>
    
  )
}

export default App