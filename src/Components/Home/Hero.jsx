import { Box } from '@chakra-ui/react'
import video from '../../Image/video.mp4'

function Index() {
  return (
    // Hero Sec Only Video
    <Box href='/' w={'100%'} id='hero-sec' >
      <Box maxW={'auto'} maxH={'auto'}>
        <video width={'100%'} muted autoPlay loop>
          <source src={video} type="video/mp4" />
        </video>
      </Box>
    </Box >
  )
}

export default Index