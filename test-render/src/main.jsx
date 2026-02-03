import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Use the built artifact for testing
import App from '../../dist/ProductEngineerProposal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
