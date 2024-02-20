import React from 'react'
import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import General from '../GeneralComp/General'
import MenuCard from './MenuCard'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide, } from 'swiper/react';
function MenuPage() {
  return (
    <>
      <General heading='Our Menu' headingTwo='Home / Menu' />
      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={0} w={'60%'} mx={'auto'}>
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </SimpleGrid>
    </>
  )
}

export default MenuPage