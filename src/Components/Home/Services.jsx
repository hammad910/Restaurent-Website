import React from 'react'
import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react"
import { FiUsers } from 'react-icons/fi';
import ServiceCard from './ServiceCard';

function Services() {

    return (
        <Box bg={'#fff'} color={"white"}>
            <Flex justify={'center'} data-aos="slide-up" data-aos-duration="6000">
                <Heading color={'#000'} fontFamily='Lobster' fontSize={40} pt={8} borderBottom={'2px solid #f7a010'}>Our Services</Heading>
            </Flex>
            <Flex w={'80%'} mx={'auto'} color={'black'} mt={12}>
                <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap={16}>
                    <ServiceCard icon={<FiUsers fontSize={52}/>}  heading= 'QUALITY' description='LIONUP DEVELOPS THE MOST COST EFFECTIVE SOLUTIONS FOR ALL OF YOUR DIGITAL NEEDS.WE ARE COMMITTED TO DELIVERING QUALITY SERVICES AT THE BEST PRICES; NO MATTER WHAT YOU NEED.'/>
                    <ServiceCard icon={<FiUsers fontSize={52}/>} heading= 'CUSTOMER SATISFACTION' description='OUR GOAL IS TO GUARANTEE THAT EVERY SYSTEM, COMPONENT AND PROCESS MEETS SPECIFIED REQUIREMENTS AND CUSTOMER EXPECTATIONS'/>
                    <ServiceCard icon={<FiUsers fontSize={52}/>} heading='Mr-Shezi' description='OUR GOAL IS TO GUARANTEE THAT EVERY SYSTEM, COMPONENT AND PROCESS MEETS SPECIFIED REQUIREMENTS AND CUSTOMER EXPECTATIONS'/>
                    <ServiceCard icon={<FiUsers fontSize={52}/>} heading='abcd' description='OUR GOAL IS TO GUARANTEE THAT EVERY SYSTEM, COMPONENT AND PROCESS MEETS SPECIFIED REQUIREMENTS AND CUSTOMER EXPECTATIONS'/>
                </SimpleGrid>
            </Flex>
        </Box>
    )
}

export default Services