import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from 'react';
import deleciousDeal1 from '../../Image/deleciousDeal/deleciousDeal-1.png';
import deleciousDeal2 from '../../Image/deleciousDeal/deliciousdeal2.png';
import deleciousDeal3 from '../../Image/deleciousDeal/deliciousdeal3.png';

function DeleciousDeal() {
    // Dynamic Services Array
    const Services = [
        {
            heading: 'QUALITY', description: 'LIONUP DEVELOPS THE MOST COST EFFECTIVE SOLUTIONS FOR ALL OF YOUR DIGITAL NEEDS.', price:'Rs1099'
        },
        {
            heading: 'QUALITY', description: 'LIONUP DEVELOPS THE MOST COST EFFECTIVE SOLUTIONS FOR ALL OF YOUR DIGITAL NEEDS.',price:'Rs1299'
        },
        {
            heading: 'QUALITY', description: 'LIONUP DEVELOPS THE MOST COST EFFECTIVE SOLUTIONS FOR ALL OF YOUR DIGITAL NEEDS.',price:'Rs1599'
        },
        {
            heading: 'QUALITY', description: 'LIONUP DEVELOPS THE MOST COST EFFECTIVE SOLUTIONS FOR ALL OF YOUR DIGITAL NEEDS.', price:'Rs1099'
        },
        {
            heading: 'QUALITY', description: 'LIONUP DEVELOPS THE MOST COST EFFECTIVE SOLUTIONS FOR ALL OF YOUR DIGITAL NEEDS.',price:'Rs1299'
        },
        {
            heading: 'QUALITY', description: 'LIONUP DEVELOPS THE MOST COST EFFECTIVE SOLUTIONS FOR ALL OF YOUR DIGITAL NEEDS.',price:'Rs1599'
        },
    ]

    return (
        <Box bg={'#fff'} color={"white"} mt={20}>
            <Flex  justify={'center'} data-aos="slide-up" data-aos-duration="6000">
                <Heading color={'#000'}  textAlign={'center'} fontFamily='Montserrat' fontSize={{ base: '33px', sm: '40px', md: '45', lg:'50px'}} pt={8} borderBottom={'3px solid #f7a010'}>Delecious Deal</Heading>
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
function ServiceCard({ img, heading, description, price }) {
    return (
        <Box  pt={6} boxShadow='2xl' cursor= 'pointer' data-aos="slide-up" data-aos-duration="6000" border={'2px solid #e9e9e9'}>
            <Box w={'90%'} mx={'auto'}>
                <Flex justify={'center'}>
                    <Image src={deleciousDeal2} />
                </Flex>
                <Text fontSize={20} fontWeight={'bold'} py={2}>{heading}</Text>
                <Text fontSize={"13px"}>{description}</Text>
                <Text fontSize={"150%"} color={'#f9d110'} mt={'8%'}>{price}</Text>
            </Box>
        </Box>
    )
}

export default DeleciousDeal