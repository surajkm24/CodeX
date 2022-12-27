import React from 'react'
import ReactDOM from 'react-dom/client'
import { theme, ColorModeProvider, CSSReset, ThemeProvider } from '@chakra-ui/react';
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <App />
      </ColorModeProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
