import { Box, Text, Image } from '@chakra-ui/react';
import { Logo } from './Logo';

export const Header = () => {
    return (
        <Box p='10px'>
            <Logo />
            <Text letterSpacing={'0.8px'} fontSize='13px' fontWeight={600} color='blackAlpha.700'>
                JavaScript Online Compiler
            </Text>
        </Box>
    )
}