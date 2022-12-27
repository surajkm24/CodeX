import { Flex } from '@chakra-ui/react';
import { CodingSection } from '../Components/CodingSection';
import { Header } from '../Components/Header';

export const Home = () => {
    return (
        <Flex flexDir={'column'} w='100vw' h='100vh'>
            <Header />
            <CodingSection />
        </Flex>
    )
}