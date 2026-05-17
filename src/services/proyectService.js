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
            descripcion: `Sistema orientado a la administración de libros,préstamos y usuarios dentro de una biblioteca. 
            Permite mejorar la organización y automatizar procesos internos de registro y control.`,
            
            recursos: [
                "PDF del proyecto",
                "Repositorio GitHub",
                "Documentación en Drive" 
            ],

            equipo: [
                {
                    nombre: "Sol Pizarro",
                    rol: "Desarrollo"
                },
                {
                    nombre: "Juan Arze",
                    rol: "Desarrollo"
                },
                {
                    nombre: "Ariana Vasquez",
                    rol: "Diseño"
                },
                {
                    nombre: "Jonatan Zarate",
                    rol: "Programación"
                },
                {
                    nombre: "Esteban Vera",
                    rol: "Maquetación"
                }
            ]
        },
        { 
            id: 2, 
            titulo: "Aplicación para Organización de Tareas", 
            categoria: "Programación", 
            estado: "Finalizado", 
            imagen: "/img/tareas.png",
            descripcion: `
                Aplicación desarrollada para facilitar la organización
                de tareas diarias y académicas mediante listas dinámicas
                y recordatorios personalizados.

                El sistema permite mejorar la productividad de los usuarios,
                optimizando el seguimiento de actividades pendientes y finalizadas.`,

            recursos: [
                "PDF de documentación",
                "Repositorio GitHub",
                "Drive compartido"
            ],
            equipo: [
                {
                    nombre: "Sol Pizarro",
                    rol: "Desarrollo"
                },
                {
                    nombre: "Juan Arze",
                    rol: "Desarrollo"
                },
                {
                    nombre: "Ariana Vasquez",
                    rol: "Diseño"
                },
                {
                    nombre: "Jonatan Zarate",
                    rol: "Programación"
                },
                {
                    nombre: "Esteban Vera",
                    rol: "Maquetación"
                }
            ]
        },
        { 
            id: 3, 
            titulo: "Sitio Web Institucional", 
            categoria: "Diseño", 
            estado: "En espera", 
            imagen: "/img/sitioweb.png",
             descripcion: `
                Sitio web institucional pensado para representar de manera
                visual e informativa a una organización educativa y sus servicios.

                Incluye secciones de navegación intuitiva, diseño responsive
                y contenido multimedia orientado a mejorar la experiencia del usuario.`,

            recursos: [
                "Manual de diseño PDF",
                "Repositorio GitHub",
                "Prototipo en Drive"
            ],
            equipo: [
                {
                    nombre: "Sol Pizarro",
                    rol: "Desarrollo"
                },
                {
                    nombre: "Juan Arze",
                    rol: "Desarrollo"
                },
                {
                    nombre: "Ariana Vasquez",
                    rol: "Diseño"
                },
                {
                    nombre: "Jonatan Zarate",
                    rol: "Programación"
                },
                {
                    nombre: "Esteban Vera",
                    rol: "Maquetación"
                }
            ]
        },
        { 
            id: 4, 
            titulo: "Registro de Alumnos", 
            categoria: "Programación", 
            estado: "En revisión", 
            imagen: "/img/regist.png",
            descripcion: `
                Sistema creado para administrar el registro de estudiantes,
                incluyendo altas, bajas y modificaciones de información académica.

                El proyecto busca automatizar procesos administrativos y
                facilitar la gestión de datos dentro de instituciones educativas.`,

            recursos: [
                "PDF del sistema",
                "Repositorio GitHub",
                "Base de datos en Drive"
            ],
            equipo: [
                {
                    nombre: "Sol Pizarro",
                    rol: "Desarrollo"
                },
                {
                    nombre: "Juan Arze",
                    rol: "Desarrollo"
                },
                {
                    nombre: "Ariana Vasquez",
                    rol: "Diseño"
                },
                {
                    nombre: "Jonatan Zarate",
                    rol: "Programación"
                },
                {
                    nombre: "Esteban Vera",
                    rol: "Maquetación"
                }
            ]
        },
        { 
            id: 5, 
            titulo: "Plataforma de Cursos Online", 
            categoria: "Educación", 
            estado: "Cancelado", 
            imagen: "/img/cursos-online.jpg", 
            descripcion: `
            Plataforma orientada a la publicación y administración
            de cursos virtuales para estudiantes y docentes.

            El sistema incluía herramientas para subir contenido,
            gestionar usuarios y realizar seguimiento del progreso académico.`,

        recursos: [
            "Documentación PDF",
            "Repositorio GitHub",
            "Archivos compartidos en Drive"
        ],
        equipo: [
            {
                nombre: "Sol Pizarro",
                rol: "Desarrollo"
            },
            {
                nombre: "Juan Arze",
                rol: "Desarrollo"
            },
            {
                nombre: "Ariana Vasquez",
                rol: "Diseño"
            },
            {
                nombre: "Jonatan Zarate",
                rol: "Programación"
            },
            {
                nombre: "Esteban Vera",
                rol: "Maquetación"
            }
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