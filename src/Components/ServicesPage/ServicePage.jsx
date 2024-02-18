import React from 'react'
import { Container, Stack, Flex, Box, Heading, Link, Image, Button, SimpleGrid, Icon, Text, } from '@chakra-ui/react';
import General from '../GeneralComp/General'
import { Link as ReactRouterLink } from 'react-router-dom';




const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  )
}

function ServicePage() {
  return (
    <>
      <General heading='Services' headingTwo='Home / Services' />
      <Container maxW={'100%'}>
        <Box w={'80%'} mx={'auto'}>
          <Flex align={'center'} py={{ base: 8, md: 20 }} direction={{ base: 'column', md: 'row' }} gap={10}>
            <Stack flex={1} spacing={{ base: 5, md: 10 }} data-aos="slide-up" data-aos-duration="6000">
              <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', lg: '4xl' }}>
                <Text as={'span'} color={'#000'}>
                  Lorem ipsum dolor sit amet, consectetur
                </Text>
              </Heading>
              <Text color={'gray.400'} fontSize={{ base: 'sm', sm: 'md', lg: 'xl' }} maxW={{ base: '500px', md: '400px', xl: '600px' }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste beatae omnis veritatis nostrum laborum aliquid obcaecati. Iste voluptatibus magni quae reprehenderit eligendi quam atque, assumenda corrupti, voluptate, nobis adipisci nesciunt?
              </Text>
              <Link as={ReactRouterLink} to='/Menu'>
                <Button  className='contact-btn' bgColor={'#f7a010'} fontWeight={'bold'} _hover={{ border: 'black' }} transition={'transform .3s ease'} w={'140px'}>
                  Visit Menu
                </Button>
              </Link>
            </Stack>
            <Flex data-aos="slide-up" data-aos-duration="6000">
              <Box h={{ base: '300px', md: '200px', lg: '250px', xl: '400px' }} rounded={'2xl'} overflow={'hidden'}>
                <Image fit={'cover'} w={'100%'} h={'100%'} src={"https://quickeat-react.vercel.app/assets/img/man-1.jpg"} />
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Container>
    </>
  )
}

export default ServicePage