import DetalleProyecto from "./DetalleProyecto";

function ProyectoCard({ proyecto, onEliminar, onVerDetalle,isSelected }) {

    const { id, titulo, categoria, estado, imagen } = proyecto;

    return (
        <div className={`proyecto-card ${isSelected ? "seleccionado":""}`}>
            <img
                className="card-img"
                src={imagen}
                alt={titulo}
            />
            {/*info de la carta*/}
            <div className="card-info">
                <h4> {titulo} </h4>

                <p className="texto-categoria">
                    <strong>Categoría:</strong> {categoria}
                </p>

                <p className={`badge ${estado === "Finalizado" ? "done" : "process"}`}
                >
                    <strong>Estado:</strong> {estado}
                </p>

                {/*botones de eliminacion/verDetalle*/}
                <div className="botones-card"> {/* el div no tiene css lo agrego juan */}
                    <button
                        className="btn-outline"
                        onClick={() => onVerDetalle(proyecto)}
                    >
                        {isSelected ? "Ocultar Detalle" : "Ver Detalle"}
                    </button>
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