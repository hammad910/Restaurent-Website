import { Box } from '@chakra-ui/react'
import React from 'react'
import video from '../../Image/video.mp4'

function Index() {
  return (
    // Hero Sec Only Video
    <Box href='/' w={'100%'}>
      <Box maxW={'auto'} maxH={'auto'}>
        <video width={'100%'} autoPlay muted loop >
          <source src={video} type="video/mp4" />
        </video>
      </Box>
    </Box >
  )
}

export default Index