import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";

// Componente para o Header
const Header = () => (
  <header className="py-4" style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="m-0" style={{ fontSize: "1.8rem", fontWeight: "700" }}>SAV</h1>
        <div className="py-1 px-3" style={{ border: "1px solid rgba(31, 26, 26, 0.3)", borderRadius: "4px" }}>
          Exercício 4
        </div>
      </div>
      <p className="mt-2 mb-0" style={{ fontSize: "1.1rem", color: "#ecf0f1" }}>
       <h1> Remoção de Vítima no Auditório<br /></h1>
         <h5>- Consciente + Inconsciente</h5>
      </p>
    </div>
  </header>
);

// Componente para o Footer
const Footer = () => (
  <footer className="border-top py-4" style={{ backgroundColor: "#F9F9F9" }}>
    <div className="container text-center">
      <p style={{ fontSize: "0.9rem", color: "#757575" }}>
        © {new Date().getFullYear()} SAV. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

// Componente para o Título do Exercício
const ExerciseTitle = () => (
  <div className="text-center mb-5">
    <h2 style={{ fontSize: "2.5rem", fontWeight: "700", color: "black", marginBottom: "1rem" }}>
      Agachamento com Salto
    </h2>
    <div className="mx-auto" style={{ width: "50px", height: "3px", backgroundColor: "#f39c12", marginBottom: "1.5rem" }} />
    <p style={{ fontSize: "1.2rem", color: "black" }}>
      Aprenda a técnica correta do agachamento com salto para aprimorar sua força e potência
    </p>
  </div>
);

const ExerciseStep = ({ step }) => (
  <section key={step.id} className="mb-5 p-4 rounded" style={{ backgroundColor: "#343a40" }}>
    <div className="d-flex align-items-center mb-4">
      <div className="step-icon">{step.id}</div>
      <h3 style={{ fontSize: "1.5rem", fontWeight: "600", margin: 0, color: "#f39c12", borderLeft: "3px solid #f39c12", paddingLeft: "15px" }}>
        {step.title}
      </h3>
    </div>
    {step.content}
  </section>
);

const SummarySection = ({ steps, onRegister }) => (
  <section className="p-4 mb-5 rounded" style={{ backgroundColor: "#2c3e50", border: "1px solid rgba(255,255,255,0.1)" }}>
    <h4 style={{ fontSize: "1.2rem", fontWeight: "600", textAlign: "center", marginBottom: "1.5rem", color: "#f39c12" }}>
      Resumo e Conclusão do Exercício
    </h4>
    <div className="row">
      {steps.map((step, index) => (
        <div key={index} className="col-md-6">
          <div className="d-flex align-items-center mb-3">
            <div className="step-icon-small">{index + 1}</div>
            <p className="m-0" style={{ fontSize: "0.9rem", fontWeight: "400", color: "#ecf0f1" }}>
              {step.summary}
            </p>
          </div>
        </div>
      ))}
    </div>
    <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef", marginBottom: "1.5rem", textAlign: "center" }}>
      Parabéns! Você completou todas as etapas do exercício de Agachamento com Salto.
      Este exercício é excelente para fortalecer as pernas e melhorar a explosão muscular.
    </p>
    <div className="text-center">
      <Button
        onClick={onRegister}
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
);

const RegistrationModal = ({ show, onClose, onSubmit, formData, onChange, submitted }) => (
  <Modal show={show} onHide={onClose} centered>
    <Modal.Header closeButton>
      <Modal.Title>Registrar Exercício</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {!submitted ? (
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formNome">
            <Form.Label>Nome Completo</Form.Label>
            <Form.Control
              type="text"
              name="nome"
              value={formData.nome}
              onChange={onChange}
              placeholder="Digite seu nome completo"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={onChange}
              placeholder="Digite a sua password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formConcluido">
            <Form.Check
              type="checkbox"
              name="concluido"
              checked={formData.concluido}
              onChange={onChange}
              label="Exercício concluído"
            />
          </Form.Group>
          <Button type="submit" variant="primary" className="w-100">
            Enviar
          </Button>
        </Form>
      ) : (
        <div className="text-center">
          <h4>Registro Concluído!</h4>
          <p>Seu exercício foi registrado com sucesso.</p>
          <Button onClick={onClose} variant="success">
            Fechar
          </Button>
        </div>
      )}
    </Modal.Body>
  </Modal>
);

// Componente principal
export default function PageEx4() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ nome: "", password: "", concluido: false });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.nome || !formData.password) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    const dadosParaEnviar = { ...formData, concluido: formData.concluido ? "sim" : "não" };
    console.log("Dados enviados:", dadosParaEnviar);
    try {
      const response = await fetch("https://-----", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dadosParaEnviar),
      });
      if (response.ok) setSubmitted(true);
      else alert("Erro ao enviar os dados. Tente novamente.");
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao enviar os dados. Tente novamente.");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSubmitted(false);
    setFormData({ nome: "", password: "", concluido: false });
  };

  const steps = [
    {
      id: 1,
      title: "Vídeo Demonstrativo",
      content: (
        <>
          <div className="ratio ratio-16x9 mb-4">
            <iframe
              src="https://www.youtube.com/embed/CMKw77fbkOs"
              title="Vídeo demonstrativo do exercício"
              allowFullScreen
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
            Este vídeo demonstra a técnica correta para realizar o agachamento com salto.
            Observe atentamente os movimentos antes de começar a praticar.
          </p>
          <p style={{ fontSize: "0.9rem", color: "#bdc3c7", fontStyle: "italic" }}>
            Nota: Este vídeo só pode ser visualizado nesta página.
          </p>
        </>
      ),
      summary: "Assistir ao vídeo demonstrativo",
    },
    {
      id: 2,
      title: "Posição Inicial",
      content: (
        <>
          <div className="text-center mb-4">
            <img
              src="/imag.jpg"
              alt="Posição Inicial"
              className="img-fluid rounded"
              style={{ maxHeight: "350px", border: "3px solid #f39c12" }}
            />
          </div>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
            Fique em pé com os pés afastados na largura dos ombros e braços relaxados ao lado do corpo.
            Esta posição é a base para um bom agachamento e proporciona estabilidade durante o exercício.
          </p>
        </>
      ),
      summary: "Posicionar-se corretamente",
    },
    {
      id: 3,
      title: "Agachamento",
      content: (
        <div className="row">
          <div className="col-md-6">
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
              Dobre os joelhos e quadris, abaixando o corpo como se fosse sentar em uma cadeira invisível.
            </p>
            <ul style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
              <li className="mb-2">Mantenha o peito erguido</li>
              <li className="mb-2">Coluna em posição neutra</li>
              <li className="mb-2">Joelhos alinhados com os pés</li>
              <li>Não ultrapasse a linha dos dedos com os joelhos</li>
            </ul>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="/imag.jpg"
              alt="Agachamento"
              className="img-fluid rounded"
              style={{ maxHeight: "350px", border: "3px solid #f39c12" }}
            />
          </div>
        </div>
      ),
      summary: "Realizar o agachamento",
    },
    {
      id: 4,
      title: "Salto",
      content: (
        <div className="row">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src="/imag.jpg"
              alt="Salto"
              className="img-fluid rounded"
              style={{ maxHeight: "350px", border: "3px solid #f39c12" }}
            />
          </div>
          <div className="col-md-6">
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
              A partir da posição de agachamento, <strong>impulsione o corpo para cima</strong> em um salto explosivo,
              estendendo completamente os joelhos e quadris.
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
              Use os braços para ajudar no impulso, movendo-os para frente e para cima.
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
              Aterrisse suavemente, voltando para a posição de agachamento, amortecendo o impacto.
            </p>
          </div>
        </div>
      ),
      summary: "Executar o salto explosivo",
    },
  ];

  return (
    <div className="exercise-page">
      <Header />
      <main className="container py-5">
        <ExerciseTitle />
        <div className="row">
          <div className="col-lg-10 mx-auto">
            {steps.map((step) => (
              <ExerciseStep key={step.id} step={step} />
            ))}
            <SummarySection steps={steps} onRegister={() => setShowModal(true)} />
          </div>
        </div>
      </main>
      <Footer />
      <RegistrationModal
        show={showModal}
        onClose={handleModalClose}
        onSubmit={handleSubmit}
        formData={formData}
        onChange={handleChange}
        submitted={submitted}
      />
    </div>
  );
}