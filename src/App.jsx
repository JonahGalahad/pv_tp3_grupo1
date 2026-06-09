import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Header from './components/header';
import Footer from './components/footer';
import './css/styles.css';
import './css/listaProyectos.css';
import ListaProyectos from './components/ListaProyectos.jsx';
import DetalleProyecto from './components/DetalleProyecto';
import PerfilUsuario from "./views/PerfilUsuario";
import Dashboard from './views/Dashboard.jsx';
import './css/Dashboard.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Header />

      <main className="content-area">
        <Routes>
          <Route path="/" element={<ListaProyectos />} />
          <Route path="/proyectos" element={<ListaProyectos />} />
          <Route path="/perfil" element={<PerfilUsuario />} />
          <Route path="/proyectos/:id" element={<DetalleProyecto />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;