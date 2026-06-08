import "../css/navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">

            <div className="logo-container">
                <img
                    src="/img/logo.png"
                    alt="Logo"
                    className="logo"
                />

                <h1>GESTIÓN DE PROYECTOS</h1>
            </div>

            <ul className="nav-links">
                <li>
                    <NavLink to="/dashboard">INICIO</NavLink>
                </li>

                <li>
                    <NavLink to="/perfil">PERFIL</NavLink>
                </li>

                <li>
                    <NavLink to="/proyectos">PROYECTOS</NavLink>
                </li>
            </ul>

        </nav>
    );
};

export default Navbar;