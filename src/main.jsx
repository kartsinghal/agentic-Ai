import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CrisisProvider } from './context/CrisisContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CrisisProvider>
      <App />
    </CrisisProvider>
  </StrictMode>,
)
