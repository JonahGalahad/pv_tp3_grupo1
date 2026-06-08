import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
//import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Dashboard from './components/Dashboard';
import ListaProyectos from './components/ListaProyectos';
import DetalleProyecto from './components/DetalleProyecto';
import PerfilUsuario from './components/PerfilUsuario';

import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="app-wrapper">

      <Navbar />

      <main className="content-area">
        <Routes>

          <Route path="/" element={<Dashboard />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/proyectos" element={<ListaProyectos />} />

          <Route path="/proyectos/:id" element={<DetalleProyecto />} />

          <Route path="/perfil" element={<PerfilUsuario />} />

        </Routes>
      </main>

      <Footer />

    </div>
  );
};

export default App;