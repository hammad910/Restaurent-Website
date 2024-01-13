import React from 'react'
import {ChakraProvider} from '@chakra-ui/react'
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Menu from './Components/Menu/Menu'
function App() {
  return (
    <ChakraProvider>
      <Layout>
      <Home />
      <About />
      <Services/>
      <Menu/>
      </Layout>
    </ChakraProvider>
  )
}

export default App