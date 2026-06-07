import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./css/styles.css";;
import App from './App.jsx'
//Importar el proveedor del contexto para el usuario
import { UsuarioProvider } from "./context/UsuarioContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsuarioProvider>
      <App />
    </UsuarioProvider>
  </StrictMode>,
)
