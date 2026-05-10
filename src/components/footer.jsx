import '../css/footer.css';

const Footer = () => {
    return (

        <footer className="footer">

            <div className="footer-container">

                <div className="footer-info">

                    <h3>
                        Gestión de Proyectos Educativos
                    </h3>

                    <p>
                        Plataforma académica para la organización
                        y seguimiento de trabajos prácticos.
                    </p>

                </div>

                <div className="footer-equipo">
                    <p className="footer-team">
                        <strong>Grupo 1 · Programación Visual</strong>
                    </p>

                    <p>
                        Ariana Agustina Vasquez · Jonatan Fernando Calapeña Zarate ·
                        Juan Ignacio Arze · Esteban Sergio Vera · Sol Daiana Pizarro
                    </p>

                    <p>
                        Universidad Nacional de Jujuy (UNJu) — 2026
                    </p>
                </div>

                <div className="footer-copy">

                    <p>
                        © 2026 Gestión de Proyectos Educativos
                    </p>

                </div>

            </div>

        </footer>
    );
};

export default Footer;