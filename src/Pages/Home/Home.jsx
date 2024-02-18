import React from 'react'
import Layout from '../../Components/Layout/Layout'
import Hero from '../../Components/Home/Hero'
import About from '../../Components/Home/About'
import Category from '../../Components/Home/Category'
import Menu from '../../Components/Home/Menu'
import OurDeal from '../../Components/Home/OurDeal'
import HowItWorks from '../../Components/Home/HowItWorks'
// import Testimonials from '../../Components/Home/Testimonials'

function Home() {
  return (
    <Layout>
        <Hero/>
        <About/>
        <Category/>
        <Menu/>
        <OurDeal/>
        <HowItWorks/>
        {/* <Testimonials/> */}
    </Layout>
  )
}

export default Home