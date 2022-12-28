import { Flex, useColorMode } from '@chakra-ui/react';
import { CodingSection } from '../Components/CodingSection';
import { Header } from '../Components/Header';

export const Home = () => {
    const { colorMode } = useColorMode();
    return (
        <Flex flexDir={'column'} w='100vw' h='100vh' bg={colorMode === 'light' ? 'rgb(235,236,237)' : 'rgb(14,21,37)'}>
            <Header />
            <CodingSection />
        </Flex>
    )
}