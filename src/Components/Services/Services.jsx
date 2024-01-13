import React from 'react'
import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import { FaMap } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { AiOutlineCoffee } from 'react-icons/ai';
import ServiceCard from './SeviceCard';

function Services() {

    // const serviceCard = [
    //     {icon: <FaMap  />, heading:'Quality', para:'OUR GOAL IS TO GUARANTEE THAT EVERY SYSTEM, COMPONENT AND PROCESS MEETS SPECIFIED REQUIREMENTS AND CUSTOMER EXPECTATIONS'},
    //     {icon: <FaMap  />, heading:'Quality', para:'OUR GOAL IS TO GUARANTEE THAT EVERY SYSTEM, COMPONENT AND PROCESS MEETS SPECIFIED REQUIREMENTS AND CUSTOMER EXPECTATIONS'},
    //     {icon: <FaMap  />, heading:'Quality', para:'OUR GOAL IS TO GUARANTEE THAT EVERY SYSTEM, COMPONENT AND PROCESS MEETS SPECIFIED REQUIREMENTS AND CUSTOMER EXPECTATIONS'},
    //     {icon: <FaMap  />, heading:'Quality', para:'OUR GOAL IS TO GUARANTEE THAT EVERY SYSTEM, COMPONENT AND PROCESS MEETS SPECIFIED REQUIREMENTS AND CUSTOMER EXPECTATIONS'},
    // ]

    return (
        <Box bg={'#fff'} color={"white"}>
            <Flex justify={'center'} data-aos="slide-up" data-aos-duration="6000">
                <Heading color={'#000'} fontFamily='Lobster' fontSize={40} pt={8} borderBottom={'2px solid #f7a010'}>Our Services</Heading>
            </Flex>
            <Flex w={'80%'} mx={'auto'} color={'black'} mt={12}>
                <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap={8}  >
                    <ServiceCard  heading= 'QUALITY'/>
                    <ServiceCard icon='<FiUsers fontSize={60}/>' heading= 'CUSTOMER SATISFACTION' para='OUR GOAL IS TO GUARANTEE THAT EVERY SYSTEM, COMPONENT AND PROCESS MEETS SPECIFIED REQUIREMENTS AND CUSTOMER EXPECTATIONS'/>
                    <ServiceCard/>
                    <ServiceCard/>
                    {/* Features  1*/}
                    {/* {serviceCard.map({val, index},{
                
                    })}
                    <Box boxShadow={'2xl'} h={'120%'} pl={6} pt={6}>
                            <Flex direction={'column'} >
                                {/* fontSize={60} */}
                            {/* </Flex>
                            <Text fontSize={20} fontWeight={'bold'} py={2}>QUALITY</Text>
                            <Text fontSize={"13px"}>OUR GOAL IS TO GUARANTEE THAT EVERY SYSTEM, COMPONENT AND PROCESS MEETS SPECIFIED REQUIREMENTS AND CUSTOMER EXPECTATIONS</Text>
                    </Box>  */}

                    {/* Features  2
                    <Box textAlign={'center'} _hover={{ cursor: 'pointer' }} boxShadow={'2xl'}>
                        <Flex justify={'center'} mb={4} >
                            <FiUsers fontSize={60} />
                        </Flex>
                        <Text fontSize={20} fontWeight={'bold'}>CUSTOMER SATISFACTION</Text>
                        <Text mt={1} fontSize={"13px"}>OUR GOAL IS TO GUARANTEE THAT EVERY SYSTEM, COMPONENT AND PROCESS MEETS SPECIFIED REQUIREMENTS AND CUSTOMER EXPECTATIONS</Text>
                    </Box>
                    {/* Features  3*/}
                    {/* <Box textAlign={'center'} _hover={{ cursor: 'pointer' }}>
                        <Flex justify={'center'} mb={4}>
                            <FiUsers fontSize={60} />
                        </Flex>
                        <Text fontSize={20} fontWeight={'bold'}>RELIABILITY</Text>
                        <Text mt={1} fontSize={"13px"}>AT LIONUP DIGITAL, WE HELP BRANDS AND ORGANIZATIONS ACHIEVE THAT NEED AND MAKE THEM TRULY MATTER TO INDIVIDUALS.</Text>
                    </Box>
                    {/* Features  4*/}
                    {/* <Box textAlign={'center'} _hover={{ cursor: 'pointer' }}>
                        <Flex justify={'center'} mb={4} >
                            <AiOutlineCoffee fontSize={60} />
                        </Flex>
                        <Text fontSize={20} fontWeight={'bold'}>COST SAVING</Text>
                        <Text mt={1} fontSize={"13px"}>LIONUP DEVELOPS THE MOST COST EFFECTIVE SOLUTIONS FOR ALL OF YOUR DIGITAL NEEDS.WE ARE COMMITTED TO DELIVERING QUALITY SERVICES AT THE BEST PRICES; NO MATTER WHAT YOU NEED.</Text>
                    </Box>  */}
                </SimpleGrid>
            </Flex>
        </Box>
    )
}

export default Services