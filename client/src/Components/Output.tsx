import { Box, Flex, Text, Button } from '@chakra-ui/react';

type outputObj = {
    output: {
        err: string;
        stdout: string;
        stderr: string;
    }
    clearOutput: Function;
}

export const Output = ({ output, clearOutput }: outputObj) => {
    return (
        <Box w='50%'>
            <Flex justify='space-between' py='7px' px='20px' align='center' borderBottom='1px solid rgba(0,0,0,0.2)'>
                <Text>
                    Output
                </Text>
                <Button fontWeight={400} height='30px' borderRadius='3px' fontSize='14px' colorScheme='gray' onClick={()=>clearOutput()}>
                    Clear
                </Button>
            </Flex>
            <Box p='5px' letterSpacing={'1px'}>
                {output.stdout.split('\n').map((ele, i) => (
                    <Text key={i + 1}>{ele}</Text>
                ))}
                {output.stderr.split('\n').map((ele, i) => (
                    <Text key={i + 1}>{ele}</Text>
                ))}
            </Box>
        </Box>
    )
}