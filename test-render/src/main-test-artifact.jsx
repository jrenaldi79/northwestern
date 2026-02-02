import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Import from the built artifact to test it
import App from '../../dist/ProductEngineerProposal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
