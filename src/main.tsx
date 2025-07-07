import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
//import App from './App.tsx'
//import Container from './Container.tsx'
import CadastroCliente from './CadastroCliente'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <CadastroCliente/>
  </StrictMode>,
)
