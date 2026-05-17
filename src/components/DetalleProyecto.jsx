import "../css/DetalleProyecto.css";

const DetalleProyecto = ({ proyecto, inline = false }) => {

    // Si no hay proyecto seleccionado
    if (!proyecto) {

        return (

            <section className="detalle-vacio">

                <h2>
                    Seleccioná un proyecto
                </h2>

                <p>
                    Elegí un proyecto para ver su información detallada.
                </p>

            </section>
        );
    }

    if (inline) {
        return (
            <section className="detalle-proyecto-embed">
                <div className="detalle-seccion">
                    <h3>Descripción</h3>
                    {
                        (() => {
                            const desc = proyecto.descripcion || "";
                            let paras = desc.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);

                            if (paras.length < 2) {
                                const sentences = desc.match(/[^.!?]+[.!?]*/g) || [];
                                if (sentences.length >= 2) {
                                    const half = Math.ceil(sentences.length / 2);
                                    paras = [
                                        sentences.slice(0, half).join(' ').trim(),
                                        sentences.slice(half).join(' ').trim()
                                    ].filter(Boolean);
                                }
                            }

                            if (paras.length === 0) paras = ["Descripción no disponible.", ""];
                            if (paras.length === 1) paras.push(paras[0]);

                            return paras.map((p, i) => (
                                <p key={i}>{p}</p>
                            ));
                        })()
                    }
                </div>
            </section>
        );
    }

    return (

        <section className={inline ? "detalle-proyecto-embed" : "detalle-proyecto"}>

            {/* IMAGEN + INFO */}

            <div className="detalle-header">

                {proyecto.imagen && (
                    <img
                        src={proyecto.imagen}
                        alt={proyecto.titulo}
                        className="detalle-img"
                    />
                )}

                <div className="detalle-info">

                    <span
                        className={`badge ${
                            proyecto.estado === "Finalizado"
                            ? "done"
                            : "process"
                        }`}
                    >
                        {proyecto.estado}
                    </span>

                    <h2>
                        {proyecto.titulo}
                    </h2>

                    <p className="detalle-categoria">
                        {proyecto.categoria}
                    </p>

                </div>

            </div>

            {/* DESCRIPCIÓN */}

            <div className="detalle-seccion">

                <h3>
                    Descripción
                </h3>

                {
                    (() => {
                        const desc = proyecto.descripcion || "";

                        // Split into paragraphs by blank lines first
                        let paras = desc.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);

                        // If still less than 2 paragraphs, try splitting by sentence boundaries
                        if (paras.length < 2) {
                            const sentences = desc.match(/[^.!?]+[.!?]*/g) || [];
                            if (sentences.length >= 2) {
                                const half = Math.ceil(sentences.length / 2);
                                paras = [
                                    sentences.slice(0, half).join(' ').trim(),
                                    sentences.slice(half).join(' ').trim()
                                ].filter(Boolean);
                            }
                        }

                        // Ensure at least two paragraphs (fallback: duplicate)
                        if (paras.length === 0) paras = ["Descripción no disponible.", ""];
                        if (paras.length === 1) paras.push(paras[0]);

                        return paras.map((p, i) => (
                            <p key={i}>{p}</p>
                        ));
                    })()
                }

            </div>

            {/* RECURSOS */}

            <div className="detalle-seccion">

                <h3>
                    Recursos
                </h3>

                <ul className="lista-recursos">

                    {
                        (proyecto.recursos || []).map((recurso, index) => {
                            const link = recurso.link || '#';
                            const name = recurso.nombre || link;

                            let tipo = 'Recurso';
                            if (/drive\.google\.com/.test(link)) tipo = 'Drive';
                            else if (/github\.com/.test(link)) tipo = 'GitHub';
                            else if (/\.pdf(\?|$)/.test(link) || /\.pdf$/i.test(name)) tipo = 'PDF';

                            return (
                                <li key={index}>
                                    <a href={link} target="_blank" rel="noopener noreferrer">
                                        {name}
                                    </a>
                                    {" "}
                                    <span className="recurso-tipo">{tipo}</span>
                                </li>
                            );
                        })
                    }

                </ul>

            </div>

            {/* EQUIPO */}

            <div className="detalle-seccion">

                <h3>
                    Equipo y roles
                </h3>

                <ul className="lista-equipo">

                    {
                        (proyecto.equipo || []).length > 0 ?
                        proyecto.equipo.map((persona, index) => (
                            <li key={index}>
                                <strong>{persona.nombre}</strong>
                                {" — "}
                                {persona.rol}
                            </li>
                        )) : (
                            <li>No hay información de equipo disponible.</li>
                        )
                    }

                </ul>

            </div>

        </section>
    );
};

export default DetalleProyecto;