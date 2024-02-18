import { Box, Container, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import Category1 from '../../Image/category-img.png'
import Category2 from '../../Image/category-img2.png'
import Category3 from '../../Image/category-img3.png'
import Category4 from '../../Image/category-img4.png'
import Category5 from '../../Image/category-img5.png'
import Category6 from '../../Image/category-img6.png'
import Category7 from '../../Image/category-img7.png'
import Category8 from '../../Image/category-img8.png'
import React from 'react'

function Categroy() {
    return (
        <Container maxW={'100%'}>
            <Box w={'80%'} mx={'auto'}>
                <Flex justify={'center'} data-aos="slide-up" data-aos-duration="6000">
                    <Heading color={'#000'} fontFamily='Montserrat' fontSize={{ base: '33px', sm: '40px', md: '45', lg:'50px'}} pt={10} borderBottom={'3px solid #f7a010'}>
                        Our Categories 
                    </Heading>
                </Flex>
                <Flex color={'black'} mt={20} justify={'center'}>
                    {/* SimpleGrid For Responsiveness */}
                    <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap={16} data-aos="slide-up" data-aos-duration="6000">
                        <Box>
                            <Image src={Category1} w={'85%'} />
                            <Text fontSize={30} textAlign={'center'}  fontWeight={'bold'}>Pizza</Text>
                        </Box>
                        <Box>
                            <Image src={Category2} w={'100%'}/>
                            <Text fontSize={30} textAlign={'center'}  fontWeight={'bold'}>Broasts</Text>
                        </Box>
                        <Box>
                            <Image src={Category3} pt={4} w={'100%'} />
                            <Text fontSize={30} textAlign={'center'}  fontWeight={'bold'}>Chickens</Text>
                        </Box>
                        <Box>
                            <Image src={Category4} pt={6} w={'100%'} />
                            <Text fontSize={30} textAlign={'center'}  fontWeight={'bold'}>Burgers</Text>
                        </Box>
                        <Box>
                            <Image src={Category5} />
                            <Text fontSize={30} textAlign={'center'}  fontWeight={'bold'}>Shakes</Text>
                        </Box>
                        <Box>
                            <Image src={Category6} />
                            <Text fontSize={30} textAlign={'center'}  fontWeight={'bold'}>Sandwitches</Text>
                        </Box>
                        <Box>
                            <Image src={Category7} pt={6} />
                            <Text fontSize={30} textAlign={'center'} pt={10} fontWeight={'bold'}>Pastas</Text>
                        </Box>
                        <Box>
                            <Image src={Category8} />
                            <Text fontSize={30} textAlign={'center'}  fontWeight={'bold'}>Desserts</Text>
                        </Box>
                    </SimpleGrid>

                </Flex>
            </Box>
        </Container>
    )
}

export default Categroy