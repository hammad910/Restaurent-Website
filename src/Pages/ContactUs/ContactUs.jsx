import React from 'react'
import Contact from '../../Components/ContactUs/ContactUs'
import Layout from '../../Components/Layout/Layout'
import { Box } from '@chakra-ui/react'

function Component() {
  return (
    <Box w={"200%"}>
      <Layout>
        <Contact />
      </Layout>
    </Box>
  )
}

export default Component