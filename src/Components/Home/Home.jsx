import { Box, Image, Link, Text, Button, Container, Heading, Stack, Flex, } from '@chakra-ui/react'
import React from 'react'
// import homeImg from '../Image/home.jpeg'
// import img from '../../Image/shezicircle.png'
import video from '../../Image/video.mp4'

function Index() {
  return (
    <Box href='/' w={'100%'}>
       <Box maxW={'auto'} maxH={'auto'}>
            <video  width={'100%'} autoPlay muted loop >
            <source src={video} type="video/mp4" />
            </video>
        </Box>

      {/* <Flex w={'90%'} mx={'auto'} justify={'space-between'} >
        <Flex position={'absolute'}  top={'300px'} color={'white'} >
          <Flex>
            <Stack
              // textAlign={'center'}
              // align={'center'}
              spacing={{ base: 8, md: 8 }}
            // py={{ base: 20, md: 20 }}
            > */}
              {/* <Heading
                fontWeight={'bolder'}
                fontSize={{ base: '3xl', sm: '4xl', md: '7xl' }}
                w={'90%'}
              >
                Enjoy Our Delecious Meal
              </Heading>
              <Text color={'white'} maxW={'3xl'}>
                Never miss a meeting. Never be late for one too. Keep track of your meetings and
                receive smart reminders in appropriate times. Read your smart “Daily Agenda”
                every morning.
              </Text>
              <Button bgColor={'#f7a010'} fontWeight={'bold'} _hover={{ bgColor: '#f7a010', border: 'black', }} w={'140px'}>About Us</Button>
            </Stack>
          </Flex> */}
          {/* <Flex className='container'>
            <Image src={img} className='circle'/>
          </Flex> */}
        {/* </Flex> */}
        {/* </Box> */}
      {/* </Flex > */}
    </Box >
  )
}

export default Index