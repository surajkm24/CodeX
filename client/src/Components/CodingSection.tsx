import { Flex } from '@chakra-ui/react';
import { Editor } from './Editor';

export const CodingSection = () => {
    return (
        <Flex flexGrow={1} border='1px solid rgba(0,0,0,0.2)'>
            <Editor />
        </Flex>
    )
}