import { Box, Flex, Text, Button, useColorMode } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

type outputObj = {
    output: {
        err: string;
        stdout: string;
        stderr: string;
    }
    clearOutput: Function;
}

export const Output = ({ output, clearOutput }: outputObj) => {
    const { colorMode } = useColorMode();
    const [height, setHeight] = useState<number>(window.innerHeight - 130);
    useEffect(() => {
        window.addEventListener('resize', () => {
            setHeight(window.innerHeight - 130);
        })

        return () => window.removeEventListener('resize', () => {
            setHeight(window.innerHeight - 130);
        })
    }, [])
    return (
        <Flex w={{ base: "100%", lg: '50%' }} flexDir='column'
            borderRadius={{ base: "0px 0px 10px 10px", lg: '10px' }} border='1px'
            borderColor={colorMode === 'light' ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.3)"}
            h='100%'>
            <Flex justify='space-between' p='7px' align='center' borderBottom='1px solid rgba(255,255,255,0.3)' bg={colorMode === 'light' ? "white" : "rgb(28,35,51)"}
                borderRadius='10px 10px 0px 0px'
                display={{ base: "none", lg: "flex" }}>
                <Button variant='unstyled' fontWeight={400} fontSize='15px'
                    bg={colorMode === 'light' ? "rgba(0,0,0,0.1)" : 'rgb(43,50,69)'}
                    h='30px' p='0px 15px'
                    _hover={{ bg: colorMode === 'light' ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.2)" }}
                    borderRadius='15px'
                >
                    Output
                </Button>
                <Button fontWeight={400} height='30px' borderRadius='15px' fontSize='14px' colorScheme='red' onClick={() => clearOutput()}>
                    Clear
                </Button>
            </Flex>
            <Box letterSpacing={'1px'} bg='rgb(28,35,51)' flexGrow={1}
                borderRadius={'0px 0px 10px 10px'} color='whitesmoke' fontSize='14.5px' >
                <Box h={`${height}px`} overflowY='scroll' p='10px' className='output_container'
                borderRadius={'0px 0px 10px 10px'}>
                    {output.stdout.split('\n').map((ele, i) => (
                        <Text key={i + 1}>{ele}</Text>
                    ))}
                    {output.stderr.split('\n').map((ele, i) => (
                        <Text key={i + 1}>{ele}</Text>
                    ))}
                </Box>
            </Box>
        </Flex >
    )
}