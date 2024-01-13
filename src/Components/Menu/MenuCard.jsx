import React from 'react'
import { Box, Flex, Text } from "@chakra-ui/react"
import { FaMap } from 'react-icons/fa';



function MenuCard(props) {
    return (
        <Box boxShadow={'2xl'}  pt={6} _hover={{ cursor: 'pointer', bgColor: '#f7a010', }} data-aos="slide-up" data-aos-duration="6000" w={'100%'}>
            <Flex w={'80%'} mx={'auto'} gap={8}>
                <Flex direction={'column'}>{props.icon}</Flex>
                <Flex direction={'column'}>
                    <Text fontSize={20} fontWeight={'bold'}>{props.heading}</Text>
                    <Text fontSize={"13px"}>{props.description}</Text>
                </Flex>
            </Flex>
        </Box>
    )
}

export default MenuCard