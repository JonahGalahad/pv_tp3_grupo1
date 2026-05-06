import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
//import './App.css'
import './css/styles.css'
import './css/listaProyectos.css'
import ListaProyectos from './components/ListaProyectos.jsx'

const App = () => {
  return(
    <div className="app-wrapper">
      
      <main className='content-area'>
        <ListaProyectos/>
      </main>
      

    </div>
    
  )
}
export default App;