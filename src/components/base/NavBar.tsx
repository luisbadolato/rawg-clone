import { Heading, HStack, Image, Text } from '@chakra-ui/react';
import logo from '../../assets/logo.webp';

const NavBar = () => {
  return (
    <HStack>
        <Image height="60px" src={logo}/>
        <Heading size='xl'>NavBar</Heading>
    </HStack>
  )
}

export default NavBar