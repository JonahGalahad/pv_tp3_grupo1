import { useState } from 'react';
import proyectService from '../services/proyectService.js';
import "../css/navbar.css";
import "../css/header.css";
import ProyectoCard from "./ProyectoCard";

const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(proyectService.obtenerProyectos());

    const [busqueda, setBusqueda] = useState("");
    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [estado, setEstado] = useState("");

    const actualizarProyectos = () => {
        setProyectos(proyectService.obtenerProyectos());
    };

    const handlerEliminar = (id) => {
        proyectService.eliminarProyecto(id);
        actualizarProyectos();
    };

    const handlerBuscar = (e) => {
        const texto = e.target.value;
        setBusqueda(texto);

        if (texto.trim() === "") {
            actualizarProyectos();
        } else {
            setProyectos(proyectService.buscarProyecto(texto));
        }
    };

    const handlerAgregar = (e) => {
        e.preventDefault();

        const nuevoProyecto = {
            titulo: titulo,
            categoria: categoria,
            estado: estado,
            imagen: "/img/default.png"
        };

        proyectService.agregarProyecto(nuevoProyecto);
        actualizarProyectos();

        setTitulo("");
        setCategoria("");
        setEstado("");
        setBusqueda("");
    };

    return(
        <div className="container">
            <h2 className="titulo">Lista de Proyectos</h2>

            <form onSubmit={handlerAgregar}>
                <input
                    type="text"
                    placeholder="Título del proyecto"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder="Categoría"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder="Estado"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                    required
                />

                <button type="submit">Agregar proyecto</button>
            </form>

            <input
                type="text"
                placeholder="Buscar proyecto..."
                value={busqueda}
                onChange={handlerBuscar}
            />

            <section className="cards">
                {
                    proyectos.map(element => (



<ProyectoCard
    key={element.id}
    proyecto={element}
    onEliminar={handlerEliminar}
/>



                    ))
                }
            </section>
        </div>
    );
};

export default ListaProyectos;