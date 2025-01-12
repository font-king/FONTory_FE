import { createRoot } from 'react-dom/client'

import GlobalStyles from './styles/globalStyles.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyles />
    <App />
  </>,
)
