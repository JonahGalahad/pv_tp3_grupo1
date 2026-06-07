import RegistroActividad from "./RegistroActividad";
import { useState, useEffect, useRef } from 'react';
import proyectService from '../services/proyectService.js';
import "../css/navbar.css";
import "../css/header.css";
import ProyectoCard from "./ProyectoCard";
import DetalleProyecto from './DetalleProyecto.jsx';
import FormularioProyecto from './FormularioProyecto.jsx';
import FormularioProyecto from './FormularioProyecto.jsx';

const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(
        proyectService.obtenerProyectos()
    );

    const [proyectos, setProyectos] = useState(
        proyectService.obtenerProyectos()
    );

    const [busqueda, setBusqueda] = useState("");

    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

    const actualizarProyectos = () => {
        const lista = proyectService.obtenerProyectos();
        setProyectos(lista);
        setProyectosFiltrados(lista);
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
            setProyectos(proyectService.buscarProyecto(texto));
        }
    };

    const handlerVerDetalle = (proyecto) => {
        setProyectoSeleccionado((p) => (p?.id === proyecto.id ? null : proyecto));
        setProyectoSeleccionado((p) => (p?.id === proyecto.id ? null : proyecto));
    };

    return (
        <div className="container">
            <h2 className="titulo">Lista de Proyectos</h2>

            <FormularioProyecto onAgregar={handlerAgregar} />
            <FormularioProyecto onAgregar={handlerAgregar} />

            <input
                className="buscador"
                className="buscador"
                type="text"
                placeholder="Buscar proyecto..."
                value={busqueda}
                onChange={handlerBuscar}
            />

            <section className="cards">
                {proyectos.map((proyecto) => (
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