import { Container, Stack, Flex, Box, Heading, Text, Button, Image } from '@chakra-ui/react';
import img1 from '../../Image/About/Online-delivery-1.png'

export default function CallToActionWithVideo() {
  return (
    // Simple Image With Text
    <Container maxW={'100%'} >
      <Box w={'80%'} mx={'auto'}>
        <Flex py={{ base: 8, md: 20 }} justify={'center'} direction={{ base: 'column', md: 'row' }} gap={10}>
          <Stack  spacing={{ base: 5, md: 10 }} data-aos="slide-up" data-aos-duration="6000">
            <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', lg: '5xl' }}>
              <Text maxW={{ base: '600px', md: '700px', xl: '800px' }}>
                Get Your Order 24/7 Right At Your Doorsteps
              </Text>
            </Heading>
            <Text color={'gray.400'} fontSize={{ base: 'sm', sm: 'md', lg: 'xl' }} maxW={{ base: '500px', md: '400px', xl: '600px' }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste beatae omnis veritatis nostrum laborum aliquid obcaecati. Iste voluptatibus magni quae reprehenderit eligendi quam atque, assumenda corrupti, voluptate, nobis adipisci nesciunt?
            </Text>
            <Button className='contact-btn' bgColor={'#f7a010'} _hover={{ border: 'black' }} transition={'transform .3s ease'} w={'140px'}>
              Contact Us
            </Button>
          </Stack>
          <Flex data-aos="slide-up" data-aos-duration="6000">
            <Box  rounded={'2xl'} overflow={'hidden'}>
              <Image fit={'cover'} src={img1} w={{ base: '80%', md:'300px', lg: '400px', xl:'500px'}}  />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
}
