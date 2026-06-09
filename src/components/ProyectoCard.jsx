import { Link } from "react-router-dom";

function ProyectoCard({ proyecto, onEliminar }) {

    const { id, titulo, categoria, estado, imagen } = proyecto;

    return (
<div className="proyecto-card">
            {imagen && (
                <img
                    className="card-img"
                    src={imagen}
                    alt={titulo}
                />
            )}
            {/*info de la carta*/}
            <div className="card-info">
                <h4> {titulo} </h4>

                <p className="texto-categoria">
                    <strong>Categoría:</strong> {categoria}
                </p>

                <p className={`badge 
                ${proyecto.estadoClase === "Finalizado" 
                ? "done" 
                : estado === "En revisión" 
                ? "revision"
                : estado === "Cancelado"
                ? "cancelado"
                : "process"
            }`}
                >
                    <strong>Estado:</strong> {estado}
                </p>

                {/*botones de eliminacion/verDetalle*/}
                <div className="botones-card"> {/* el div no tiene css lo agrego juan */}
<Link
    className="btn-outline"
    to={`/proyectos/${proyecto.id}`}
>
    Ver Detalle
</Link>
                    <button
                        className="btn-outline"
                        onClick={() => onEliminar(id)}
                    >
                        Eliminar
                    </button>
                </div>

            </div>
        </div>
    );
}

export default ProyectoCard;