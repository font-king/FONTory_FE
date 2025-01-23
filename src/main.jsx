import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/globalStyles.js'
import theme from './styles/theme.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </ThemeProvider>,
)
