// import React from 'react'
// import { Box, Flex, Heading, SimpleGrid, Text, Image } from "@chakra-ui/react"
// import { FiUsers } from 'react-icons/fi';
// import { Link as ReactRouterLink } from 'react-router-dom'
// // import ServiceCard from './ServiceCard';

// function Services() {

//     const Services = [
//         {
//             Image: <FiUsers fontSize={52} />, description: 'LIONUP DEVELOPS THE MOST COST EFFECTIVE SOLUTIONS FOR ALL OF YOUR DIGITAL NEEDS.'
//         },
//         {
//             Image: <FiUsers fontSize={52} />, description: 'LIONUP DEVELOPS THE MOST COST EFFECTIVE SOLUTIONS FOR ALL OF YOUR DIGITAL NEEDS.'
//         },
//         {
//             Image: <FiUsers fontSize={52} />, description: 'LIONUP DEVELOPS THE MOST COST EFFECTIVE SOLUTIONS FOR ALL OF YOUR DIGITAL NEEDS.'
//         },
//         {
//             Image: <FiUsers fontSize={52} />, description: 'LIONUP DEVELOPS THE MOST COST EFFECTIVE SOLUTIONS FOR ALL OF YOUR DIGITAL NEEDS.'
//         },
//     ]

//     return (
//         <Box bg={'#fff'} color={"white"} py={20}>
//             <Flex justify={'center'} data-aos="slide-up" data-aos-duration="6000">
//                 <Heading color={'#000'} fontFamily='Lobster' fontSize={40} pt={8} borderBottom={'2px solid #f7a010'}>Our Chefs</Heading>
//             </Flex>
//             <Flex w={'80%'} mx={'auto'} color={'black'} mt={12}>
//                 <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap={16}>
//                     {Services.map((card, index) => (
//                         <ServiceCard key={index} Image={card.Image} description={card.description} />
//                     ))}
//                 </SimpleGrid>

//             </Flex>
//         </Box>
//     )
// }

// function ServiceCard({ Image, description }) {
//     return (
//         <Box boxShadow={'2xl'} h={'150%'} pt={6} _hover={{ cursor: 'pointer', bgColor: '#f7a010', rounded:'lg'}} data-aos="slide-up" data-aos-duration="6000" w={'80%'}>
//             <Box w={'80%'} mx={'auto'}>
//                 <Flex direction={'column'}>
//                     <Image src={Image}/>
//                 </Flex>
//                 <Text fontSize={"13px"}>{description}</Text>
//             </Box>
//         </Box>
//     )
// }

// export default Services