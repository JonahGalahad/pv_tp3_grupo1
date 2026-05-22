import "../css/registroActividad.css";

const RegistroActividad = ({ fecha }) => {
    return (
        <div className="registro-actividad">
            <p>
                Última actualización de la lista: {fecha}
            </p>
        </div>
    );
};

export default RegistroActividad;