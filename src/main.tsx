import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import './index.css'
//import App from './App.tsx'
//import Container from './Container.tsx'
import CadastroCliente from './CadastroCliente';
import BlocoCentral from './BlocoCentral';
//import CadastroVendedor from './CadastroVendedor'; // precisa criar/importar esse componente

const router = createBrowserRouter([
  {
    path: "/BlocoCentral",
    element: <BlocoCentral />,
  },
  {
    path: "/clientes",
    element: <CadastroCliente />,
  },
  /*{
    path: "/cadastrovendedor",
    element: <CadastroVendedor />, // precisa criar/importar esse componente
  }*/
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

