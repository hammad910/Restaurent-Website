import { Box, Flex, Heading, Text, Image, SimpleGrid } from "@chakra-ui/react";
// import Socials from "../Home/Socials";
import img from '../Image/shezicircle.png'
import { FaFacebook, FaTwitter  } from "react-icons/fa";


function Footer() {
  const footerLink = [
    { name: "About Us" },
    { name: "Our Client" },
    { name: "Service" },
    { name: "Portfolio" },
  ]

  return (
    <Flex justify={{ base: 'flex-start', sm: 'center' }} bg={'#000'} color={"white"} py={10} mt={'10'}>
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={8} w={'80%'} mx={'auto'}>
        <Box>
          <Image src={img} _hover={{ opacity: '20px' }} color={"white"} w={70} h={70} mt={-6} />
          <Text color="white" w={"220px"} fontSize={"15px"}>Welcome to MR Shezi Restaurant we offer a variety of delicious food from different parts of the world</Text>
        </Box>
        <Flex direction={"column"} color={"white"} textTransform={"capitalize"} fontSize={"14px"}>
          <Heading as={"h3"} size={"md"} textTransform={"uppercase"} fontFamily={'Poppins'}>Quick Links</Heading>
          <Flex gap={1} direction={"column"} mt={'20px'}>
            {footerLink.map((link, index) =>
              <Text _hover={{ cursor: 'pointer' }} key={index}>{link.name}</Text>
            )}
          </Flex>
        </Flex>
        <Flex direction={"column"} >
          <Heading as={"h3"} size={"md"} textTransform={"capitalize"} fontFamily={'Poppins'}>Contact details</Heading>
          <Text mt={'20px'} _hover={{ cursor: 'pointer' }} w={'250px'}>+92 321 889 9605</Text>
          <Text _hover={{ cursor: 'pointer' }}>+92 312 219 7700</Text>
        </Flex>
        <Flex direction={"column"}>
          <Heading as={"h3"} size={"md"} textTransform={"capitalize"} fontFamily={'Poppins'}>follow us</Heading>
          <Flex mt={'20px'} fontSize={'25px'} gap={'10px'} cursor={'pointer'}>
            <FaFacebook/>
            <FaTwitter />
          </Flex>
          {/* <Socials/> */}
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}

export default Footer;
