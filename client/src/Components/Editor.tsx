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

type props = {
    loading: boolean;
    runCode: Function;
    code: string;
    writeCode: Function;
}
export const Editor = ({ runCode, loading, code, writeCode }: props) => {
    const { colorMode } = useColorMode();

    return (
        <Flex w={{ base: "100%", lg: '50%' }} flexDir='column' borderRadius={{ base: "0px 0px 10px 10px", lg: '10px' }} border='1px'
            borderColor={colorMode === 'light' ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.3)"}>
            <Flex justify='space-between' p='7px' align='center' borderBottom='1px'
                bg={colorMode === 'light' ? "white" : "rgb(28,35,51)"}
                borderColor={colorMode === 'light' ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.3)"}
                borderRadius='10px 10px 0px 0px'
                display={{ base: "none", lg: "flex" }}>
                <Button variant='unstyled' fontWeight={400} fontSize='15px'
                    bg={colorMode === 'light' ? "rgba(0,0,0,0.1)" : 'rgb(43,50,69)'}
                    h='30px' p='0px 15px'
                    _hover={{ bg: colorMode === 'light' ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.2)" }}
                    borderRadius='15px'
                >
                    main.js
                </Button>
                <Button fontWeight={600} height='30px' borderRadius='15px' fontSize='14px' colorScheme='blue' onClick={() => runCode(code)} isLoading={loading}>
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
                        onChange={(value) => writeCode(value)}
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
                <Box h='40px'
                    borderTop='1px'
                    bg={colorMode === 'light' ? "white" : "rgb(28,35,51)"}
                    borderColor={colorMode === 'light' ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.3)"}
                    borderRadius='0px 0px 10px 10px'
                    position={'relative'}>
                    <Button fontWeight={600} height='30px' borderRadius='15px' fontSize='14px' colorScheme='whatsapp' onClick={() => runCode(code)} isLoading={loading}
                    position='absolute' top='5px' right='5px' display={{base:"inline",lg:"none"}}>
                        Run
                    </Button>
                </Box>
            </Flex>
        </Flex>
    )
}