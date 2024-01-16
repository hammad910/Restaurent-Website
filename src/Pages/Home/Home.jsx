import React from 'react'
import Layout from '../../Components/Layout/Layout'
import Hero from '../../Components/Home/Hero'
import About from '../../Components/Home/About'
import Menu from '../../Components/Home/Menu'
import MenuCard from '../../Components/Home/MenuCard'
import Service from '../../Components/Home/Services'
import ServiceCard from '../../Components/Home/ServiceCard'
import Contact from '../../Components/Home/Contact'

function Home() {
  return (
    <Layout>
        <Hero/>
        <About/>
        <Service/>
        <ServiceCard/>
        <Menu/>
        <MenuCard/>
        <Contact/>
    </Layout>
  )
}

export default Home