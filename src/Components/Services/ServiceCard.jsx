import React from 'react'
import { Box, Flex, Text } from "@chakra-ui/react"
import { FaMap } from 'react-icons/fa';



function ServiceCard(props) {
    return (
        <Box boxShadow={'2xl'} h={'120%'} pt={6} _hover={{ cursor: 'pointer', bgColor: '#f7a010', }} data-aos="slide-up" data-aos-duration="6000" w={'100%'}>
            <Box w={'80%'} mx={'auto'}>
                <Flex direction={'column'}>{props.icon}</Flex>
                <Text fontSize={20} fontWeight={'bold'} py={2}>{props.heading}</Text>
                <Text fontSize={"13px"}>{props.description}</Text>
            </Box>
        </Box>
    )
}

export default ServiceCard