import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CataloguePage from './CataloguePage.jsx'

const Root = () => {
  const path = window.location.pathname
  if (path === '/catalogue') {
    return <CataloguePage />
  }
  return <App />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
