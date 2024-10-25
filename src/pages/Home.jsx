import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Destinations from '../components/Destinations'
import Expericence from '../components/Expericence'
import Offers from '../components/Offers'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero />
        <Destinations/>
        <Expericence/>
        <Offers/>
        <Footer/>
    </div>
  )
}

export default Home