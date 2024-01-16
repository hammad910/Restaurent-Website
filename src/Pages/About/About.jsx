import React from 'react'
import Layout from '../../Components/Layout/Layout'
import AboutPage from '../../Components/AboutPage/AboutPage'
import { Box } from '@chakra-ui/react'

function About() {
  return (
    <Box w={'163.9%'} >
    <Layout>
        <AboutPage />
      </Layout>
    </Box>
  )
}

export default About