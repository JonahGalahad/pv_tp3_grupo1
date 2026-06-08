import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
//import './App.css'
import Navbar from './components/Navbar';
import Header from './components/header';
import Footer from './components/footer';
import './css/styles.css'
import './css/listaProyectos.css'
import ListaProyectos from './components/ListaProyectos.jsx'
import DetalleProyecto from './components/DetalleProyecto';
import PerfilUsuario from "./views/PerfilUsuario";

const App = () => {
  return (
    <BrowserRouter>

      <div className="app-wrapper">

        <Navbar />
        <Header />

        <main className="content-area">

          <Routes>
            <Route path="/" element={<ListaProyectos />} />
            <Route path="/proyectos" element={<ListaProyectos />} />
            <Route path="/perfil" element={<PerfilUsuario />} />
            <Route path="/proyectos/:id" element={<DetalleProyecto />} />
          </Routes>

        </main>

        <Footer />

      </div>

    </BrowserRouter>
  );
};

export default App;