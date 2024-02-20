
import { React, useState } from 'react'
import { FaClock } from "react-icons/fa6";
import {
    Box, Stack, Text, Flex, VStack, Heading, SimpleGrid, useColorModeValue, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Button, Image,
    Link
} from '@chakra-ui/react'
import { ImSpoonKnife } from "react-icons/im";
import { MdLunchDining } from "react-icons/md";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { Link as ReactRouterLink } from 'react-router-dom'

function Menu() {

    // Dynamic menu card array

    const MenuCard = [
        {
            image: 'https://tse4.mm.bing.net/th?id=OIP.2mGppmx9cve8aBbt9TZzNwHaE8&pid=Api&P=0&h=220',
            heading: 'breakfast',
            price: '599Rs',
            description: 'OUR GOAL IS TO  SPECIFIED REQUIREMENTS AND CUSTOMER EXPECTATIONS',
            category: 'breakfast',
            timing: ' 20 - 30 mints'
        },
        {
            image: 'https://tse4.mm.bing.net/th?id=OIP.2mGppmx9cve8aBbt9TZzNwHaE8&pid=Api&P=0&h=220',
            heading: 'breakfast',
            price: '599Rs',
            description: 'OUR GOAL IS TO  SPECIFIED REQUIREMENTS AND CUSTOMER EXPECTATIONS',
            category: 'breakfast',
            timing: ' 20 - 30 mints'
        },
        {
            image: 'https://tse4.mm.bing.net/th?id=OIP.2mGppmx9cve8aBbt9TZzNwHaE8&pid=Api&P=0&h=220',
            heading: 'lunch',
            price: '599Rs',
            description: 'OUR GOAL IS TO  SPECIFIED REQUIREMENTS AND CUSTOMER EXPECTATIONS',
            category: 'lunch',
            timing: ' 20 - 30 mints'
        },
        {
            image: 'https://tse4.mm.bing.net/th?id=OIP.2mGppmx9cve8aBbt9TZzNwHaE8&pid=Api&P=0&h=220',
            heading: 'lunch',
            price: '599Rs',
            description: 'OUR GOAL IS TO  SPECIFIED REQUIREMENTS AND CUSTOMER EXPECTATIONS',
            category: 'lunch',
            timing: ' 20 - 30 mints'
        },
        {
            image: 'https://tse4.mm.bing.net/th?id=OIP.2mGppmx9cve8aBbt9TZzNwHaE8&pid=Api&P=0&h=220',
            heading: 'dinner',
            price: '599Rs',
            description: 'OUR GOAL IS TO  SPECIFIED REQUIREMENTS AND CUSTOMER EXPECTATIONS',
            category: 'dinner',
            timing: ' 20 - 40 mints'
        },
        {
            image: 'https://tse4.mm.bing.net/th?id=OIP.2mGppmx9cve8aBbt9TZzNwHaE8&pid=Api&P=0&h=220',
            heading: 'dinner',
            price: '599Rs',
            description: 'OUR GOAL IS TO  SPECIFIED REQUIREMENTS AND CUSTOMER EXPECTATIONS',
            category: 'dinner',
            timing: ' 20 - 30 mints'
        },
    ]

    // Making Modal For Product Detail
    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(5px)'
        />
    )
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = useState(<OverlayOne />)

    // Filter For Category Management
    const [items, setItems] = useState(MenuCard)
    const filtersItem = (category) => {
        const updatedItem = MenuCard.filter((curElem) => {
            return curElem.category === category
        })
        setItems(updatedItem)
    }
    return (
        // Menu in Home page
        <Box w={'100%'} mt={32}>
            <Flex justify={'center'} gap={8} data-aos="slide-up" data-aos-duration="6000">
                <Heading color={'#000'} fontFamily='Montserrat' textAlign={'center'} fontSize={{ base: '33px', sm: '40px', md: '45', lg: '50px' }} borderBottom={'3px solid #f7a010'}>Our Menu</Heading>
            </Flex>
            {/*  */}
            
            <Flex color={'black'} mt={12} justify={'center'} w={'80%'} mx={'auto'} direction={'column'}>
                {/* Again Using SimpleGrid For Responsiveness */}
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={12} onClick={() => {
                    setOverlay(<OverlayOne />)
                    onOpen()
                }}>
                    {MenuCard.map((card, index) => (
                        <MenuBox key={index} image={card.image} heading={card.heading} price={card.price} description={card.description} timing={card.timing} />
                    ))}
                </SimpleGrid>
                <Flex justify={'center'} >
                    <Link as={ReactRouterLink} to={'/Menu'} >
                        <Button
                            bgColor={'#231f20'}
                            _hover={{ bgColor: '#f7a010', color: 'black', transition: 'all .3s', cursor: 'pointer' }}
                            color={'white'}
                            mt={12}
                            rounded={4}
                            h={10}
                            fontSize={{ base: 14, md: 18 }}
                            type="submit"
                        >Visit Our Full Menu</Button>
                    </Link>
                </Flex>
                {/* Using Modal For Display Product Detail  */}
                <Modal isCentered isOpen={isOpen} onClose={onClose} size={{ base: 'sm', md: '2xl', lg: '5xl' }} >
                    {overlay}
                    <ModalContent>
                        <ModalCloseButton />
                        {/* Modal Body */}
                        <ModalBody>
                            {/* SimpleGrid */}
                            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }} py={{ base: 18, md: 24 }} >
                                <Flex justify={'center'} >
                                    <Image rounded={'md'} src='https://tse4.mm.bing.net/th?id=OIP.2mGppmx9cve8aBbt9TZzNwHaE8&pid=Api&P=0&h=220' align={'center'} />
                                </Flex>
                                <Stack spacing={{ base: 6, md: 10 }}>
                                    <Box as={'header'}>
                                        <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                                            abcd </Heading>
                                        <Text fontWeight={300} fontSize={'2xl'}> 699$ </Text>
                                    </Box>
                                    <Stack spacing={{ base: 4, sm: 6 }} direction={'column'} >
                                        <VStack spacing={{ base: 4, sm: 6 }}>
                                            <Text fontSize={'2xl'} fontWeight={'300'}>
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, nonumy eirmod tempor invidunt ut labore
                                            </Text>
                                        </VStack>
                                    </Stack>
                                    <Button rounded={'none'} w={'full'} mt={8} size={'lg'} py={'7'} bg={useColorModeValue('gray.900', 'gray.50')} color={useColorModeValue('white', 'gray.900')}
                                        textTransform={'uppercase'}
                                        _hover={{ transform: 'translateY(2px)', boxShadow: 'lg', }}>
                                        Add to cart
                                    </Button>
                                </Stack>
                            </SimpleGrid>
                        </ModalBody>
                        {/* Modal Footer */}
                        <ModalFooter>
                            <Button onClick={onClose}>Close</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Flex>
        </Box >
    )
}

// Styling Map Function 
function MenuBox({ image, heading, price, description, timing }) {
    return (
        <Box boxShadow={'2xl'} borderRadius={'xl'} _hover={{ cursor: 'pointer' }} data-aos="slide-up" data-aos-duration="6000" >
            <Flex w={'80%'} mx={'auto'} gap={8} direction={{ base: 'column', lg: 'row' }} >
                <Flex direction={'column'} my={4}>
                    <Image src={image} w={'50'} borderRadius={'xl'} />
                </Flex>
                <Flex direction={'column'} pt={4}>
                    <Flex justify={'space-between'}>
                        <Text fontSize={20} fontWeight={'bold'}>{heading}</Text>
                        <Text fontSize={20} fontWeight={'bold'}>{price}</Text>
                    </Flex>
                    <Flex mb={4}>
                        <Text fontSize={"13px"} borderBottom={'2px solid #75797e'} pb={8} pt={4}>{description}</Text>
                    </Flex>
                    <Flex mb={4} gap={2} color={'red'} align={'center'}>
                        <FaClock />
                        <Text fontSize={"13px"} color={'#c0173f'} fontWeight={'bold'}>{timing}</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Menu