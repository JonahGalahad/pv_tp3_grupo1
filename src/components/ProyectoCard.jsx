const ProyectoCard = ({ proyecto, onVerDetalle, onEliminarProyecto }) => {

    const {id, titulo, categoria, estado} = proyecto;
    //Debe ser la misma estructura que el proyecto, pero con los datos que se quieran mostrar en la card, por ejemplo: titulo, descripcion, imagen, etc.
    return(
        <article className="card">
            <div>
                <h3>{titulo}</h3>
                <span className={`badge ${estado === "Finalizado" ? "done" : "process"}`}>
                    {estado}
                </span>
                <p>
                    <strong>Categoría:</strong>
                    {categoria}
                </p>
            </div>
            <div>
                <button className="btn-detail" onClick={() => onVerDetalle(id)}>Ver Detalle</button>
                <button className="btn-delete" onClick={() => onEliminarProyecto(id)}>Eliminar</button>
            </div>
        </article>
    );
}
export default ProyectoCard;