import { useContext, useState } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import { Form, Button, Container, Card } from "react-bootstrap";

const PerfilUsuario = () => {

    const { usuario, actualizarUsuario } = useContext(UsuarioContext);
    const [editando, setEditando] = useState(false);
    const [formData, setFormData] = useState(usuario);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleGuardar = () => {
        actualizarUsuario(formData);
        setEditando(false);
    };

    return (
        <Container className="d-flex justify-content-center mt-5">
            <Card style={{ width: '100%', maxWidth: '420px' }} className="p-4 shadow border-0">
                
                <Card.Title as="h2" className="mb-1">Mi Perfil</Card.Title>
                <Card.Subtitle className="mb-4 text-muted">Información personal del usuario</Card.Subtitle>

                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label className="text-uppercase fw-bold text-secondary" style={{ fontSize: '0.8rem' }}>
                            Nombre
                        </Form.Label>
                        <Form.Control
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            disabled={!editando}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className="text-uppercase fw-bold text-secondary" style={{ fontSize: '0.8rem' }}>
                            DNI
                        </Form.Label>
                        <Form.Control
                            type="text"
                            name="dni"
                            value={formData.dni}
                            onChange={handleChange}
                            disabled={!editando}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className="text-uppercase fw-bold text-secondary" style={{ fontSize: '0.8rem' }}>
                            Rol
                        </Form.Label>
                        <Form.Control
                            type="text"
                            name="rol"
                            value={formData.rol}
                            onChange={handleChange}
                            disabled={!editando}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className="text-uppercase fw-bold text-secondary" style={{ fontSize: '0.8rem' }}>
                            Institución
                        </Form.Label>
                        <Form.Control
                            type="text"
                            name="institucion"
                            value={formData.institucion}
                            onChange={handleChange}
                            disabled={!editando}
                        />
                    </Form.Group>

                    <div className="d-flex justify-content-center mt-4">
                        {!editando ? (
                            <Button variant="primary" style={{ minWidth: '170px' }} onClick={() => setEditando(true)}>
                                Editar perfil
                            </Button>
                        ) : (
                            <Button variant="success" style={{ minWidth: '170px' }} onClick={handleGuardar}>
                                Guardar cambios
                            </Button>
                        )}
                    </div>
                </Form>

            </Card>
        </Container>
    );
};

export default PerfilUsuario;