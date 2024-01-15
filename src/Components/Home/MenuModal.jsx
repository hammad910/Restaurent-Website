import React, { createContext } from 'react'
const dataContext = createContext()
function MenuModal() {
    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(5px)'
        />
    )
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)

    return (
        <dataContext.Provider value={{setOverlay}}>
            <Modal isCentered isOpen={isOpen} onClose={onClose} size={{ base: 'sm', md: '2xl', lg: '5xl' }} >
                {overlay}
                <ModalContent>
                    {/* <ModalHeader fontSize={'2xl'} textAlign={'center'}></ModalHeader> */}
                    <ModalCloseButton />
                    <ModalBody>
                        <SimpleGrid
                            columns={{ base: 1, lg: 2 }}
                            spacing={{ base: 8, md: 10 }}
                            py={{ base: 18, md: 24 }}
                        >
                            <Flex justify={'center'}>
                                <Image
                                    rounded={'md'}
                                    src={menuImg}
                                    // fit={'cover'}
                                    align={'center'}
                                />
                            </Flex>
                            <Stack spacing={{ base: 6, md: 10 }}>
                                <Box as={'header'}>
                                    <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                                        abcd
                                    </Heading>
                                    <Text fontWeight={300} fontSize={'2xl'}>
                                        699$
                                    </Text>
                                </Box>
                                <Stack spacing={{ base: 4, sm: 6 }} direction={'column'} >
                                    <VStack spacing={{ base: 4, sm: 6 }}>
                                        <Text fontSize={'2xl'} fontWeight={'300'}>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                            eirmod tempor invidunt ut labore
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
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </dataContext.Provider>
    )
}

export default MenuModal
export {dataContext}
