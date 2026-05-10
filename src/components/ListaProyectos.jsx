import { useState } from 'react';
import proyectService from '../services/proyectService.js';
import "../css/navbar.css";
import "../css/header.css"

const ListaProyectos = () => {
    // Estado para almacenar la lista de proyectos
    // "proyectos" es el estado actual, "setProyectos" es la función para actualizarlo
    // proyectService.obtenerProyectos() se llama para obtener la lista inicial de proyectos desde el servicio
    const [proyectos, setProyectos] = useState(proyectService.obtenerProyectos());

    // Botón para eliminar el proyecto (1)
    // Creamos una Nueva funcion para llamar a la funcion eliminarProyecto del servicio y actualizar el estado local de proyectos
    const handlerEliminar = (id) => {
        proyectService.eliminarProyecto(id);
        setProyectos(proyectService.obtenerProyectos()); // Actualizamos el estado local de proyectos
    };
    return(
        <div className="container">
            <h2 className="titulo">Lista de Proyectos</h2>
            <section className="cards">
                {
                    proyectos.map(element => (

                        <article
                            key={element.id}
                            className="proyecto-card"
                        >

                            {/* Imagen */}
                            <img
                                src={element.imagen}
                                alt={element.titulo}
                                className="card-img"
                            />

                            {/* Contenido */}
                            <div className="card-info">

                                <h4>{element.titulo}</h4>

                                <span
                                    className={`badge ${
                                        element.estado === "Finalizado"
                                        ? "done"
                                        : "process"
                                    }`}
                                >
                                    {element.estado}
                                </span>

                                <p className="texto-categoria">
                                    Categoría: {element.categoria}
                                </p>

                                <button
                                    className="btn-outline"
                                    onClick={() => handlerEliminar(element.id)}
                                >
                                    Eliminar
                                </button>

                            </div>

                        </article>
                    ))
                }
            </section>
        </div>
    )      
        
};
export default ListaProyectos;