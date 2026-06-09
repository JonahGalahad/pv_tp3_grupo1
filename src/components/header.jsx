import "../css/header.css";
import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";

const Header = () => {

    const { usuario } = useContext(UsuarioContext);
    return (
        <header className="titulo_principal">
            <h1 className="hero">Transformando ideas en realidad</h1>
            <p className="descripcion-inicio">El espacio de trabajo estático de nuestro equipo. Explora nuestro repositorio de proyectos, revisa el estado de cada trabajo práctico y navega por las diferentes categorías de nuestro aprendizaje.</p>
            {/*<p className="usuario-info">
                {usuario.nombre} - {usuario.rol}
            </p>*/}
        </header>
    );
};

export default Header;