import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from './routes'
import GlobalStyles from './style/global'
import { ThemeProvider } from 'styled-components'
import theme from './style/theme'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      < Routes />
    </ThemeProvider>
  </React.StrictMode>,
)
