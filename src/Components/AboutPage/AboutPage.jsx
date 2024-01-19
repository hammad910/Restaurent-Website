import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import General from '../GeneralComp/General'
import About from '../Home/About'
function AboutPage() {
  return (
    <>
      <General heading='About Us' headingTwo='Home / About' />
      <About />
    </>
  )
}

export default AboutPage