import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ComprasApp } from '../components/ComprasApp'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <ComprasApp />
    </StrictMode>
  </BrowserRouter>,
)
