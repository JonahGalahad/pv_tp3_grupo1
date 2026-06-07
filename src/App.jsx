import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
//import './App.css'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import './css/styles.css'
import './css/listaProyectos.css'
import ListaProyectos from './components/ListaProyectos.jsx'
import PerfilUsuario from './components/PerfilUsuario.jsx'

const App = () => {
  return(
    <div className="app-wrapper">
      
      <main className='content-area'>
        <Navbar/>
        <Header/>
        <PerfilUsuario />
        <ListaProyectos/>
        <Footer/>
      </main>
      

    </div>
    
  )
}
export default App;