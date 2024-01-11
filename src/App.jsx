import React from 'react'
import {ChakraProvider} from '@chakra-ui/react'
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
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