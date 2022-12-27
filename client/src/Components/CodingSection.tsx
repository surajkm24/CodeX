import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { postCodeAPI } from '../controllers/code.controllers';
import { Editor } from './Editor';

export const CodingSection = () => {
    const [output, setOutput] = useState<string>('')
    const runCode = async (code: string) => {
        await postCodeAPI(code);
    }

    return (
        <Flex flexGrow={1} border='1px solid rgba(0,0,0,0.2)'>
            <Editor runCode={runCode} />
        </Flex>
    )
}