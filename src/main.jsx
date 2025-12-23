import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CataloguePage from './CataloguePage.jsx'

const Root = () => {
  // Handle both regular paths and GitHub Pages hash routing
  const path = window.location.pathname
  const hash = window.location.search
  
  // Check for GitHub Pages hash routing (?/catalogue)
  if (hash && hash.startsWith('?/')) {
    const routePath = hash.substring(2) // Remove '?/'
    if (routePath === 'catalogue') {
      return <CataloguePage />
    }
  }
  
  // Check regular path
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
