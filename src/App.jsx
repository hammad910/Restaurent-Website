import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom';
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Services from './Pages/Service/Service'
import Menu from './Pages/Menu/Menu'
function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Menu' element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App