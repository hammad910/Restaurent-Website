import React from 'react'
import { Box, Flex, Heading, SimpleGrid, Text, Link, Button, Image } from "@chakra-ui/react"
import { FiUsers } from 'react-icons/fi';
import { Link as ReactRouterLink } from 'react-router-dom'
import img1 from '../../Image/HowItWork/HowItWorks1.png'
// import ServiceCard from './ServiceCard';

function HowItWorks() {
    // Dynamic Services Array
    const Services = [
        {
         heading: 'QUALITY', description: 'Thank you for being valued customer. We are so grateful to serving for the honored be clients pleasure of serving hope we meets.'
        },
        {
         heading: 'Cash On Delivery', description: 'Online food Delivery for hiring Food Foodota We appreciate your business, and we’ll do best to continue to give you the new kind.'
        },
        {
         heading: 'Receive Order', description: 'We at truly appreciate your business and we’re grateful for the trust you’ve placed in us. We sincerely hope you are satisfied.'
        },
    ]

    return (
        <Box bg={'#fff'} color={"white"} mt={20} w={'80%'} mx={'auto'} >
            <Flex  justify={'center'} data-aos="slide-up" data-aos-duration="6000">
                <Heading color={'#000'} fontFamily='Montserrat'  textAlign={'center'} fontSize={{ base: '33px', sm: '40px', md: '45', lg:'50px'}} pt={8} borderBottom={'2px solid #f7a010'}>How It Works</Heading>
            </Flex>
            <Flex color={'black'} mt={12}>
            {/* SimpleGrid For Responsiveness */}
                <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={16}>
                    {Services.map((card, index) => (
                        <ServiceCard key={index} img={card.icon} heading={card.heading} description={card.description} />
                    ))}
                </SimpleGrid>

            </Flex>
        </Box>
    )
}

// Styling Map Function
function ServiceCard({ heading, description }) {
    return (
        <Box boxShadow={'2xl'} h={'120%'} pt={6} cursor ='pointer' rounded='lg' data-aos="slide-up" data-aos-duration="6000" w={'100%'}>
            <Box w={'80%'} mx={'auto'}>
                <Image direction={'column'} src={img1}/>
                <Text fontSize={20} fontWeight={'bold'} py={2}>{heading}</Text>
                <Text fontSize={"13px"}>{description}</Text>
            </Box>
        </Box>
    )
}

export default HowItWorks