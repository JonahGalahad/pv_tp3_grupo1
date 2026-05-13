function ProyectoCard({ proyecto, onEliminar }) {

    const { id, titulo, categoria, estado } = proyecto;

    return (
        <div className="proyecto-card">
            <h3>{titulo}</h3>

            <p>
                <strong>Categoría:</strong> {categoria}
            </p>

            <p>
                <strong>Estado:</strong> {estado}
            </p>

            <div className="botones-card">

                <button onClick={() => onEliminar(id)}>
                    Eliminar
                </button>

            </div>
        </div>
    );
}

export default ProyectoCard;