import React from 'react'
import { Box, Flex, Heading, Text, SimpleGrid, } from "@chakra-ui/react"
import MenuCard from '../Menu/MenuCard'
// import { FiUsers } from 'react-imgs/fi';
import menuImg from '../../Image/home.jpeg'

function Menu() {
    return (
        <Box w={'100%'} mt={28}>
            <Flex justify={'center'} data-aos="slide-up" data-aos-duration="6000">
                <Heading color={'#000'} fontFamily='Lobster' fontSize={40} borderBottom={'2px solid #f7a010'}>Our Menu</Heading>
              
            </Flex>
            <Flex  color={'black'} mt={12} justify={'center'} w={'80%'} mx={'auto'}>
                <SimpleGrid columns={{ base: 1, md: 2}} gap={12}  >
                    <MenuCard img={menuImg} heading='Mr-shezi' price="599Rs" description='OUR GOAL IS TO  SPECIFIED REQUIREMENTS AND CUSTOMER EXPECTATIONS' />
                    <MenuCard img={menuImg} heading='abcd' price="599Rs" description='OUR GOAL IS TO  SPECIFIED REQUIREMENTS AND CUSTOMER EXPECTATIONS' />
                    <MenuCard img={menuImg} heading='abcd' price="599Rs" description='OUR GOAL IS TO  SPECIFIED REQUIREMENTS AND CUSTOMER EXPECTATIONS' />
                    <MenuCard img={menuImg} heading='abcd' price="599Rs" description='OUR GOAL IS TO  SPECIFIED REQUIREMENTS AND CUSTOMER EXPECTATIONS' />
                    <MenuCard img={menuImg} heading='abcd' price="599Rs" description='OUR GOAL IS TO  SPECIFIED REQUIREMENTS AND CUSTOMER EXPECTATIONS' />
                    <MenuCard img={menuImg} heading='abcd' price="599Rs" description='OUR GOAL IS TO  SPECIFIED REQUIREMENTS AND CUSTOMER EXPECTATIONS' />
                </SimpleGrid>
            </Flex>
        </Box>
    )
}

export default Menu