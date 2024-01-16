import React from 'react'
import {
    Box, Stack, Text, Flex, VStack, Heading, SimpleGrid, useColorModeValue, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Button, Image,
    Container,
    Avatar,
    IconButton
} from '@chakra-ui/react'
// import MenuCard from './MenuCard'
import menuImg from '../../Image/home.jpeg'
// import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// import { Navigation } from 'swiper/modules';
// import { Swiper, SwiperSlide, } from 'swiper/react';
// import '../Swiper.css';
// import 'swiper/css';
// import 'swiper/swiper-bundle.css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';


function Menu() {

    const MenuCard = [
        {
            heading: 'Mr-shezi', price: '599Rs', description: 'OUR GOAL IS TO  SPECIFIED REQUIREMENTS AND CUSTOMER EXPECTATIONS'
        },
        {
            heading: 'Mr-shezi', price: '599Rs', description: 'OUR GOAL IS TO  SPECIFIED REQUIREMENTS AND CUSTOMER EXPECTATIONS'
        },
        {
            heading: 'Mr-shezi', price: '599Rs', description: 'OUR GOAL IS TO  SPECIFIED REQUIREMENTS AND CUSTOMER EXPECTATIONS'
        },
    ]

    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(5px)'
        />
    )
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)

    return (
        <Box w={'100%'} mt={28}>
            <Flex justify={'center'} data-aos="slide-up" data-aos-duration="6000">
                <Heading color={'#000'} fontFamily='Lobster' fontSize={40} borderBottom={'2px solid #f7a010'}>Our Menu</Heading>
            </Flex>
            <Flex color={'black'} mt={12} justify={'center'} w={'80%'} mx={'auto'}>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={12} onClick={() => {
                    setOverlay(<OverlayOne title='mr-shezi' />)
                    onOpen()
                }}>
                    {/* <Swiper
                        modules={[Navigation]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.custom-btn-next',
                            prevEl: '.custom-btn-prev',
                        }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            // when width is 320px
                            320: {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                            },
                            // when width is 768px
                            768: {
                                slidesPerView: 2,
                                slidesPerGroup: 2,
                            },
                            // when width is 1024px
                            992: {
                                slidesPerView: 3,
                                slidesPerGroup: 3,
                            },
                            1280: {
                                slidesPerView: 4,
                                slidesPerGroup: 4,
                            },
                        }}
                    >
                    <Swiper /> */}

                    {MenuCard.map((card, index) => {
                        <MenuBox  key={index} heading={card.heading} price={card.price} description={card.description} />
                    })}
                    {/* <MenuCard img={menuImg} heading='abcd' price='299' description='OUR GOAL IS TO  SPECIFIED REQUIREMENTS AND CUSTOMER EXPECTATIONS' />
                    <MenuCard img={menuImg} heading='abcd' price="599Rs" description='OUR GOAL IS TO  SPECIFIED REQUIREMENTS AND CUSTOMER EXPECTATIONS' />
                    <MenuCard img={menuImg} heading='abcd' price="599Rs" description='OUR GOAL IS TO  SPECIFIED REQUIREMENTS AND CUSTOMER EXPECTATIONS' />
                    <MenuCard img={menuImg} heading='abcd' price="599Rs" description='OUR GOAL IS TO  SPECIFIED REQUIREMENTS AND CUSTOMER EXPECTATIONS' />
                    <MenuCard img={menuImg} heading='abcd' price="599Rs" description='OUR GOAL IS TO  SPECIFIED REQUIREMENTS AND CUSTOMER EXPECTATIONS' /> */}

                </SimpleGrid>
                <Modal isCentered isOpen={isOpen} onClose={onClose} size={{ base: 'sm', md: '2xl', lg: '5xl' }} >
                    {overlay}
                    <ModalContent>
                        <ModalCloseButton />
                        <ModalBody>
                            <SimpleGrid
                                columns={{ base: 1, lg: 2 }}
                                spacing={{ base: 8, md: 10 }}
                                py={{ base: 18, md: 24 }}
                            >
                                <Flex justify={'center'}>
                                    <Image
                                        rounded={'md'}
                                        src={menuImg}
                                        align={'center'}
                                    />
                                </Flex>
                                <Stack spacing={{ base: 6, md: 10 }}>
                                    <Box as={'header'}>
                                        <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                                            abcd
                                        </Heading>
                                        <Text fontWeight={300} fontSize={'2xl'}>
                                            699$
                                        </Text>
                                    </Box>
                                    <Stack spacing={{ base: 4, sm: 6 }} direction={'column'} >
                                        <VStack spacing={{ base: 4, sm: 6 }}>
                                            <Text fontSize={'2xl'} fontWeight={'300'}>
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                                eirmod tempor invidunt ut labore
                                            </Text>
                                        </VStack>
                                    </Stack>

                                    <Button rounded={'none'} w={'full'} mt={8} size={'lg'} py={'7'} bg={useColorModeValue('gray.900', 'gray.50')} color={useColorModeValue('white', 'gray.900')}
                                        textTransform={'uppercase'}
                                        _hover={{ transform: 'translateY(2px)', boxShadow: 'lg', }}>
                                        Add to cart
                                    </Button>
                                </Stack>
                            </SimpleGrid>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={onClose}>Close</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Flex>
        </Box >
    )
}

function MenuBox({ heading, price, description }) {
    return (
        <Box boxShadow={'2xl'} _hover={{ cursor: 'pointer', bgColor: '#f7a010' }} data-aos="slide-up" data-aos-duration="6000" >
            <Flex w={'80%'} mx={'auto'} _hover={{}} gap={8}  >
                {/* <Flex direction={'column'} mt={4}> */}
                {/* <Image src={props.img} w={32} /> */}
                {/* </Flex> */}
                <Flex direction={'column'} pt={4}>
                    <Flex justify={'space-between'}>
                        <Text fontSize={20} fontWeight={'bold'}>{heading}</Text>
                        <Text fontSize={20} fontWeight={'bold'}>{price}</Text>
                    </Flex>
                    <Flex mb={4}>
                        <Text fontSize={"13px"}>{description}</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Menu