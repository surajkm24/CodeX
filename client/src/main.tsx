import React from 'react'
import ReactDOM from 'react-dom/client'
import { ColorModeProvider, CSSReset, ThemeProvider, ChakraProvider } from '@chakra-ui/react';
import App from './App'
import theme from './controllers/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <App />
      </ColorModeProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
