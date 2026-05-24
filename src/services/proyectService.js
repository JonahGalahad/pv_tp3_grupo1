// Funcion Autoejecutable para el servicio de proyectos 
const proyectService = ( () => {
    // Array de proyectos para simular una base de datos
    let proyectos = [
        // Categorias: "En proceso", "Finalizado", "En espera", "Cancelado", "En revisión"
        {
            id: 1,
            titulo: "Sistema de Gestión de Biblioteca",
            categoria: "Programación",
            estado: "En proceso",
            imagen: "/img/biblioteca.png",
            descripcion: "Nuestro sistema de gestión de biblioteca permite registrar libros, préstamos y devoluciones de forma intuitiva. Está pensado para bibliotecas escolares y municipales, con búsquedas rápidas y un panel de administración sencillo.\n\nEl proyecto incluye un diseño responsive, validación de formularios y una base de datos simulada para que los estudiantes practiquen CRUD en la interfaz.",
            recursos: [
                { nombre: "Manual en PDF", link: "https://example.com/biblioteca.pdf" },
                { nombre: "Carpeta de diseño en Drive", link: "https://drive.google.com/drive/folders/example" },
                { nombre: "Repositorio en GitHub", link: "https://github.com/example/biblioteca" }
            ],
            equipo: [
                { nombre: "Ariana", rol: "Frontend" },
                { nombre: "Juan", rol: "Líder de proyecto" }
            ]
        },
        {
            id: 2,
            titulo: "Aplicación para Organización de Tareas",
            categoria: "Programación",
            estado: "Finalizado",
            imagen: "/img/tareas.png",
            descripcion: "Esta aplicación ayuda a organizar tareas diarias, incluir fechas de vencimiento y clasificar por prioridades. El objetivo fue construir una interfaz clara y funcional para usuarios que necesitan priorizar su trabajo.\n\nIncluye notificaciones visuales, filtros por estado y un sistema de etiquetas para agrupar tareas similares.",
            recursos: [
                { nombre: "Guía de usuario en PDF", link: "https://example.com/tareas.pdf" },
                { nombre: "Documentación en Drive", link: "https://drive.google.com/drive/folders/example2" },
                { nombre: "Repositorio en GitHub", link: "https://github.com/example/tareas" }
            ],
            equipo: [
                { nombre: "Ariana", rol: "Diseño UI" },
                { nombre: "Jonatan", rol: "Backend" }
            ]
        },
        {
            id: 3,
            titulo: "Sitio Web Institucional",
            categoria: "Diseño",
            estado: "En revisión",
            imagen: "/img/sitioweb.png",
            descripcion: "El sitio web institucional está pensado para una comunicación clara entre la organización y sus visitantes. Tiene secciones de servicios, contacto y noticias, con un estilo moderno y accesible.\n\nEl proyecto prioriza la usabilidad y la estructura de información para facilitar el acceso a contenido relevante desde cualquier dispositivo.",
            recursos: [
                { nombre: "Propuesta en PDF", link: "https://example.com/sitioweb.pdf" },
                { nombre: "Diseño en Drive", link: "https://drive.google.com/drive/folders/example3" },
                { nombre: "Repositorio en GitHub", link: "https://github.com/example/sitioweb" }
            ],
            equipo: [
                { nombre: "Esteban", rol: "Desarrollo Frontend" },
                { nombre: "Jonatan", rol: "Contenido" }
            ]
        },
        {
            id: 4,
            titulo: "Registro de Alumnos",
            categoria: "Programación",
            estado: "En revisión",
            imagen: "/img/regist.png",
            descripcion: "La herramienta de registro de alumnos centraliza datos de estudiantes y simplifica la gestión escolar. Permite cargar datos personales, clases asignadas y estados académicos con una interfaz clara.\n\nEl proyecto está diseñado para trabajar en conjunto con personal administrativo, reduciendo el tiempo de carga manual y mejorando la búsqueda de información.",
            recursos: [
                { nombre: "Informe en PDF", link: "https://example.com/registro-alumnos.pdf" },
                { nombre: "Esquema en Drive", link: "https://drive.google.com/drive/folders/example4" },
                { nombre: "Repositorio en GitHub", link: "https://github.com/example/registro-alumnos" }
            ],
            equipo: [
                { nombre: "Juan", rol: "Backend" },
                { nombre: "Sol", rol: "QA" }
            ]
        },
        {
            id: 5,
            titulo: "Plataforma de Cursos Online",
            categoria: "Educación",
            estado: "Cancelado",
            imagen: "/img/cursos-online.jpg",
            descripcion: "La plataforma de cursos online proyectaba administrar cursos, inscripciones y certificaciones de forma automatizada. Incluía perfiles de estudiante, seguimiento de progreso y materiales de soporte.\n\nEl plan técnico abarcaba un sistema de roles y un panel de administración para tutores, con una experiencia didáctica amigable y adaptable.",
            recursos: [
                { nombre: "Resumen en PDF", link: "https://example.com/cursos.pdf" },
                { nombre: "Carpeta de Drive", link: "https://drive.google.com/drive/folders/example5" },
                { nombre: "Repositorio en GitHub", link: "https://github.com/example/cursos" }
            ],
            equipo: [
                { nombre: "Ariana", rol: "UX" },
                { nombre: "Sol", rol: "Arquitecto de software" }
            ]
        }
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