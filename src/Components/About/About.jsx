'use client'

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  useColorModeValue,
} from '@chakra-ui/react'

export default function CallToActionWithVideo() {
  return (
    <Container maxW={'100%'} bgColor={'#ffffff'} >
      <Box w={'80%'} mx={'auto'}>
        <Flex justify={'center'}>
          <Text color={'black'} fontSize={32} pt={8} borderBottom={'2px solid #f7a010'} >About Us</Text>
        </Flex>
        <Flex
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 16, md: 20 }}
          // justify={'space-around'}
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '3xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                color={'#000'}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </Text>
              <br />
            </Heading>
            <Text color={'gray.400'} w={'80%'}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste beatae omnis veritatis nostrum laborum aliquid obcaecati. Iste voluptatibus magni quae reprehenderit eligendi quam atque, assumenda corrupti, voluptate, nobis adipisci nesciunt?
            </Text>
            {/* <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'red'}
              bg={'red.400'}
              _hover={{ bg: 'red.500' }}>
              Get started
            </Button>
          </Stack> */}
            <Button bgColor={'#f7a010'} fontWeight={'bold'} _hover={{ bgColor: '#f7a010', border: 'black', }} w={'140px'}>Contact Us</Button>

          </Stack>
          <Flex
            flex={1}
            // justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Blob
              w={'150%'}
              h={'150%'}
              position={'absolute'}
              top={'-20%'}
              left={0}
              zIndex={-1}
              color={useColorModeValue('red.50', 'red.400')}
            />
            <Box
              transform={'translate(200%)'} animation={'slide-in 1s forwards'}
              position={'relative'}
              height={'300px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  "https://cdn.wallpapersafari.com/42/55/MDzowJ.jpg"
                }
              />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Container>
  )
}

const Blob = (props) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  )
}