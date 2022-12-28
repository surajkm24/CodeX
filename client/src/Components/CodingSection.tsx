import { Flex, useColorMode, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { postCodeAPI } from '../controllers/code.controllers';
import { Editor } from './Editor';
import { Output } from './Output';

type outputObj = {
    err: string;
    stdout: string;
    stderr: string;
}

const initCode: string = `// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using CodeX JS Online Compiler

console.log("Welcome to CodeX!");`;

export const CodingSection = () => {
    const [output, setOutput] = useState<outputObj>({ err: "", stdout: "", stderr: "" });
    const [code, setCode] = useState<string>(initCode);
    const [loading, setLoading] = useState<boolean>(false);
    const [showMain, setShowMain] = useState(true);
    const { colorMode } = useColorMode();

    const writeCode = (value: string) => {
        setCode(value);
    }

    const runCode = async (code: string) => {
        setLoading(true)
        let res = await postCodeAPI(code);
        if (res) {
            setOutput(res);
        }
        setLoading(false);
        setShowMain(false);
    }

    const clearOutput = () => {
        setOutput({ err: "", stdout: "", stderr: "" })
    }
    return (
        <>
            <Flex flexGrow={1} p='0px 10px 10px' flexDir={'column'}>
                <Flex justify='center' p='7px' align='center' border='1px' borderBottom='0px'
                    bg={colorMode === 'light' ? "white" : "rgb(28,35,51)"}
                    borderColor={colorMode === 'light' ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.3)"}
                    borderRadius='10px 10px 0px 0px'
                    display={{ base: "flex", lg: "none" }} gap='10px'>
                    <Button fontWeight={400} fontSize='15px'
                        colorScheme={!showMain ? "gray" : 'blue'}
                        height='30px' borderRadius='15px'
                        onClick={() => setShowMain(true)}
                    >
                        main.js
                    </Button>
                    <Button fontWeight={500} height='30px' borderRadius='15px' fontSize='14px' colorScheme={showMain ? "gray" : 'blue'}
                        onClick={() => setShowMain(false)}
                    >
                        Output
                    </Button>
                </Flex>
                <Flex flexGrow={1} gap='10px' display={{ base: "none", lg: "flex" }}>
                    <Editor runCode={runCode} loading={loading} code={code} writeCode={writeCode} />
                    <Output output={output} clearOutput={clearOutput} />
                </Flex>
                <Flex flexGrow={1} gap='10px' display={{ base: "flex", lg: "none" }}>
                    {showMain ? <Editor runCode={runCode} loading={loading} code={code} writeCode={writeCode} /> :
                        <Output output={output} clearOutput={clearOutput} />}
                </Flex>
            </Flex>

        </>
    )
}