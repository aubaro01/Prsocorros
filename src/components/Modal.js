import { Modal, Form, Button } from "react-bootstrap";
import { CheckCircle } from "lucide-react";

const StyledModal = ({ showModal, handleModalClose, handleSubmit, handleChange, formData, submitted }) => {
  return (
    <Modal show={showModal} onHide={handleModalClose} centered backdrop="static" keyboard={false}>
      <Modal.Header closeButton className="border-0">
        <Modal.Title className="fw-bold fs-4">Registrar Exercício</Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-4 py-3">
        {!submitted ? (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formNome">
              <Form.Label className="fw-medium">Nome Completo</Form.Label>
              <Form.Control
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Digite seu nome completo"
                required
                className="p-2 rounded-3"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCircuito">
              <Form.Label className="fw-medium">Número do Circuito</Form.Label>
              <Form.Control
                type="number"
                name="circuito"
                value={formData.circuito}
                onChange={handleChange}
                placeholder="Digite o número do circuito"
                min="1"
                required
                className="p-2 rounded-3"
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formConcluido">
              <Form.Check
                type="checkbox"
                name="concluido"
                checked={formData.concluido}
                onChange={handleChange}
                label="Exercício concluído"
                className="fw-medium"
              />
            </Form.Group>
            <Button
              type="submit"
              className="w-100 p-2 rounded-3 fw-bold text-white"
              style={{ backgroundColor: "#03a87c", border: "none" }}
            >
              Enviar
            </Button>
          </Form>
        ) : (
          <div className="text-center py-3">
            <CheckCircle size={50} color="#03a87c" className="mb-3" />
            <h4 className="fw-bold mb-2">Registro Concluído!</h4>
            <p className="text-muted mb-4">Seu exercício foi registrado com sucesso.</p>
            <Button
              onClick={handleModalClose}
              className="px-4 py-2 rounded-3 fw-bold text-white"
              style={{ backgroundColor: "#03a87c", border: "none" }}
            >
              Fechar
            </Button>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default StyledModal;
