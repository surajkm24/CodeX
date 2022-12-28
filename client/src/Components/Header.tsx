import { Flex, Box, Text, Icon, useColorMode, Button } from '@chakra-ui/react';
import { Logo } from './Logo';
import { FaSun, FaMoon } from 'react-icons/fa';

export const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex justify='space-between' p='10px' align='center'>
            <Box>
                <Logo />
                <Text letterSpacing={'0.8px'} fontSize='13px' fontWeight={600} color={colorMode==='light'?'blackAlpha.700':"wheat"}>
                    JavaScript Online Compiler
                </Text>
            </Box>

            <Button onClick={() => toggleColorMode()}>
                <Icon as={colorMode === 'light' ? FaMoon : FaSun} cursor='pointer'
                color={colorMode==='light'?'black':"yellow"} />
            </Button>
        </Flex>
    )
}