import { Flex, Box, Link, Image, Button, useDisclosure, Stack, Icon } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import img from '../../Image/shezicircle.png';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link as ReactRouterLink } from 'react-router-dom';

function Header() {
  const navDeskLink = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/About' },
    { name: 'Service', path: '/Services' },
    { name: 'Menu', path: '/Menu' },
  ];
  const navMobLink = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/About' },
    { name: 'Service', path: '/Services' },
    { name: 'Menu', path: '/Menu' },
    { name: 'Contact', path: '/Contact' },
  ];

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box zIndex={999} w={'100%'} className={`header ${scrolled ? 'scroll' : ''}`}>
      <Flex alignItems={'center'} mx={'auto'} w={'80%'} justify={'space-between'}>
        <Link as={ReactRouterLink} to='/'>
          <Image src={img} h={{base:50, md:70}} w={{base:50, md:70}} my={2} />
        </Link>
        <Flex gap={8} textTransform={'uppercase'} fontSize={20} color={'white'} display={{ base: 'none', lg: 'flex' }}>
          {navDeskLink.map((link, index) => (
            <Link
              _hover={{ color: '#f7a010', borderTop: '2px solid white', cursor: 'pointer' }}
              as={ReactRouterLink}
              key={index}
              to={link.path}
            >
              {link.name}
            </Link>
          ))}
        </Flex>
        <Flex display={{ base: 'none', lg: 'flex' }}>
          <Link as={ReactRouterLink} to='/Contact'>
            <Button className='contact-btn' bgColor={'#f7a010'} fontWeight={'bold'} _hover={{ border: 'black' }} transition={'transform .3s ease'}>
              Contact Us
            </Button>
          </Link>
        </Flex>
        <Flex display={{ lg: 'none' }}>
          <Icon onClick={onOpen} fontSize={{base:24, sm:28 ,md:30}} color={'#f7a010'}>
            <GiHamburgerMenu />
          </Icon>
        </Flex>
      </Flex>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton mt={6} fontSize={14} />
          <DrawerHeader>
            <Link as={ReactRouterLink} to='/'>
              <Image src={img} h={70} w={70} />
            </Link>
          </DrawerHeader>
          <DrawerBody>
            <Stack spacing='24px'>
              {navMobLink.map((link, index) => (
                <Link as={ReactRouterLink} fontSize='22px' fontWeight='400' key={index} to={link.path}>
                  {link.name}
                </Link>
              ))}
            </Stack>
          </DrawerBody>
          <DrawerFooter>
            <Flex fontSize={'25px'} gap={'10px'} cursor={'pointer'} position={'absolute'} left={5} mb={10}>
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Header;
