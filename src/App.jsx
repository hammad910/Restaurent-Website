import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom';
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Menu from './Components/Menu/Menu'
function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          {/* <Layout> */}
            <Route path='' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Services' element={<Services />} />
            <Route path='/Menu' element={<Menu />} />
          {/* </Layout> */}
          </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App