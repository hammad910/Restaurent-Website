import { Box, Flex, Heading, Text, Image, SimpleGrid, AspectRatio } from "@chakra-ui/react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import img from '../../Image/shezicircle.png';

function Footer() {
  // Footer Dynamic Links
  const footerLink = [
    { name: "Home" },
    { name: "About" },
    { name: "Service" },
    { name: "Menu" },
    { name: "Contact" },
  ];

  return (
    <Flex justify={{ base: 'flex-start', sm: 'center' }} bg={'#000'} w={'100%'} color={"white"} py={10} mt={'10'}>
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 5 }} gap={8} w={'80%'} mx={'auto'} justifyContent={'space-evenly'}>
      {/* 1st Column Image And Text */}
        <Box>
          <Image src={img} color={"white"} w={70} h={70} mt={-6} />
          <Text color="white" mt={4} fontSize={"15px"}>Welcome to MR Shezi Restaurant. We offer a variety of delicious food from different parts of the world.</Text>
        </Box>
        {/* 2nd Column Quick Links */}
        <Flex direction={"column"} color={"white"} textTransform={"capitalize"} fontSize={"14px"}>
          <Heading as={"h3"} fontSize={26} fontFamily={'Jost'}>Quick Links</Heading>
          <Flex gap={1} direction={"column"} mt={4}>
            {footerLink.map((link, index) => (
              <Text _hover={{ cursor: 'pointer' }} key={index}>{link.name}</Text>
            ))}
          </Flex>
        </Flex>
        {/* 3rd Column Detail */}
        <Flex direction={"column"} mt={{ base: 8, sm: 0 }}>
          <Heading as={"h3"} fontSize={26} fontFamily={'Jost'}>Contact details</Heading>
          <Text mt={4} _hover={{ cursor: 'pointer' }} >ahmed@mrshezi.com</Text>
          <Text _hover={{ cursor: 'pointer' }}>+92 312 219 7700</Text>
        </Flex>
        {/* 4th Column Social Icons */}
        <Flex direction={"column"}>
          <Heading as={"h3"} fontSize={26} fontFamily={'Jost'}>Follow us</Heading>
          <Flex mt={4} fontSize={'25px'} gap={'10px'} cursor={'pointer'}>
            <FaFacebook />
            <FaTwitter />
          </Flex>
        </Flex>
        {/* 5th Column Location With Map */}
        <Flex direction={"column"} mt={{ base: 8, lg: 0 }}>
          <Heading as={"h3"} fontSize={26} fontFamily={'Jost'}>Our Location</Heading>
          <AspectRatio ratio={15 / 9} mt={4} >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1809.857517727036!2d67.01570528882459!3d24.873580477883873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f7142d4a32f%3A0x3c8399de7b9346be!2sShezi%20Restaurant!5e0!3m2!1sen!2s!4v1705386273921!5m2!1sen!2s" />
          </AspectRatio>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}

export default Footer;
