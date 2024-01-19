import React from 'react'
import Layout from '../../Components/Layout/Layout'
import Hero from '../../Components/Home/Hero'
import About from '../../Components/Home/About'
import Menu from '../../Components/Home/Menu'
import Service from '../../Components/Home/Services'
import Contact from '../../Components/Home/Contact'
// import OurTeam from '../../Components/Home/OurTeam'

function Home() {
  return (
    <Layout>
        <Hero/>
        <About/>
        <Service/>
        <Menu/>
        {/* <OurTeam/> */}
        <Contact/>
    </Layout>
  )
}

export default Home