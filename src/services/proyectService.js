// Funcion Autoejecutable para el servicio de proyectos 
const proyectService = ( () => {
    // Array de proyectos para simular una base de datos
    let proyectos = [
        // Categorias: "En proceso", "Finalizado", "En espera", "Cancelado", "En revisión"
        { id: 1, titulo: "Sistema de Gestión de Biblioteca", categoria: "Programación", estado: "En proceso", imagen: "/img/biblioteca.png"},
        { id: 2, titulo: "Aplicación para Organización de Tareas", categoria: "Programación", estado: "Finalizado", imagen: "/img/tareas.png" },
        { id: 3, titulo: "Sitio Web Institucional", categoria: "Diseño", estado: "En espera", imagen: "/img/sitioweb.png" },
        { id: 4, titulo: "Registro de Alumnos", categoria: "Programación", estado: "En revisión", imagen: "/img/regist.png" },
        { id: 5, titulo: "Plataforma de Cursos Online", categoria: "Educación", estado: "Cancelado", imagen: "/img/cursos-online.jpg" }
    ];

    // Funciones para manejar los proyectos
    const obtenerProyectos = () => [...proyectos];//retorna una COPIA del array "proyectos" para evitar modificaciones externas
    
    // Funcion para recibir un objeto proyecto y lo agrega al array
    const agregarProyecto = (proyecto) => {
        const newID = Math.max(...proyectos.map(({id}) => id),0) + 1;
        proyectos = [...proyectos, {...proyecto, id: newID}];
    };

    //Funcion para eliminar un objeto proyecto
    const eliminarProyecto = (idBuscado) => {
        // el filter se utiliza para crear un nuevo array que excluye el proyecto con el id especificado
        proyectos = proyectos.filter(({id}) => id !== idBuscado);
    };
    
    // Funcion para buscar y retornar un proyecto basandose en el titulo
    // 1er cambio 
    const buscarProyecto = (text) => {
    return proyectos.filter((proyecto) =>
        proyecto.titulo.toLowerCase().includes(text.toLowerCase())
    );
};

    return {
        obtenerProyectos,
        agregarProyecto,
        eliminarProyecto,
        buscarProyecto
    }
})();

export default proyectService;