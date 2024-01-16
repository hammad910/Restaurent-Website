import React from 'react'
import Contact from '../Home/Contact'
import {
    Box,
    Flex,
    AspectRatio,
    Text,
} from '@chakra-ui/react'

function ContactUs() {
    return (
        <Box pt={14} bgColor="secondary.100">
            <Box mx="auto" textAlign="center" experimental_spaceY={8} maxW={500} mt={16}>
                <Text fontFamily="main" fontSize={18} color='#8795a1' letterSpacing={4}>VISIT US</Text>
                <Text fontFamily="sub" fontSize={{ base: 24, lg: 40 }}>
                    Where we located
                </Text>
            </Box>
            <Flex w="100%" mx='auto' pt={14} gap={20} flexDir={{ base: 'column', lg: 'row' }} >
                <Box w="full" border={"none"}>
                    <AspectRatio ratio={15 / 9} h={"100%"} w={"100%"}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1809.857517727036!2d67.01570528882459!3d24.873580477883873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f7142d4a32f%3A0x3c8399de7b9346be!2sShezi%20Restaurant!5e0!3m2!1sen!2s!4v1705386273921!5m2!1sen!2s"  loading="lazy" ></iframe>
                    </AspectRatio>
                </Box>
            </Flex>
            <Contact />
        </Box>

        // < Flex >
        // </Flex >
    )
}

export default ContactUs