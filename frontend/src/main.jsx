import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './Global.css'
import WelcomePage from './WelcomePage.jsx'
import PageRoutes from './PageRoutes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PageRoutes />
      <WelcomePage />
    </BrowserRouter>
  </StrictMode>,
)

