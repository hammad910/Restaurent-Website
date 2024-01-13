'use client'
import {Container, Stack, Flex, Box, Heading, Text, Button, Image, } from '@chakra-ui/react'

export default function CallToActionWithVideo() {
  return (
    <Container maxW={'100%'}>
      <Box w={'80%'} mx={'auto'}>
        <Flex justify={'center'} data-aos="slide-up" data-aos-duration="6000">
          <Heading color={'#000'} fontFamily='Lobster' fontSize={40} pt={8} borderBottom={'2px solid #f7a010'}>About Us</Heading>
        </Flex>
        <Flex align={'center'} py={{ base: 16, md: 20 }} direction={{ base: 'column', md: 'row' }} gap={10}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }} data-aos="slide-up" data-aos-duration="6000">
            <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', lg: '4xl' }}>
              <Text as={'span'}  color={'#000'} >
                Lorem ipsum dolor sit amet, consectetur </Text>
            </Heading>
            <Text color={'gray.400'} fontSize={'xl'} w={{base:'500px' ,md:'350px',xl:'600px'}}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste beatae omnis veritatis nostrum laborum aliquid obcaecati. Iste voluptatibus magni quae reprehenderit eligendi quam atque, assumenda corrupti, voluptate, nobis adipisci nesciunt?
            </Text>
            <Button className='contact-btn' bgColor={'#f7a010'} fontWeight={'bold'} _hover={{border: 'black', }} transition={'transform .3s ease'} w={'140px'}>Contact Us</Button>
          </Stack>
          <Flex data-aos="slide-up" data-aos-duration="6000">
            <Box height={'300px'} rounded={'2xl'} overflow={'hidden'}>
              <Image fit={'cover'} w={'100%'} h={'100%'} src={ "https://cdn.wallpapersafari.com/42/55/MDzowJ.jpg" } />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Container>
  )
}
