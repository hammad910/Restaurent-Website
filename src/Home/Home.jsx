import { Box, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
// import homeImg from '../Image/home.jpeg'
import home3 from '../Image/home3fnl.png'

function Index() {
  return (
    <Box href='/'>
      <Link>
        <Box position={'relative'}>
          <Image src={home3} w={"100%"} h={'80%'} />
          <Text position={'absolute'} top={'50%'} left={"50%"} color={'white'}>
            hello
          </Text>
        </Box>
      </Link>
    </Box>
  )
}

export default Index