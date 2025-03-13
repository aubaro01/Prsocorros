import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";


// Para exemplo de como vai ficar

export default function PageEx4() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    circuito: "",
    concluido: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dados enviados:", formData);
    setSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSubmitted(false);
    setFormData({ nome: "", circuito: "", concluido: false });
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light text-dark">
      <header className="bg-dark text-white py-4 text-center">
        <div className="container">
          <h1 className="fw-bold">SAV</h1>
          <p className="fs-5">Exercício nº 4</p>
          <h2 className="fw-bold">Remoção de Vitima no auditório</h2>
          <p className="fs-5">- Comunicações Emergencia</p>
        </div>
      </header>

      <main className="flex-grow-1">
        <section className="container text-center py-5">
          <h2 className="fw-bold">Agachamento com Salto</h2>
          <p className="text-muted">
            Exercício de alta intensidade para fortalecer as pernas e melhorar a explosão muscular.
          </p>
          <div className="ratio ratio-16x9">
  <iframe
    src="https://www.youtube.com/embed/CMKw77fbkOs"
    title="Vídeo demonstrativo do exercício"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

        </section>

        <section className="container py-5">
          <h3 className="fw-bold text-center mb-4">Passos do Exercício</h3>
          <div className="row text-center">
            <div className="col-md-4 mb-3">
              <img
                src="/placeholder.svg"
                alt="Passo 1: Posição Inicial"
                className="img-fluid rounded shadow"
              />
              <p className="mt-2">Passo 1: Posição Inicial</p>
            </div>
            <div className="col-md-4 mb-3">
              <img
                src="/placeholder.svg"
                alt="Passo 2: Agachamento"
                className="img-fluid rounded shadow"
              />
              <p className="mt-2">Passo 2: Agachamento</p>
            </div>
            <div className="col-md-4 mb-3">
              <img
                src="/placeholder.svg"
                alt="Passo 3: Salto"
                className="img-fluid rounded shadow"
              />
              <p className="mt-2">Passo 3: Salto</p>
            </div>
          </div>
        </section>

        <section className="container text-center py-5">
          <Button variant="primary" onClick={() => setShowModal(true)}>
          Conclusão
          </Button>
        </section>
      </main>

      <footer className="bg-dark text-white text-center py-3">
        <p>
          © {new Date().getFullYear()} SAV. <br />
          Todos os direitos reservados.
        </p>
      </footer>

      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton className="bg-light text-dark">
          <Modal.Title>Registrar Exercício</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-light text-dark">
          {!submitted ? (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formNome">
                <Form.Label>Nome Completo</Form.Label>
                <Form.Control
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Digite seu nome completo"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formCircuito">
                <Form.Label>Número do Circuito</Form.Label>
                <Form.Control
                  type="number"
                  name="circuito"
                  value={formData.circuito}
                  onChange={handleChange}
                  placeholder="Digite o número do circuito"
                  min="1"
                  required
                />
                <Form.Text className="text-muted">Apenas números são aceitos</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formConcluido">
                <Form.Check
                  type="checkbox"
                  name="concluido"
                  checked={formData.concluido}
                  onChange={handleChange}
                  label="Exercício concluído"
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Enviar Registro
              </Button>
            </Form>
          ) : (
            <div className="text-center">
              <h4>Registro Concluído!</h4>
              <p>Seu exercício foi registrado com sucesso.</p>
              <Button variant="primary" onClick={handleModalClose}>
                Fechar
              </Button>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}
