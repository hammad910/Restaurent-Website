import React from 'react'
import About from '../Home/About'
import { Box, Flex } from '@chakra-ui/react'
import Contact from '../Home/Contact'
function AboutPage() {
  return (
    <Box pt={20} >
      <About />
      <Contact/>
    </Box>
  )
}

export default AboutPage