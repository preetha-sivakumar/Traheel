import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Banner1 from '../../components/Banner1/Banner1'
import Announcement from '../../components/Announcement/Announcement'
import About from '../../components/About/About'
import Reviews from '../../components/Reviews/Reviews'

import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <>
    <Navbar />
    <Banner1 />
    <Announcement />
    <About /> 
   
    <Reviews />
  
    <Footer />
   
    </>
  )
}

export default Home