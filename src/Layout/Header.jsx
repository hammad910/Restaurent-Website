import { Flex, Box, Link, Image, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import img from '../Image/shezicircle.png'
function Header() {

    const navLink = [
        {name: 'Home', path: "/"},
        { name: 'About', path: "/About" },
        {name: 'Service', path: "/Service" },
        {name: 'Menu', path: "/Menu"},
    ]

    const [scrolled, setScrolled] = useState(false)

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // return(() => {

        // })
    })

    return (
        <Box zIndex={999} w={'100%'} className={`header ${scrolled ? "scroll" : ''}`}>
            <Flex alignItems={'center'} justify={'space-around'}>
                <Link>
                    <Image src={img} h={70} w={70} my={2}/>
                </Link>
                <Flex gap={8} textTransform={'uppercase'} fontSize={20} color={'white'} >
                    {navLink.map((link, index) =>
                        <Link _hover={{ color: '#f7a010', borderTop: '2px solid white', cursor: 'pointer', }}  key={index} >{link.name}</Link>
                    )}
                </Flex>
                <Flex>
                    <Button bgColor={'#f7a010'} fontWeight={'bold'} _hover={{bgColor:'#f7a010', border: 'black', }} >Contact Us</Button>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Header
