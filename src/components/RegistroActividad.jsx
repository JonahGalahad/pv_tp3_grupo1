import "../css/registroActividad.css";

const RegistroActividad = ({ fecha }) => {
    //Formatear de los datos del prop al formato "dd/mm/aaaa a las hh:mm hs"
    const formatearFecha = (date) => {
        if(!date) return "Sin registro aun.";
        //.padstart rellena el valora la izquieda con un cero y la longitud total se queda en 2
        const day = String(date.getDate()).padStart(2,"0");
        //get month empieza en 0
        const month= String(date.getMonth()+1).padStart(2,"0");
        const year= date.getFullYear();
        const hour= String(date.getHours()).padStart(2,"0");
        const min= String(date.getMinutes()).padStart(2,"0");
        return `${day}/${month}/${year} a las ${hour}:${min} hs.`;
    };
    return (
        <div className="registro-actividad">
            <p>
                Última actualización de la lista: {formatearFecha(fecha)}
            </p>
        </div>
    );
};

export default RegistroActividad;