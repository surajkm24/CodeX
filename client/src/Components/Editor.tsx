import { Box, Flex, Button } from '@chakra-ui/react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import { useState } from 'react';

export const Editor = () => {
    const [code, setCode] = useState<string>('');

    const writeCode = (value: string) => {
        setCode(value);
    }

    return (
        <Flex w='50%' h='100%' borderRight='1px solid rgba(0,0,0,0.2)' flexDir='column'>
            <Flex justify={'space-between'} align='center' >
                <Flex px='20px' bg='#F5F5F5' h='45px' align='center' color='blackAlpha.700'>
                    main.js
                </Flex>
                <Flex justify={'flex-end'} flexGrow={1} px='20px' py='7px' borderBottom='1px solid rgba(0,0,0,0.2)' borderLeft={'1px solid rgba(0,0,0,0.2)'}>
                    <Button colorScheme={'blue'} borderRadius='0px' h='30px' fontSize={'14px'} >
                        Run
                    </Button>
                </Flex>
            </Flex>
            <Box w='100%' flexGrow={1}>
                <AceEditor
                    mode="javascript"
                    theme="github"
                    name="blah2"
                    fontSize={'15px'}
                    width='100%'
                    height='100%'
                    showGutter={true}
                    highlightActiveLine={true}
                    onChange={writeCode}
                    value={code}
                    setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: true,
                        showLineNumbers: true,
                        tabSize: 2,
                    }} />
            </Box>
        </Flex>
    )
}