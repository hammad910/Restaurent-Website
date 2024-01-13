import React from 'react'
import { Box, Flex, Heading, Text, SimpleGrid, } from "@chakra-ui/react"
import MenuCard from '../Menu/MenuCard'
import { FiUsers } from 'react-icons/fi';


function Menu() {
    return (
        <Box w={'100%'} mt={28}>
            <Flex justify={'center'} data-aos="slide-up" data-aos-duration="6000">
                <Heading color={'#000'} fontFamily='Lobster' fontSize={40} borderBottom={'2px solid #f7a010'}>Our Menu</Heading>
              
            </Flex>
            <Flex w={'80%'} mx={'auto'} color={'black'} mt={12} justify={'center'}>
                <SimpleGrid columns={{ base: 1, sm: 2}} gap={12}>
                    <MenuCard icon={<FiUsers fontSize={52} />} heading='QUALITY' description='LIONUP DEVELOPS THE MOST COST' />
                    <MenuCard icon={<FiUsers fontSize={52} />} heading='CUSTOMER' description='OUR GOAL IS TO' />
                    <MenuCard icon={<FiUsers fontSize={52} />} heading='Mr-Shezi' description='OUR GOAL IS TO CIFIED REQUIREMENTS AND CUSTOMER EXPECTATIONS' />
                    <MenuCard icon={<FiUsers fontSize={52} />} heading='abcd' description='OUR GOAL IS TO  SPECIFIED REQUIREMENTS AND CUSTOMER EXPECTATIONS' />
                    <MenuCard icon={<FiUsers fontSize={52} />} heading='QUALITY' description='LIONUP DEVELOPS THE MOST COST' />
                    <MenuCard icon={<FiUsers fontSize={52} />} heading='CUSTOMER' description='OUR GOAL IS TO' />
                    <MenuCard icon={<FiUsers fontSize={52} />} heading='Mr-Shezi' description='OUR GOAL IS TO CIFIED REQUIREMENTS AND CUSTOMER EXPECTATIONS' />
                    <MenuCard icon={<FiUsers fontSize={52} />} heading='abcd' description='OUR GOAL IS TO  SPECIFIED REQUIREMENTS AND CUSTOMER EXPECTATIONS' />
                </SimpleGrid>
            </Flex>
            {/* <ServiceCard/> */}
        </Box>
    )
}

export default Menu