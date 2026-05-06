import { useState } from 'react';
import proyectService from '../services/proyectService.js';

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
        <div className='container'>
            <h2>Lista de Proyectos</h2>
            <section className='grid-proyectos'>
                <div>
                    {   // Se mapea el array de proyectos para renderizar cada proyecto como una tarjeta
                        proyectos.map(element => (

                            // Cada proyecto se renderiza dentro de un artículo con una clase "tarjeta"
                            <article key={element.id} className='tarjeta'> 
                                <div className='tarjeta-contenido'>
                                    <h3>{element.titulo}</h3>

                                    {/* El className se establece dinámicamente según el estado del proyecto.
                                        "badge" lo necesitamos para que cambie el estilo según el estado del proyecto */}
                                    <span className= { `badge ${element.estado === "Finalizado" ? "done" : "process"}`}>
                                        {element.estado}
                                    </span>
                                    <p> <strong>Categoria:</strong> {element.categoria}</p>

                                </div>
                                {/* Botón para eliminar el proyecto (1)
                                    Al hacer clic, se llama a la función handlerEliminar con el ID del proyecto donde se hizo clic*/}
                                <button className='btn-delete' onClick={ () => handlerEliminar(element.id) }>Eliminar </button>
                            </article>
                            )
                        )
                    }
                </div>
            </section>
        </div>
    )      
        
};
export default ListaProyectos;