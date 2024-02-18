'use client'

import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    Container,
    Avatar,
    useColorModeValue,
    IconButton
} from '@chakra-ui/react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide, } from 'swiper/react';
// import '../Swiper.css';
// import 'swiper/css';
// import 'swiper/swiper-bundle.css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';


// Testimonial component for wrapping each testimonial
const Testimonial = (props) => {
    const { children } = props

    return <Box >{children}</Box>
}

// Component for testimonial content
const TestimonialContent = (props) => {
    const { children } = props
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'lg'}
            p={8}
            rounded={'xl'}
            align={'center'}
            pos={'relative'}
            _after={{
                content: `""`,
                w: 0,
                h: 0,
                borderLeft: 'solid transparent',
                borderLeftWidth: 16,
                borderRight: 'solid transparent',
                borderRightWidth: 16,
                borderTop: 'solid',
                borderTopWidth: 16,
                borderTopColor: useColorModeValue('white', 'gray.800'),
                pos: 'absolute',
                bottom: '-16px',
                left: '50%',
                transform: 'translateX(-50%)',
            }}>
            {children}
        </Stack>
    )
}

// Heading component for testimonial
const TestimonialHeading = (props) => {
    const { children } = props

    return (
        <Heading as={'h3'} fontSize={'xl'}>
            {children}
        </Heading>
    )
}

// Text component for testimonial
const TestimonialText = (props) => {
    const { children } = props

    return (
        <Text
            textAlign={'center'}
            color={useColorModeValue('gray.600', 'gray.400')}
            fontSize={'sm'}>
            {children}
        </Text>
    )
}

// Testimonial Avatar component for testimonial
const TestimonialAvatar = ({
    src = 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    name = "Jane Cooper",
    title = 'CEO at ABC Corporation',
}) => {
    return (
        <Flex align={'center'} mt={8} direction={'column'}>
            <Avatar src={src} mb={2} />
            <Stack spacing={-1} align={'center'}>
                <Text fontWeight={600}>{name}</Text>
                <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
                    {title}
                </Text>
            </Stack>
        </Flex>
    )
}

// Main component for the testimonial section using Swiper
export default function WithSwiper() {
    return (
        <Box mt={10}>
            <Container maxW={'7xl'} py={16} w={'80%'} mx={'auto'}>
                <Stack spacing={0} align={'center'} py={16}>
                    <Heading>Our Clients </Heading>
                    {/* <Text>We have been working with clients around the world</Text> */}
                </Stack>
                <Swiper
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
                     {/* Individual testimonial slides */}
                    <SwiperSlide>
                        <Testimonial>
                            <TestimonialContent>
                                <TestimonialHeading>Efficient</TestimonialHeading>
                                <TestimonialText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed
                                    imperdiet nibh lectus feugiat nunc sem.
                                </TestimonialText>
                            </TestimonialContent>
                            <TestimonialAvatar
                                src={
                                    'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                                }
                                name={'Jane Cooper'}
                                title={'CEO at ABC Corporation'}
                            />
                        </Testimonial>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Testimonial>
                            <TestimonialContent>
                                <TestimonialHeading>Intuitive</TestimonialHeading>
                                <TestimonialText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed
                                    imperdiet nibh lectus feugiat nunc sem.
                                </TestimonialText>
                            </TestimonialContent>
                            <TestimonialAvatar
                                src={
                                    'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                                }
                                name={'Jane Cooper'}
                                title={'CEO at ABC Corporation'}
                            />
                        </Testimonial>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Testimonial>
                            <TestimonialContent>
                                <TestimonialHeading>Mindblowing </TestimonialHeading>
                                <TestimonialText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed
                                    imperdiet nibh lectus feugiat nunc sem.
                                </TestimonialText>
                            </TestimonialContent>
                            <TestimonialAvatar
                                src={
                                    'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                                }
                                name={'Jane Cooper'}
                                title={'CEO at ABC Corporation'}
                            />
                        </Testimonial>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Testimonial>
                            <TestimonialContent>
                                <TestimonialHeading>Efficient </TestimonialHeading>
                                <TestimonialText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed
                                    imperdiet nibh lectus feugiat nunc sem.
                                </TestimonialText>
                            </TestimonialContent>
                            <TestimonialAvatar
                                src={
                                    'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                                }
                                name={'Jane Cooper'}
                                title={'CEO at ABC Corporation'}
                            />
                        </Testimonial>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Testimonial>
                            <TestimonialContent>
                                <TestimonialHeading>Intuitive Design</TestimonialHeading>
                                <TestimonialText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed
                                    imperdiet nibh lectus feugiat nunc sem.
                                </TestimonialText>
                            </TestimonialContent>
                            <TestimonialAvatar
                                src={
                                    'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                                }
                                name={'Jane Cooper'}
                                title={'CEO at ABC Corporation'}
                            />
                        </Testimonial>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Testimonial>
                            <TestimonialContent>
                                <TestimonialHeading>Mindblowing Service</TestimonialHeading>
                                <TestimonialText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed
                                    imperdiet nibh lectus feugiat nunc sem.
                                </TestimonialText>
                            </TestimonialContent>
                            <TestimonialAvatar
                                src={
                                    'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                                }
                                name={'Jane Cooper'}
                                title={'CEO at ABC Corporation'}
                            />
                        </Testimonial>
                    </SwiperSlide>
                    {/* Navigation Button */}
                    <Flex justify={'center'} gap={10} mt={6}>
                        <IconButton
                            colorScheme="red"
                            borderRadius="full"
                            className="custom-btn-prev"
                            bgColor={'#333'}
                            _hover={{ bgColor: '#555' }}
                        >
                            <BiLeftArrowAlt fontSize={20} />
                        </IconButton>
                        <IconButton
                            colorScheme="red"
                            borderRadius="full"
                            className="custom-btn-next"
                            bgColor={'#333'}
                            _hover={{ bgColor: '#555' }}
                        >
                            <BiRightArrowAlt fontSize={20} />
                        </IconButton>
                    </Flex>
                </Swiper>
            </Container>
        </Box>
    );
}
