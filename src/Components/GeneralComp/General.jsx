import React from 'react'
import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import topImg from '../../Image/Menu/top-img.jpg'

function AboutPage({ heading, headingTwo }) {

  return (
    <Box bgImage={topImg} bgSize="cover" bgPosition="center" bgRepeat={'no-repeat'}  >
      <Flex direction={'column'} data-aos="slide-up" data-aos-duration="6000">
        <Heading color={'#fff'} fontFamily='Montserrat' fontSize={{base:'45', md:'65'}} pt={40} textAlign={'center'}>{heading}</Heading>
        <Flex justify={'center'} pb={32}>
          <Heading bgColor={'#f7a010'} cursor={'pointer'} rounded={'lg'} fontSize={{base:14, md:20}} p={4} mt={8} fontFamily={'Jost'}>
            <Link color={'#fff'} as={ReactRouterLink} to='/' _hover={{ color: 'white' }}> {headingTwo} </Link>
          </Heading>
        </Flex>
      </Flex>
    </Box>
  )
}

export default AboutPage