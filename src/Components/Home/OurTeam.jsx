import React from 'react'
import { Box, Flex, Heading, SimpleGrid, Text, IconButton } from "@chakra-ui/react"
import TeamSwiper from './TeamSwiper'

function Services() {
    return (
        <Box bg={'#fff'} color={"white"} py={20}>
            <Flex justify={'center'} data-aos="slide-up" data-aos-duration="6000">
                <Heading color={'#000'} fontFamily='Lobster' fontSize={40} pt={8} borderBottom={'2px solid #f7a010'}>Our Master Chefs</Heading>
            </Flex>
            <Box>
                <TeamSwiper />
            </Box>
        </Box>
    )
}



export default Services