import React from 'react'
import bgImage from '../../Image/home3fnl.png'
// import About from '../Home/About'
import { Box, Flex, Image, Heading, Text } from '@chakra-ui/react'
import Contact from '../Home/Contact'
function AboutPage() {
  return (
    <Box w={'100%'} bgImage="url('https://i.pinimg.com/736x/f0/98/b1/f098b1474bc51d35964b6faa032605dd.jpg')" w={'100%'} h={'100%'} bgSize="cover" bgPosition="center" bgRepeat={'no-repeat'}  >
      <Flex direction={'column'} data-aos="slide-up" data-aos-duration="6000">
        <Heading color={'#fff'} fontFamily='Lobster' fontSize={'65'} pt={40} textAlign={'center'}>About Us</Heading>
        <Flex justify={'center'} pb={32}>
          <Heading bgColor={'#f7a010'} rounded={'lg'} fontSize={22} color={'#fff'} p={4} mt={8} fontFamily={'Jost'}> Home / About </Heading>
        </Flex>
      </Flex>
    </Box>
  )
}

export default AboutPage