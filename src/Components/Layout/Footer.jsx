import { Box, Flex, Heading, Text, Image, SimpleGrid, AspectRatio } from "@chakra-ui/react";
// import Socials from "../Home/Socials";
import img from '../../Image/shezicircle.png'
import { FaFacebook, FaTwitter } from "react-icons/fa";


function Footer() {
  const footerLink = [
    { name: "Home" },
    { name: "About" },
    { name: "Service" },
    { name: "Menu" },
    { name: "Contact" },
  ]

  return (
    <Flex justify={{ base: 'flex-start', sm: 'center' }} bg={'#000'} w={'100%'} color={"white"} py={10} mt={'10'}>
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={8} w={'90%'} mx={'auto'} display={'flex'} justifyContent={'space-evenly'}>
        <Box>
          <Image src={img} _hover={{ opacity: '20px' }} color={"white"} w={70} h={70} mt={-6} />
          <Text color="white" w={"220px"} fontSize={"15px"}>Welcome to MR Shezi Restaurant we offer a variety of delicious food from different parts of the world</Text>
        </Box>
        <Flex direction={"column"} color={"white"} textTransform={"capitalize"} fontSize={"14px"}>
          <Heading as={"h3"} fontSize={26} textTransform={"capitalize"} fontFamily={'Jost'}>Quick Links</Heading>
          <Flex gap={1} direction={"column"} mt={'20px'}>
            {footerLink.map((link, index) =>
              <Text _hover={{ cursor: 'pointer' }} key={index}>{link.name}</Text>
            )}
          </Flex>
        </Flex>
        <Flex direction={"column"} >
          <Heading as={"h3"} fontSize={26} textTransform={"capitalize"} fontFamily={'Jost'}>Contact details</Heading>
          <Text mt={'20px'} _hover={{ cursor: 'pointer' }} w={'250px'}>ahmed@mrshezi.com</Text>
          <Text _hover={{ cursor: 'pointer' }}>+92 312 219 7700</Text>
        </Flex>
        <Flex direction={"column"}>
          <Heading as={"h3"} fontSize={26} textTransform={"capitalize"} fontFamily={'Jost'}>follow us</Heading>
          <Flex mt={'20px'} fontSize={'25px'} gap={'10px'} cursor={'pointer'}>
            <FaFacebook />
            <FaTwitter />
          </Flex>
        </Flex>
        <Flex direction={"column"} justify={'center'}>
          <Heading as={"h3"} fontSize={26} textTransform={"capitalize"} fontFamily={'Jost'}>Our Location</Heading>
          <Flex w="100%" mx='auto' mt={'20px'} gap={20} flexDir={{ base: 'column', lg: 'row' }}  >
            <Box w="full">
              <AspectRatio ratio={15 / 9} h={"100%"} w={"150%"}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1809.857517727036!2d67.01570528882459!3d24.873580477883873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f7142d4a32f%3A0x3c8399de7b9346be!2sShezi%20Restaurant!5e0!3m2!1sen!2s!4v1705386273921!5m2!1sen!2s"  ></iframe>
              </AspectRatio>
            </Box>
          </Flex>

        </Flex>
      </SimpleGrid>
    </Flex>
  );
}

export default Footer;
