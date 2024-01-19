import React from 'react'
import Contact from '../Home/Contact'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import General from '../GeneralComp/General'

import {
    Box,
    Flex,
    AspectRatio,
    Text,
    Heading,
    Image,
    Icon
} from '@chakra-ui/react'

function ContactUs() {
    return (
        <Box>
            <General heading='Contact Us' headingTwo='Home / ContactUs' />
            <Box pt={14} bgColor="secondary.100" w={'100%'}>
                <Flex w="80%" mx={'auto'} direction={{ base: 'column', lg: 'row' }}>
                    <Flex direction="column" mt={20}>
                        <Heading color="#000" fontFamily="Lobster" fontSize={40} data-aos="slide-up" data-aos-duration="12000">
                            Contact Us
                        </Heading>
                        <Text pt={4} w="80%" data-aos="slide-up" data-aos-duration="10000" fontSize="20px">
                            Reach out to us and let us know if there is anything we can do for you.
                        </Text>
                        <Flex mt={10}>
                            {/* 1st card */}
                            <Box
                                boxShadow="2xl" h="120%" mt={4} rounded="2xl" _hover={{ cursor: 'pointer', color: 'white', bgColor: '#f7a010' }} data-aos="slide-up"
                                data-aos-duration="6000" w={{ base: '80%', lg: '25%' }} >
                                <Box w="80%" mx="auto" pt={4}>
                                    <Flex >
                                        <Icon w="40%" h="100%">
                                            <FaLocationDot />
                                        </Icon>
                                    </Flex>
                                    <Text fontSize={20} fontWeight="bold">
                                        Nishtar Rd, Garden West, Karachi, Pakistan
                                    </Text>
                                </Box>
                            </Box>
                            {/* 2nd card */}
                            <Box boxShadow="2xl" h="120%" mt={4} rounded="2xl" _hover={{ cursor: 'pointer', color: 'white', bgColor: '#f7a010' }} data-aos="slide-up" data-aos-duration="6000" w={{ base: '80%', lg: '25%' }} mx={2} >
                                <Box w="80%" mx="auto" pt={4}>
                                    <Flex>
                                        <Icon w="40%" h="100%">
                                            <MdEmail />
                                        </Icon>
                                    </Flex>
                                    <Text fontSize={20} fontWeight="bold">
                                        shezi123@gmail.com
                                    </Text>
                                    <Text fontSize={16} fontWeight="bold" py={2}>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing
                                    </Text>

                                </Box>
                            </Box>
                            {/* 3rd card */}
                            <Box boxShadow="2xl" h="120%" mt={4} rounded="2xl" _hover={{ cursor: 'pointer', color: 'white', bgColor: '#f7a010' }} data-aos="slide-up" data-aos-duration="6000" w={{ base: '80%', lg: '25%' }} mx={2} >
                                <Box w="80%" mx="auto" pt={4}>
                                    <Flex>
                                        <Icon w="40%" h="100%">
                                            <MdCall />
                                        </Icon>
                                    </Flex>
                                    <Text fontSize={20} fontWeight="bold">
                                        03311002232
                                    </Text>
                                    <Text fontSize={16} fontWeight="bold" py={2}>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing
                                    </Text>
                                </Box>
                            </Box>
                        </Flex>
                    </Flex>
                    <Flex justify="center" data-aos="slide-up" data-aos-duration="12000">
                        <Image src="https://quickeat-react.vercel.app/assets/img/contacts-1.png" />
                    </Flex>
                </Flex >
                <Box mx="auto" textAlign="center" maxW={500} mt={16}>
                    <Text fontFamily="Jost" fontSize={18} color="#8795a1" letterSpacing={4}>
                        VISIT US
                    </Text>
                    <Text fontFamily="Lobster" fontSize={{ base: 24, lg: 42 }}>
                        Where We Are Located
                    </Text>
                </Box>
                <Flex w="100%" mx="auto" pt={14} gap={20} flexDir={{ base: 'column', lg: 'row' }}>
                    <Box w="full" border="none">
                        <AspectRatio ratio={15 / 9} h="100%" w="100%">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1809.857517727036!2d67.01570528882459!3d24.873580477883873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f7142d4a32f%3A0x3c8399de7b9346be!2sShezi%20Restaurant!5e0!3m2!1sen!2s!4v1705386273921!5m2!1sen!2s"
                                loading="lazy"
                            ></iframe>
                        </AspectRatio>
                    </Box>
                </Flex>
                <Contact />
            </Box >
        </Box >


        // < Flex >
        // </Flex >
    )
}

export default ContactUs