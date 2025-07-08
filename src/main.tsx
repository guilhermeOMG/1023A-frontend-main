import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import './index.css'
//import App from './App.tsx'
//import Container from './Container.tsx'
import CadastroCliente from './CadastroCliente';
import BlocoCentral from './BlocoCentral';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <CadastroCliente />,
  },
  {
    path: "/BlocoCentral",
    element: <BlocoCentral />,
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <BlocoCentral />
    <RouterProvider router={router} />
  </StrictMode>,
)

