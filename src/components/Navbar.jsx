import "../css/navbar.css";

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
                    <li><a href="#">INICIO</a></li>
                    <li><a href="#">PERFIL</a></li>
                    <li><a href="#">PROYECTOS</a></li>
                </ul>

        </nav>
    );
};

export default Navbar;