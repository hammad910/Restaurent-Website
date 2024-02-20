import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from 'react';
import OurTeam1 from '../../Image/OurTeam/team1.png';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'

function DeleciousDeal() {
    // Dynamic Services Array
    const Services = [
        {
            heading: 'Alizeh Anderson', description: 'LIONUP DEVELOPS THE MOST COST EFFECTIVE SOLUTIONS FOR ALL OF YOUR DIGITAL NEEDS.',
        },
        {
            heading: 'Alizeh Anderson', description: 'LIONUP DEVELOPS THE MOST COST EFFECTIVE SOLUTIONS FOR ALL OF YOUR DIGITAL NEEDS.'
        },
        {
            heading: 'Alizeh Anderson', description: 'LIONUP DEVELOPS THE MOST COST EFFECTIVE SOLUTIONS FOR ALL OF YOUR DIGITAL NEEDS.'
        },
    ]

    return (
        <Box bg={'#fff'} color={"white"} mt={40}>
            <Flex  justify={'center'} data-aos="slide-up" data-aos-duration="6000">
                <Heading color={'#000'}  textAlign={'center'} fontFamily='Montserrat' fontSize={{ base: '33px', sm: '40px', md: '45', lg:'50px'}} pt={8} borderBottom={'3px solid #f7a010'}>Our Team</Heading>
            </Flex>
            <Flex w={'70%'} mx={'auto'} color={'black'} mt={12}>
                {/* SimpleGrid For Responsiveness */}
                <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={16}>
                    {Services.map((card, index) => (
                        <ServiceCard key={index} heading={card.heading} description={card.description} price={card.price} />
                    ))}
                </SimpleGrid>

            </Flex>
        </Box>
    )
}

// Styling Map Function
function ServiceCard({heading, description, price }) {
    return (
        <Box  pt={6} boxShadow='2xl' cursor= 'pointer' data-aos="slide-up" data-aos-duration="6000" rounded={'xxl'}>
            <Box w={'90%'} mx={'auto'}>
                <Flex justify={'center'}>
                    <Image src={OurTeam1} w={'full'} />
                </Flex>
                <Text fontSize={20} fontWeight={'bold'} py={2}>{heading}</Text>
                <Text fontSize={"13px"}>{description}</Text>
                <Text fontSize={"150%"} color={'#f9d110'} mt={'8%'}>{price}</Text>
            </Box>
        </Box>
    )
}

export default DeleciousDeal