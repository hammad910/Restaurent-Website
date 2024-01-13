import React from 'react'
import { Box, Flex, Text } from "@chakra-ui/react"
import { FaMap } from 'react-icons/fa';



function ServiceCard(props) {
    return (
        <Box boxShadow={'2xl'} h={'120%'} pl={6} pt={6}>
            <Flex direction={'column'} >
                <FaMap fontSize={60} />
            </Flex>
            <Text fontSize={20} fontWeight={'bold'} py={2}>{props.heading}</Text>
            <Text fontSize={"13px"}>OUR GOAL IS TO GUARANTEE THAT EVERY SYSTEM, COMPONENT AND PROCESS MEETS SPECIFIED REQUIREMENTS AND CUSTOMER EXPECTATIONS</Text>
        </Box>
    )
}

export default ServiceCard