import { useState } from "react";

const FormularioProyecto = ({ onAgregar })=>{

    const[ formData, setFormData] = useState({
        titulo:"",
        categoria:"",
        estado:"",
        descripcion:"",
        recursoPdf:"",
        recursoDrive:"",
        recursoGithub:"",
        miembro1:"",
        rol1:"",
        miembro2:"",
        rol2:""
    });

    const { titulo, categoria, estado, descripcion, recursoPdf, recursoDrive, recursoGithub, miembro1, rol1, miembro2, rol2} = formData;

    const handleChange= (e)=>{
        const{ name, value} = e.target;
        setFormData({
        ...formData,
        [name]:
        value

        });

    };

    const handleSubmit= (e)=>{
        e.preventDefault();
        const recursos=[{
            nombre:
            "Documento PDF",

            link:
            recursoPdf
        },

        {
            nombre:
            "Carpeta Drive",

            link:
            recursoDrive
         },
        {
            nombre:
            "Repositorio GitHub",

            link:
            recursoGithub
        }

    ]
    .filter(r=> r.link.trim()!=='' );

    const equipo=[
    {
        nombre:
        miembro1,
        rol:
        rol1
    },

    {
        nombre:
        miembro2,
        rol:
        rol2
    }

    ]

    .filter( p=> p.nombre.trim()!=='' && p.rol.trim()!=='');

    onAgregar({

    titulo,
    categoria,
    estado:

    estado === "process"
    ? "En proceso"

    : estado === "revision"
    ? "En revisión"

    : estado === "done"
    ? "Finalizado"

    : estado === "cancelado"
    ? "Cancelado"

    : estado,

    estadoClase: estado,

    descripcion,

    recursos,

    equipo

});



    setFormData({

        titulo:"",
        categoria:"",
        estado:"",
        descripcion:"",
        recursoPdf:"",
        recursoDrive:"",
        recursoGithub:"",
        miembro1:"",
        rol1:"",
        miembro2:"",
        rol2:""

    });

    };



    return(

    <form

    className="form-proyecto"

    onSubmit={handleSubmit}

    >

    <input
    type="text"
    placeholder="Título del proyecto"
    name="titulo"
    value={titulo}
    onChange={handleChange}
    required
    />

    <input
    type="text"
    placeholder="Categoría"
    name="categoria"
    value={categoria}
    onChange={handleChange}
    required
    />

    <select
    name="estado"
    value={estado}
    onChange={handleChange}
    required
    >

    <option value="">Estado...</option>

    <option value="process"> En Proceso </option>

    <option value="revision"> En Revisión</option>

    <option value="done"> Finalizado</option>

    <option value="cancelado"> Cancelado</option>

    </select>

    <textarea
    placeholder="Descripción extendida"
    name="descripcion"
    value={descripcion}
    onChange={handleChange}
    rows={4}
    required
    />

    <input
    type="url"
    placeholder="Link PDF"
    name="recursoPdf"
    value={recursoPdf}
    onChange={handleChange}
    />

    <input
    type="url"
    placeholder="Link Drive"
    name="recursoDrive"
    value={recursoDrive}
    onChange={handleChange}
    />

    <input
    type="url"
    placeholder="Link GitHub"
    name="recursoGithub"
    value={recursoGithub}
    onChange={handleChange}
    />

    <input
    type="text"
    placeholder="Nombre integrante 1"
    name="miembro1"
    value={miembro1}
    onChange={handleChange}
    />

    <input
    type="text"
    placeholder="Rol integrante 1"
    name="rol1"
    value={rol1}
    onChange={handleChange}
    />

    <input
    type="text"
    placeholder="Nombre integrante 2"
    name="miembro2"
    value={miembro2}
    onChange={handleChange}
    />

    <input
    type="text"
    placeholder="Rol integrante 2"
    name="rol2"
    value={rol2}
    onChange={handleChange}
    />

    <button type="submit">

    Agregar proyecto

    </button>

    </form>

    );

};

export default FormularioProyecto;