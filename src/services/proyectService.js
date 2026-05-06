// Funcion Autoejecutable para el servicio de proyectos 
const proyectService = ( () => {
    // Array de proyectos para simular una base de datos
    let proyectos = [
        // Categorias: "En proceso", "Finalizado", "En espera", "Cancelado", "En revisión"
        {
            id: 1,
            titulo: "Proyecto [1]",
            categoria: "Categoría (1)",
            estado: "En proceso"
        },
        {
            id: 2,
            titulo: "Proyecto [2]",
            categoria: "Categoría (2)",
            estado: "Finalizado"
        },
        {
            id: 3,
            titulo: "Proyecto [3]",
            categoria: "Categoría (3)",
            estado: "En espera"
        },
        {
            id: 4,
            titulo: "Proyecto [4]",
            categoria: "Categoría (4)",
            estado: "En revisión"
        },
        {
            id: 5,
            titulo: "Proyecto [5]",
            categoria: "Categoría (5)",
            estado: "Cancelado"
        }
    ];

    // Funciones para manejar los proyectos
    const obtenerProyectos = () => [...proyectos];//retorna una COPIA del array "proyectos" para evitar modificaciones externas
    
    const eliminarProyecto = (id) => {
        // el filter se utiliza para crear un nuevo array que excluye el proyecto con el id especificado
        proyectos = proyectos.filter(proyecto => proyecto.id !== id);
    };

    const agregarProyecto = () => {

    };
    
    const buscarProyecto = () => {

    };

    return {
        obtenerProyectos,
        agregarProyecto,
        eliminarProyecto,
        buscarProyecto
    }
})();

export default proyectService;