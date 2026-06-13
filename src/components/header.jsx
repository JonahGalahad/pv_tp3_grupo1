import "../css/header.css";
import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";

const Header = () => {
    const { usuario } = useContext(UsuarioContext);

    return (
        <header className="titulo_principal py-4 px-3 px-md-4">
            <div className="container-lg">
                <h1 className="hero mb-3">Transformando ideas en realidad</h1>
                <p className="descripcion-inicio mb-2">El espacio de trabajo estático de nuestro equipo. Explora nuestro repositorio de proyectos, revisa el estado de cada trabajo práctico y navega por las diferentes categorías de nuestro aprendizaje.</p>
                <p className="usuario-info mb-0 text-light-emphasis text-center">
                    {usuario.nombre} — {usuario.rol}
                </p>
            </div>
        </header>
    );
};

export default Header;