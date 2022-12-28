import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { postCodeAPI } from '../controllers/code.controllers';
import { Editor } from './Editor';
import { Output } from './Output';

type outputObj = {
    err: string;
    stdout: string;
    stderr: string;
}
export const CodingSection = () => {
    const [output, setOutput] = useState<outputObj>({ err: "", stdout: "", stderr: "" });
    const [loading, setLoading] = useState<boolean>(false)
    const runCode = async (code: string) => {
        setLoading(true)
        let res = await postCodeAPI(code);
        if (res) {
            setOutput(res);
        }
        setLoading(false);
    }

    const clearOutput = () => {
        setOutput({ err: "", stdout: "", stderr: "" })
    }
    return (
        <Flex flexGrow={1} gap='10px' p='0px 10px 10px'>
            <Editor runCode={runCode} loading={loading} />
            <Output output={output} clearOutput={clearOutput} />
        </Flex>
    )
}