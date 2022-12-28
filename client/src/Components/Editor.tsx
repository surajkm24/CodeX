import { Box, Flex, Button, useColorMode } from '@chakra-ui/react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-tomorrow_night_eighties";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-gruvbox";
import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/ext-language_tools";
import { useState } from 'react';

type props = {
    loading: boolean;
    runCode: Function;
}
export const Editor = ({ runCode, loading }: props) => {
    const [code, setCode] = useState<string>('');
    const { colorMode } = useColorMode();

    const writeCode = (value: string) => {
        setCode(value);
    }

    return (
        <Flex w='50%' flexDir='column' borderRadius={'10px'} border='1px'
            borderColor={colorMode === 'light' ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.3)"}>
            <Flex justify='space-between' p='7px' align='center' borderBottom='1px'
                bg={colorMode === 'light' ? "white" : "rgb(28,35,51)"}
                borderColor={colorMode === 'light' ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.3)"}
                borderRadius='10px 10px 0px 0px'>
                <Button variant='unstyled' fontWeight={400} fontSize='15px'
                    bg={colorMode === 'light' ? "rgba(0,0,0,0.1)" : 'rgb(43,50,69)'}
                    h='30px' p='0px 15px'
                    _hover={{ bg: colorMode === 'light' ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.2)" }}
                >
                    main.js
                </Button>
                <Button fontWeight={600} height='30px' borderRadius='3px' fontSize='14px' colorScheme='blue' onClick={() => runCode(code)} isLoading={loading}>
                    Run
                </Button>
            </Flex>
            <Flex flexDir={'column'} flexGrow={1}>
                <Box w='100%' flexGrow={1} >
                    <AceEditor
                        mode="javascript"
                        theme={colorMode === 'light' ? "github" : "cobalt"}
                        name="code-editor"
                        width='100%'
                        height='100%'
                        wrapEnabled={true}
                        onChange={writeCode}
                        fontSize={15}
                        showPrintMargin={true}
                        showGutter={true}
                        highlightActiveLine={true}
                        value={`${code}`}
                        setOptions={{
                            enableBasicAutocompletion: false,
                            enableLiveAutocompletion: true,
                            enableSnippets: false,
                            showLineNumbers: true,
                            tabSize: 2,
                        }} />

                </Box>
                <Box py='15px'
                    borderTop='1px'
                    bg={colorMode === 'light' ? "white" : "rgb(28,35,51)"}
                    borderColor={colorMode === 'light' ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.3)"}
                    borderRadius='0px 0px 10px 10px'>
                </Box>
            </Flex>
        </Flex>
    )
}