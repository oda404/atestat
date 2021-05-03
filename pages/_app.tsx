
import { AppProps } from 'next/app'
import "../styles/global.scss"
import { ThemeProvider, theme } from '@chakra-ui/react';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App

