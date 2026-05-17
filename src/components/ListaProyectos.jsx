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
    const [descripcion, setDescripcion] = useState("");
    const [recursoPdf, setRecursoPdf] = useState("");
    const [recursoDrive, setRecursoDrive] = useState("");
    const [recursoGithub, setRecursoGithub] = useState("");
    const [miembro1, setMiembro1] = useState("");
    const [rol1, setRol1] = useState("");
    const [miembro2, setMiembro2] = useState("");
    const [rol2, setRol2] = useState("");
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

        const recursos = [
            { nombre: "Documento PDF", link: recursoPdf },
            { nombre: "Carpeta Drive", link: recursoDrive },
            { nombre: "Repositorio GitHub", link: recursoGithub }
        ].filter((recurso) => recurso.link.trim() !== "");

        const equipo = [
            { nombre: miembro1, rol: rol1 },
            { nombre: miembro2, rol: rol2 }
        ].filter((persona) => persona.nombre.trim() !== "" && persona.rol.trim() !== "");

        const nuevoProyecto = {
            titulo,
            categoria,
            estado,
            imagen: "/img/default.png",
            descripcion: descripcion,
            recursos,
            equipo
        };

        proyectService.agregarProyecto(nuevoProyecto);
        actualizarProyectos();

        setTitulo("");
        setCategoria("");
        setEstado("");
        setDescripcion("");
        setRecursoPdf("");
        setRecursoDrive("");
        setRecursoGithub("");
        setMiembro1("");
        setRol1("");
        setMiembro2("");
        setRol2("");
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

                <textarea
                    placeholder="Descripción extendida (mínimo 2 párrafos)"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    rows={4}
                    required
                />

                <input
                    type="url"
                    placeholder="Link PDF"
                    value={recursoPdf}
                    onChange={(e) => setRecursoPdf(e.target.value)}
                    required
                />

                <input
                    type="url"
                    placeholder="Link Drive"
                    value={recursoDrive}
                    onChange={(e) => setRecursoDrive(e.target.value)}
                    required
                />

                <input
                    type="url"
                    placeholder="Link GitHub"
                    value={recursoGithub}
                    onChange={(e) => setRecursoGithub(e.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder="Nombre del integrante 1"
                    value={miembro1}
                    onChange={(e) => setMiembro1(e.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder="Rol del integrante 1"
                    value={rol1}
                    onChange={(e) => setRol1(e.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder="Nombre del integrante 2 (opcional)"
                    value={miembro2}
                    onChange={(e) => setMiembro2(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Rol del integrante 2 (opcional)"
                    value={rol2}
                    onChange={(e) => setRol2(e.target.value)}
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
            {/*Renderizado condicional: el detalle se muestra dentro de cada card cuando está seleccionado*/}

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