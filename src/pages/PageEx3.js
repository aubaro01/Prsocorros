import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";

export default function PageMaca() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    pass: "",
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
    setFormData({ nome: "", pass: "", concluido: false });
  };

  // Conteúdo exclusivo para Transporte de Vítima em Maca
  const stepMaca = {
    id: 0,
    title: "Transporte em Maca",
    content: (
      <div className="row">
        <div className="col-md-12">
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef", marginBottom: "2rem" }}>
            Para garantir a segurança durante o transporte, siga as orientações abaixo:
          </p>
          {/* Orientações em formato de cards */}
          <div className="row mb-4">
            <div className="col-md-4 mb-4">
              <div className="card h-100" style={{ backgroundColor: "#2c3e50", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px" }}>
                <div className="card-body text-center">
                  <img src="/assets/tm1.png" alt="Equipamentos de Proteção" className="img-fluid mb-3" style={{ borderRadius: "8px" }} />
                  <h5 className="card-title mb-3" style={{ color: "#f39c12" }}>Equipamentos de Proteção</h5>
                  <ul style={{ fontSize: "1rem", lineHeight: "1.6", color: "#e9ecef", paddingLeft: "1.2rem", textAlign: "left" }}>
                    <li className="mb-2">Use luvas de proteção</li>
                    <li className="mb-2">Utilize óculos de segurança</li>
                    <li>Vista coletes refletivos</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card h-100" style={{ backgroundColor: "#2c3e50", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px" }}>
                <div className="card-body text-center">
                  <img src="/assets/tm2.png" alt="Comunicação" className="img-fluid mb-3" style={{ borderRadius: "8px" }} />
                  <h5 className="card-title mb-3" style={{ color: "#f39c12" }}>Comunicação</h5>
                  <ul style={{ fontSize: "1rem", lineHeight: "1.6", color: "#e9ecef", paddingLeft: "1.2rem", textAlign: "left" }}>
                    <li className="mb-2">Estabeleça comandos claros</li>
                    <li className="mb-2">Defina um líder para a equipe</li>
                    <li>Utilize contagem regressiva</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card h-100" style={{ backgroundColor: "#2c3e50", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px" }}>
                <div className="card-body text-center">
                  <img src="/assets/tm3.png" alt="Cuidados Especiais" className="img-fluid mb-3" style={{ borderRadius: "8px" }} />
                  <h5 className="card-title mb-3" style={{ color: "#f39c12" }}>Cuidados Especiais</h5>
                  <ul style={{ fontSize: "1rem", lineHeight: "1.6", color: "#e9ecef", paddingLeft: "1.2rem", textAlign: "left" }}>
                    <li className="mb-2">Monitore sinais vitais</li>
                    <li className="mb-2">Verifique o conforto da vítima</li>
                    <li>Evite movimentos bruscos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div className="exercise-page">
      <header className="py-4" style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="m-0" style={{ fontSize: "1.8rem", fontWeight: "700" }}>SAV</h1>
            <div className="py-1 px-3" style={{ border: "1px solid rgba(31, 26, 26, 0.3)", borderRadius: "4px" }}>
              Exercício Transporte em Maca
            </div>
          </div>
          <p className="mt-2 mb-0" style={{ fontSize: "1.1rem", color: "#ecf0f1" }}>
            Transporte de Vítima em Maca
          </p>
        </div>
      </header>

      <main className="container py-5">
        <div className="text-center mb-5">
          <h2 style={{ fontSize: "2.5rem", fontWeight: "700", color: "black", marginBottom: "1rem" }}>
            Transporte de Vítima em Maca
          </h2>
          <div
            className="mx-auto"
            style={{ width: "50px", height: "3px", backgroundColor: "#f39c12", marginBottom: "1.5rem" }}
          ></div>
          <p style={{ fontSize: "1.2rem", color: "black" }}>
            Orientações para o transporte seguro de vítimas utilizando maca.
          </p>
        </div>

        <section className="mb-5 p-4 rounded" style={{ backgroundColor: "#343a40" }}>
          <div className="d-flex align-items-center mb-4">
            <div
              style={{
                minWidth: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#f39c12",
                color: "#343a40",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: "1.2rem",
                marginRight: "15px",
              }}
            >
              {stepMaca.id}
            </div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                margin: 0,
                color: "#ecf0f1",
                borderLeft: "3px solid #f39c12",
                paddingLeft: "15px",
              }}
            >
              {stepMaca.title}
            </h3>
          </div>
          {stepMaca.content}
        </section>

        <section className="p-4 mb-5 rounded" style={{ backgroundColor: "#2c3e50", border: "1px solid rgba(255,255,255,0.1)" }}>
          <div className="text-center">
            <Button
              onClick={() => setShowModal(true)}
              style={{
                backgroundColor: "#f39c12",
                border: "none",
                borderRadius: "4px",
                padding: "0.75rem 2.5rem",
                fontSize: "1.1rem",
                fontWeight: "600",
              }}
            >
              Registrar Conclusão
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-top py-4" style={{ backgroundColor: "#F9F9F9" }}>
        <div className="container text-center">
          <p style={{ fontSize: "0.9rem", color: "#757575" }}>
            © {new Date().getFullYear()} SAV. <br />Todos os direitos reservados.
          </p>
        </div>
      </footer>

      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="fw-bold text-dark">Registrar Exercício</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          {!submitted ? (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formNome">
                <Form.Label className="fw-semibold">Nome Completo</Form.Label>
                <Form.Control type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Digite seu nome completo" required className="p-2" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPass">
                <Form.Label className="fw-semibold">Código de Acesso</Form.Label>
                <Form.Control type="password" name="pass" value={formData.pass} onChange={handleChange} placeholder="Digite seu código de acesso" required className="p-2" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formConcluido">
                <Form.Check type="checkbox" name="concluido" checked={formData.concluido} onChange={handleChange} label="Exercício concluído" className="fw-semibold" />
              </Form.Group>
              <div className="text-center">
                <Button type="submit" className="btn btn-success fw-bold px-4 py-2">
                  Enviar
                </Button>
              </div>
            </Form>
          ) : (
            <div className="text-center">
              <h5 className="text-success fw-bold">Registro concluído com sucesso!</h5>
              <Button onClick={handleModalClose} className="btn btn-secondary mt-3 px-4">
                Fechar
              </Button>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}
