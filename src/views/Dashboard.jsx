import { useContext } from "react";
import { Container, Card, Row, Col, Badge} from "react-bootstrap";
import { UsuarioContext } from "../context/UsuarioContext";
const METRICAS = [
    {
        label:"Total de proyectos",
        valor:12,
        variante:"primary",
    },
    {
        label:"Proyectos en curso",
        valor:5,
        variante:"info",
    },
    {
        label:"Finalizados",
        valor:4,
        variante:"success",
    },
    {
        label:"En revision / Cancelados",
        valor:3,
        variante:"warning",
    },
];
const MetricaCard = ({label,valor,variante}) => (
    <Card className="metrica-card h-100 shadow-sm border-0">
        <Card.Body className="d-flex flex-column align-items-start gap-2 p-4">
            <p className="metrica-valor mb-0">{valor}</p>
            <Badge bg={variante} className="fw-normal fs-6">
                {label}
            </Badge>
        </Card.Body>
    </Card>
);
const Dashboard = () => {
    const {usuario}= useContext(UsuarioContext);
    return(
        <div>
            <Container>
                <Card className="bienvenida-card border-0 shadow-sm mb-4">
                    <Card.Body className="p-4 p-md-5">
                        <Card.Title as="h2" className="fw-bold fs-2 mb-3">
                            Bienvenido, {usuario.nombre}
                        </Card.Title>
                        <Card.Text className="text-secondary mb-4">
                            Este es tu espacio de gestión de proyectos. Desde aquí podés
                            consultar el estado general de tu actividad, acceder a cada
                            proyecto y mantener tu perfil actualizado.
                        </Card.Text>
                        <Row className="g-3">
                            <Col xs="auto">
                            <p className="text-info small mb-0">Rol</p>
                            <p className="fw-semibold mb-0">{usuario.rol}</p>
                            </Col>
                            <Col xs="auto">
                            <p className="text-info small mb-0">Institucion</p>
                            <p className="fw-semibold mb-0">{usuario.institucion}</p>
                            </Col>
                            <Col xs="auto">
                            <p className="text-info small mb-0">DNI</p>
                            <p className="fw-semibold mb-0">{usuario.dni}</p>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <h5 className="fw-bold mb-3">Resumen de Actividad</h5>
                <Row xs={1} sm={2} lg={4} className="g-3 mb-4">
                    {
                        METRICAS.map((m)=> (
                            <Col><MetricaCard {...m}/></Col>
                        ))
                    }
                </Row>
                <p className="text-muted small">Los datos mostrados son simulados con fines de demostración</p>
            </Container>
        </div>
    );
}
export default Dashboard;