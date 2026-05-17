import { useState } from 'react';
import proyectService from '../services/proyectService.js';
import "../css/navbar.css";
import "../css/header.css";
import ProyectoCard from "./ProyectoCard";
import DetalleProyecto from './DetalleProyecto.jsx';

const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(proyectService.obtenerProyectos());
    const [busqueda, setBusqueda] = useState("");
    
    const [formData, setFormData] = useState({
        titulo: "",
        categoria: "",
        estado: "",
        descripcion: "",
        recursoPdf: "",
        recursoDrive: "",
        recursoGithub: "",
        miembro1: "",
        rol1: "",
        miembro2: "",
        rol2: ""
    });

    const {  titulo,    categoria,    estado,    descripcion,    recursoPdf,    recursoDrive,    recursoGithub,
                miembro1,    rol1,    miembro2,    rol2} = formData;
                
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

        setFormData({
            titulo: "",
            categoria: "",
            estado: "",
            descripcion: "",
            recursoPdf: "",
            recursoDrive: "",
            recursoGithub: "",
            miembro1: "",
            rol1: "",
            miembro2: "",
            rol2: ""
        });
        setBusqueda("");
    };

    const handlerChange = (e) => {
        const { name, value } = e.target;
            setFormData({...formData, [name]: value  });
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
                    name="titulo"
                    value={titulo}
                    onChange={handlerChange}
                    required
                />

                <input
                    type="text"
                    placeholder="Categoría"
                    name="categoria"
                    value={categoria}
                    onChange={handlerChange}
                    required
                />

                <input
                    type="text"
                    placeholder="Estado"
                    name="estado"
                    value={estado}
                    onChange={handlerChange}
                    required
                />

                <textarea
                    placeholder="Descripción extendida (mínimo 2 párrafos)"
                    name="descripcion"
                    value={descripcion}
                    onChange={handlerChange}
                    rows={4}
                    required
                />

                <input
                    type="url"
                    placeholder="Link PDF"
                    name="recursoPdf"
                    value={recursoPdf}
                    onChange={handlerChange}
                    required
                />

                <input
                    type="url"
                    placeholder="Link Drive"
                    name= "recursoDrive"
                    value={recursoDrive}
                    onChange={handlerChange}
                    required
                />

                <input
                    type="url"
                    placeholder="Link GitHub"
                    name="recursoGithub"
                    value={recursoGithub}
                    onChange={handlerChange}
                    required
                />

                <input
                    type="text"
                    placeholder="Nombre del integrante 1"
                    name="miembro1"
                    value={miembro1}
                    onChange={handlerChange}
                    required
                />

                <input
                    type="text"
                    placeholder="Rol del integrante 1"
                    name="rol1"
                    value={rol1}
                    onChange={handlerChange}
                    required
                />

                <input
                    type="text"
                    placeholder="Nombre del integrante 2 (opcional)"
                    name="miembro2"
                    value={miembro2}
                    onChange={handlerChange}
                />

                <input
                    type="text"
                    placeholder="Rol del integrante 2 (opcional)"
                    name="rol2"
                    value={rol2}
                    onChange={handlerChange}
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