import React from 'react'
import {ChakraProvider} from '@chakra-ui/react'
import Home from './Home/Home'
import Layout from './Layout/Layout'
import About from './About/About'
function App() {
  return (
    <ChakraProvider>
      <Layout>
      <Home />
      <About />
      </Layout>
    </ChakraProvider>
  )
}

export default App