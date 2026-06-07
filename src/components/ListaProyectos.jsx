import RegistroActividad from "./RegistroActividad";
import { useState } from 'react';
import proyectService from '../services/proyectService.js';
import "../css/navbar.css";
import "../css/header.css";
import ProyectoCard from "./ProyectoCard";
import FormularioProyecto from './FormularioProyecto.jsx';

const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(
        proyectService.obtenerProyectos()
    );
    const [proyectosFiltrados, setProyectosFiltrados] = useState(proyectos);
    const [busqueda, setBusqueda] = useState("");
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
    const [fechaActualizacion, setFechaActualizacion] = useState(null);

    const actualizarProyectos = () => {
        const lista = proyectService.obtenerProyectos();
        setProyectos(lista);
        setProyectosFiltrados(lista);
        setFechaActualizacion(new Date());
    };

    const handlerEliminar = (id) => {
        proyectService.eliminarProyecto(id);
        actualizarProyectos(); 
    };

    // ← RECIBE EL OBJETO DESDE FORMULARIO
    const handlerAgregar = (nuevoProyecto) => {
        proyectService.agregarProyecto(nuevoProyecto);
        actualizarProyectos();
        setBusqueda("");
    };

    const handlerBuscar = (e) => {
        const texto = e.target.value;
        setBusqueda(texto);

        if (texto.trim() === "") {
            setProyectosFiltrados(proyectos);
        } else {
            setProyectosFiltrados(proyectService.buscarProyecto(texto));
        }
    };

    const handlerVerDetalle = (proyecto) => {
        setProyectoSeleccionado((p) => (p?.id === proyecto.id ? null : proyecto));
    };

    return (
        <div className="container">
            <h2 className="titulo">Lista de Proyectos</h2>

            <FormularioProyecto onAgregar={handlerAgregar} />

            <input
                className="buscador"
                type="text"
                placeholder="Buscar proyecto..."
                value={busqueda}
                onChange={handlerBuscar}
            />

            <section className="cards">
                {proyectosFiltrados.map((proyecto) => (
                    <ProyectoCard
                        key={proyecto.id}
                        proyecto={proyecto}
                        onEliminar={handlerEliminar}
                        onVerDetalle={handlerVerDetalle}
                        isSelected={proyectoSeleccionado?.id === proyecto.id}
                    />
                ))}
            </section>
            {/* prop de fecha al componenete Registro Actividad */}
            {fechaActualizacion && (
                <RegistroActividad fecha={fechaActualizacion} />
            )}
        </div>
    );
};

export default ListaProyectos;