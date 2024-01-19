import React from 'react'
import { Box, Flex, Heading, SimpleGrid, Text, Link, Button } from "@chakra-ui/react"
import { FiUsers } from 'react-icons/fi';
import { Link as ReactRouterLink } from 'react-router-dom'
// import ServiceCard from './ServiceCard';

function Services() {

    const Services = [
        {
            icon: <FiUsers fontSize={52} />, heading: 'QUALITY', description: 'LIONUP DEVELOPS THE MOST COST EFFECTIVE SOLUTIONS FOR ALL OF YOUR DIGITAL NEEDS.WE ARE COMMITTED TO DELIVERING QUALITY SERVICES AT THE BEST PRICES; NO MATTER WHAT YOU NEED.'
        },
        {
            icon: <FiUsers fontSize={52} />, heading: 'QUALITY', description: 'LIONUP DEVELOPS THE MOST COST EFFECTIVE SOLUTIONS FOR ALL OF YOUR DIGITAL NEEDS.WE ARE COMMITTED TO DELIVERING QUALITY SERVICES AT THE BEST PRICES; NO MATTER WHAT YOU NEED.'
        },
        {
            icon: <FiUsers fontSize={52} />, heading: 'QUALITY', description: 'LIONUP DEVELOPS THE MOST COST EFFECTIVE SOLUTIONS FOR ALL OF YOUR DIGITAL NEEDS.WE ARE COMMITTED TO DELIVERING QUALITY SERVICES AT THE BEST PRICES; NO MATTER WHAT YOU NEED.'
        },
        {
            icon: <FiUsers fontSize={52} />, heading: 'QUALITY', description: 'LIONUP DEVELOPS THE MOST COST EFFECTIVE SOLUTIONS FOR ALL OF YOUR DIGITAL NEEDS.WE ARE COMMITTED TO DELIVERING QUALITY SERVICES AT THE BEST PRICES; NO MATTER WHAT YOU NEED.'
        },
    ]

    return (
        <Box bg={'#fff'} color={"white"}>
            <Flex justify={'center'} data-aos="slide-up" data-aos-duration="6000">
                <Heading color={'#000'} fontFamily='Lobster' fontSize={40} pt={8} borderBottom={'2px solid #f7a010'}>Our Services</Heading>
            </Flex>
            <Flex w={'80%'} mx={'auto'} color={'black'} mt={12}>
                <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap={16}>
                    {Services.map((card, index) => (
                        <ServiceCard key={index} icon={card.icon} heading={card.heading} description={card.description} />
                    ))}
                </SimpleGrid>

            </Flex>
        </Box>
    )
}

function ServiceCard({ icon, heading, description }) {
    return (
        <Box boxShadow={'2xl'} h={'120%'} pt={6} _hover={{ cursor: 'pointer', bgColor: '#f7a010', rounded:'lg'}} data-aos="slide-up" data-aos-duration="6000" w={'100%'}>
            <Box w={'80%'} mx={'auto'}>
                <Flex direction={'column'}>{icon}</Flex>
                <Text fontSize={20} fontWeight={'bold'} py={2}>{heading}</Text>
                <Text fontSize={"13px"}>{description}</Text>
            </Box>
        </Box>
    )
}

export default Services