import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import General from '../GeneralComp/General'
import About from '../Home/About'
// import OurTeam from '../Home/OurTeam'
function AboutPage() {
  return (
    <>
      <General heading='About Us' headingTwo='Home / About' />
      <About />
      <Box mt={'-8'}>
        {/* <OurTeam /> */}
      </Box>
    </>
  )
}

export default AboutPage