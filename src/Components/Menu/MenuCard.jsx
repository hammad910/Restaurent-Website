import React from 'react'
import { Box, Flex, Text, Image } from "@chakra-ui/react"
import { FaMap } from 'react-icons/fa';



function MenuCard(props) {
    return (
        <Box boxShadow={'2xl'} py={4} _hover={{ cursor: 'pointer', bgColor: '#f7a010', }} data-aos="slide-up" data-aos-duration="6000" >
            <Flex w={'80%'} mx={'auto'} gap={8}>
                <Flex direction={'column'}>
                <Image src={props.img} w={32}/>
                </Flex>
                <Flex direction={'column'}>
                    <Flex justify={'space-between'}>
                        <Text fontSize={20} fontWeight={'bold'}>{props.heading}</Text>
                        <Text fontSize={20} fontWeight={'bold'}>{props.price}</Text>
                    </Flex>
                    <Flex>
                        <Text fontSize={"13px"}>{props.description}</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default MenuCard