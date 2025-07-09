import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import './index.css'
//import App from './App.tsx'
//import Container from './Container.tsx'
import CadastroCliente from './CadastroCliente';

const router = createBrowserRouter([
  {
    path: "/",
    element: <CadastroCliente />,
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

