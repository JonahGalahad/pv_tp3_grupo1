import { useState } from 'react';
import proyectService from '../services/proyectService.js';
import "../css/navbar.css";
import "../css/header.css";
import ProyectoCard from "./ProyectoCard";
import DetalleProyecto from './DetalleProyecto.jsx';

const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(proyectService.obtenerProyectos());

    const [busqueda, setBusqueda] = useState("");
    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [estado, setEstado] = useState("");
    //se puede usar para el componente detalle, contiene proyecto
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null); 

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

    const handlerVerDetalle = (proyecto) => {
        // p?.id confirma si el valor p no es null antes de acceder a la propiedad id
        //si selecciona el mismo boton cambia a null
        //si selecciona el boton de otro proyecto el anterior cambia a null y se cambia al nuevo proyecto
        setProyectoSeleccionado((p)=> p?.id === proyecto.id ? null : proyecto );
    };

    return (
        <div className="container">
            <h2 className="titulo">Lista de Proyectos</h2>

            <form 
                className='form-proyecto'
                onSubmit={handlerAgregar}
            >
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
                className='buscador'
                type="text"
                placeholder="Buscar proyecto..."
                value={busqueda}
                onChange={handlerBuscar}
            />
            {/*Renderizado condicional*/}
            {/*muesta detalle si el boton detalle es seleccionado*/}
            {proyectoSeleccionado && (
                <DetalleProyecto/>
            )}

            <section className="cards">
                {
                    proyectos.map(proyecto => (
                        <ProyectoCard 
                            key={proyecto.id} 
                            proyecto={proyecto} 
                            onEliminar={handlerEliminar}
                            onVerDetalle={handlerVerDetalle}
                            isSelected={proyectoSeleccionado?.id === proyecto.id}
                        />
                    ))
                }
            </section>
        </div>
    );
};

export default ListaProyectos;