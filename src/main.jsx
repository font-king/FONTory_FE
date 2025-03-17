import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { CustomQueryClientProvider } from './app/provider/CustomQueryClientProvider'
import GlobalStyles from './app/styles/globalStyles'
import theme from './app/styles/theme.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <CustomQueryClientProvider>
      <BrowserRouter>
        <GlobalStyles />
        <App />
      </BrowserRouter>
    </CustomQueryClientProvider>
  </ThemeProvider>,
)
