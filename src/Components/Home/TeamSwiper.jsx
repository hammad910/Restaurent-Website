import React from 'react'
import { Box, Flex, Heading, SimpleGrid, Text, IconButton } from "@chakra-ui/react"
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import 'swiper/css';


const TeamMembers = [
    {
        Image: 'https://purepng.com/public/uploads/large/purepng.com-chefcheftrained-professional-cookfood-preparationkitchenchefsexperienced-1421526669807fgp5t.png', name: 'ChefName'
    },
    {
        Image: 'https://purepng.com/public/uploads/large/purepng.com-chefcheftrained-professional-cookfood-preparationkitchenchefsexperienced-1421526669807fgp5t.png', name: 'ChefName'
    },
    {
        Image: 'https://purepng.com/public/uploads/large/purepng.com-chefcheftrained-professional-cookfood-preparationkitchenchefsexperienced-1421526669807fgp5t.png', name: 'ChefName'
    },
    {
        Image: 'https://purepng.com/public/uploads/large/purepng.com-chefcheftrained-professional-cookfood-preparationkitchenchefsexperienced-1421526669807fgp5t.png', name: 'ChefName'
    },
    {
        Image: 'https://purepng.com/public/uploads/large/purepng.com-chefcheftrained-professional-cookfood-preparationkitchenchefsexperienced-1421526669807fgp5t.png', name: 'ChefName'
    },
    {
        Image: 'https://purepng.com/public/uploads/large/purepng.com-chefcheftrained-professional-cookfood-preparationkitchenchefsexperienced-1421526669807fgp5t.png', name: 'ChefName'
    },
    {
        Image: 'https://purepng.com/public/uploads/large/purepng.com-chefcheftrained-professional-cookfood-preparationkitchenchefsexperienced-1421526669807fgp5t.png', name: 'ChefName'
    },
    {
        Image: 'https://purepng.com/public/uploads/large/purepng.com-chefcheftrained-professional-cookfood-preparationkitchenchefsexperienced-1421526669807fgp5t.png', name: 'ChefName'
    },
    {
        Image: 'https://purepng.com/public/uploads/large/purepng.com-chefcheftrained-professional-cookfood-preparationkitchenchefsexperienced-1421526669807fgp5t.png', name: 'ChefName'
    },
    {
        Image: 'https://purepng.com/public/uploads/large/purepng.com-chefcheftrained-professional-cookfood-preparationkitchenchefsexperienced-1421526669807fgp5t.png', name: 'ChefName'
    },
    {
        Image: 'https://purepng.com/public/uploads/large/purepng.com-chefcheftrained-professional-cookfood-preparationkitchenchefsexperienced-1421526669807fgp5t.png', name: 'ChefName'
    },
    {
        Image: 'https://purepng.com/public/uploads/large/purepng.com-chefcheftrained-professional-cookfood-preparationkitchenchefsexperienced-1421526669807fgp5t.png', name: 'ChefName'
    },
]

function TeamSwiper() {
    return (
        <Box w={'80%'} mx={'auto'} color={'black'} mt={12} >
            <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                navigation={{
                    nextEl: '.custom-btn-next',
                    prevEl: '.custom-btn-prev',
                }}
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
                    1024: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                    },
                    1440: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                    },
                }}
            >

                    {TeamMembers.map((card, index) => (
                        <SwiperSlide key={index}>
                            <TeamCard Image={card.Image} name={card.name} />
                        </SwiperSlide>
                    ))}
                {/* Navigation Icon */}
                <Flex justify={'center'} gap={10} mt={12} >
                    <IconButton colorScheme="red" borderRadius="full" className="custom-btn-prev" bgColor={'#333'} _hover={{ bgColor: '#555' }}>
                        <BiLeftArrowAlt fontSize={20} />
                    </IconButton>
                    <IconButton colorScheme="red" borderRadius="full" className="custom-btn-next" bgColor={'#333'} _hover={{ bgColor: '#555' }}>
                        <BiRightArrowAlt fontSize={20} />
                    </IconButton>
                </Flex>
            </Swiper>
        </Box>
    )
}
function TeamCard({ Image, name }) {
    return (
        <Flex boxShadow={'2xl'} h={'100%'} pt={6} _hover={{ cursor: 'pointer', bgColor: '#f7a010', rounded: 'lg' }}  w={'80%'}>
            <Box w={'80%'} mx={'auto'}>
                <img src={Image} height={'80%'} alt="Team Member" />
                <Text fontSize={"30px"} fontWeight={'bold'}>{name}</Text>
            </Box>
        </Flex>
    )
}

export default TeamSwiper